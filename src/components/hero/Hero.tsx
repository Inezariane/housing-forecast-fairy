
import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  return (
    <section className="relative min-h-[90vh] flex items-center px-6 md:px-10 py-24 bg-gradient-to-b from-background to-secondary/30 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-36 right-0 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl opacity-70" />
        <div className="absolute bottom-36 left-10 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl opacity-70" />
      </div>
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Text Content */}
        <div className="space-y-8">
          <div className="space-y-5">
            <div 
              className={cn(
                "inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm",
                mounted ? "animate-fade-in" : "opacity-0"
              )}
              style={{ animationDelay: '0.1s' }}
            >
              Introducing HomeValueAI
            </div>
            <h1 
              className={cn(
                "heading-1 text-foreground",
                mounted ? "animate-slide-up" : "opacity-0"
              )}
              style={{ animationDelay: '0.2s' }}
            >
              Predict House Prices With Precision & Confidence
            </h1>
            <p 
              className={cn(
                "subtitle text-lg md:text-xl max-w-xl",
                mounted ? "animate-slide-up" : "opacity-0"
              )}
              style={{ animationDelay: '0.3s' }}
            >
              Our AI-powered tool analyzes property attributes, location data, and market trends to give you accurate, real-time home value estimates.
            </p>
          </div>
          
          <div 
            className={cn(
              "flex flex-col sm:flex-row gap-4",
              mounted ? "animate-slide-up" : "opacity-0"
            )}
            style={{ animationDelay: '0.4s' }}
          >
            <Button size="lg" className="group">
              Get Started 
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
          
          <div 
            className={cn(
              "grid grid-cols-3 gap-6 pt-4",
              mounted ? "animate-slide-up" : "opacity-0"
            )}
            style={{ animationDelay: '0.5s' }}
          >
            {stats.map((stat, index) => (
              <div key={index} className="space-y-1">
                <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Image or Illustration */}
        <div 
          className={cn(
            "relative aspect-square max-w-md mx-auto w-full",
            mounted ? "animate-slide-in-right" : "opacity-0"
          )}
          style={{ animationDelay: '0.6s' }}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-primary/10 rounded-3xl shadow-soft" />
          <div className="absolute inset-4 glass-card rounded-2xl p-6 flex flex-col items-center justify-center">
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-primary rounded-full animate-pulse-subtle" />
              </div>
            </div>
            <p className="text-center font-medium text-xl mb-2">AI-Powered Predictions</p>
            <p className="text-center text-muted-foreground text-sm">Advanced machine learning models trained on millions of property records</p>
          </div>
        </div>
      </div>
      
      {/* Down indicator */}
      <a 
        href="#predictor"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors duration-200"
      >
        <span className="text-sm font-medium mb-2">Try it now</span>
        <div className="w-6 h-10 border-2 border-muted-foreground/60 rounded-full flex items-center justify-center">
          <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce" />
        </div>
      </a>
    </section>
  );
};

const stats = [
  { value: '98%', label: 'Accuracy Rate' },
  { value: '2M+', label: 'Properties Analyzed' },
  { value: '24/7', label: 'Real-time Updates' },
];

export default Hero;
