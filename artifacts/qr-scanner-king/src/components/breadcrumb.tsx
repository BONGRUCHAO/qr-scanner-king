import { Link } from "wouter";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-400 mb-6">
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1.5">
          {i > 0 && <span aria-hidden="true">/</span>}
          {item.href ? (
            <Link href={item.href} className="hover:text-blue-600 transition-colors">{item.label}</Link>
          ) : (
            <span className="text-slate-600 font-medium">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}

export function breadcrumbSchema(items: BreadcrumbItem[], base = "https://qrking.replit.app") {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: `${base}${item.href}` } : {}),
    })),
  };
}
