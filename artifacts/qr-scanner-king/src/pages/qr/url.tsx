import { Link } from "wouter";
import { SEOHead } from "@/components/seo-head";
import { Breadcrumb, breadcrumbSchema } from "@/components/breadcrumb";
import { QRGeneratorWidget } from "@/components/qr-generator-widget";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "QR Code Types", href: "/" },
  { label: "URL QR Code" },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "URL QR Code Generator — QR King",
    url: "https://qrking.replit.app/qr/url",
    description: "Generate a QR code for any URL or website link instantly. Free, no signup, download as PNG.",
    applicationCategory: "UtilitiesApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "What is a URL QR code?", acceptedAnswer: { "@type": "Answer", text: "A URL QR code encodes a website link. When scanned, it opens the URL directly in the device's browser — no typing required." } },
      { "@type": "Question", name: "Can any URL be encoded in a QR code?", acceptedAnswer: { "@type": "Answer", text: "Yes. Any valid URL — including long URLs with query parameters — can be encoded. Shorter URLs produce simpler, more easily scanned QR codes." } },
      { "@type": "Question", name: "Do URL QR codes work without the internet?", acceptedAnswer: { "@type": "Answer", text: "The QR code itself works offline (the scan decodes the URL). However, actually opening the website requires internet access." } },
    ],
  },
  breadcrumbSchema(breadcrumbs),
];

const faqs = [
  { q: "What is a URL QR code?", a: "A URL QR code encodes a website link. When scanned, it opens the URL directly in the device's browser — no typing required." },
  { q: "Can any URL be encoded in a QR code?", a: "Yes. Any valid URL — including long URLs with query parameters — can be encoded. Shorter URLs produce simpler, more easily scanned QR codes." },
  { q: "Do URL QR codes work without the internet?", a: "The QR code scan itself works offline (it decodes the URL). However, actually opening the website requires an internet connection." },
  { q: "How do I use a URL QR code for my business?", a: "Print the QR code on business cards, flyers, posters, product packaging, or anywhere physical where you want to drive traffic to a website." },
  { q: "Should I shorten my URL before creating a QR code?", a: "For short, clean URLs it's not necessary. For very long URLs, shortening with a service like Bit.ly can produce a less dense QR code that's easier to scan in smaller print sizes." },
];

export default function UrlQR() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "linear-gradient(170deg, #eff6ff 0%, #f8faff 50%, #eef2ff 100%)" }}>
      <SEOHead
        title="URL QR Code Generator — Free QR Code for Any Website Link | QR King"
        description="Generate a free QR code for any URL in seconds. Paste your website link, create a high-quality QR code, and download as PNG. No signup required."
        canonical="/qr/url"
        schema={schema}
      />

      <header className="py-4 px-6 border-b border-slate-100 bg-white/70 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 font-bold text-slate-800">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="7" height="7" rx="1" fill="white"/><rect x="14" y="3" width="7" height="7" rx="1" fill="white"/><rect x="3" y="14" width="7" height="7" rx="1" fill="white"/><rect x="5" y="5" width="3" height="3" rx="0.5" fill="#2563eb"/><rect x="16" y="5" width="3" height="3" rx="0.5" fill="#2563eb"/><rect x="5" y="16" width="3" height="3" rx="0.5" fill="#2563eb"/><rect x="14" y="14" width="3" height="3" rx="0.5" fill="white"/><rect x="18" y="14" width="3" height="3" rx="0.5" fill="white"/><rect x="14" y="18" width="3" height="3" rx="0.5" fill="white"/><rect x="18" y="18" width="3" height="3" rx="0.5" fill="white"/></svg>
            </div>
            QR King
          </Link>
          <Link href="/" className="text-sm text-blue-600 hover:underline">← Back to Generator</Link>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center px-4 pt-10 pb-20 max-w-3xl mx-auto w-full">
        <Breadcrumb items={breadcrumbs} />

        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3 text-center">
          URL QR Code Generator — Free &amp; Instant
        </h1>
        <p className="text-slate-500 text-base text-center mb-8 max-w-xl">
          Turn any website URL into a scannable QR code in one click. Free, high-resolution, no account required.
        </p>

        <QRGeneratorWidget label="Enter Website URL" placeholder="https://yourwebsite.com" />

        <article className="mt-12 w-full prose-sm max-w-none">
          <section className="bg-white rounded-2xl p-6 mb-6 border border-slate-100 shadow-sm">
            <h2 className="text-lg font-bold text-slate-800 mb-3">What Is a URL QR Code?</h2>
            <p className="text-sm text-slate-600 leading-relaxed">A URL QR code is the most common type of QR code. It encodes a website address (URL) directly into the QR pattern. When someone scans the code with their smartphone camera, the phone instantly opens the link in the browser — no typing required. URL QR codes are widely used on business cards, flyers, posters, product packaging, restaurant menus, and anywhere you want to bridge the physical world with a digital destination.</p>
          </section>

          <section className="bg-white rounded-2xl p-6 mb-6 border border-slate-100 shadow-sm">
            <h2 className="text-lg font-bold text-slate-800 mb-3">How to Create a URL QR Code</h2>
            <ol className="space-y-3">
              {["Enter your website URL in the input field above — any http or https link works.", "Click 'Generate QR Code Now'. Your QR code appears instantly in the preview area.", "Scan the preview with your phone to verify the link opens correctly.", "Click 'Download QR PNG' to save a 512×512 high-resolution image, ready for print or digital use."].map((s, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ background: "linear-gradient(135deg, #2563eb, #4f46e5)" }}>{i + 1}</span>
                  {s}
                </li>
              ))}
            </ol>
          </section>

          <section className="bg-white rounded-2xl p-6 mb-6 border border-slate-100 shadow-sm">
            <h2 className="text-lg font-bold text-slate-800 mb-3">URL QR Code Use Cases</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {["Business cards linking to your portfolio or LinkedIn", "Restaurant menus linking to a digital menu PDF", "Event posters linking to registration pages", "Product packaging linking to tutorial videos", "Print ads linking to specific landing pages", "Email signatures for quick mobile access", "Real estate signage linking to property listings", "Retail shelf labels linking to product details"].map(u => (
                <li key={u} className="flex items-center gap-2 text-sm text-slate-600">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>{u}
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-white rounded-2xl p-6 mb-6 border border-slate-100 shadow-sm">
            <h2 className="text-lg font-bold text-slate-800 mb-4">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <details key={i} className="border border-slate-100 rounded-xl group">
                  <summary className="px-4 py-3 font-semibold text-sm text-slate-800 cursor-pointer list-none flex items-center justify-between hover:text-blue-700 transition-colors">
                    {faq.q}
                    <span className="text-slate-400 group-open:rotate-180 transition-transform">▾</span>
                  </summary>
                  <p className="px-4 pb-3 text-sm text-slate-600 leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </section>
        </article>

        <div className="flex flex-wrap gap-3 justify-center mt-4">
          {[{ href: "/qr/wifi", label: "Wi-Fi QR" }, { href: "/qr/vcard", label: "vCard QR" }, { href: "/qr/text", label: "Text QR" }, { href: "/qr/social", label: "Social QR" }].map(l => (
            <Link key={l.href} href={l.href} className="text-sm px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 hover:border-blue-300 hover:text-blue-700 transition-all">{l.label} Generator →</Link>
          ))}
        </div>
      </main>

      <footer className="py-6 text-center text-xs text-slate-400 border-t border-slate-100 bg-white/50">
        <p>© 2025 <Link href="/" className="hover:text-blue-600">QR King</Link> · Free URL QR Code Generator</p>
      </footer>
    </div>
  );
}
