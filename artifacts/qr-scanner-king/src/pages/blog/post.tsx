import { Link, useParams } from "wouter";
import { SEOHead } from "@/components/seo-head";
import { Breadcrumb, breadcrumbSchema } from "@/components/breadcrumb";
import { getBlogPost } from "@/data/blog";
import NotFound from "@/pages/not-found";

export default function BlogPost() {
  const params = useParams<{ slug: string }>();
  const post = getBlogPost(params.slug);

  if (!post) return <NotFound />;

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: post.title },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faq.map(f => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.publishDate,
    author: { "@type": "Organization", name: "QR King" },
    publisher: { "@type": "Organization", name: "QR King", url: "https://qrking.replit.app" },
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "linear-gradient(170deg, #eff6ff 0%, #f8faff 50%, #eef2ff 100%)" }}>
      <SEOHead
        title={post.seoTitle}
        description={post.description}
        canonical={`/blog/${post.slug}`}
        schema={[articleSchema, faqSchema, breadcrumbSchema(breadcrumbs)]}
      />

      <header className="py-4 px-6 border-b border-slate-100 bg-white/70 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 font-bold text-slate-800">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)" }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="7" height="7" rx="1" fill="white"/><rect x="14" y="3" width="7" height="7" rx="1" fill="white"/><rect x="3" y="14" width="7" height="7" rx="1" fill="white"/><rect x="5" y="5" width="3" height="3" rx="0.5" fill="#2563eb"/><rect x="16" y="5" width="3" height="3" rx="0.5" fill="#2563eb"/><rect x="5" y="16" width="3" height="3" rx="0.5" fill="#2563eb"/><rect x="14" y="14" width="3" height="3" rx="0.5" fill="white"/><rect x="18" y="14" width="3" height="3" rx="0.5" fill="white"/><rect x="14" y="18" width="3" height="3" rx="0.5" fill="white"/><rect x="18" y="18" width="3" height="3" rx="0.5" fill="white"/></svg></div>
            QR King
          </Link>
          <Link href="/blog" className="text-sm text-blue-600 hover:underline">← Back to Blog</Link>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center px-4 pt-10 pb-20 max-w-3xl mx-auto w-full">
        <Breadcrumb items={breadcrumbs} />

        <article className="w-full">
          <header className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs text-slate-400">{new Date(post.publishDate).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
              <span className="text-xs text-slate-300">·</span>
              <span className="text-xs text-slate-400">{post.readTime}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">{post.title}</h1>
            <p className="text-base text-slate-500 leading-relaxed">{post.description}</p>
          </header>

          <div className="space-y-6">
            {post.sections.map((section, i) => (
              <section key={i} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <h2 className="text-lg font-bold text-slate-800 mb-3">{section.heading}</h2>
                <p className="text-sm text-slate-600 leading-relaxed">{section.body}</p>
              </section>
            ))}
          </div>

          {post.faq.length > 0 && (
            <section className="mt-6 bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              <h2 className="text-lg font-bold text-slate-800 mb-4">Frequently Asked Questions</h2>
              <div className="space-y-3">
                {post.faq.map((faq, i) => (
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
          )}
        </article>

        {/* CTA back to tool */}
        <div className="mt-10 bg-white rounded-2xl p-6 w-full border border-slate-100 shadow-sm text-center">
          <h2 className="font-bold text-slate-800 mb-2">Create your free QR code now</h2>
          <p className="text-sm text-slate-500 mb-4">Instant, free, no signup required.</p>
          <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm transition-all" style={{ background: "linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)" }}>
            Generate QR Code Free →
          </Link>
        </div>

        <Link href="/blog" className="mt-6 text-sm text-slate-500 hover:text-blue-600 transition-colors">← Browse all articles</Link>
      </main>

      <footer className="py-6 text-center text-xs text-slate-400 border-t border-slate-100 bg-white/50"><p>© 2025 <Link href="/" className="hover:text-blue-600">QR King</Link> · QR Code Blog</p></footer>
    </div>
  );
}
