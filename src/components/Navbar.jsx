import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import logo from '../img/logo.png';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Our Services' },
  { to: '/scrap-trading', label: 'Scrap Trading' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-forest/5 bg-white/95 backdrop-blur-md">
      <div className="container-width flex h-[90px] items-center justify-between">

        {/* LOGO ONLY */}
        <Link
          to="/"
          className="flex shrink-0 items-center"
          onClick={() => setOpen(false)}
        >
          <img
            src={logo}
            alt="Waste Care Links"
            className="h-[72px] w-auto max-w-[220px] object-contain"
          />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `whitespace-nowrap text-[15px] font-bold transition ${
                  isActive
                    ? 'text-leaf'
                    : 'text-ink/75 hover:text-leaf'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* DESKTOP CALL BUTTON */}
        <a
          href="tel:+919891087070"
          className="hidden items-center gap-2 rounded-full bg-forest px-6 py-4 text-sm font-bold text-white transition hover:bg-leaf lg:inline-flex"
        >
          <Phone size={18} />
          +91 98910 87070
        </a>

        {/* MOBILE MENU BUTTON */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className="grid h-11 w-11 place-items-center rounded-xl bg-mist text-forest lg:hidden"
        >
          {open ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      {/* MOBILE NAVIGATION */}
      {open && (
        <nav className="border-t border-forest/10 bg-white px-5 py-4 lg:hidden">
          {links.map((l) => (
            <NavLink
              onClick={() => setOpen(false)}
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `block rounded-lg px-4 py-4 text-base font-bold transition ${
                  isActive
                    ? 'bg-mist text-leaf'
                    : 'text-ink hover:bg-mist'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}

          <a
            href="tel:+919891087070"
            className="mt-3 flex items-center gap-3 rounded-xl bg-forest px-5 py-4 text-base font-bold text-white"
          >
            <Phone size={19} />
            Call +91 98910 87070
          </a>
        </nav>
      )}
    </header>
  );
}