import HeroSection from "@/components/sections/HeroSection";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import OurStory from "@/components/sections/OurStory";
import ContactLocation from "@/components/sections/ContactLocation";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturedProducts/>
      <OurStory/>
      <ContactLocation/>
      {/* Εδώ θα προσθέσουμε στη συνέχεια τα υπόλοιπα sections (Products, Story κλπ) */}
    </main>
  );
}