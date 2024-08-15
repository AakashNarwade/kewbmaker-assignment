import Head from "next/head";

export default function SEO({ seoData }) {
  console.log("seodata", seoData);

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
      <script type="application/ld+json">
        {JSON.stringify(JSON.parse(seoData?.schema?.raw))}
        {/* {`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "My Awesome Page",
            "description": "This is an awesome page description for SEO."
          }
        `} */}
      </script>
    </Head>
  );
}
