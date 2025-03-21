
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  location: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "First-time Homebuyer",
    content: "HomeValueAI provided an incredibly accurate estimate for the property I was interested in. I felt confident making an offer knowing the true market value.",
    rating: 5,
    location: "San Francisco, CA",
  },
  {
    id: 2,
    name: "Robert Chen",
    role: "Real Estate Investor",
    content: "As someone who analyzes dozens of properties monthly, this tool has become indispensable. The AI predictions have been remarkably close to final sale prices.",
    rating: 5,
    location: "New York, NY",
  },
  {
    id: 3,
    name: "Emily Williams",
    role: "Property Seller",
    content: "I was skeptical about AI valuations, but HomeValueAI helped me price my home correctly. It sold within two weeks at exactly the predicted value!",
    rating: 4,
    location: "Austin, TX",
  },
  {
    id: 4,
    name: "Michael Thompson",
    role: "Real Estate Agent",
    content: "I've incorporated HomeValueAI into my client consultations. It provides transparent, data-driven valuations that help set realistic expectations.",
    rating: 5,
    location: "Chicago, IL",
  },
  {
    id: 5,
    name: "Jessica Martinez",
    role: "Homeowner",
    content: "Monitoring my home's value over time has never been easier. The historical tracking feature shows exactly how market changes have affected my property.",
    rating: 5,
    location: "Miami, FL",
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  
  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  
  return (
    <section className="px-6 md:px-10 py-24 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            Happy Customers
          </div>
          <h2 className="heading-2 mb-4">What Our Users Say</h2>
          <p className="subtitle max-w-2xl mx-auto">
            Join thousands of satisfied customers who've made better real estate decisions with our AI-powered predictions.
          </p>
        </div>
        
        <div className="relative">
          <div className="glass-card rounded-2xl py-10 px-6 md:px-16 relative overflow-hidden min-h-[320px] flex items-center">
            {/* Decoration */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-primary/5 rounded-br-full" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/5 rounded-tl-full" />
            
            <div className="relative z-10 w-full">
              <div className="flex flex-col items-center text-center">
                <div className="flex mb-4">
                  {Array.from({ length: testimonials[activeIndex].rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                  {Array.from({ length: 5 - testimonials[activeIndex].rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-muted-foreground" />
                  ))}
                </div>
                
                <blockquote className="text-xl font-medium mb-6 max-w-3xl">
                  "{testimonials[activeIndex].content}"
                </blockquote>
                
                <div>
                  <p className="font-semibold text-foreground">{testimonials[activeIndex].name}</p>
                  <div className="flex items-center justify-center text-sm text-muted-foreground space-x-2">
                    <span>{testimonials[activeIndex].role}</span>
                    <span>•</span>
                    <span>{testimonials[activeIndex].location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation buttons */}
          <button 
            onClick={handlePrev}
            className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-primary/5 transition-colors duration-200"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-primary/5 transition-colors duration-200"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
        
        {/* Indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                index === activeIndex ? "bg-primary w-6" : "bg-primary/30"
              )}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
