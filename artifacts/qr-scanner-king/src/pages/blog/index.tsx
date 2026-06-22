import { Link } from "wouter";
import { SEOHead } from "@/components/seo-head";
import { Breadcrumb } from "@/components/breadcrumb";
import { blogPosts } from "@/data/blog";

const breadcrumbs = [{ label: "Home", href: "/" }, { label: "Blog" }];

export default function BlogIndex() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "linear-gradient(170deg, #eff6ff 0%, #f8faff 50%, #eef2ff 100%)" }}>
      <SEOHead
        title="QR Code Blog — Tips, Guides & Marketing Strategies | QR King"
        description="Learn everything about QR codes — how they work, how to use them for business, marketing strategies, and comparisons. Free guides from QR King."
        canonical="/blog"
      />
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
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3 text-center">QR Code Blog</h1>
        <p className="text-slate-500 text-base text-center mb-10 max-w-xl">Practical guides, marketing strategies, and in-depth explanations of QR code technology — for beginners and pros alike.</p>

        <div className="w-full space-y-4">
          {blogPosts.map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:border-blue-200 hover:bg-blue-50/40 transition-all duration-200 group">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs text-slate-400">{new Date(post.publishDate).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
                <span className="text-xs text-slate-300">·</span>
                <span className="text-xs text-slate-400">{post.readTime}</span>
              </div>
              <h2 className="text-lg font-bold text-slate-800 group-hover:text-blue-700 mb-2 leading-snug">{post.title}</h2>
              <p className="text-sm text-slate-500 leading-relaxed">{post.description}</p>
              <span className="inline-block mt-3 text-xs font-semibold text-blue-600 group-hover:underline">Read article →</span>
            </Link>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-2xl p-6 w-full border border-slate-100 shadow-sm text-center">
          <h2 className="font-bold text-slate-800 mb-2">Ready to create your first QR code?</h2>
          <p className="text-sm text-slate-500 mb-4">Free, instant, no signup required.</p>
          <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm transition-all" style={{ background: "linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)" }}>
            Generate QR Code Now →
          </Link>
        </div>
      </main>

      <footer className="py-6 text-center text-xs text-slate-400 border-t border-slate-100 bg-white/50"><p>© 2025 <Link href="/" className="hover:text-blue-600">QR King</Link> · QR Code Blog</p></footer>
    </div>
  );
}
