
import Layout from "@/components/layout/Layout";
import { 
  Brain, 
  Database, 
  BarChart3, 
  RefreshCw, 
  LineChart, 
  Home, 
  Layers, 
  Check 
} from "lucide-react";

const HowItWorks = () => {
  return (
    <Layout>
      <div className="pt-24 pb-16 px-6 md:px-10 bg-gradient-to-b from-background to-secondary/30">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4 animate-fade-in">
            Our Process
          </div>
          <h1 className="heading-1 mb-6 animate-slide-up">
            How HomeValueAI Works
          </h1>
          <p className="subtitle max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Our AI-powered platform combines advanced machine learning algorithms with comprehensive real estate data
            to deliver precise property valuations in seconds.
          </p>
        </div>
      </div>

      {/* Process Steps */}
      <section className="px-6 md:px-10 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
            <div className="order-2 md:order-1">
              <div className="space-y-6">
                <h2 className="heading-2">Data Collection & Processing</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our platform continuously collects and processes millions of property records, market trends, and
                  location-specific data points to build a comprehensive database of real estate information.
                </p>
                <ul className="space-y-3">
                  {[
                    "Property sales history from public records",
                    "Neighborhood demographic and economic indicators",
                    "School district ratings and boundaries",
                    "Proximity to amenities and services",
                    "Crime statistics and safety metrics",
                    "Environmental factors and natural hazards"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="order-1 md:order-2 glass-card rounded-2xl p-8 aspect-square max-w-md mx-auto w-full relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/20 z-0" />
              <div className="relative z-10 h-full flex items-center justify-center">
                <Database className="h-24 w-24 text-primary/60" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
            <div className="glass-card rounded-2xl p-8 aspect-square max-w-md mx-auto w-full relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/20 z-0" />
              <div className="relative z-10 h-full flex items-center justify-center">
                <Brain className="h-24 w-24 text-primary/60" />
              </div>
            </div>
            <div>
              <div className="space-y-6">
                <h2 className="heading-2">Machine Learning Model</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our proprietary machine learning algorithms analyze this vast dataset to identify patterns, correlations,
                  and key value drivers in the real estate market.
                </p>
                <ul className="space-y-3">
                  {[
                    "Ensemble of multiple prediction models for enhanced accuracy",
                    "Continuous learning from new market data and transactions",
                    "Feature importance analysis to identify key value drivers",
                    "Confidence scoring for prediction reliability assessment",
                    "Anomaly detection to identify unusual property characteristics",
                    "Regular retraining to adapt to changing market conditions"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="space-y-6">
                <h2 className="heading-2">Valuation Generation</h2>
                <p className="text-muted-foreground leading-relaxed">
                  When you input your property details, our system processes this information through our
                  trained models to generate an accurate, real-time valuation estimate.
                </p>
                <ul className="space-y-3">
                  {[
                    "Instant processing of your property specifications",
                    "Comparable property analysis for validation",
                    "Market trend adjustments for current conditions",
                    "Confidence interval calculation for value range",
                    "Location-specific pricing factor application",
                    "Detailed breakdown of value contributors"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="order-1 md:order-2 glass-card rounded-2xl p-8 aspect-square max-w-md mx-auto w-full relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/20 z-0" />
              <div className="relative z-10 h-full flex items-center justify-center">
                <Home className="h-24 w-24 text-primary/60" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="px-6 md:px-10 py-16 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
              Technology
            </div>
            <h2 className="heading-2 mb-4">Our Technology Stack</h2>
            <p className="subtitle max-w-2xl mx-auto">
              HomeValueAI is built on a sophisticated technology infrastructure designed for accuracy, 
              speed, and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Layers className="h-8 w-8 text-primary" />,
                title: "Data Infrastructure",
                description: "Highly scalable data processing systems capable of handling millions of property records."
              },
              {
                icon: <Brain className="h-8 w-8 text-primary" />,
                title: "Neural Networks",
                description: "Deep learning models trained on historical sales data to identify complex patterns."
              },
              {
                icon: <LineChart className="h-8 w-8 text-primary" />,
                title: "Time Series Analysis",
                description: "Advanced forecasting algorithms to predict market movements and trends."
              },
              {
                icon: <RefreshCw className="h-8 w-8 text-primary" />,
                title: "Real-time Processing",
                description: "Instant valuation calculations with continuous data updates for accuracy."
              }
            ].map((item, i) => (
              <div key={i} className="glass-card rounded-xl p-6 flex flex-col h-full">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HowItWorks;
