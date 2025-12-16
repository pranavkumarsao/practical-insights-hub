import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { UpcomingWebinars } from "@/components/home/UpcomingWebinars";
import { WhySection } from "@/components/home/WhySection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { PlatformPreview } from "@/components/home/PlatformPreview";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <UpcomingWebinars />
      <WhySection />
      <ProcessSection />
      <PlatformPreview />
      <CTASection />
    </Layout>
  );
};

export default Index;
