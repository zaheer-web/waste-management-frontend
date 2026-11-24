import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  ArrowLeft,
  Eye,
  FilePlus2,
  PenLine,
  Save,
  Trash2,
  UploadCloud,
  X,
} from "lucide-react";

import {
  apiRequest,
  API_BASE,
  imageUrl,
} from "../lib/api.js";

import AdminLayout from "../components/AdminLayout.jsx";

const empty = {
  title: "",
  excerpt: "",
  content: "",
  category: "Recycling",
  author: "Waste Care Links",
  coverImageAlt: "",
  status: "draft",

  seo: {
    metaTitle: "",
    metaDescription: "",
    keywords: "",
    canonicalUrl: "",
    ogTitle: "",
    ogDescription: "",
    robots: "index,follow",
  },
};

export default function AdminBlogs() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState(empty);

  const [file, setFile] = useState(null);
  const [editing, setEditing] = useState("");
  const [preview, setPreview] = useState("");

  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const nav = useNavigate();

  const token = localStorage.getItem("wcl_admin_token");

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  // LOAD BLOGS

  async function load() {
    try {
      const r = await apiRequest("/blogs/admin/all", {
        headers,
      });

      setItems(r.data || []);
    } catch (e) {
      setError(e.message);

      if (
        e.message.toLowerCase().includes("login") ||
        e.message.toLowerCase().includes("session")
      ) {
        nav("/admin");
      }
    }
  }

  useEffect(() => {
    if (!token) {
      nav("/admin");
      return;
    }

    load();
  }, []);

  // FORM HANDLERS

  function setField(key, value) {
    setForm((f) => ({
      ...f,
      [key]: value,
    }));
  }

  function setSeo(key, value) {
    setForm((f) => ({
      ...f,
      seo: {
        ...f.seo,
        [key]: value,
      },
    }));
  }

  // EDIT BLOG

  function edit(item) {
    setEditing(item._id);

    setForm({
      ...empty,
      ...item,

      seo: {
        ...empty.seo,
        ...item.seo,

        keywords: (
          item.seo?.keywords || []
        ).join(", "),
      },
    });

    setFile(null);

    setPreview(imageUrl(item.coverImage));

    setMessage("");
    setError("");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  // RESET FORM

  function reset() {
    setEditing("");
    setForm(empty);
    setFile(null);
    setPreview("");
  }

  // IMAGE UPLOAD

  function handleImage(e) {
    const selected = e.target.files?.[0];

    if (!selected) return;

    if (selected.size > 5 * 1024 * 1024) {
      setError("Image size must be less than 5 MB.");
      e.target.value = "";
      return;
    }

    setError("");
    setFile(selected);

    setPreview(URL.createObjectURL(selected));
  }

  // SAVE BLOG

  async function save(e) {
    e.preventDefault();

    setBusy(true);
    setError("");
    setMessage("");

    try {
      const fd = new FormData();

      [
        "title",
        "excerpt",
        "content",
        "category",
        "author",
        "coverImageAlt",
        "status",
      ].forEach((key) => {
        fd.append(key, form[key] || "");
      });

      fd.append(
        "seo",
        JSON.stringify({
          ...form.seo,

          keywords: String(
            form.seo.keywords || ""
          )
            .split(",")
            .map((x) => x.trim())
            .filter(Boolean),
        })
      );

      if (file) {
        fd.append("coverImage", file);
      }

      const url = editing
        ? `/blogs/${editing}`
        : "/blogs";

      const r = await apiRequest(url, {
        method: editing ? "PUT" : "POST",
        headers,
        body: fd,
      });

      setMessage(
        r.message || "Saved successfully."
      );

      reset();

      await load();

    } catch (e) {
      setError(e.message);
    } finally {
      setBusy(false);
    }
  }

  // DELETE BLOG

  async function remove(item) {
    if (
      !window.confirm(
        `Delete "${item.title}"? This cannot be undone.`
      )
    ) {
      return;
    }

    try {
      await apiRequest(`/blogs/${item._id}`, {
        method: "DELETE",
        headers,
      });

      setMessage("Article deleted successfully.");

      await load();

    } catch (e) {
      setError(e.message);
    }
  }

  // SLUG PREVIEW

  const slugPreview =
    form.title
      .toLowerCase()
      .normalize("NFKD")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "") ||
    "your-blog-title";

  return (
    <AdminLayout
      title="Blog Management"
      subtitle="Create articles, upload cover images and manage on-page SEO"
      active="blogs"
    >

      <div className="w-full min-w-0 space-y-5">

        {/* SUCCESS MESSAGE */}

        {message && (
          <div className="flex items-start justify-between gap-3 rounded-xl border border-green-100 bg-green-50 p-4 text-sm text-green-800">
            <span className="break-words">
              {message}
            </span>

            <button
              onClick={() => setMessage("")}
              className="shrink-0"
            >
              <X size={17} />
            </button>
          </div>
        )}

        {/* ERROR MESSAGE */}

        {error && (
          <div className="flex items-start justify-between gap-3 rounded-xl border border-red-100 bg-red-50 p-4 text-sm text-red-700">
            <span className="break-words">
              {error}
            </span>

            <button
              onClick={() => setError("")}
              className="shrink-0"
            >
              <X size={17} />
            </button>
          </div>
        )}

        {/* MAIN GRID */}

        <div className="grid w-full min-w-0 grid-cols-1 items-start gap-5 xl:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] xl:gap-6">

          {/* ================================= */}
          {/* ADD / EDIT BLOG FORM */}
          {/* ================================= */}

          <form
            onSubmit={save}
            className="admin-panel w-full min-w-0 max-w-full overflow-hidden"
          >

            {/* FORM HEADER */}

            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">

              <h2 className="font-display text-lg font-extrabold text-forest sm:text-xl">
                {editing
                  ? "Edit Article"
                  : "Add New Article"}
              </h2>

              {editing && (
                <button
                  type="button"
                  onClick={reset}
                  className="text-sm font-bold text-slate-500 hover:text-red-500"
                >
                  Cancel Edit
                </button>
              )}

            </div>

            {/* BLOG TITLE */}

            <label className="form-label">
              Blog Title *

              <input
                className="form-input w-full min-w-0"
                required
                maxLength="180"
                value={form.title}
                onChange={(e) =>
                  setField("title", e.target.value)
                }
                placeholder="Enter a clear, descriptive title"
              />
            </label>

            {/* SLUG PREVIEW */}

            <div className="mt-2 min-w-0 rounded-lg bg-mist px-3 py-3 text-xs leading-6 text-slate-500">

              <span>Auto-generated URL:</span>

              <strong className="ml-1 break-all text-leaf">
                /blog/{slugPreview}
              </strong>

              <span className="ml-1">
                (final slug is saved by backend)
              </span>

            </div>

            {/* EXCERPT */}

            <label className="form-label mt-5">
              Short Description / Excerpt *

              <textarea
                className="form-input min-h-[100px] w-full min-w-0"
                required
                maxLength="320"
                value={form.excerpt}
                onChange={(e) =>
                  setField("excerpt", e.target.value)
                }
                placeholder="A short summary shown on the blog listing..."
              />

              <small>
                {form.excerpt.length}/320 characters
              </small>
            </label>

            {/* CATEGORY AND AUTHOR */}

            <div className="mt-5 grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2">

              <label className="form-label min-w-0">
                Category

                <input
                  className="form-input w-full min-w-0"
                  value={form.category}
                  onChange={(e) =>
                    setField("category", e.target.value)
                  }
                  placeholder="Recycling"
                />
              </label>

              <label className="form-label min-w-0">
                Author

                <input
                  className="form-input w-full min-w-0"
                  value={form.author}
                  onChange={(e) =>
                    setField("author", e.target.value)
                  }
                />
              </label>

            </div>

            {/* ARTICLE CONTENT */}

            <label className="form-label mt-5">
              Article Content *

              <textarea
                className="form-input min-h-[280px] w-full min-w-0 leading-7"
                required
                value={form.content}
                onChange={(e) =>
                  setField("content", e.target.value)
                }
                placeholder="Write your complete article here. Separate paragraphs with a blank line."
              />

              <small>
                Plain text content. Line breaks are preserved on the article page.
              </small>
            </label>

            {/* ================================= */}
            {/* COVER IMAGE */}
            {/* ================================= */}

            <div className="mt-7 min-w-0 border-t border-slate-100 pt-6">

              <h3 className="font-display text-lg font-extrabold text-forest">
                Cover Image
              </h3>

              <p className="mt-1 text-xs leading-5 text-slate-500">
                JPG, PNG, WEBP or AVIF · Maximum 5 MB
              </p>

              <label className="upload-box mt-4 flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden">

                <UploadCloud size={27} />

                <span className="mt-2 text-center text-sm font-bold">
                  Choose Cover Image
                </span>

                <span className="mt-1 text-center text-xs text-slate-500">
                  Recommended landscape image, 1200 × 630 px
                </span>

                <input
                  type="file"
                  accept="image/jpeg,image/png,image/webp,image/avif"
                  className="hidden"
                  onChange={handleImage}
                />

              </label>

              {/* IMAGE PREVIEW */}

              {preview && (
                <div className="relative mt-4 w-full min-w-0 overflow-hidden rounded-xl">

                  <img
                    src={preview}
                    alt="Cover preview"
                    className="h-48 w-full object-cover sm:h-56"
                  />

                  <button
                    type="button"
                    onClick={() => {
                      setFile(null);

                      setPreview(
                        editing
                          ? imageUrl(
                              items.find(
                                (x) => x._id === editing
                              )?.coverImage
                            )
                          : ""
                      );
                    }}
                    className="absolute right-3 top-3 rounded-full bg-white p-2 text-slate-700 shadow"
                  >
                    <X size={16} />
                  </button>

                </div>
              )}

              {/* ALT TEXT */}

              <label className="form-label mt-4">
                Image Alt Text

                <input
                  className="form-input w-full min-w-0"
                  value={form.coverImageAlt}
                  onChange={(e) =>
                    setField("coverImageAlt", e.target.value)
                  }
                  placeholder="Describe the image for accessibility and SEO"
                />
              </label>

            </div>

            {/* ================================= */}
            {/* SEO SETTINGS */}
            {/* ================================= */}

            <div className="mt-7 min-w-0 border-t border-slate-100 pt-6">

              <h3 className="font-display text-lg font-extrabold text-forest">
                SEO Settings
              </h3>

              <p className="mt-1 text-xs leading-6 text-slate-500">
                These fields are saved with the blog post and used for page metadata.
              </p>

              {/* META TITLE */}

              <label className="form-label mt-4">
                Meta Title

                <input
                  className="form-input w-full min-w-0"
                  maxLength="70"
                  value={form.seo.metaTitle}
                  onChange={(e) =>
                    setSeo("metaTitle", e.target.value)
                  }
                  placeholder={
                    form.title ||
                    "SEO title (50–60 characters)"
                  }
                />

                <small>
                  {form.seo.metaTitle.length}/70 characters
                </small>
              </label>

              {/* META DESCRIPTION */}

              <label className="form-label mt-4">
                Meta Description

                <textarea
                  className="form-input min-h-[90px] w-full min-w-0"
                  maxLength="170"
                  value={form.seo.metaDescription}
                  onChange={(e) =>
                    setSeo("metaDescription", e.target.value)
                  }
                  placeholder={
                    form.excerpt ||
                    "Describe this page for search results"
                  }
                />

                <small>
                  {form.seo.metaDescription.length}/170 characters
                </small>
              </label>

              {/* KEYWORDS */}

              <label className="form-label mt-4">
                Focus Keywords

                <input
                  className="form-input w-full min-w-0"
                  value={form.seo.keywords}
                  onChange={(e) =>
                    setSeo("keywords", e.target.value)
                  }
                  placeholder="paper recycling, secure shredding, Delhi"
                />
              </label>

              {/* CANONICAL URL */}

              <label className="form-label mt-4">
                Canonical URL

                <input
                  className="form-input w-full min-w-0"
                  type="url"
                  value={form.seo.canonicalUrl}
                  onChange={(e) =>
                    setSeo("canonicalUrl", e.target.value)
                  }
                  placeholder="https://yourdomain.com/blog/your-slug"
                />
              </label>

              {/* OG TITLE AND ROBOTS */}

              <div className="mt-4 grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2">

                <label className="form-label min-w-0">
                  Open Graph Title

                  <input
                    className="form-input w-full min-w-0"
                    value={form.seo.ogTitle}
                    onChange={(e) =>
                      setSeo("ogTitle", e.target.value)
                    }
                    placeholder="Social sharing title"
                  />
                </label>

                <label className="form-label min-w-0">
                  Robots Directive

                  <select
                    className="form-input w-full min-w-0"
                    value={form.seo.robots}
                    onChange={(e) =>
                      setSeo("robots", e.target.value)
                    }
                  >
                    <option value="index,follow">
                      index, follow
                    </option>

                    <option value="noindex,nofollow">
                      noindex, nofollow
                    </option>
                  </select>
                </label>

              </div>

              {/* OG DESCRIPTION */}

              <label className="form-label mt-4">
                Open Graph Description

                <textarea
                  className="form-input min-h-[85px] w-full min-w-0"
                  value={form.seo.ogDescription}
                  onChange={(e) =>
                    setSeo("ogDescription", e.target.value)
                  }
                  placeholder="Description for Facebook, LinkedIn and other social shares"
                />
              </label>

            </div>

            {/* ================================= */}
            {/* PUBLISH SETTINGS */}
            {/* ================================= */}

            <div className="mt-7 flex min-w-0 flex-col gap-4 border-t border-slate-100 pt-6 sm:flex-row sm:items-end sm:justify-between">

              <label className="form-label w-full min-w-0 sm:max-w-[220px]">
                Publish Status

                <select
                  className="form-input w-full"
                  value={form.status}
                  onChange={(e) =>
                    setField("status", e.target.value)
                  }
                >
                  <option value="draft">
                    Save as Draft
                  </option>

                  <option value="published">
                    Publish Now
                  </option>
                </select>
              </label>

              <button
                disabled={busy}
                className="btn-primary flex w-full items-center justify-center gap-2 whitespace-nowrap disabled:opacity-60 sm:w-auto"
              >
                <Save size={17} />

                {busy
                  ? "Saving..."
                  : editing
                    ? "Update Article"
                    : "Save Article"}
              </button>

            </div>

          </form>

          {/* ================================= */}
          {/* ALL ARTICLES SIDEBAR */}
          {/* ================================= */}

          <aside className="admin-panel w-full min-w-0 max-w-full overflow-hidden">

            {/* HEADER */}

            <div className="mb-5 flex min-w-0 items-center justify-between gap-3">

              <div className="min-w-0">

                <h2 className="font-display text-lg font-extrabold text-forest sm:text-xl">
                  All Articles
                </h2>

                <p className="mt-1 text-xs text-slate-500">
                  {items.length} total · Drafts and published
                </p>

              </div>

              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-mist text-leaf">
                <FilePlus2 size={23} />
              </span>

            </div>

            {/* ARTICLES LIST */}

            {items.length === 0 ? (

              <div className="rounded-xl bg-mist p-6 text-center text-sm leading-6 text-slate-500">
                No articles yet. Create your first article.
              </div>

            ) : (

              <div className="grid w-full min-w-0 gap-3">

                {items.map((item) => (

                  <div
                    key={item._id}
                    className="flex w-full min-w-0 flex-col gap-3 overflow-hidden rounded-xl border border-slate-100 p-3 transition hover:border-green-200 sm:flex-row sm:items-start sm:gap-3 sm:p-4"
                  >

                    {/* THUMBNAIL */}

                    <div className="h-24 w-full shrink-0 overflow-hidden rounded-lg bg-slate-50 sm:h-20 sm:w-20 md:h-24 md:w-24">

                      <img
                        src={imageUrl(item.coverImage)}
                        alt={item.coverImageAlt || item.title}
                        className="h-full w-full object-cover"
                      />

                    </div>

                    {/* BLOG DETAILS */}

                    <div className="w-full min-w-0 flex-1">

                      {/* TITLE */}

                      <p className="break-words text-sm font-extrabold leading-6 text-forest [overflow-wrap:anywhere]">
                        {item.title}
                      </p>

                      {/* STATUS AND SLUG */}

                      <div className="mt-2 flex min-w-0 flex-wrap items-center gap-2">

                        <span
                          className={`
                            shrink-0 rounded-full px-2.5 py-1
                            text-[10px] font-extrabold
                            ${
                              item.status === "published"
                                ? "bg-green-50 text-green-700"
                                : "bg-amber-50 text-amber-700"
                            }
                          `}
                        >
                          {item.status}
                        </span>

                        <span
                          title={item.slug}
                          className="min-w-0 flex-1 truncate text-[10px] text-slate-400"
                        >
                          {item.slug}
                        </span>

                      </div>

                      {/* ACTION BUTTONS */}

                      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">

                        <button
                          type="button"
                          onClick={() => edit(item)}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-leaf transition hover:text-forest"
                        >
                          <PenLine size={14} />
                          Edit
                        </button>

                        {item.status === "published" && (

                          <a
                            href={`/blog/${item.slug}`}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 transition hover:text-forest"
                          >
                            <Eye size={14} />
                            View
                          </a>

                        )}

                        <button
                          type="button"
                          onClick={() => remove(item)}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-red-500 transition hover:text-red-700"
                        >
                          <Trash2 size={14} />
                          Delete
                        </button>

                      </div>

                    </div>

                  </div>

                ))}

              </div>

            )}

            {/* SEO TIP */}

            <div className="mt-6 rounded-xl bg-[#f3f8ef] p-4 text-xs leading-6 text-slate-600 sm:p-5">

              <strong className="text-forest">
                SEO Tip:
              </strong>

              {" "}Write a unique meta title and description for each article, use a descriptive image alt text, and publish only original, useful content.

            </div>

            {/* SITEMAP */}

            <a
              href={`${API_BASE.replace("/api", "")}/api/seo/sitemap.xml`}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex max-w-full items-center gap-2 break-all text-xs font-bold text-leaf hover:text-forest"
            >
              Open XML Sitemap
              <ArrowLeft
                className="shrink-0 rotate-180"
                size={14}
              />
            </a>

          </aside>

        </div>

      </div>

    </AdminLayout>
  );
}