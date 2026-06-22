import { Link } from "wouter";
import { SEOHead } from "@/components/seo-head";

export default function Privacy() {
  const lastUpdated = "June 20, 2025";
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "linear-gradient(170deg, #eff6ff 0%, #f8faff 50%, #eef2ff 100%)" }}>
      <SEOHead
        title="Privacy Policy — QR King"
        description="QR King's privacy policy. We do not collect, store, or share your data. All QR code generation happens locally in your browser."
        canonical="/privacy"
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

      <main className="flex-1 px-4 pt-12 pb-20 max-w-3xl mx-auto w-full">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Privacy Policy</h1>
        <p className="text-xs text-slate-400 mb-8">Last updated: {lastUpdated}</p>

        <div className="space-y-5">
          {[
            {
              heading: "Overview",
              body: "QR King is designed with privacy as a core principle. We do not collect, store, transmit, or share any personal information, URLs, or content you enter into the tool. All QR code generation is performed entirely within your web browser using client-side JavaScript."
            },
            {
              heading: "Information We Do Not Collect",
              body: "We do not collect: (1) URLs or text you enter into the QR code generator; (2) QR codes you generate or download; (3) personal identifiers such as name, email, IP address, or device ID; (4) usage analytics or behavioral tracking data; (5) cookies used for identification or tracking purposes."
            },
            {
              heading: "How QR Codes Are Generated",
              body: "When you enter a URL and click 'Generate QR Code', the generation process happens entirely inside your browser using the open-source qrcode JavaScript library. No data is sent to any server. The resulting QR code image exists only in your browser's memory until you download it. Once you leave the page, it is gone."
            },
            {
              heading: "Third-Party Services",
              body: "QR King may use Google Fonts to load the Inter typeface from fonts.googleapis.com. This may involve your browser making a request to Google's servers, which is subject to Google's Privacy Policy. No other third-party services are embedded in the tool that collect user data."
            },
            {
              heading: "Advertising",
              body: "QR King may display advertisements through Google AdSense. Google AdSense may use cookies to serve ads based on your prior visits to this or other websites. You can opt out of personalized advertising by visiting Google's Ads Settings. We do not have access to or control over the data collected by advertising networks."
            },
            {
              heading: "Cookies",
              body: "QR King does not use cookies for user identification, session tracking, or behavioral analytics. If advertising is enabled, the advertising provider (Google AdSense) may use cookies as described in their own privacy policies."
            },
            {
              heading: "Children's Privacy",
              body: "QR King does not knowingly collect any information from children under 13 years of age. The service does not require account creation or any form of personal data submission."
            },
            {
              heading: "Changes to This Policy",
              body: "We may update this Privacy Policy from time to time. Changes will be reflected on this page with an updated date. Continued use of the service after changes constitutes acceptance of the updated policy."
            },
            {
              heading: "Contact",
              body: "If you have questions about this Privacy Policy, please contact us via our Contact page."
            }
          ].map(s => (
            <section key={s.heading} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              <h2 className="text-base font-bold text-slate-800 mb-2">{s.heading}</h2>
              <p className="text-sm text-slate-600 leading-relaxed">{s.body}</p>
            </section>
          ))}
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
