
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CtaSection = () => {
  return (
    <section className="px-6 md:px-10 py-24 relative">
      <div className="max-w-6xl mx-auto">
        <div className="glass-card rounded-3xl overflow-hidden">
          <div className="p-10 md:p-16 relative">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full transform translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/10 rounded-full transform -translate-x-1/3 translate-y-1/3" />
            
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h2 className="heading-2 mb-6">Ready to Discover Your Home's True Value?</h2>
              <p className="subtitle mb-8">
                Join thousands of homeowners, buyers, and real estate professionals who trust
                our AI-powered predictions for accurate property valuations.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="group">
                  Get Started Now
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
