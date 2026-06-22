import { useState, useCallback } from "react";
import { Link } from "wouter";
import QRCode from "qrcode";
import { SEOHead } from "@/components/seo-head";
import { Breadcrumb, breadcrumbSchema } from "@/components/breadcrumb";

const breadcrumbs = [{ label: "Home", href: "/" }, { label: "QR Code Types", href: "/" }, { label: "vCard QR Code" }];

const schema = [
  { "@context": "https://schema.org", "@type": "WebApplication", name: "vCard QR Code Generator — QR King", url: "https://qrking.replit.app/qr/vcard", description: "Create a vCard QR code to share contact details instantly. Scan to save — no manual entry needed.", applicationCategory: "UtilitiesApplication", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } },
  { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [{ "@type": "Question", name: "What is a vCard QR code?", acceptedAnswer: { "@type": "Answer", text: "A vCard QR code encodes contact information (name, phone, email, website) in a standard vCard format. When scanned, iOS and Android offer to add the contact directly to the address book." } }] },
  breadcrumbSchema(breadcrumbs),
];

const faqs = [
  { q: "What is a vCard QR code?", a: "A vCard QR code encodes contact information in the standard vCard format. When scanned, smartphones offer to save the contact directly to the address book — no manual entry." },
  { q: "What information can I include?", a: "You can include your name, organization, job title, phone number, email, website, and physical address." },
  { q: "Does it work on all phones?", a: "Yes. iOS and Android both support vCard QR codes natively through their camera apps." },
  { q: "Can I print this on a business card?", a: "Absolutely. Printing a vCard QR code on your business card lets anyone scan your card to instantly save your contact information." },
];

