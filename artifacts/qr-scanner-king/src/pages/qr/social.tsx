import { Link } from "wouter";
import { SEOHead } from "@/components/seo-head";
import { Breadcrumb, breadcrumbSchema } from "@/components/breadcrumb";
import { QRGeneratorWidget } from "@/components/qr-generator-widget";

const breadcrumbs = [{ label: "Home", href: "/" }, { label: "QR Code Types", href: "/" }, { label: "Social Media QR Code" }];

const schema = [
  { "@context": "https://schema.org", "@type": "WebApplication", name: "Social Media QR Code Generator — QR King", url: "https://qrking.replit.app/qr/social", description: "Create a free QR code for your social media profile — Instagram, LinkedIn, TikTok, YouTube and more.", applicationCategory: "UtilitiesApplication", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } },
  breadcrumbSchema(breadcrumbs),
];

const platforms = [
  { name: "Instagram", placeholder: "https://instagram.com/yourhandle", icon: "📸" },
  { name: "LinkedIn", placeholder: "https://linkedin.com/in/yourprofile", icon: "💼" },
  { name: "TikTok", placeholder: "https://tiktok.com/@yourhandle", icon: "🎵" },
  { name: "YouTube", placeholder: "https://youtube.com/@yourchannel", icon: "▶️" },
  { name: "X (Twitter)", placeholder: "https://x.com/yourhandle", icon: "𝕏" },
  { name: "Facebook", placeholder: "https://facebook.com/yourpage", icon: "📘" },
];

const faqs = [
  { q: "How do I create a QR code for my Instagram?", a: "Paste your Instagram profile URL (e.g., https://instagram.com/yourhandle) into the generator above and click Generate. Download the PNG and print it on business cards, flyers, or anywhere." },
  { q: "Can I create a QR code for any social platform?", a: "Yes. Any social profile with a public URL can be encoded as a QR code — Instagram, LinkedIn, TikTok, YouTube, Facebook, X, Pinterest, Snapchat, and more." },
  { q: "What's the best way to share a social QR code?", a: "Print it on business cards, include it in email signatures, add it to presentation slides, put it on stickers, or display it at your booth or event table." },
  { q: "Can I link to multiple social profiles in one QR code?", a: "Not directly with a single QR code. The recommended approach is to create a link-in-bio page (e.g., Linktree) and generate a QR code pointing to that page." },
];

export default function SocialQR() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "linear-gradient(170deg, #eff6ff 0%, #f8faff 50%, #eef2ff 100%)" }}>
      <SEOHead title="Social Media QR Code Generator — Instagram, LinkedIn & More | QR King" description="Create a free QR code for your Instagram, LinkedIn, TikTok, or YouTube profile. Instant, high-quality PNG download. No signup required." canonical="/qr/social" schema={schema} />
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
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3 text-center">Social Media QR Code Generator</h1>
        <p className="text-slate-500 text-base text-center mb-6 max-w-xl">Create a QR code for any social media profile. Print it anywhere to grow your following offline.</p>

        <div className="w-full max-w-2xl mb-6">
          <p className="text-sm font-semibold text-slate-600 mb-3">Quick pick your platform:</p>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
            {platforms.map(p => (
              <div key={p.name} className="bg-white rounded-xl p-3 text-center border border-slate-100 hover:border-blue-200 transition-all cursor-default">
                <div className="text-xl mb-1">{p.icon}</div>
                <p className="text-xs font-medium text-slate-600">{p.name}</p>
              </div>
            ))}
          </div>
        </div>

        <QRGeneratorWidget label="Paste your social profile URL" placeholder="https://instagram.com/yourhandle" />

        <article className="mt-10 w-full space-y-5">
          <section className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
            <h2 className="text-lg font-bold text-slate-800 mb-3">Why Use a Social Media QR Code?</h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-3">A social media QR code bridges offline and online audience building. Instead of asking someone to type your handle or search for your name, they scan once and follow instantly. Use cases include:</p>
            <ul className="space-y-2">
              {["Business cards with your LinkedIn or Instagram QR", "Event booths or tables to grow your following on the spot", "Print media — magazines, posters, flyers", "Product packaging to drive customers to your social presence", "Restaurant tables to promote your food blog or delivery page"].map(u => (
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
      </main>
      <footer className="py-6 text-center text-xs text-slate-400 border-t border-slate-100 bg-white/50"><p>© 2025 <Link href="/" className="hover:text-blue-600">QR King</Link> · Free Social Media QR Code Generator</p></footer>
    </div>
  );
}
