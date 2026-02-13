// app/island/[id]/page.js
import CalendarAndReviews from '@/components/detailing/Calendarandreviews'
import HostInfoSection from '@/components/detailing/Hostinfosection';
import ImageGallery from '@/components/detailing/imagessection'
import LocationMap from '@/components/detailing/Locationmap';
import PropertyDetails from '@/components/detailing/PropertyDetails'
import SleepingAndAmenities from '@/components/detailing/Sleepingamenities'
import { islandDetailData } from "@/data/islandMockData";

const IslandDetailPage = async ({ params }) => {
  // Await params in Next.js 15+
  const { id } = await params;
  
  // Fetch island data based on id
  // For now, using mock data
  const island = islandDetailData;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <ImageGallery island={island} />
      <PropertyDetails island={island} />
      <SleepingAndAmenities island={island} />
      <CalendarAndReviews island={island} />
      <LocationMap island={island} />
      <HostInfoSection island={island} />
    </div>
  )
}

export default IslandDetailPage;
