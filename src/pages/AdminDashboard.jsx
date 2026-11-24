import { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  FileText,
  Inbox,
  Plus,
  ArrowUpRight,
  RefreshCw,
  Leaf,
  TrendingUp,
  CheckCircle2,
  Clock,
  AlertCircle,
  CalendarDays,
  ChevronRight,
} from "lucide-react";

import AdminLayout from "../components/AdminLayout.jsx";
import { apiRequest } from "../lib/api.js";

export default function AdminDashboard() {
  const [blogs, setBlogs] = useState([]);
  const [enq, setEnq] = useState({
    total: 0,
    new: 0,
    contacted: 0,
    closed: 0,
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const nav = useNavigate();
  const token = localStorage.getItem("wcl_admin_token");

  const load = useCallback(async () => {
    if (!token) {
      nav("/admin");
      return;
    }

    setLoading(true);
    setError("");

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    try {
      const [blogResponse, enquiryResponse] = await Promise.all([
        apiRequest("/blogs/admin/all", { headers }),
        apiRequest("/enquiries/admin/all", { headers }),
      ]);

      setBlogs(blogResponse.data || []);

      setEnq(
        enquiryResponse.stats || {
          total: 0,
          new: 0,
          contacted: 0,
          closed: 0,
        }
      );
    } catch (err) {
      setError(err.message || "Unable to load dashboard data.");

      const message = (err.message || "").toLowerCase();

      if (
        message.includes("login") ||
        message.includes("session") ||
        message.includes("unauthorized")
      ) {
        localStorage.removeItem("wcl_admin_token");
        nav("/admin");
      }
    } finally {
      setLoading(false);
    }
  }, [token, nav]);

  useEffect(() => {
    load();
  }, [load]);

  const published = blogs.filter(
    (blog) => blog.status === "published"
  ).length;

  const draft = blogs.filter(
    (blog) => blog.status !== "published"
  ).length;

  const stats = [
    {
      label: "Total Enquiries",
      value: enq.total,
      icon: Inbox,
      color: "bg-emerald-50 text-emerald-700",
      description: "All customer enquiries",
    },
    {
      label: "New Enquiries",
      value: enq.new,
      icon: Clock,
      color: "bg-lime-50 text-lime-700",
      description: "Awaiting response",
    },
    {
      label: "Total Articles",
      value: blogs.length,
      icon: FileText,
      color: "bg-sky-50 text-sky-700",
      description: "All blog articles",
    },
    {
      label: "Published Articles",
      value: published,
      icon: CheckCircle2,
      color: "bg-violet-50 text-violet-700",
      description: "Live on website",
    },
  ];

  return (
    <AdminLayout
      title="Dashboard"
      subtitle="Monitor your website activity and manage everything in one place."
      active="dashboard"
    >
      <div className="w-full min-w-0 space-y-6 overflow-hidden">

        {/* WELCOME SECTION */}

        <section className="relative overflow-hidden rounded-3xl bg-forest p-6 text-white sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-lime/10 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-20 right-1/3 h-52 w-52 rounded-full bg-green-400/10 blur-3xl" />

          <div className="relative flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div className="min-w-0">
              <span className="inline-flex items-center gap-2 rounded-full border border-lime/20 bg-lime/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-lime">
                <Leaf size={14} />
                Admin Workspace
              </span>

              <h1 className="mt-5 font-display text-2xl font-extrabold leading-tight sm:text-3xl lg:text-4xl">
                Welcome to Waste Care Links
              </h1>

              <p className="mt-3 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
                Manage your blog articles, customer enquiries and website
                content from one central dashboard.
              </p>
            </div>

            <div className="flex shrink-0 flex-wrap gap-3">
              <Link
                to="/admin/blogs"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-lime px-5 py-3 text-sm font-extrabold text-forest transition hover:bg-lime/90"
              >
                <Plus size={17} />
                Create Blog
              </Link>

              <Link
                to="/admin/enquiries"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/15"
              >
                <Inbox size={17} />
                Enquiries
              </Link>
            </div>
          </div>
        </section>

        {/* ERROR MESSAGE */}

        {error && (
          <div className="flex flex-col gap-3 rounded-2xl border border-red-100 bg-red-50 p-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <AlertCircle className="shrink-0 text-red-600" size={20} />

              <p className="break-words text-sm font-medium text-red-700">
                {error}
              </p>
            </div>

            <button
              onClick={load}
              className="shrink-0 text-sm font-bold text-red-700 hover:underline"
            >
              Try Again
            </button>
          </div>
        )}

        {/* STATISTICS */}

        <section>
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="font-display text-xl font-extrabold text-forest sm:text-2xl">
                Website Overview
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Your website performance at a glance.
              </p>
            </div>

            <button
              onClick={load}
              disabled={loading}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-600 shadow-sm transition hover:border-forest hover:text-forest disabled:opacity-50"
            >
              <RefreshCw
                size={15}
                className={loading ? "animate-spin" : ""}
              />
              Refresh
            </button>
          </div>

          <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 2xl:grid-cols-4">
            {stats.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="min-w-0 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md sm:p-6"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm font-semibold text-slate-500">
                      {item.label}
                    </span>

                    <span
                      className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${item.color}`}
                    >
                      <Icon size={21} />
                    </span>
                  </div>

                  <p className="mt-5 font-display text-3xl font-extrabold text-forest sm:text-4xl">
                    {loading ? "—" : item.value}
                  </p>

                  <p className="mt-2 text-xs font-medium text-slate-400">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* MAIN CONTENT */}

        <div className="grid min-w-0 grid-cols-1 gap-5 xl:grid-cols-[minmax(0,1.5fr)_minmax(280px,0.8fr)]">

          {/* RECENT ARTICLES */}

          <section className="min-w-0 overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 p-5 sm:p-6">
              <div>
                <h2 className="font-display text-lg font-extrabold text-forest sm:text-xl">
                  Recent Articles
                </h2>

                <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                  Manage your latest blog content.
                </p>
              </div>

              <Link
                to="/admin/blogs"
                className="inline-flex items-center gap-1 text-sm font-bold text-leaf hover:underline"
              >
                View All
                <ChevronRight size={16} />
              </Link>
            </div>

            <div className="divide-y divide-slate-100">
              {loading ? (
                <div className="space-y-4 p-6">
                  {[1, 2, 3].map((item) => (
                    <div
                      key={item}
                      className="h-14 animate-pulse rounded-xl bg-slate-100"
                    />
                  ))}
                </div>
              ) : blogs.length > 0 ? (
                blogs.slice(0, 5).map((blog) => (
                  <div
                    key={blog._id}
                    className="flex min-w-0 items-center justify-between gap-3 p-4 transition hover:bg-slate-50 sm:p-5"
                  >
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-bold text-forest">
                        {blog.title}
                      </p>

                      <div className="mt-2 flex flex-wrap items-center gap-2">
                        <span className="text-xs text-slate-400">
                          {blog.category || "Recycling"}
                        </span>

                        <span className="text-slate-300">•</span>

                        <span
                          className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase ${
                            blog.status === "published"
                              ? "bg-emerald-50 text-emerald-700"
                              : "bg-amber-50 text-amber-700"
                          }`}
                        >
                          {blog.status || "Draft"}
                        </span>
                      </div>
                    </div>

                    <Link
                      to="/admin/blogs"
                      className="shrink-0 rounded-lg border border-slate-200 px-3 py-2 text-xs font-bold text-slate-600 transition hover:border-forest hover:text-forest"
                    >
                      Edit
                    </Link>
                  </div>
                ))
              ) : (
                <div className="px-5 py-12 text-center">
                  <FileText
                    size={35}
                    className="mx-auto text-slate-300"
                  />

                  <p className="mt-3 text-sm font-bold text-slate-600">
                    No articles yet
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    Start by creating your first blog.
                  </p>

                  <Link
                    to="/admin/blogs"
                    className="btn-primary mt-5 inline-flex items-center gap-2"
                  >
                    <Plus size={16} />
                    Create Article
                  </Link>
                </div>
              )}
            </div>

            {!loading && blogs.length > 0 && (
              <div className="border-t border-slate-100 bg-slate-50/70 px-5 py-3">
                <p className="text-xs text-slate-500">
                  Showing {Math.min(blogs.length, 5)} of {blogs.length} articles
                </p>
              </div>
            )}
          </section>

          {/* QUICK ACTIONS */}

          <section className="min-w-0 space-y-5">

            <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm sm:p-6">
              <h2 className="font-display text-lg font-extrabold text-forest">
                Content Summary
              </h2>

              <p className="mt-1 text-xs text-slate-500">
                Your blog publishing activity.
              </p>

              <div className="mt-6 space-y-5">
                <div>
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <span className="text-sm font-semibold text-slate-600">
                      Published Articles
                    </span>

                    <span className="text-sm font-extrabold text-forest">
                      {loading ? "—" : published}
                    </span>
                  </div>

                  <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className="h-full rounded-full bg-emerald-500 transition-all"
                      style={{
                        width: `${
                          blogs.length
                            ? (published / blogs.length) * 100
                            : 0
                        }%`,
                      }}
                    />
                  </div>
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <span className="text-sm font-semibold text-slate-600">
                      Draft Articles
                    </span>

                    <span className="text-sm font-extrabold text-forest">
                      {loading ? "—" : draft}
                    </span>
                  </div>

                  <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className="h-full rounded-full bg-amber-400 transition-all"
                      style={{
                        width: `${
                          blogs.length
                            ? (draft / blogs.length) * 100
                            : 0
                        }%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-forest p-5 text-white shadow-sm sm:p-6">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10 text-lime">
                <TrendingUp size={25} />
              </span>

              <h2 className="mt-5 font-display text-xl font-extrabold">
                Quick Actions
              </h2>

              <p className="mt-2 text-sm leading-6 text-white/60">
                Keep your website updated and respond to customer enquiries.
              </p>

              <div className="mt-6 grid gap-3">
                <Link
                  to="/admin/blogs"
                  className="flex min-w-0 items-center justify-between gap-3 rounded-xl bg-lime px-4 py-3.5 text-sm font-extrabold text-forest transition hover:bg-lime/90"
                >
                  <span className="flex items-center gap-2">
                    <Plus size={17} />
                    Create New Blog
                  </span>

                  <ArrowUpRight size={17} />
                </Link>

                <Link
                  to="/admin/enquiries"
                  className="flex min-w-0 items-center justify-between gap-3 rounded-xl border border-white/15 bg-white/5 px-4 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  <span className="flex items-center gap-2">
                    <Inbox size={17} />
                    View Enquiries
                  </span>

                  <span className="shrink-0 rounded-full bg-lime px-2.5 py-1 text-xs font-extrabold text-forest">
                    {loading ? "—" : enq.new}
                  </span>
                </Link>

                <Link
                  to="/blog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-w-0 items-center justify-between gap-3 rounded-xl border border-white/15 px-4 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  <span className="flex items-center gap-2">
                    <ArrowUpRight size={17} />
                    Visit Website
                  </span>
                </Link>
              </div>
            </div>

            {/* ENQUIRY STATUS */}

            <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm sm:p-6">
              <div className="flex items-center gap-2">
                <CalendarDays size={19} className="text-leaf" />

                <h2 className="font-display text-lg font-extrabold text-forest">
                  Enquiry Status
                </h2>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                {[
                  {
                    label: "New",
                    value: enq.new,
                    color: "bg-lime-50 text-lime-700",
                  },
                  {
                    label: "Contacted",
                    value: enq.contacted,
                    color: "bg-sky-50 text-sky-700",
                  },
                  {
                    label: "Closed",
                    value: enq.closed,
                    color: "bg-slate-100 text-slate-700",
                  },
                  {
                    label: "Total",
                    value: enq.total,
                    color: "bg-emerald-50 text-emerald-700",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="min-w-0 rounded-xl bg-slate-50 p-3"
                  >
                    <p className="text-xs font-semibold text-slate-500">
                      {item.label}
                    </p>

                    <p
                      className={`mt-2 inline-flex rounded-lg px-3 py-1.5 text-lg font-extrabold ${item.color}`}
                    >
                      {loading ? "—" : item.value}
                    </p>
                  </div>
                ))}
              </div>

              <Link
                to="/admin/enquiries"
                className="mt-5 flex items-center justify-center gap-2 rounded-xl border border-slate-200 py-3 text-sm font-bold text-forest transition hover:border-forest"
              >
                Manage All Enquiries
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </section>
        </div>

        {/* FOOTER */}

        <div className="border-t border-slate-200 py-5 text-center">
          <p className="text-xs font-medium text-slate-400">
            © {new Date().getFullYear()} Waste Care Links. All rights reserved.
          </p>
        </div>

      </div>
    </AdminLayout>
  );
}