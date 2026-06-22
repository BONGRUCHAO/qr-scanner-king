import { Link } from "wouter";
import { SEOHead } from "@/components/seo-head";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "linear-gradient(170deg, #eff6ff 0%, #f8faff 50%, #eef2ff 100%)" }}>
      <SEOHead
        title="About QR King — Free Online QR Code Generator"
        description="Learn about QR King, a free online QR code generator built to help individuals and businesses create high-quality QR codes instantly — no signup, no fees."
        canonical="/about"
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
            <Link href="/about" className="text-blue-600 font-medium">About</Link>
            <Link href="/contact" className="hover:text-blue-600 transition-colors">Contact</Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 px-4 pt-12 pb-20 max-w-3xl mx-auto w-full">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">About QR King</h1>
        <p className="text-slate-500 text-base leading-relaxed mb-8">QR King is a free, lightweight online tool that lets anyone turn a URL into a scannable QR code in seconds — no account, no payment, no complexity.</p>

        <div className="space-y-6">
          <section className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
            <h2 className="text-lg font-bold text-slate-800 mb-3">What Is QR King?</h2>
            <p className="text-sm text-slate-600 leading-relaxed">QR King is a browser-based QR code generation tool. You paste a URL, click a button, and instantly receive a high-resolution 512×512 PNG QR code ready to print or share. The tool supports URL QR codes, Wi-Fi QR codes, vCard (contact) QR codes, plain text QR codes, and social media profile QR codes.</p>
            <p className="text-sm text-slate-600 leading-relaxed mt-3">The entire generation process happens inside your browser using the open-source <code className="bg-slate-100 px-1.5 py-0.5 rounded text-xs font-mono">qrcode</code> library. No data is ever transmitted to a server, stored, or shared. Your URLs stay on your device.</p>
          </section>

          <section className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
            <h2 className="text-lg font-bold text-slate-800 mb-3">Why We Built It</h2>
            <p className="text-sm text-slate-600 leading-relaxed">Most QR code generators online require you to create an account, limit downloads, add watermarks, or push you toward paid subscriptions. We believe generating a QR code should be as friction-free as possible — open the page, paste your URL, done.</p>
            <p className="text-sm text-slate-600 leading-relaxed mt-3">QR King was built for individuals, small business owners, marketers, designers, and developers who need a clean, reliable QR code without jumping through hoops. It is and will remain free.</p>
          </section>

          <section className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
            <h2 className="text-lg font-bold text-slate-800 mb-3">How the Technology Works</h2>
            <p className="text-sm text-slate-600 leading-relaxed">QR codes store data as a matrix of black and white squares using the ISO/IEC 18004 standard. QR King uses the <strong>error correction level H</strong>, which means up to 30% of the QR code can be damaged or obscured and it will still scan correctly — ideal for print applications where slight wear or partial logo overlays are common.</p>
            <p className="text-sm text-slate-600 leading-relaxed mt-3">The output is a <strong>512×512 pixel PNG</strong> image with a 2-module quiet zone (white border), optimized for both digital display and physical printing. At standard 300 DPI print resolution, the output is approximately 4.3cm × 4.3cm — large enough for reliable scanning from typical distances.</p>
          </section>

          <section className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
            <h2 className="text-lg font-bold text-slate-800 mb-3">Our Commitment to Privacy</h2>
            <p className="text-sm text-slate-600 leading-relaxed">QR King does not collect, store, transmit, or analyze any URLs or content you enter. The QR code generation process runs entirely in your browser using client-side JavaScript. We do not use cookies for tracking, and we do not sell or share any data with third parties.</p>
            <p className="text-sm text-slate-600 leading-relaxed mt-3">See our <Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link> for full details.</p>
          </section>

          <section className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
            <h2 className="text-lg font-bold text-slate-800 mb-3">QR Code Types Supported</h2>
            <ul className="space-y-2">
              {[
                { type: "URL / Website QR Code", desc: "Encodes any http or https URL for direct browser opening." },
                { type: "Wi-Fi QR Code", desc: "Encodes SSID, password, and security type for automatic network joining on iOS and Android." },
                { type: "vCard QR Code", desc: "Encodes contact information (name, phone, email, website) in vCard 3.0 format for one-tap address book saving." },
                { type: "Text QR Code", desc: "Encodes plain text messages, coupon codes, or any alphanumeric content." },
                { type: "Social Media QR Code", desc: "Encodes social profile URLs for Instagram, LinkedIn, TikTok, YouTube, and more." },
              ].map(item => (
                <li key={item.type} className="flex items-start gap-3 text-sm text-slate-600">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0 mt-1.5"></span>
                  <span><strong className="text-slate-800">{item.type}:</strong> {item.desc}</span>
                </li>
              ))}
            </ul>
          </section>

          <div className="text-center pt-4">
            <Link href="/" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-white font-semibold text-sm" style={{ background: "linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)" }}>
              Try the Free QR Code Generator →
            </Link>
          </div>
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
