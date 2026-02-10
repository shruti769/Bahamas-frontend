
import BahamasMoments from "@/components/home/BahamasMoments";
import BahamianCulture from "@/components/home/BahamianCulture";
import DiscoverySlider from "@/components/home/DiscoverySlider";
import ExploreNearby from "@/components/home/ExploreNearby";
import FamousIslands from "@/components/home/FamousIslands";
import HeroSection from "@/components/home/HeroSection";
import IslandHighlights from "@/components/home/IslandHighlights";
import Newsletter from "@/components/home/Newsletter";
import PlanTripSection from "@/components/home/PlanTripSection";
import Tripvariety from "@/components/home/TripVariety";
import WhyChoose from "@/components/home/WhyChoose";


export default function Home() {
  return (
  
  
  <>
   <HeroSection/>
   <IslandHighlights/>
   <FamousIslands/>
   <PlanTripSection/>
   <BahamianCulture/>
   <Tripvariety/>
   <BahamasMoments/>
   <Newsletter/>
   <DiscoverySlider/>
   <ExploreNearby/>
   <WhyChoose/>
  
   </>
  

  );
}