export default function VcardQR() {
  const [form, setForm] = useState({ firstName: "", lastName: "", org: "", title: "", phone: "", email: "", website: "" });
  const [qrDataUrl, setQrDataUrl] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState("");

  const set = (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => setForm(f => ({ ...f, [key]: e.target.value }));

  const generate = useCallback(async () => {
    if (!form.firstName.trim() && !form.lastName.trim()) { setError("Please enter at least a first or last name"); return; }
    setError("");
    setIsGenerating(true);
    try {
      const vcard = [`BEGIN:VCARD`, `VERSION:3.0`, `N:${form.lastName};${form.firstName};;;`, `FN:${form.firstName} ${form.lastName}`.trim(), form.org && `ORG:${form.org}`, form.title && `TITLE:${form.title}`, form.phone && `TEL:${form.phone}`, form.email && `EMAIL:${form.email}`, form.website && `URL:${form.website}`, `END:VCARD`].filter(Boolean).join("\n");
      const dataUrl = await QRCode.toDataURL(vcard, { width: 512, margin: 2, errorCorrectionLevel: "H" });
      setQrDataUrl(dataUrl);
    } catch { setError("Failed to generate QR code."); } finally { setIsGenerating(false); }
  }, [form]);

  const download = useCallback(() => {
    if (!qrDataUrl) return;
    const a = document.createElement("a"); a.href = qrDataUrl; a.download = "vcard-qrcode.png"; document.body.appendChild(a); a.click(); document.body.removeChild(a);
  }, [qrDataUrl]);

  const inputClass = "w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 text-sm transition-all duration-200";
  const focusBlur = { onFocus: (e: React.FocusEvent<HTMLInputElement>) => { e.target.style.borderColor = "#2563eb"; e.target.style.boxShadow = "0 0 0 3px rgba(37,99,235,0.12)"; e.target.style.background = "#fff"; }, onBlur: (e: React.FocusEvent<HTMLInputElement>) => { e.target.style.borderColor = ""; e.target.style.boxShadow = ""; e.target.style.background = ""; } };

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "linear-gradient(170deg, #eff6ff 0%, #f8faff 50%, #eef2ff 100%)" }}>
      <SEOHead title="vCard QR Code Generator — Share Contact Info Instantly | QR King" description="Create a free vCard QR code. Scan to save contact details — name, phone, email, website — directly to any smartphone. No signup required." canonical="/qr/vcard" schema={schema} />
      <header className="py-4 px-6 border-b border-slate-100 bg-white/70 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 font-bold text-slate-800">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)" }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="7" height="7" rx="1" fill="white"/><rect x="14" y="3" width="7" height="7" rx="1" fill="white"/><rect x="3" y="14" width="7" height="7" rx="1" fill="white"/><rect x="5" y="5" width="3" height="3" rx="0.5" fill="#2563eb"/><rect x="16" y="5" width="3" height="3" rx="0.5" fill="#2563eb"/><rect x="5" y="16" width="3" height="3" rx="0.5" fill="#2563eb"/><rect x="14" y="14" width="3" height="3" rx="0.5" fill="white"/><rect x="18" y="14" width="3" height="3" rx="0.5" fill="white"/><rect x="14" y="18" width="3" height="3" rx="0.5" fill="white"/><rect x="18" y="18" width="3" height="3" rx="0.5" fill="white"/></svg></div>
            QR King
          </Link>
          <Link href="/" className="text-sm text-blue-600 hover:underline">← Back to Generator</Link>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center px-4 pt-10 pb-20 max-w-3xl mx-auto w-full">
        <Breadcrumb items={breadcrumbs} />
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3 text-center">vCard QR Code Generator — Free Contact QR Maker</h1>
        <p className="text-slate-500 text-base text-center mb-8 max-w-xl">Encode your contact details into a QR code. When scanned, phones offer to save your contact automatically.</p>

        <div className="w-full max-w-2xl qr-card bg-white rounded-2xl p-6 sm:p-8">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div><label className="block text-xs font-semibold text-slate-600 mb-1.5">First Name *</label><input type="text" value={form.firstName} onChange={set("firstName")} placeholder="John" className={inputClass} style={{ outline: "none" }} {...focusBlur} /></div>
            <div><label className="block text-xs font-semibold text-slate-600 mb-1.5">Last Name</label><input type="text" value={form.lastName} onChange={set("lastName")} placeholder="Smith" className={inputClass} style={{ outline: "none" }} {...focusBlur} /></div>
            <div><label className="block text-xs font-semibold text-slate-600 mb-1.5">Organization</label><input type="text" value={form.org} onChange={set("org")} placeholder="Acme Corp" className={inputClass} style={{ outline: "none" }} {...focusBlur} /></div>
            <div><label className="block text-xs font-semibold text-slate-600 mb-1.5">Job Title</label><input type="text" value={form.title} onChange={set("title")} placeholder="Product Manager" className={inputClass} style={{ outline: "none" }} {...focusBlur} /></div>
            <div><label className="block text-xs font-semibold text-slate-600 mb-1.5">Phone</label><input type="tel" value={form.phone} onChange={set("phone")} placeholder="+1 555 123 4567" className={inputClass} style={{ outline: "none" }} {...focusBlur} /></div>
            <div><label className="block text-xs font-semibold text-slate-600 mb-1.5">Email</label><input type="email" value={form.email} onChange={set("email")} placeholder="john@acme.com" className={inputClass} style={{ outline: "none" }} {...focusBlur} /></div>
            <div className="col-span-2"><label className="block text-xs font-semibold text-slate-600 mb-1.5">Website</label><input type="url" value={form.website} onChange={set("website")} placeholder="https://yourwebsite.com" className={inputClass} style={{ outline: "none" }} {...focusBlur} /></div>
          </div>
          {error && <p className="mb-4 text-sm text-red-500">{error}</p>}
          <button onClick={generate} disabled={isGenerating} className="w-full py-3.5 rounded-xl text-white font-semibold text-base disabled:opacity-60 transition-all duration-200" style={{ background: isGenerating ? "#93c5fd" : "linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)" }}>
            {isGenerating ? "Generating…" : "Generate vCard QR Code →"}
          </button>
          <div className="mt-6 qr-container rounded-2xl flex flex-col items-center justify-center" style={{ minHeight: "240px" }} aria-live="polite">
            {qrDataUrl ? (
              <div className="flex flex-col items-center gap-4 py-6">
                <div className="p-3 bg-white rounded-2xl shadow-md"><img src={qrDataUrl} alt="vCard QR code" width={180} height={180} className="block rounded-lg" style={{ imageRendering: "pixelated" }} /></div>
                <button onClick={download} className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl border-2 font-semibold text-sm hover:bg-blue-50 transition-all" style={{ borderColor: "#2563eb", color: "#2563eb" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                  Download QR PNG
                </button>
              </div>
            ) : <div className="text-center py-8"><p className="text-slate-400 text-sm">👤 Fill in your contact details and click Generate</p></div>}
          </div>
        </div>

        <article className="mt-10 w-full space-y-5">
          <section className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
            <h2 className="text-lg font-bold text-slate-800 mb-3">What Is a vCard QR Code?</h2>
            <p className="text-sm text-slate-600 leading-relaxed">A vCard QR code encodes your contact information in the widely-supported vCard 3.0 format. When someone scans it with their iPhone or Android camera, the phone recognizes the vCard format and immediately offers to add the contact to their address book. This is far more reliable than typing contact details manually and is the standard format supported across all smartphones.</p>
          </section>
          <section className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
            <h2 className="text-lg font-bold text-slate-800 mb-4">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <details key={i} className="border border-slate-100 rounded-xl group">
                  <summary className="px-4 py-3 font-semibold text-sm text-slate-800 cursor-pointer list-none flex items-center justify-between hover:text-blue-700 transition-colors">{faq.q}<span className="text-slate-400 group-open:rotate-180 transition-transform">▾</span></summary>
                  <p className="px-4 pb-3 text-sm text-slate-600 leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </section>
        </article>
      </main>
      <footer className="py-6 text-center text-xs text-slate-400 border-t border-slate-100 bg-white/50"><p>© 2025 <Link href="/" className="hover:text-blue-600">QR King</Link> · Free vCard QR Code Generator</p></footer>
    </div>
  );
}
