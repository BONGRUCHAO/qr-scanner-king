import { Link } from "wouter";
import { SEOHead } from "@/components/seo-head";

export default function Terms() {
  const lastUpdated = "June 20, 2025";
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "linear-gradient(170deg, #eff6ff 0%, #f8faff 50%, #eef2ff 100%)" }}>
      <SEOHead
        title="Terms of Service — QR King"
        description="Terms of Service for QR King. By using this free QR code generator, you agree to these terms. Read our usage policy and limitations of liability."
        canonical="/terms"
      />

      <header className="py-4 px-6 border-b border-slate-100 bg-white/70 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 font-bold text-slate-800">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="7" height="7" rx="1" fill="white"/><rect x="14" y="3" width="7" height="7" rx="1" fill="white"/><rect x="3" y="14" width="7" height="7" rx="1" fill="white"/><rect x="5" y="5" width="3" height="3" rx="0.5" fill="#2563eb"/><rect x="16" y="5" width="3" height="3" rx="0.5" fill="#2563eb"/><rect x="5" y="16" width="3" height="3" rx="0.5" fill="#2563eb"/><rect x="14" y="14" width="3" height="3" rx="0.5" fill="#2563eb"/><rect x="14" y="14" width="3" height="3" rx="0.5" fill="white"/><rect x="18" y="14" width="3" height="3" rx="0.5" fill="white"/><rect x="14" y="18" width="3" height="3" rx="0.5" fill="white"/><rect x="18" y="18" width="3" height="3" rx="0.5" fill="white"/></svg>
            </div>
            QR King
          </Link>
          <Link href="/" className="text-sm text-blue-600 hover:underline">← Back to Generator</Link>
        </div>
      </header>

      <main className="flex-1 px-4 pt-12 pb-20 max-w-3xl mx-auto w-full">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Terms of Service</h1>
        <p className="text-xs text-slate-400 mb-8">Last updated: {lastUpdated}</p>

        <div className="space-y-5">
          {[
            {
              heading: "1. Acceptance of Terms",
              body: "By accessing or using QR King (the \"Service\"), you agree to be bound by these Terms of Service. If you do not agree, please do not use the Service. We reserve the right to modify these terms at any time; your continued use of the Service constitutes acceptance of the updated terms."
            },
            {
              heading: "2. Description of Service",
              body: "QR King provides a free, browser-based tool for generating QR codes from URLs and other data types (Wi-Fi credentials, contact information, plain text). The Service is provided as-is, free of charge, with no registration required. QR codes are generated entirely in your browser and are not stored on our servers."
            },
            {
              heading: "3. Acceptable Use",
              body: "You agree to use the Service only for lawful purposes. You must not use QR King to generate QR codes that: (a) contain links to illegal content, malware, phishing sites, or content that violates applicable laws; (b) infringe on intellectual property rights of third parties; (c) are intended to deceive, defraud, or mislead end users who scan the QR code; (d) contain content that is abusive, threatening, defamatory, or obscene."
            },
            {
              heading: "4. Intellectual Property",
              body: "QR codes generated using QR King are yours to use freely for personal or commercial purposes. The QR King website, its design, and its underlying code are owned by QR King and protected by applicable intellectual property laws. You may not copy, modify, or distribute the website or its source code without explicit written permission."
            },
            {
              heading: "5. No Warranties",
              body: "The Service is provided 'as is' without any warranties, express or implied. QR King does not warrant that the Service will be uninterrupted, error-free, or that QR codes will function with all devices and scanning applications. You use the Service at your own risk."
            },
            {
              heading: "6. Limitation of Liability",
              body: "To the fullest extent permitted by law, QR King shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use the Service, including but not limited to lost profits, lost data, or business interruption. Our total liability to you for any claims arising under these terms shall not exceed $0 (as the Service is provided free of charge)."
            },
            {
              heading: "7. Third-Party Links",
              body: "QR codes generated by QR King may link to third-party websites. QR King has no control over the content, privacy practices, or availability of these external sites. We are not responsible for any harm or loss arising from your interaction with third-party websites."
            },
            {
              heading: "8. Advertising",
              body: "QR King may display advertisements through third-party advertising networks such as Google AdSense. By using the Service, you agree to the display of such advertisements. We do not endorse any products or services advertised on the site."
            },
            {
              heading: "9. Governing Law",
              body: "These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of competent courts."
            },
            {
              heading: "10. Contact",
              body: "If you have questions about these Terms, please contact us through our Contact page."
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
