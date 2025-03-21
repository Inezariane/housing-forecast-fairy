
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Search, Home, MapPin } from "lucide-react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { formatCompactPrice } from "@/utils/price-formatter";

// Mock historical data
const generateHistoricalData = (startYear: number, endYear: number, startPrice: number) => {
  const data = [];
  let currentPrice = startPrice;
  
  for (let year = startYear; year <= endYear; year++) {
    // Create some realistic price variations
    let yearlyChange = 0;
    
    // 2008-2010 housing crisis
    if (year >= 2008 && year <= 2010) {
      yearlyChange = -0.06 - Math.random() * 0.06; // -6% to -12%
    } 
    // Recovery 2011-2015
    else if (year >= 2011 && year <= 2015) {
      yearlyChange = 0.03 + Math.random() * 0.04; // 3% to 7%
    }
    // Strong growth 2016-2019
    else if (year >= 2016 && year <= 2019) {
      yearlyChange = 0.05 + Math.random() * 0.06; // 5% to 11%
    }
    // Pandemic boom 2020-2022
    else if (year >= 2020 && year <= 2022) {
      yearlyChange = 0.08 + Math.random() * 0.12; // 8% to 20%
    }
    // Cooling market 2023
    else if (year === 2023) {
      yearlyChange = -0.01 - Math.random() * 0.03; // -1% to -4%
    }
    // Default modest growth
    else {
      yearlyChange = 0.02 + Math.random() * 0.03; // 2% to 5%
    }
    
    currentPrice = currentPrice * (1 + yearlyChange);
    
    data.push({
      year: year.toString(),
      price: Math.round(currentPrice),
    });
  }
  
  return data;
};

const propertyExamples = [
  {
    id: 1,
    address: "123 Apple Street",
    city: "San Francisco, CA",
    startYear: 2000,
    startPrice: 650000,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1850,
  },
  {
    id: 2,
    address: "456 Oak Avenue",
    city: "New York, NY",
    startYear: 2000,
    startPrice: 850000,
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1200,
  },
  {
    id: 3,
    address: "789 Pine Boulevard",
    city: "Austin, TX",
    startYear: 2000,
    startPrice: 320000,
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2400,
  },
  {
    id: 4,
    address: "101 Cedar Lane",
    city: "Seattle, WA",
    startYear: 2000,
    startPrice: 480000,
    bedrooms: 3,
    bathrooms: 2.5,
    sqft: 2100,
  },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass-card p-4 shadow-medium border border-border">
        <p className="font-semibold">{label}</p>
        <p className="text-primary font-medium">
          {formatCompactPrice(payload[0].value)}
        </p>
      </div>
    );
  }

  return null;
};

const PriceHistory = () => {
  const currentYear = new Date().getFullYear();
  const [selectedProperty, setSelectedProperty] = useState(propertyExamples[0]);
  const [searchValue, setSearchValue] = useState("");
  
  const historyData = generateHistoricalData(
    selectedProperty.startYear,
    currentYear,
    selectedProperty.startPrice
  );

  const handleSelectProperty = (property: typeof propertyExamples[0]) => {
    setSelectedProperty(property);
  };

  return (
    <Layout>
      <div className="pt-24 pb-16 px-6 md:px-10 bg-gradient-to-b from-background to-secondary/30">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4 animate-fade-in">
            Historical Data
          </div>
          <h1 className="heading-1 mb-6 animate-slide-up">
            Property Price History
          </h1>
          <p className="subtitle max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Analyze the complete price history of properties to understand market trends and make informed real estate decisions.
          </p>
        </div>
      </div>
      
      <section className="px-6 md:px-10 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="glass-card rounded-xl p-6 mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search for an address, city, or zip code..."
                className="input-glass pl-10 w-full"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Property List */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold mb-4">Example Properties</h2>
              
              {propertyExamples.map((property) => (
                <div 
                  key={property.id}
                  className={`glass-card rounded-xl p-4 cursor-pointer transition-all duration-200 hover:shadow-medium ${
                    selectedProperty.id === property.id ? 'ring-2 ring-primary' : ''
                  }`}
                  onClick={() => handleSelectProperty(property)}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Home className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">{property.address}</h3>
                      <div className="flex items-center text-sm text-muted-foreground mb-2">
                        <MapPin className="h-3 w-3 mr-1" />
                        {property.city}
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-xs">
                        <div>
                          <span className="text-muted-foreground">Beds:</span> {property.bedrooms}
                        </div>
                        <div>
                          <span className="text-muted-foreground">Baths:</span> {property.bathrooms}
                        </div>
                        <div>
                          <span className="text-muted-foreground">Sqft:</span> {property.sqft.toLocaleString()}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="pt-4">
                <Button className="w-full">
                  Search More Properties
                </Button>
              </div>
            </div>
            
            {/* Chart Section */}
            <div className="lg:col-span-2 glass-card rounded-xl p-6">
              <div className="mb-6">
                <h2 className="text-xl font-semibold">{selectedProperty.address}</h2>
                <p className="text-muted-foreground">{selectedProperty.city}</p>
              </div>
              
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={historyData}
                    margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.05)" />
                    <XAxis dataKey="year" tick={{ fontSize: 12 }} />
                    <YAxis 
                      tickFormatter={(value) => formatCompactPrice(value)}
                      tick={{ fontSize: 12 }}
                      width={80}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="price"
                      name="Property Value"
                      stroke="hsl(var(--primary))"
                      strokeWidth={3}
                      dot={{ strokeWidth: 2, r: 4 }}
                      activeDot={{ r: 6, strokeWidth: 0 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              
              <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { 
                    label: "Current Value", 
                    value: formatCompactPrice(historyData[historyData.length - 1].price) 
                  },
                  { 
                    label: "Initial Value", 
                    value: formatCompactPrice(historyData[0].price) 
                  },
                  { 
                    label: "Total Growth", 
                    value: `${Math.round((historyData[historyData.length - 1].price / historyData[0].price - 1) * 100)}%` 
                  },
                  { 
                    label: "Avg. Annual Growth", 
                    value: `${Math.round((Math.pow((historyData[historyData.length - 1].price / historyData[0].price), 1 / (currentYear - selectedProperty.startYear)) - 1) * 100)}%` 
                  }
                ].map((stat, i) => (
                  <div key={i} className="bg-primary/5 rounded-lg p-3">
                    <p className="text-muted-foreground text-xs">{stat.label}</p>
                    <p className="font-semibold text-lg">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PriceHistory;
