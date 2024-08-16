import Head from "next/head";

export default function SEO({ seoData }) {
  // Safely parse and stringify JSON-LD schema data
  const schemaData = seoData?.schema?.raw ? JSON.parse(seoData.schema.raw) : {};

  return (
    <Head>
      <title>{seoData.title}</title>
      <meta name="description" content={seoData.metaDesc} />
      <meta name="keywords" content={seoData.metaKeywords} />
      <link rel="canonical" href={seoData.canonical} />
      <meta property="og:type" content={seoData.opengraphType} />
      <meta property="og:site_name" content={seoData.opengraphSiteName} />
      <meta property="og:title" content={seoData.opengraphTitle} />
      <meta property="og:description" content={seoData.opengraphDescription} />
      <meta property="og:url" content={seoData.opengraphUrl} />
      <meta
        property="og:image"
        content={seoData.opengraphImage?.mediaItemUrl}
      />
      <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
    </Head>
  );
}
