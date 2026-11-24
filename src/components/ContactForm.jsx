import { useState } from 'react';
import axios from 'axios';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

const API = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
const initial = { name: '', email: '', phone: '', service: '', message: '', website: '' };
export default function ContactForm() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState({ type: '', text: '' });
  const [loading, setLoading] = useState(false);
  const update = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }));
  async function submit(e) {
    e.preventDefault(); setLoading(true); setStatus({ type: '', text: '' });
    try {
      const { data } = await axios.post(`${API}/enquiries`, form);
      setStatus({ type: 'success', text: data.message || 'Your enquiry has been submitted.' }); setForm(initial);
    } catch (err) { setStatus({ type: 'error', text: err.response?.data?.message || 'Unable to submit right now. Please call or email us.' }); }
    finally { setLoading(false); }
  }
  const field = 'w-full rounded-xl border border-forest/10 bg-white px-4 py-3.5 text-sm text-ink outline-none transition placeholder:text-ink/35 focus:border-leaf focus:ring-4 focus:ring-leaf/10';
  return <form onSubmit={submit} className="rounded-3xl bg-white p-6 shadow-soft sm:p-8"><div className="grid gap-5 sm:grid-cols-2">
    <label className="text-xs font-extrabold text-forest">Full name *<input className={`${field} mt-2`} name="name" value={form.name} onChange={update} placeholder="Your name" required maxLength="100"/></label>
    <label className="text-xs font-extrabold text-forest">Email address *<input className={`${field} mt-2`} type="email" name="email" value={form.email} onChange={update} placeholder="you@example.com" required maxLength="150"/></label>
    <label className="text-xs font-extrabold text-forest">Phone number *<input className={`${field} mt-2`} type="tel" name="phone" value={form.phone} onChange={update} placeholder="Your contact number" required maxLength="25"/></label>
    <label className="text-xs font-extrabold text-forest">Service required *<select className={`${field} mt-2`} name="service" value={form.service} onChange={update} required><option value="">Select a service</option>{['Paper Shredding','Confidential Paper Destruction','Data & Media Destruction','Paper Recycling','Plastic Recycling','E-Waste Recycling','Battery Recycling','Industrial Scrap Recycling','Scrap Trading','Other'].map(x => <option key={x}>{x}</option>)}</select></label>
    <label className="text-xs font-extrabold text-forest sm:col-span-2">How can we help? *<textarea className={`${field} mt-2 min-h-32 resize-y`} name="message" value={form.message} onChange={update} placeholder="Tell us about your requirements, material type and approximate quantity..." required maxLength="2000"/></label>
    <div className="hidden" aria-hidden="true"><label>Website<input tabIndex="-1" autoComplete="off" name="website" value={form.website} onChange={update}/></label></div>
  </div>
  {status.text && <div role="status" className={`mt-5 flex items-start gap-2 rounded-xl p-3 text-sm ${status.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-700'}`}>{status.type === 'success' ? <CheckCircle2 size={18}/> : <AlertCircle size={18}/>}<span>{status.text}</span></div>}
  <button disabled={loading} className="btn-primary mt-6 w-full disabled:cursor-wait disabled:opacity-60 sm:w-auto" type="submit">{loading ? 'Sending...' : 'Send enquiry'} <Send size={16}/></button>
  <p className="mt-4 text-xs leading-5 text-ink/45">Your details will only be used to respond to your enquiry.</p>
  </form>;
}
