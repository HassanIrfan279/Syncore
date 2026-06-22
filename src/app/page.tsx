import type { Metadata } from "next";
import { FeaturedWork } from "@/components/sections/home/FeaturedWork";
import { FinalCTA } from "@/components/sections/home/FinalCTA";
import { Hero } from "@/components/sections/home/Hero";
import { Process } from "@/components/sections/home/Process";
import { ServicesOverview } from "@/components/sections/home/ServicesOverview";
import { Testimonials } from "@/components/sections/home/Testimonials";
import { TrustStrip } from "@/components/sections/home/TrustStrip";
import { WhyUs } from "@/components/sections/home/WhyUs";
import { getPageMetadata } from "@/lib/seo";

export const metadata: Metadata = getPageMetadata("home");

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustStrip />
      <ServicesOverview />
      <WhyUs />
      <Process />
      <FeaturedWork />
      <Testimonials />
      <FinalCTA />
    </main>
  );
}
