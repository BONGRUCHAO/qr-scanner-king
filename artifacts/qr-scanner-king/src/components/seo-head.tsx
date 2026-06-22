import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical: string;
  schema?: object | object[];
}

export function SEOHead({ title, description, canonical, schema }: SEOHeadProps) {
  const schemas = schema ? (Array.isArray(schema) ? schema : [schema]) : [];
  const base = "https://qrking.replit.app";
  const fullCanonical = canonical.startsWith("http") ? canonical : `${base}${canonical}`;
  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullCanonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullCanonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
}
