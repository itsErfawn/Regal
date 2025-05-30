import HomeAboutSection from "@/components/templates/home/HomeAboutSection";
import HomeBannerSection from "@/components/templates/home/HomeBannerSection";
import HomeBlogSection from "@/components/templates/home/HomeBlogSection";
import HomeCategoriesSection from "@/components/templates/home/HomeCategoriesSection";
import HomeCustomSection from "@/components/templates/home/HomeCustomSection";
import HomeOfferSection from "@/components/templates/home/HomeOfferSection";
import HomeReviewSection from "@/components/templates/home/HomeReviewSection";
import { ProductCardCollectionType } from "@/types";

function HomePage({data}:{data:{specialProducts:ProductCardCollectionType}}) {
  return (
    <>
      <HomeBannerSection />
      <HomeCategoriesSection/>
      <HomeCustomSection/>
      <HomeOfferSection products={data.specialProducts} />
      <HomeAboutSection/>
      <HomeReviewSection/>
      <HomeBlogSection/>
    </>
  );
}

export default HomePage;
