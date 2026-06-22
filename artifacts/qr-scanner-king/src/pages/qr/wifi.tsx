import { useState, useCallback, useRef } from "react";
import { Link } from "wouter";
import QRCode from "qrcode";
import { SEOHead } from "@/components/seo-head";
import { Breadcrumb, breadcrumbSchema } from "@/components/breadcrumb";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "QR Code Types", href: "/" },
  { label: "Wi-Fi QR Code" },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Wi-Fi QR Code Generator — QR King",
    url: "https://qrking.replit.app/qr/wifi",
    description: "Generate a Wi-Fi QR code so guests can connect without typing passwords. Free, instant, no signup.",
    applicationCategory: "UtilitiesApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "What is a Wi-Fi QR code?", acceptedAnswer: { "@type": "Answer", text: "A Wi-Fi QR code encodes your network name, password, and security type. When scanned, iOS and Android devices automatically prompt the user to join the network." } },
      { "@type": "Question", name: "Is sharing my Wi-Fi password via QR code secure?", acceptedAnswer: { "@type": "Answer", text: "The QR code contains your password, so treat it like any password — don't post it publicly. For guests at your home or office, printing it on a card works well." } },
      { "@type": "Question", name: "Which security type should I choose?", acceptedAnswer: { "@type": "Answer", text: "Choose the security type that matches your router: WPA/WPA2 is the most common for home networks, WEP is older and less secure, and nopass is for open networks with no password." } },
    ],
  },
  breadcrumbSchema(breadcrumbs),
];

const faqs = [
  { q: "What is a Wi-Fi QR code?", a: "A Wi-Fi QR code encodes your network name, password, and security type. When scanned, iOS and Android devices automatically prompt the user to join the network — no typing needed." },
  { q: "Is sharing my Wi-Fi password via QR code secure?", a: "The QR code contains your password visually, so treat it like any physical password note. For home and office guest use, printing it on a card in a secure location works well." },
  { q: "Which security type should I choose?", a: "WPA/WPA2 is standard for most modern home and office routers. WEP is an older, less secure protocol. Select 'None' for open networks with no password." },
  { q: "Does the Wi-Fi QR code work on all phones?", a: "Yes. iOS 11+ and Android 10+ support Wi-Fi QR code scanning natively through the camera app." },
  { q: "Can I hide the password in the QR code?", a: "The Wi-Fi QR format includes the password in the encoded data. There's no way to 'hide' it from the code itself, but the password is not visible to the human eye — only devices that scan it." },
];

