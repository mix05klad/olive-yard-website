import HeroSection from "@/components/sections/HeroSection";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import OurStory from "@/components/sections/OurStory";
import ContactLocation from "@/components/sections/ContactLocation";
import InstagramFeed from "@/components/sections/InstagramFeed";
import Newsletter from "@/components/sections/Newsletter";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <OurStory/>
      <FeaturedProducts/>
      <InstagramFeed/>
      <Newsletter/>
      <ContactLocation/>
      {/* Εδώ θα προσθέσουμε στη συνέχεια τα υπόλοιπα sections (Products, Story κλπ) */}
    </main>
  );
}