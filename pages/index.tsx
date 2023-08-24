import Hero from "../components/Home/Hero";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

const Home = () => {
  const title = "YGK Boxing";
  const desc = "A community-based boxing club founded on the principles of respect, responsibility, hard work and integrity. Located in Kingston, Ontario.";
  const siteURL = "https://ygkboxing.com";
  const pathName = useRouter().pathname;
  const pageURL = pathName === "/" ? siteURL : siteURL + pathName;

  return (
    <>
      <NextSeo
        title={title}
        description={desc}
        canonical={pageURL}
        additionalLinkTags={[{
          rel: "icon", href: `${siteURL}/favicon.ico`
        }]}
      />
    <div className="w-full">
      <Hero />
    </div>
    </>
  );
};
export default Home;