import HomeAboutSection from "@/components/templates/home/HomeAboutSection";
import HomeBannerSection from "@/components/templates/home/HomeBannerSection";
import HomeBlogSection from "@/components/templates/home/HomeBlogSection";
import HomeCategoriesSection from "@/components/templates/home/HomeCategoriesSection";
import HomeCustomSection from "@/components/templates/home/HomeCustomSection";
import HomeOfferSection from "@/components/templates/home/HomeOfferSection";
import HomeReviewSection from "@/components/templates/home/HomeReviewSection";

function HomePage({ data }: { data: { name: string, id: number } }) {
  return (
    <>
      <HomeBannerSection />
      <HomeCategoriesSection/>
      <HomeCustomSection/>
      <HomeOfferSection/>
      <HomeAboutSection/>
      <HomeReviewSection/>
      <HomeBlogSection/>
    </>
  );
}

export default HomePage;
