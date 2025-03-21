
import Layout from "@/components/layout/Layout";
import Hero from "@/components/hero/Hero";
import PredictorForm from "@/components/predictor/PredictorForm";
import FeaturesSection from "@/components/features/FeaturesSection";
import TestimonialsSection from "@/components/testimonials/TestimonialsSection";
import CtaSection from "@/components/cta/CtaSection";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <PredictorForm />
      <FeaturesSection />
      <TestimonialsSection />
      <CtaSection />
    </Layout>
  );
};

export default Index;
