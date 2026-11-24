export const API_BASE = (import.meta.env.VITE_API_URL || 'http://localhost:5000/api').replace(/\/$/, '');
export function imageUrl(value) { if (!value) return ''; if (/^https?:\/\//i.test(value)) return value; const origin = API_BASE.replace(/\/api$/, ''); return `${origin}/${value.replace(/^\//, '')}`; }
export async function apiRequest(path, options={}) { const response=await fetch(`${API_BASE}${path}`,options); const data=await response.json().catch(()=>({message:'Unexpected server response'})); if(!response.ok) throw new Error(data.message||'Request failed'); return data; }