export default function WifiQR() {
  const [ssid, setSsid] = useState("");
  const [password, setPassword] = useState("");
  const [security, setSecurity] = useState("WPA");
  const [hidden, setHidden] = useState(false);
  const [qrDataUrl, setQrDataUrl] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState("");

  const generate = useCallback(async () => {
    if (!ssid.trim()) { setError("Please enter your network name (SSID)"); return; }
    setError("");
    setIsGenerating(true);
    try {
      const wifiString = `WIFI:T:${security};S:${ssid};P:${password};H:${hidden ? "true" : "false"};;`;
      const dataUrl = await QRCode.toDataURL(wifiString, { width: 512, margin: 2, errorCorrectionLevel: "H" });
      setQrDataUrl(dataUrl);
    } catch {
      setError("Failed to generate QR code.");
    } finally {
      setIsGenerating(false);
    }
  }, [ssid, password, security, hidden]);

  const download = useCallback(() => {
    if (!qrDataUrl) return;
    const link = document.createElement("a");
    link.href = qrDataUrl;
    link.download = "wifi-qrcode.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, [qrDataUrl]);

  const inputClass = "w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 text-sm transition-all duration-200";

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "linear-gradient(170deg, #eff6ff 0%, #f8faff 50%, #eef2ff 100%)" }}>
      <SEOHead
        title="Wi-Fi QR Code Generator — Share Your Wi-Fi Without Typing | QR King"
        description="Create a free Wi-Fi QR code. Guests scan it to connect automatically — no passwords to type. Works on iOS and Android. Free, instant, no signup."
        canonical="/qr/wifi"
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
          Wi-Fi QR Code Generator — Free &amp; Instant
        </h1>
        <p className="text-slate-500 text-base text-center mb-8 max-w-xl">
          Let guests connect to your Wi-Fi by scanning a QR code — no typing passwords. Works on iOS and Android.
        </p>

        <div className="w-full max-w-2xl qr-card bg-white rounded-2xl p-6 sm:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Network Name (SSID) *</label>
              <input type="text" value={ssid} onChange={e => { setSsid(e.target.value); setError(""); }} placeholder="MyHomeNetwork" className={inputClass} style={{ outline: "none" }}
                onFocus={e => { e.target.style.borderColor = "#2563eb"; e.target.style.boxShadow = "0 0 0 3px rgba(37,99,235,0.12)"; e.target.style.background = "#fff"; }}
                onBlur={e => { e.target.style.borderColor = ""; e.target.style.boxShadow = ""; e.target.style.background = ""; }} />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Password</label>
              <input type="text" value={password} onChange={e => setPassword(e.target.value)} placeholder="Your Wi-Fi password" className={inputClass} style={{ outline: "none" }}
                onFocus={e => { e.target.style.borderColor = "#2563eb"; e.target.style.boxShadow = "0 0 0 3px rgba(37,99,235,0.12)"; e.target.style.background = "#fff"; }}
                onBlur={e => { e.target.style.borderColor = ""; e.target.style.boxShadow = ""; e.target.style.background = ""; }} />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Security Type</label>
              <select value={security} onChange={e => setSecurity(e.target.value)} className={inputClass} style={{ outline: "none" }}>
                <option value="WPA">WPA / WPA2 (recommended)</option>
                <option value="WEP">WEP</option>
                <option value="nopass">None (open network)</option>
              </select>
            </div>
            <div className="flex items-center gap-3 pt-7">
              <input type="checkbox" id="hidden-net" checked={hidden} onChange={e => setHidden(e.target.checked)} className="w-4 h-4 rounded border-slate-300 text-blue-600" />
              <label htmlFor="hidden-net" className="text-sm text-slate-700 cursor-pointer">Hidden network</label>
            </div>
          </div>

          {error && <p className="mb-4 text-sm text-red-500 flex items-center gap-1"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>{error}</p>}

          <button onClick={generate} disabled={isGenerating} className="w-full py-3.5 rounded-xl text-white font-semibold text-base disabled:opacity-60 transition-all duration-200"
            style={{ background: isGenerating ? "#93c5fd" : "linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)" }}>
            {isGenerating ? "Generating…" : "Generate Wi-Fi QR Code →"}
          </button>

          <div className="mt-6 qr-container rounded-2xl flex flex-col items-center justify-center" style={{ minHeight: "260px" }} aria-live="polite">
            {qrDataUrl ? (
              <div className="flex flex-col items-center gap-4 py-6">
                <div className="p-3 bg-white rounded-2xl shadow-md">
                  <img src={qrDataUrl} alt="Wi-Fi QR code" width={200} height={200} className="block rounded-lg" style={{ imageRendering: "pixelated" }} />
                </div>
                <p className="text-xs text-slate-500 font-medium">Network: {ssid}</p>
                <button onClick={download} className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl border-2 font-semibold text-sm hover:bg-blue-50 transition-all" style={{ borderColor: "#2563eb", color: "#2563eb" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                  Download QR PNG
                </button>
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-slate-400 text-sm">📶 Enter your Wi-Fi details above and click Generate</p>
              </div>
            )}
          </div>
        </div>

        <article className="mt-10 w-full space-y-5">
          <section className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
            <h2 className="text-lg font-bold text-slate-800 mb-3">What Is a Wi-Fi QR Code?</h2>
            <p className="text-sm text-slate-600 leading-relaxed">A Wi-Fi QR code encodes your network credentials in a standardized format (WIFI:T:WPA;S:YourSSID;P:YourPassword;;). When scanned by an iOS or Android device, the phone automatically prompts the user to join the network — no typing, no errors. This is perfect for home guests, Airbnb hosts, cafés, hotels, conference rooms, and anywhere you want to simplify Wi-Fi access.</p>
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
          {[{ href: "/qr/url", label: "URL QR" }, { href: "/qr/vcard", label: "vCard QR" }, { href: "/qr/text", label: "Text QR" }, { href: "/qr/social", label: "Social QR" }].map(l => (
            <Link key={l.href} href={l.href} className="text-sm px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 hover:border-blue-300 hover:text-blue-700 transition-all">{l.label} Generator →</Link>
          ))}
        </div>
      </main>

      <footer className="py-6 text-center text-xs text-slate-400 border-t border-slate-100 bg-white/50">
        <p>© 2025 <Link href="/" className="hover:text-blue-600">QR King</Link> · Free Wi-Fi QR Code Generator</p>
      </footer>
    </div>
  );
}
