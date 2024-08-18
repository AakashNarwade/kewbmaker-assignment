"use client";

import { useEffect, useState } from "react";
import { gql } from "@apollo/client";
import client from "./lib/apolloClient";
import Banner from "./components/Banner.jsx";
import SEO from "./components/SEO.jsx";
import AboutSection from "./components/AboutSection.jsx";
import ServicesSection from "./components/ServicesSection.jsx";
import Category from "./components/Category";
import Colours from "./components/Colours";
import JoinUs from "./components/JoinUs";
import Blog from "./components/Blog";


const GET_HOME_PAGE_DATA = gql`
  query GetHomePageData {
    pages(where: { name: "Homepage" }) {
      nodes {
        homepage {
          banners {
            bannerImage {
              node {
                sourceUrl
              }
            }
            bannersTitle
            bannerDescription
            bannerButton {
              title
              url
              target
            }
          }
          homeAboutTitle
          homeAboutSubtitle
          homeAboutButton {
            target
            title
            url
          }
          homeAboutVideoImage {
            node {
              sourceUrl
            }
          }
          homeAboutVideoUrl
          homeAboutDescription
          homeCategoryTitle
          homeCategorySubtitle
          homeServicesTitle
          homeServicesSubtitle
          homeColoursTitle
          homeColoursSubtitle
          homeColoursButton {
            target
            title
            url
          }
          homeJoinBackgroundImage {
            node {
              sourceUrl
            }
          }
          homeJoinTitle
          homeJoinSubtitle
          homeJoinButton {
            target
            title
            url
          }
          homeJoinDescription
          blogTitle
          blogSubtitle
          categories {
            link
            title
            image {
              node {
                sourceUrl
              }
            }
          }
        }
        seo {
          canonical
          metaKeywords
          metaDesc
          title
          opengraphType
          opengraphSiteName
          opengraphTitle
          opengraphDescription
          opengraphUrl
          schema {
            raw
          }
          opengraphImage {
            mediaItemUrl
          }
        }
      }
    }
    allColourCategory(where: { slug: "popular" }) {
      nodes {
        name
        colours {
          nodes {
            title

            slug
            colourInfo {
              selectColor
              colourRgb
            }
          }
        }
      }
    }
    blogs {
      nodes {
        featuredImage {
          node {
            sourceUrl
            slug
          }
        }
        slug
        title
        date
      }
    }
  }
`;

async function fetchData() {
  try {
    const { data } = await client.query({
      query: GET_HOME_PAGE_DATA,
    });
    return data;
  } catch (error) {
    console.error("Apollo Client Error:", error);
    throw error;
  }
}

export default function HomePage() {
  const [alldata, setAllData] = useState(null);
  const [homeData, setHomeData] = useState(null);
  const [seoData, setSeoData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchData();
        console.log("data", data);
        setAllData(data);
        setHomeData(data.pages.nodes[0]?.homepage);
        setSeoData(data.pages.nodes[0]?.seo);
      } catch (err) {
        setError(err.message);
      }
    };

    getData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!homeData || !seoData) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <div>
      <SEO seoData={seoData} />
      <Banner banners={homeData.banners} />
      <AboutSection aboutSection={homeData} />
      <Category category={homeData} />
      <ServicesSection service={homeData} />
      <Colours colours={homeData} />
      <JoinUs joinUsData={homeData} />
      <Blog blogData={alldata} />
    </div>
  );
}
