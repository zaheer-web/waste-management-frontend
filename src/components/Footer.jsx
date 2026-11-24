import { Link } from 'react-router-dom';
import { Leaf, MapPin, Mail, Phone, ArrowUpRight } from 'lucide-react';
export default function Footer() {
  return <footer className="bg-[#0d3022] text-white">
    <div className="container-width grid gap-12 py-16 md:grid-cols-[1.35fr_.8fr_1fr]">
      <div><div className="mb-5 flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-2xl bg-lime text-forest"><Leaf size={25}/></span><span className="font-display text-lg font-extrabold">WASTE CARE LINKS</span></div><p className="max-w-sm text-sm leading-7 text-white/65">Responsible waste management, secure shredding, scrap trading and recycling solutions for a cleaner, more resource-conscious future.</p><a href="https://wa.me/919891087070" target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-lime">Connect on WhatsApp <ArrowUpRight size={16}/></a></div>
      <div><h3 className="mb-5 font-display text-sm font-extrabold">QUICK LINKS</h3><div className="grid gap-3 text-sm text-white/65"><Link className="hover:text-lime" to="/">Home</Link><Link className="hover:text-lime" to="/about">About Us</Link><Link className="hover:text-lime" to="/services">Our Services</Link><Link className="hover:text-lime" to="/scrap-trading">Scrap Trading</Link><Link className="hover:text-lime" to="/blog">Blog & Insights</Link><Link className="hover:text-lime" to="/contact">Contact Us</Link></div></div>
      <div><h3 className="mb-5 font-display text-sm font-extrabold">GET IN TOUCH</h3><div className="grid gap-4 text-sm leading-6 text-white/65"><p className="flex gap-3"><MapPin className="mt-1 shrink-0 text-lime" size={18}/>Plot No. 717, IFC Paper Market, Gazipur, Delhi – 110096</p><a className="flex gap-3 hover:text-lime" href="mailto:wastecarelinks@gmail.com"><Mail className="shrink-0 text-lime" size={18}/>wastecarelinks@gmail.com</a><a className="flex gap-3 hover:text-lime" href="tel:+919891087070"><Phone className="shrink-0 text-lime" size={18}/>+91 9891087070</a></div></div>
    </div>
    <div className="border-t border-white/10"><div className="container-width flex flex-col justify-between gap-2 py-5 text-xs text-white/45 sm:flex-row"><span>© {new Date().getFullYear()} Waste Care Links. All rights reserved.</span><span>Waste less. Recover more. Care for tomorrow.</span></div></div>
  </footer>;
}
