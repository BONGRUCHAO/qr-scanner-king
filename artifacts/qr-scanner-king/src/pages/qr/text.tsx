import { Link } from "wouter";
import { SEOHead } from "@/components/seo-head";
import { Breadcrumb, breadcrumbSchema } from "@/components/breadcrumb";
import { QRGeneratorWidget } from "@/components/qr-generator-widget";

const breadcrumbs = [{ label: "Home", href: "/" }, { label: "QR Code Types", href: "/" }, { label: "Text QR Code" }];

const schema = [
  { "@context": "https://schema.org", "@type": "WebApplication", name: "Text QR Code Generator — QR King", url: "https://qrking.replit.app/qr/text", description: "Encode any plain text into a QR code. Free, instant, no signup.", applicationCategory: "UtilitiesApplication", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } },
  { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [{ "@type": "Question", name: "What can I encode in a text QR code?", acceptedAnswer: { "@type": "Answer", text: "Any plain text — a message, coupon code, promo code, event details, instructions, or any other text content up to about 2,953 characters." } }] },
  breadcrumbSchema(breadcrumbs),
];

const faqs = [
  { q: "What can I encode in a text QR code?", a: "Any plain text — a message, coupon code, promo code, event details, instructions, or any other text content up to about 2,953 characters." },
  { q: "What happens when someone scans a text QR code?", a: "The phone displays the decoded text directly on screen. Unlike a URL QR code, it doesn't open a browser — it just shows the text." },
  { q: "Can I use special characters or line breaks?", a: "Yes. QR codes support UTF-8 encoding, so you can include special characters, accented letters, and line breaks." },
  { q: "How much text can a QR code hold?", a: "A QR code can encode up to 2,953 bytes of binary/text data. For practical print use, keep text under 500 characters for a code that's easy to scan." },
];

export default function TextQR() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "linear-gradient(170deg, #eff6ff 0%, #f8faff 50%, #eef2ff 100%)" }}>
      <SEOHead title="Text QR Code Generator — Encode Any Message as a QR Code | QR King" description="Create a free QR code from any text message, coupon code, or plain text. Instant preview, PNG download. No signup required." canonical="/qr/text" schema={schema} />
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
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3 text-center">Text QR Code Generator — Encode Any Message</h1>
        <p className="text-slate-500 text-base text-center mb-8 max-w-xl">Turn any text message, coupon code, or plain text into a scannable QR code. When scanned, the text is displayed directly on the device.</p>
        <QRGeneratorWidget label="Enter your text" placeholder="Enter any text, coupon code, or message…" />
        <article className="mt-10 w-full space-y-5">
          <section className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
            <h2 className="text-lg font-bold text-slate-800 mb-3">When to Use a Text QR Code</h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-3">Unlike URL QR codes that open a browser, text QR codes simply display their encoded content as plain text when scanned. Common uses include:</p>
            <ul className="space-y-2">
              {["Coupon or discount codes (e.g., SAVE20 — scan to reveal a promo code)", "Short messages or instructions on physical products", "Secret reveal experiences at events", "Notes, quotes, or reminders encoded for sharing", "Access codes for events or venues"].map(u => (
                <li key={u} className="flex items-center gap-2 text-sm text-slate-600"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>{u}</li>
              ))}
            </ul>
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
        <div className="flex flex-wrap gap-3 justify-center mt-8">
          {[{ href: "/qr/url", label: "URL QR" }, { href: "/qr/wifi", label: "Wi-Fi QR" }, { href: "/qr/vcard", label: "vCard QR" }, { href: "/qr/social", label: "Social QR" }].map(l => (
            <Link key={l.href} href={l.href} className="text-sm px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 hover:border-blue-300 hover:text-blue-700 transition-all">{l.label} Generator →</Link>
          ))}
        </div>
      </main>
      <footer className="py-6 text-center text-xs text-slate-400 border-t border-slate-100 bg-white/50"><p>© 2025 <Link href="/" className="hover:text-blue-600">QR King</Link> · Free Text QR Code Generator</p></footer>
    </div>
  );
}
