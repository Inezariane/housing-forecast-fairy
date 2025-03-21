
import { 
  TrendingUp, 
  Map, 
  LineChart, 
  Activity, 
  Clock, 
  Maximize, 
  Database,
  BarChart3
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
  className?: string;
}

const Feature = ({ icon, title, description, className }: FeatureProps) => (
  <div className={cn("glass-card rounded-xl p-6 flex flex-col h-full transition-all duration-300 hover:translate-y-[-4px] hover:shadow-medium", className)}>
    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground text-sm">{description}</p>
  </div>
);

const FeaturesSection = () => {
  return (
    <section className="px-6 md:px-10 py-24 bg-secondary/30 relative">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            Advanced Features
          </div>
          <h2 className="heading-2 mb-4">Why Choose HomeValueAI</h2>
          <p className="subtitle max-w-2xl mx-auto">
            Our AI-powered platform combines cutting-edge machine learning with comprehensive real estate data to deliver the most accurate property valuations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Feature 
            icon={<TrendingUp className="h-6 w-6 text-primary" />}
            title="Market Trends Analysis"
            description="Our model analyzes real-time market trends to ensure your valuation reflects current conditions."
          />
          
          <Feature 
            icon={<Map className="h-6 w-6 text-primary" />}
            title="Location Intelligence"
            description="Leverages granular location data including school districts, crime rates, and amenities proximity."
          />
          
          <Feature 
            icon={<LineChart className="h-6 w-6 text-primary" />}
            title="Historical Pricing"
            description="Incorporates historical pricing data to identify trends and predict future movements."
          />
          
          <Feature 
            icon={<Activity className="h-6 w-6 text-primary" />}
            title="Volatility Assessment"
            description="Evaluates market stability to provide confidence intervals for your property valuation."
          />
          
          <Feature 
            icon={<Clock className="h-6 w-6 text-primary" />}
            title="Real-Time Updates"
            description="Continually refreshes data to ensure valuations remain accurate as markets change."
          />
          
          <Feature 
            icon={<Database className="h-6 w-6 text-primary" />}
            title="Comprehensive Database"
            description="Built on millions of property records for unmatched prediction accuracy."
          />
          
          <Feature 
            icon={<BarChart3 className="h-6 w-6 text-primary" />}
            title="Comparable Analysis"
            description="Identifies and analyzes similar properties that have recently sold in your area."
          />
          
          <Feature 
            icon={<Maximize className="h-6 w-6 text-primary" />}
            title="Feature Optimization"
            description="Identifies which home improvements will most significantly increase your property's value."
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
