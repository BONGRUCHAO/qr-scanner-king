import { useState, useRef, useCallback } from "react";
import QRCode from "qrcode";

export default function Home() {
  const [url, setUrl] = useState("");
  const [qrDataUrl, setQrDataUrl] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState("");
  const [hasGenerated, setHasGenerated] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const generateQR = useCallback(async () => {
    const trimmed = url.trim();
    if (!trimmed) {
      setError("Please enter a URL");
      return;
    }
    setError("");
    setIsGenerating(true);
    try {
      let target = trimmed;
      if (!/^https?:\/\//i.test(target)) {
        target = "https://" + target;
      }
      const dataUrl = await QRCode.toDataURL(target, {
        width: 512,
        margin: 2,
        color: { dark: "#1e293b", light: "#ffffff" },
        errorCorrectionLevel: "H",
      });
      setQrDataUrl(dataUrl);
      setHasGenerated(true);
    } catch {
      setError("Failed to generate QR code. Please check your input.");
    } finally {
      setIsGenerating(false);
    }
  }, [url]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") generateQR();
  };

  const downloadQR = useCallback(() => {
    if (!qrDataUrl) return;
    const link = document.createElement("a");
    link.href = qrDataUrl;
    link.download = "qrcode-qrking.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, [qrDataUrl]);

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "linear-gradient(170deg, #eff6ff 0%, #f8faff 50%, #eef2ff 100%)" }}>
      {/* Header */}
      <header className="py-4 px-6 flex items-center justify-between max-w-5xl mx-auto w-full">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="3" width="7" height="7" rx="1" fill="white"/>
              <rect x="14" y="3" width="7" height="7" rx="1" fill="white"/>
              <rect x="3" y="14" width="7" height="7" rx="1" fill="white"/>
              <rect x="5" y="5" width="3" height="3" rx="0.5" fill="#2563eb"/>
              <rect x="16" y="5" width="3" height="3" rx="0.5" fill="#2563eb"/>
              <rect x="5" y="16" width="3" height="3" rx="0.5" fill="#2563eb"/>
              <rect x="14" y="14" width="3" height="3" rx="0.5" fill="white"/>
              <rect x="18" y="14" width="3" height="3" rx="0.5" fill="white"/>
              <rect x="14" y="18" width="3" height="3" rx="0.5" fill="white"/>
              <rect x="18" y="18" width="3" height="3" rx="0.5" fill="white"/>
            </svg>
          </div>
          <span className="font-bold text-lg text-slate-800 tracking-tight">QR King</span>
        </div>
        <span className="text-xs text-slate-400 hidden sm:block">Free · No sign-up · Instant</span>
      </header>

      {/* Hero */}
      <main className="flex-1 flex flex-col items-center px-4 pt-8 pb-16">
        <div className="text-center max-w-2xl mb-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4 leading-tight">
            Turn any URL into a{" "}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, #2563eb 0%, #6366f1 100%)" }}>
              QR Code
            </span>
          </h1>
          <h2 className="text-base sm:text-lg text-slate-500 font-normal leading-relaxed">
            Paste a link, generate a high-quality QR code instantly, preview it live, and download as PNG. 100% free — no account needed.
          </h2>
        </div>

        {/* Main Card */}
        <div className="w-full max-w-2xl qr-card bg-white rounded-2xl p-6 sm:p-8">
          {/* URL Input */}
          <div className="mb-5">
            <label htmlFor="url-input" className="block text-sm font-semibold text-slate-700 mb-2">
              Enter URL
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="2" y1="12" x2="22" y2="12"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
              </div>
              <input
                id="url-input"
                type="url"
                value={url}
                onChange={(e) => { setUrl(e.target.value); setError(""); }}
                onKeyDown={handleKeyDown}
                placeholder="https://example.com"
                aria-label="Enter the URL you want to turn into a QR code"
                className="w-full pl-10 pr-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 placeholder-slate-400 text-base transition-all duration-200"
                style={{ outline: "none" }}
                onFocus={(e) => { e.target.style.borderColor = "#2563eb"; e.target.style.boxShadow = "0 0 0 3px rgba(37,99,235,0.12)"; e.target.style.background = "#fff"; }}
                onBlur={(e) => { e.target.style.borderColor = ""; e.target.style.boxShadow = ""; e.target.style.background = ""; }}
              />
            </div>
            {error && (
              <p className="mt-2 text-sm text-red-500 flex items-center gap-1">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
                {error}
              </p>
            )}
          </div>

          {/* Generate Button */}
          <button
            onClick={generateQR}
            disabled={isGenerating}
            aria-label="Generate QR Code"
            className="w-full py-3.5 rounded-xl text-white font-semibold text-base disabled:opacity-60 disabled:cursor-not-allowed"
            style={{
              background: isGenerating ? "#93c5fd" : "linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => { if (!isGenerating) { (e.target as HTMLButtonElement).style.transform = "translateY(-1px)"; (e.target as HTMLButtonElement).style.boxShadow = "0 8px 25px -5px rgba(37,99,235,0.45)"; } }}
            onMouseLeave={(e) => { (e.target as HTMLButtonElement).style.transform = ""; (e.target as HTMLButtonElement).style.boxShadow = ""; }}
          >
            {isGenerating ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                </svg>
                Generating…
              </span>
            ) : "Generate QR Code"}
          </button>

          {/* QR Preview */}
          <div className="mt-6">
            <div
              className="qr-container rounded-2xl flex flex-col items-center justify-center transition-all duration-300"
              style={{ minHeight: hasGenerated ? "auto" : "220px" }}
              aria-live="polite"
            >
              {qrDataUrl ? (
                <div className="flex flex-col items-center gap-5 py-6 px-4">
                  <div className="p-3 bg-white rounded-2xl shadow-md">
                    <img
                      src={qrDataUrl}
                      alt="Generated QR code"
                      width={240}
                      height={240}
                      className="block rounded-lg"
                      style={{ imageRendering: "pixelated" }}
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-slate-500 mb-1 break-all max-w-xs">
                      {url.trim().startsWith("http") ? url.trim() : "https://" + url.trim()}
                    </p>
                    <button
                      onClick={downloadQR}
                      aria-label="Download QR code as PNG"
                      className="mt-3 inline-flex items-center gap-2 px-6 py-2.5 rounded-xl border-2 font-semibold text-sm transition-all duration-200 hover:bg-blue-50 active:scale-95"
                      style={{ borderColor: "#2563eb", color: "#2563eb" }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                        <polyline points="7 10 12 15 17 10"/>
                        <line x1="12" y1="15" x2="12" y2="3"/>
                      </svg>
                      Download PNG
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-10 px-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4" style={{ background: "rgba(37,99,235,0.08)" }}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                      <rect x="3" y="3" width="7" height="7" rx="1" stroke="#2563eb" strokeWidth="1.5"/>
                      <rect x="14" y="3" width="7" height="7" rx="1" stroke="#2563eb" strokeWidth="1.5"/>
                      <rect x="3" y="14" width="7" height="7" rx="1" stroke="#2563eb" strokeWidth="1.5"/>
                      <rect x="5.5" y="5.5" width="2" height="2" rx="0.3" fill="#2563eb"/>
                      <rect x="16.5" y="5.5" width="2" height="2" rx="0.3" fill="#2563eb"/>
                      <rect x="5.5" y="16.5" width="2" height="2" rx="0.3" fill="#2563eb"/>
                      <line x1="14" y1="14" x2="21" y2="14" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round"/>
                      <line x1="14" y1="17.5" x2="17.5" y2="17.5" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round"/>
                      <line x1="14" y1="21" x2="21" y2="21" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round"/>
                      <line x1="21" y1="17.5" x2="21" y2="21" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <p className="text-slate-500 font-medium text-sm">Your QR code will appear here</p>
                  <p className="text-slate-400 text-xs mt-1">Enter a URL and click the button above</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <section className="mt-14 max-w-2xl w-full" aria-labelledby="features-heading">
          <h2 id="features-heading" className="text-xl font-bold text-slate-800 text-center mb-6">Why use QR King?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                  </svg>
                ),
                title: "Instant Generation",
                desc: "QR codes are generated in milliseconds — no waiting"
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                ),
                title: "High Resolution",
                desc: "512×512 px output, sharp and scannable with no watermark"
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                ),
                title: "One-click Download",
                desc: "Save as a square PNG file, ready to use anywhere"
              }
            ].map((f) => (
              <div key={f.title} className="bg-white rounded-xl p-5 text-center" style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(37,99,235,0.05)" }}>
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl mb-3" style={{ background: "rgba(37,99,235,0.08)" }}>
                  {f.icon}
                </div>
                <h3 className="font-semibold text-slate-800 text-sm mb-1">{f.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How to use */}
        <section className="mt-10 max-w-2xl w-full" aria-labelledby="howto-heading">
          <div className="bg-white rounded-2xl p-6" style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(37,99,235,0.05)" }}>
            <h2 id="howto-heading" className="font-bold text-slate-800 mb-4">How to use</h2>
            <ol className="space-y-3">
              {[
                "Paste or type any URL into the input field above (http/https supported)",
                "Click the \"Generate QR Code\" button",
                "Your QR code is instantly generated and shown in the preview area",
                "Click \"Download PNG\" to save the high-resolution image to your device"
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ background: "linear-gradient(135deg, #2563eb, #4f46e5)" }}>
                    {i + 1}
                  </span>
                  <span className="text-sm text-slate-600 leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-xs text-slate-400 border-t border-slate-100 bg-white/50">
        <p>© 2025 QR King · Free Online QR Code Generator · No sign-up required</p>
      </footer>

      <canvas ref={canvasRef} className="hidden" />
    </div>
  );
}
