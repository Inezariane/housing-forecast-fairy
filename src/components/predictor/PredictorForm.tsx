
import { useState } from 'react';
import { Home, Ruler, DollarSign, Building, MapPin, Bed, Bath, Calendar, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

// Form state interface
interface PropertyData {
  propertyType: string;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  location: string;
  yearBuilt: number;
}

// Mock function to simulate prediction
const getPredictedPrice = (data: PropertyData): number => {
  // This is just a placeholder calculation
  // In a real app, this would make an API call to your backend
  
  // Base price factors
  const basePrice = 200000;
  const locationFactors: Record<string, number> = {
    'san-francisco': 1500000,
    'new-york': 1200000,
    'chicago': 400000,
    'miami': 600000,
    'los-angeles': 1000000,
    'seattle': 800000,
    'austin': 500000,
    'denver': 550000,
  };
  
  // Calculate price based on inputs
  let price = locationFactors[data.location] || basePrice;
  
  // Adjust for property type
  if (data.propertyType === 'condo') price *= 0.8;
  if (data.propertyType === 'townhouse') price *= 0.9;
  if (data.propertyType === 'multi-family') price *= 1.5;
  if (data.propertyType === 'luxury') price *= 2.5;
  
  // Adjust for size and features
  price += (data.squareFeet * 300);
  price += (data.bedrooms * 25000);
  price += (data.bathrooms * 15000);
  
  // Adjust for age
  const currentYear = new Date().getFullYear();
  const age = currentYear - data.yearBuilt;
  price -= (age * 1000); // Depreciation
  
  // Add some randomness to simulate market variations
  const randomFactor = 0.9 + (Math.random() * 0.2); // 0.9 to 1.1
  price *= randomFactor;
  
  return Math.round(price);
};

const PredictorForm = () => {
  const { toast } = useToast();
  const [propertyData, setPropertyData] = useState<PropertyData>({
    propertyType: 'single-family',
    bedrooms: 3,
    bathrooms: 2,
    squareFeet: 2000,
    location: 'san-francisco',
    yearBuilt: 2000,
  });
  
  const [predictedPrice, setPredictedPrice] = useState<number | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);
  
  const handlePrediction = () => {
    setIsCalculating(true);
    setShowAnimation(true);
    
    // Simulate API call delay
    setTimeout(() => {
      try {
        const price = getPredictedPrice(propertyData);
        setPredictedPrice(price);
        setIsCalculating(false);
        
        toast({
          title: "Prediction Complete",
          description: "Your house price estimate has been calculated.",
        });
      } catch (error) {
        setIsCalculating(false);
        toast({
          title: "Prediction Failed",
          description: "There was an error calculating the house price.",
          variant: "destructive",
        });
      }
    }, 2000);
  };
  
  const handleChange = (field: keyof PropertyData, value: any) => {
    setPropertyData((prev) => ({
      ...prev,
      [field]: value,
    }));
    // Reset prediction when form changes
    if (predictedPrice !== null) {
      setPredictedPrice(null);
    }
  };
  
  return (
    <section id="predictor" className="px-6 md:px-10 py-24 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">Predict Your Home's Value</h2>
          <p className="subtitle max-w-2xl mx-auto">
            Enter your property details below to get an instant AI-powered price estimate.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Form Section */}
          <div className="lg:col-span-3 glass-card rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold mb-6">Property Details</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Property Type */}
              <div className="space-y-2">
                <label className="flex items-center text-sm font-medium">
                  <Building className="h-4 w-4 mr-2 text-primary" />
                  Property Type
                </label>
                <Select
                  value={propertyData.propertyType}
                  onValueChange={(value) => handleChange('propertyType', value)}
                >
                  <SelectTrigger className="input-glass">
                    <SelectValue placeholder="Select property type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="single-family">Single Family Home</SelectItem>
                    <SelectItem value="condo">Condominium</SelectItem>
                    <SelectItem value="townhouse">Townhouse</SelectItem>
                    <SelectItem value="multi-family">Multi-Family</SelectItem>
                    <SelectItem value="luxury">Luxury Home</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              {/* Location */}
              <div className="space-y-2">
                <label className="flex items-center text-sm font-medium">
                  <MapPin className="h-4 w-4 mr-2 text-primary" />
                  Location
                </label>
                <Select
                  value={propertyData.location}
                  onValueChange={(value) => handleChange('location', value)}
                >
                  <SelectTrigger className="input-glass">
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="san-francisco">San Francisco, CA</SelectItem>
                    <SelectItem value="new-york">New York, NY</SelectItem>
                    <SelectItem value="chicago">Chicago, IL</SelectItem>
                    <SelectItem value="miami">Miami, FL</SelectItem>
                    <SelectItem value="los-angeles">Los Angeles, CA</SelectItem>
                    <SelectItem value="seattle">Seattle, WA</SelectItem>
                    <SelectItem value="austin">Austin, TX</SelectItem>
                    <SelectItem value="denver">Denver, CO</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              {/* Bedrooms */}
              <div className="space-y-2">
                <label className="flex items-center text-sm font-medium">
                  <Bed className="h-4 w-4 mr-2 text-primary" />
                  Bedrooms: {propertyData.bedrooms}
                </label>
                <Slider 
                  value={[propertyData.bedrooms]} 
                  min={1} 
                  max={8} 
                  step={1} 
                  onValueChange={(value) => handleChange('bedrooms', value[0])}
                  className="py-4"
                />
              </div>
              
              {/* Bathrooms */}
              <div className="space-y-2">
                <label className="flex items-center text-sm font-medium">
                  <Bath className="h-4 w-4 mr-2 text-primary" />
                  Bathrooms: {propertyData.bathrooms}
                </label>
                <Slider 
                  value={[propertyData.bathrooms]} 
                  min={1} 
                  max={6} 
                  step={0.5} 
                  onValueChange={(value) => handleChange('bathrooms', value[0])}
                  className="py-4"
                />
              </div>
              
              {/* Square Feet */}
              <div className="space-y-2">
                <label className="flex items-center text-sm font-medium">
                  <Ruler className="h-4 w-4 mr-2 text-primary" />
                  Square Footage: {propertyData.squareFeet} sq ft
                </label>
                <Slider 
                  value={[propertyData.squareFeet]} 
                  min={500} 
                  max={8000} 
                  step={100} 
                  onValueChange={(value) => handleChange('squareFeet', value[0])}
                  className="py-4"
                />
              </div>
              
              {/* Year Built */}
              <div className="space-y-2">
                <label className="flex items-center text-sm font-medium">
                  <Calendar className="h-4 w-4 mr-2 text-primary" />
                  Year Built: {propertyData.yearBuilt}
                </label>
                <Slider 
                  value={[propertyData.yearBuilt]} 
                  min={1900} 
                  max={2023} 
                  step={1} 
                  onValueChange={(value) => handleChange('yearBuilt', value[0])}
                  className="py-4"
                />
              </div>
            </div>
            
            <div className="mt-8">
              <Button 
                className="w-full group" 
                size="lg" 
                onClick={handlePrediction}
                disabled={isCalculating}
              >
                {isCalculating ? (
                  "Calculating..."
                ) : (
                  <>
                    Calculate Property Value
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </>
                )}
              </Button>
            </div>
          </div>
          
          {/* Results Section */}
          <div className="lg:col-span-2">
            <div 
              className={cn(
                "glass-card rounded-2xl h-full flex flex-col",
                showAnimation && predictedPrice === null ? "animate-pulse-subtle" : ""
              )}
            >
              <div className="p-6 md:p-8 flex-grow flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Home className="h-8 w-8 text-primary" />
                </div>
                
                {isCalculating ? (
                  <div className="space-y-4 animate-pulse">
                    <h3 className="text-2xl font-semibold">Calculating...</h3>
                    <p className="text-muted-foreground">
                      Our AI is analyzing market data for your property.
                    </p>
                    <div className="w-full bg-primary/10 h-2 rounded-full overflow-hidden mt-4">
                      <div 
                        className="h-full bg-primary transition-all duration-700 ease-in-out" 
                        style={{ 
                          width: isCalculating ? '90%' : '0%',
                          transition: 'width 2s ease-in-out'
                        }}
                      />
                    </div>
                  </div>
                ) : predictedPrice ? (
                  <div className="space-y-4 animate-scale-in">
                    <p className="text-sm text-muted-foreground font-medium">Estimated Value</p>
                    <h3 className="text-4xl md:text-5xl font-bold flex items-center justify-center">
                      <DollarSign className="h-8 w-8" />
                      <span>
                        {new Intl.NumberFormat('en-US').format(predictedPrice)}
                      </span>
                    </h3>
                    <div className="bg-primary/10 px-4 py-2 rounded-full text-primary text-sm inline-block">
                      ±5% Market Accuracy
                    </div>
                    <p className="text-sm text-muted-foreground mt-6">
                      This estimate is based on current market conditions, comparable properties, 
                      and the details you provided.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold">Ready for Your Estimate</h3>
                    <p className="text-muted-foreground">
                      Fill in your property details and click "Calculate Property Value" to get started.
                    </p>
                    <div className="flex flex-col items-center mt-6 space-y-4">
                      <div className="w-16 h-16 rounded-full border-2 border-dashed border-primary/30 flex items-center justify-center">
                        <DollarSign className="h-8 w-8 text-primary/40" />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Your property valuation will appear here
                      </p>
                    </div>
                  </div>
                )}
              </div>
              
              {predictedPrice && (
                <div className="border-t border-border p-6 space-y-4">
                  <h4 className="font-medium">Based on your inputs:</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center">
                      <Building className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="text-muted-foreground">
                        {propertyData.propertyType.replace('-', ' ').replace(/^\w/, c => c.toUpperCase())}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="text-muted-foreground">
                        {propertyData.location.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Bed className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="text-muted-foreground">{propertyData.bedrooms} Bedrooms</span>
                    </div>
                    <div className="flex items-center">
                      <Bath className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="text-muted-foreground">{propertyData.bathrooms} Bathrooms</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PredictorForm;
