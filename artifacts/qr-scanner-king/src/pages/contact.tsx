import { useState } from "react";
import { Link } from "wouter";
import { SEOHead } from "@/components/seo-head";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass = "w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 text-sm transition-all duration-200";
  const focusBlur = {
    onFocus: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => { e.target.style.borderColor = "#2563eb"; e.target.style.boxShadow = "0 0 0 3px rgba(37,99,235,0.12)"; e.target.style.background = "#fff"; },
    onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => { e.target.style.borderColor = ""; e.target.style.boxShadow = ""; e.target.style.background = ""; },
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "linear-gradient(170deg, #eff6ff 0%, #f8faff 50%, #eef2ff 100%)" }}>
      <SEOHead
        title="Contact QR King — Get in Touch"
        description="Have a question about QR King or need support? Contact us through our form or reach us directly by email. We typically respond within 24–48 hours."
        canonical="/contact"
      />

      <header className="py-4 px-6 border-b border-slate-100 bg-white/70 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 font-bold text-slate-800">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="7" height="7" rx="1" fill="white"/><rect x="14" y="3" width="7" height="7" rx="1" fill="white"/><rect x="3" y="14" width="7" height="7" rx="1" fill="white"/><rect x="5" y="5" width="3" height="3" rx="0.5" fill="#2563eb"/><rect x="16" y="5" width="3" height="3" rx="0.5" fill="#2563eb"/><rect x="5" y="16" width="3" height="3" rx="0.5" fill="#2563eb"/><rect x="14" y="14" width="3" height="3" rx="0.5" fill="white"/><rect x="18" y="14" width="3" height="3" rx="0.5" fill="white"/><rect x="14" y="18" width="3" height="3" rx="0.5" fill="white"/><rect x="18" y="18" width="3" height="3" rx="0.5" fill="white"/></svg>
            </div>
            QR King
          </Link>
          <nav className="hidden md:flex items-center gap-5 text-sm text-slate-600">
            <Link href="/" className="hover:text-blue-600 transition-colors">Generator</Link>
            <Link href="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
            <Link href="/about" className="hover:text-blue-600 transition-colors">About</Link>
            <Link href="/contact" className="text-blue-600 font-medium">Contact</Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 px-4 pt-12 pb-20 max-w-3xl mx-auto w-full">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">Contact Us</h1>
        <p className="text-slate-500 text-base leading-relaxed mb-8">Have a question, feedback, or need help? We'd love to hear from you. Fill out the form below or email us directly.</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          {[
            { icon: "✉️", title: "Email Us", desc: "support@qrking.app", sub: "We respond within 24–48 hours" },
            { icon: "💬", title: "General Inquiry", desc: "Questions about QR codes", sub: "Tool usage, feature requests" },
            { icon: "🐛", title: "Report a Bug", desc: "Something not working?", sub: "We'll fix it fast" },
          ].map(c => (
            <div key={c.title} className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm text-center">
              <div className="text-2xl mb-2">{c.icon}</div>
              <p className="font-semibold text-slate-800 text-sm mb-1">{c.title}</p>
              <p className="text-xs text-blue-600 mb-1">{c.desc}</p>
              <p className="text-xs text-slate-400">{c.sub}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm">
          {submitted ? (
            <div className="text-center py-10">
              <div className="text-4xl mb-4">✅</div>
              <h2 className="text-xl font-bold text-slate-800 mb-2">Message Received!</h2>
              <p className="text-sm text-slate-500 mb-6">Thank you for reaching out. We'll get back to you within 24–48 hours.</p>
              <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm" style={{ background: "linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)" }}>
                Back to QR Generator
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <h2 className="text-lg font-bold text-slate-800 mb-4">Send a Message</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">Your Name *</label>
                  <input type="text" required value={form.name} onChange={set("name")} placeholder="John Smith" className={inputClass} style={{ outline: "none" }} {...focusBlur} />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">Email Address *</label>
                  <input type="email" required value={form.email} onChange={set("email")} placeholder="john@example.com" className={inputClass} style={{ outline: "none" }} {...focusBlur} />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">Subject *</label>
                <select required value={form.subject} onChange={set("subject")} className={inputClass} style={{ outline: "none" }} {...focusBlur}>
                  <option value="">Select a topic…</option>
                  <option value="general">General Question</option>
                  <option value="bug">Report a Bug</option>
                  <option value="feature">Feature Request</option>
                  <option value="business">Business Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">Message *</label>
                <textarea required value={form.message} onChange={set("message")} placeholder="Tell us how we can help…" rows={5} className={inputClass} style={{ outline: "none", resize: "vertical" }} {...focusBlur} />
              </div>
              <button type="submit" className="w-full py-3.5 rounded-xl text-white font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5" style={{ background: "linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)" }}>
                Send Message →
              </button>
              <p className="text-xs text-slate-400 text-center">We respect your privacy. Your information is never shared with third parties.</p>
            </form>
          )}
        </div>
      </main>

      <footer className="py-6 text-center text-xs text-slate-400 border-t border-slate-100 bg-white/50">
        <p className="mb-2">© 2025 QR King · Free Online QR Code Generator</p>
        <nav className="flex flex-wrap justify-center gap-4">
          <Link href="/about" className="hover:text-blue-600">About</Link>
          <Link href="/contact" className="hover:text-blue-600">Contact</Link>
          <Link href="/privacy" className="hover:text-blue-600">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-blue-600">Terms of Service</Link>
        </nav>
      </footer>
    </div>
  );
}
