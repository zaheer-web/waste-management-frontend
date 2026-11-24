import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import {
  LayoutDashboard,
  FileText,
  Inbox,
  Globe,
  LogOut,
  Menu,
  X,
  Leaf,
  ChevronRight,
} from "lucide-react";

const links = [
  {
    to: "/admin/dashboard",
    label: "Overview",
    icon: LayoutDashboard,
  },
  {
    to: "/admin/blogs",
    label: "Blog Management",
    icon: FileText,
  },
  {
    to: "/admin/enquiries",
    label: "Contact Enquiries",
    icon: Inbox,
  },
];

export default function AdminLayout({
  children,
  title,
  subtitle,
  active,
}) {
  const [open, setOpen] = useState(false);

  const nav = useNavigate();

  // Close sidebar when route changes
  useEffect(() => {
    setOpen(false);
  }, [active]);

  // Prevent body scrolling when mobile sidebar is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close sidebar with Escape key
  useEffect(() => {
    function handleEscape(e) {
      if (e.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  function logout() {
    localStorage.removeItem("wcl_admin_token");
    nav("/admin");
  }

  return (
    <div className="min-h-screen w-full overflow-x-clip bg-[#f5f8f3]">

      {/* MOBILE OVERLAY */}

      {open && (
        <button
          aria-label="Close sidebar"
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-[2px] lg:hidden"
        />
      )}

      {/* SIDEBAR */}

      <aside
        className={`
          fixed inset-y-0 left-0 z-[70]
          flex h-dvh w-[280px] max-w-[85vw] flex-col
          bg-[#103d2b] text-white
          shadow-2xl shadow-black/10
          transition-transform duration-300 ease-in-out

          ${
            open
              ? "translate-x-0"
              : "-translate-x-full"
          }

          lg:w-[260px]
          lg:translate-x-0
          lg:shadow-none
        `}
      >

        {/* LOGO */}

        <div className="flex h-[82px] shrink-0 items-center justify-between border-b border-white/10 px-5 sm:px-6">

          <a
            href="/admin/dashboard"
            className="flex min-w-0 items-center gap-3"
          >
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-lime text-forest">
              <Leaf size={24} />
            </span>

            <div className="min-w-0">
              <p className="truncate font-display text-sm font-extrabold tracking-wide">
                WASTE CARE LINKS
              </p>

              <p className="mt-1 text-[10px] font-bold uppercase tracking-[.18em] text-lime">
                Admin Workspace
              </p>
            </div>
          </a>

          {/* MOBILE CLOSE BUTTON */}

          <button
            onClick={() => setOpen(false)}
            aria-label="Close sidebar"
            className="ml-2 rounded-lg p-2 text-white/70 transition hover:bg-white/10 hover:text-white lg:hidden"
          >
            <X size={21} />
          </button>

        </div>

        {/* NAVIGATION */}

        <div className="flex-1 overflow-y-auto px-4 pb-5 pt-8">

          <p className="px-3 pb-4 text-[10px] font-extrabold uppercase tracking-[.2em] text-white/40">
            Workspace
          </p>

          <nav className="grid gap-2">

            {links.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) => `
                    group flex items-center justify-between
                    gap-3 rounded-xl px-3.5 py-3.5
                    text-sm font-bold
                    transition-all duration-200

                    ${
                      isActive
                        ? "bg-lime text-forest shadow-lg shadow-black/10"
                        : "text-white/70 hover:bg-white/10 hover:text-white"
                    }
                  `}
                >
                  {({ isActive }) => (
                    <>
                      <span className="flex min-w-0 items-center gap-3">
                        <Icon
                          size={19}
                          className="shrink-0"
                        />

                        <span className="truncate">
                          {item.label}
                        </span>
                      </span>

                      <ChevronRight
                        size={16}
                        className={`
                          shrink-0 transition-transform
                          ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-70"}
                        `}
                      />
                    </>
                  )}
                </NavLink>
              );
            })}

          </nav>

        </div>

        {/* SIDEBAR BOTTOM */}

        <div className="shrink-0 border-t border-white/10 p-4">

          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            className="mb-2 flex items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-semibold text-white/65 transition hover:bg-white/10 hover:text-white"
          >
            <Globe size={18} />
            View Website
          </a>

          <button
            onClick={logout}
            className="flex w-full items-center gap-3 rounded-xl border border-white/10 px-3.5 py-3 text-sm font-bold text-white/75 transition hover:border-red-400/30 hover:bg-red-500/10 hover:text-red-300"
          >
            <LogOut size={18} />
            Sign Out
          </button>

          <p className="px-3 pt-5 text-[10px] font-medium text-white/30">
            © {new Date().getFullYear()} Waste Care Links
          </p>

        </div>

      </aside>

      {/* MAIN CONTENT AREA */}

      <div className="min-h-screen min-w-0 w-full lg:ml-[260px] lg:w-[calc(100%-260px)]">

        {/* TOP HEADER */}

        <header className="sticky top-0 z-40 flex h-[76px] w-full items-center justify-between gap-3 border-b border-slate-100 bg-white/95 px-4 shadow-sm backdrop-blur-md sm:h-[82px] sm:px-6 lg:px-8">

          {/* LEFT */}

          <div className="flex min-w-0 items-center gap-3">

            {/* MOBILE MENU */}

            <button
              onClick={() => setOpen(true)}
              aria-label="Open sidebar"
              aria-expanded={open}
              className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-slate-200 bg-white text-forest transition hover:bg-mist lg:hidden"
            >
              <Menu size={21} />
            </button>

            <div className="min-w-0">

              <h1 className="truncate font-display text-lg font-extrabold text-forest sm:text-xl">
                {title}
              </h1>

              {subtitle && (
                <p className="mt-0.5 hidden max-w-xl truncate text-xs text-slate-400 sm:block">
                  {subtitle}
                </p>
              )}

            </div>

          </div>

          {/* RIGHT */}

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">

            <div className="hidden text-right sm:block">
              <b className="block text-xs font-bold text-forest">
                Administrator
              </b>

              <small className="text-[11px] text-slate-400">
                Waste Care Links
              </small>
            </div>

            <span className="grid h-10 w-10 place-items-center rounded-full bg-[#eaf4df] text-sm font-extrabold text-forest sm:h-11 sm:w-11">
              WC
            </span>

          </div>

        </header>

        {/* PAGE CONTENT */}

        <main className="mx-auto min-h-[calc(100vh-82px)] w-full min-w-0 max-w-[1700px] overflow-x-clip p-4 sm:p-6 lg:p-8 xl:p-10">

          {/* PAGE HEADING */}

          <div className="mb-6 min-w-0 sm:mb-8">

            <p className="flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[.2em] text-leaf sm:text-xs">
              <Leaf size={14} />
              Management Panel
            </p>

            <h2 className="mt-2 break-words font-display text-2xl font-extrabold leading-tight text-forest sm:text-3xl lg:text-4xl">
              {title}
            </h2>

            {subtitle && (
              <p className="mt-2 max-w-2xl text-xs leading-6 text-slate-500 sm:text-sm sm:leading-7">
                {subtitle}
              </p>
            )}

          </div>

          {/* CHILDREN */}

          <div className="w-full min-w-0">
            {children}
          </div>

        </main>

      </div>

    </div>
  );
}