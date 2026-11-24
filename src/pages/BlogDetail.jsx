import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  CalendarDays,
  Leaf,
  ArrowRight,
} from "lucide-react";

import SEO from "../components/SEO.jsx";
import { apiRequest, imageUrl } from "../lib/api.js";

export default function BlogDetail() {
  const { slug } = useParams();

  const [post, setPost] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    setLoading(true);
    setError("");
    setPost(null);

    apiRequest(`/blogs/${slug}`)
      .then((response) => {
        if (active) setPost(response.data);
      })
      .catch((err) => {
        if (active) setError(err.message);
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-[60vh] grid place-items-center px-4">
        <div className="text-center">
          <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-forest/20 border-t-forest" />
          <p className="text-sm font-semibold text-slate-500">
            Loading article...
          </p>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-5 text-center">
        <span className="mb-5 grid h-16 w-16 place-items-center rounded-2xl bg-mist text-forest">
          <Leaf size={30} />
        </span>

        <h1 className="font-display text-3xl font-extrabold text-forest">
          Article Not Found
        </h1>

        <p className="mt-3 max-w-md text-sm leading-7 text-slate-500">
          This article may have been unpublished or moved. Please explore our
          latest articles.
        </p>

        <Link to="/blog" className="btn-primary mt-7">
          <ArrowLeft size={17} className="mr-2 inline" />
          Back to Blog
        </Link>
      </div>
    );
  }

  const title = post.seo?.metaTitle || post.title;
  const desc = post.seo?.metaDescription || post.excerpt;
  const canonical = post.seo?.canonicalUrl || window.location.href;
  const cover = imageUrl(post.coverImage);

  const articleDate = post.publishedAt || post.createdAt;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: desc,
    image: cover,
    datePublished: articleDate,
    dateModified: post.updatedAt || post.createdAt,
    author: {
      "@type": "Organization",
      name: post.author || "Waste Care Links",
    },
    publisher: {
      "@type": "Organization",
      name: "Waste Care Links",
    },
    mainEntityOfPage: canonical,
  };

  return (
    <>
      <SEO
        title={title}
        description={desc}
        image={cover}
        canonical={canonical}
        robots={post.seo?.robots || "index,follow"}
        type="article"
        keywords={post.seo?.keywords || []}
        ogTitle={post.seo?.ogTitle}
        ogDescription={post.seo?.ogDescription}
      />

      <script type="application/ld+json">
        {JSON.stringify(articleSchema)}
      </script>

      {/* ARTICLE HERO */}
      <header className="relative overflow-hidden bg-forest">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-lime/10 blur-3xl" />
          <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-lime/10 blur-3xl" />
        </div>

        <div className="container-width relative px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <Link
            to="/blog"
            className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-white/70 transition hover:text-lime sm:mb-12"
          >
            <ArrowLeft size={17} />
            Back to all articles
          </Link>

          <div className="max-w-4xl">
            <span className="inline-flex rounded-full border border-lime/20 bg-lime/10 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.18em] text-lime sm:text-xs">
              {post.category || "Recycling"}
            </span>

            <h1 className="mt-6 break-words font-display text-3xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              {post.title}
            </h1>

            {post.excerpt && (
              <p className="mt-5 max-w-3xl text-sm leading-7 text-white/65 sm:mt-7 sm:text-base sm:leading-8 lg:text-lg">
                {post.excerpt}
              </p>
            )}

            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 pt-6 text-xs font-medium text-white/60 sm:mt-9 sm:text-sm">
              <span className="flex items-center gap-2">
                <CalendarDays size={16} className="text-lime" />

                {articleDate
                  ? new Date(articleDate).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })
                  : ""}
              </span>

              <span>
                By{" "}
                <span className="font-bold text-white">
                  {post.author || "Waste Care Links"}
                </span>
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* COVER IMAGE */}
      {cover && (
        <section className="container-width px-4 sm:px-6 lg:px-8">
          <div className="relative -mt-5 overflow-hidden rounded-2xl bg-mist shadow-xl sm:-mt-10 sm:rounded-3xl">
            <img
              src={cover}
              alt={post.coverImageAlt || post.title}
              className="aspect-[16/9] w-full object-cover"
              fetchPriority="high"
            />
          </div>
        </section>
      )}

      {/* ARTICLE CONTENT */}
      <main className="container-width px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <article className="mx-auto w-full max-w-4xl">
          <div
            className="prose-wcl w-full min-w-0 break-words"
            dangerouslySetInnerHTML={{
              __html: post.content || "",
            }}
          />

          {/* CONTACT CTA */}
          <section className="mt-14 overflow-hidden rounded-2xl bg-mist p-5 sm:mt-20 sm:rounded-3xl sm:p-8 lg:p-10">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-forest text-lime sm:h-14 sm:w-14">
                <Leaf size={27} />
              </div>

              <div className="flex-1">
                <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-forest/60">
                  Waste Care Links
                </span>

                <h2 className="mt-3 max-w-xl font-display text-2xl font-extrabold leading-tight text-forest sm:text-3xl">
                  Want to manage waste more responsibly?
                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                  Talk to Waste Care Links about secure shredding,
                  confidential data destruction, recycling and scrap recovery
                  solutions.
                </p>

                <Link
                  to="/contact"
                  className="btn-primary mt-6 inline-flex items-center gap-2"
                >
                  Talk to Our Team
                  <ArrowRight size={17} />
                </Link>
              </div>
            </div>
          </section>

          {/* BACK TO BLOG */}
          <div className="mt-10 border-t border-slate-200 pt-7">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-bold text-forest transition hover:text-green-600"
            >
              <ArrowLeft size={17} />
              Explore More Articles
            </Link>
          </div>
        </article>
      </main>
    </>
  );
}