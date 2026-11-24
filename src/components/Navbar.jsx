import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Leaf, Phone } from 'lucide-react';

const links = [{ to: '/', label: 'Home' }, { to: '/about', label: 'About Us' }, { to: '/services', label: 'Our Services' }, { to: '/scrap-trading', label: 'Scrap Trading' }, { to: '/blog', label: 'Blog' }, { to: '/contact', label: 'Contact' }];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return <header className="sticky top-0 z-50 border-b border-forest/5 bg-white/95 backdrop-blur-md">
    <div className="container-width flex h-[78px] items-center justify-between">
      <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
        <span className="grid h-11 w-11 place-items-center rounded-2xl bg-forest text-lime"><Leaf size={25}/></span>
        <span className="leading-tight"><span className="block font-display text-[17px] font-extrabold tracking-tight text-forest">WASTE CARE LINKS</span><span className="mt-1 block text-[9px] font-bold tracking-[.22em] text-leaf">CARE FOR A CLEANER TOMORROW</span></span>
      </Link>
      <nav className="hidden items-center gap-8 md:flex">{links.map(l => <NavLink key={l.to} to={l.to} className={({isActive}) => `text-[13px] font-bold transition ${isActive ? 'text-leaf' : 'text-ink/75 hover:text-leaf'}`}>{l.label}</NavLink>)}</nav>
      <a href="tel:+919891087070" className="hidden items-center gap-2 rounded-full bg-forest px-5 py-3 text-xs font-bold text-white transition hover:bg-leaf md:inline-flex"><Phone size={15}/> +91 98910 87070</a>
      <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="grid h-10 w-10 place-items-center rounded-xl bg-mist text-forest md:hidden">{open ? <X/> : <Menu/>}</button>
    </div>
    {open && <nav className="border-t border-forest/10 bg-white px-5 py-4 md:hidden">{links.map(l => <NavLink onClick={() => setOpen(false)} key={l.to} to={l.to} className={({isActive}) => `block rounded-lg px-3 py-3 text-sm font-bold ${isActive ? 'bg-mist text-leaf' : 'text-ink'}`}>{l.label}</NavLink>)}<a href="tel:+919891087070" className="mt-3 flex items-center gap-2 rounded-xl bg-forest px-4 py-3 text-sm font-bold text-white"><Phone size={16}/> Call +91 98910 87070</a></nav>}
  </header>;
}
