import { useState, useCallback, useRef, useEffect } from "react";
import QRCode from "qrcode";
import { Link } from "wouter";

interface QRGeneratorWidgetProps {
  defaultValue?: string;
  placeholder?: string;
  label?: string;
  compact?: boolean;
}

function useDebounce<T>(value: T, delay: number): T {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
}

export function QRGeneratorWidget({
  defaultValue = "",
  placeholder = "https://example.com",
  label = "Enter URL",
  compact = false,
}: QRGeneratorWidgetProps) {
  const [url, setUrl] = useState(defaultValue);
  const [qrDataUrl, setQrDataUrl] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState("");
  const [generated, setGenerated] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const debouncedUrl = useDebounce(url, 400);

  const generate = useCallback(async (value: string) => {
    const trimmed = value.trim();
    if (!trimmed) return;
    setError("");
    setIsGenerating(true);
    try {
      let target = trimmed;
      if (!/^https?:\/\//i.test(target)) target = "https://" + target;
      const dataUrl = await QRCode.toDataURL(target, {
        width: 512,
        margin: 2,
        color: { dark: "#1e293b", light: "#ffffff" },
        errorCorrectionLevel: "H",
      });
      setQrDataUrl(dataUrl);
      setGenerated(true);
    } catch {
      setError("Failed to generate QR code. Please check your input.");
    } finally {
      setIsGenerating(false);
    }
  }, []);

  const handleGenerate = () => {
    if (!url.trim()) { setError("Please enter a URL"); return; }
    generate(url);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleGenerate();
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
    <div className={compact ? "" : "w-full max-w-2xl qr-card bg-white rounded-2xl p-6 sm:p-8"}>
      <div className="mb-5">
        <label htmlFor="url-input" className="block text-sm font-semibold text-slate-700 mb-2">{label}</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400">
              <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
          </div>
          <input
            id="url-input"
            type="url"
            value={url}
            onChange={(e) => { setUrl(e.target.value); setError(""); }}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            aria-label={label}
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

      <button
        onClick={handleGenerate}
        disabled={isGenerating}
        aria-label="Generate QR Code"
        className="w-full py-3.5 rounded-xl text-white font-semibold text-base disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200"
        style={{ background: isGenerating ? "#93c5fd" : "linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)" }}
        onMouseEnter={(e) => { if (!isGenerating) { const b = e.currentTarget; b.style.transform = "translateY(-1px)"; b.style.boxShadow = "0 8px 25px -5px rgba(37,99,235,0.45)"; } }}
        onMouseLeave={(e) => { const b = e.currentTarget; b.style.transform = ""; b.style.boxShadow = ""; }}
      >
        {isGenerating ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
            </svg>
            Generating…
          </span>
        ) : "Generate QR Code Now →"}
      </button>

      {/* Fixed-height preview area prevents CLS */}
      <div
        className="mt-6 qr-container rounded-2xl flex flex-col items-center justify-center transition-all duration-300"
        style={{ minHeight: "280px" }}
        aria-live="polite"
        aria-label="QR code preview"
      >
        {qrDataUrl ? (
          <div className="flex flex-col items-center gap-4 py-6 px-4">
            <div className="p-3 bg-white rounded-2xl shadow-md">
              <img src={qrDataUrl} alt="Generated QR code" width={200} height={200} className="block rounded-lg" style={{ imageRendering: "pixelated" }} />
            </div>
            <p className="text-xs text-slate-500 break-all max-w-xs text-center">
              {url.trim().startsWith("http") ? url.trim() : "https://" + url.trim()}
            </p>
            <button
              onClick={downloadQR}
              aria-label="Download QR code as PNG"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl border-2 font-semibold text-sm transition-all duration-200 hover:bg-blue-50 active:scale-95"
              style={{ borderColor: "#2563eb", color: "#2563eb" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download QR PNG
            </button>
          </div>
        ) : (
          <div className="text-center py-8 px-6">
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
            <p className="text-slate-400 text-xs mt-1">Enter a URL above and click Generate</p>
          </div>
        )}
      </div>
      <canvas ref={canvasRef} className="hidden" />
    </div>
  );
}
