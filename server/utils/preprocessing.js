
const path = require('path');
const fs = require('fs');
const tf = require('@tensorflow/tfjs-node');

// Load feature map from file
let featureMap;
try {
  const featureMapPath = path.join(__dirname, '../trained_models/feature_map.json');
  featureMap = fs.existsSync(featureMapPath) 
    ? JSON.parse(fs.readFileSync(featureMapPath, 'utf8'))
    : {
        location_map: {
          'San Francisco, CA': 0,
          'New York, NY': 1,
          'Austin, TX': 2,
          'Seattle, WA': 3,
          'Chicago, IL': 4
        },
        property_type_map: {
          'single-family': 0,
          'condo': 1,
          'townhouse': 2,
          'multi-family': 3,
          'luxury': 4
        }
      };
} catch (error) {
  console.error('Error loading feature map:', error);
  // Fallback to default feature map
  featureMap = {
    location_map: {
      'San Francisco, CA': 0,
      'New York, NY': 1,
      'Austin, TX': 2,
      'Seattle, WA': 3,
      'Chicago, IL': 4
    },
    property_type_map: {
      'single-family': 0,
      'condo': 1,
      'townhouse': 2,
      'multi-family': 3,
      'luxury': 4
    }
  };
}

/**
 * Preprocess property data for model input based on the model trained in Python
 * @param {Object} property Property data
 * @param {Object} metadata Model metadata
 * @returns {Array} Preprocessed feature array
 */
exports.preprocessing = (property, metadata) => {
  try {
    // Extract values from property object
    const {
      squareFeet,
      bedrooms,
      bathrooms,
      location,
      yearBuilt,
      propertyType,
      lotSize = 0,
      hasGarage = false,
      hasPool = false
    } = property;

    // Normalize numerical features (simple normalization for demo purposes)
    // In production, we would use the scaler saved from Python
    const normalizedSquareFeet = squareFeet / 3000;
    const normalizedBedrooms = bedrooms / 6;
    const normalizedBathrooms = bathrooms / 4;
    const normalizedYearBuilt = (yearBuilt - 1900) / 123;
    const normalizedLotSize = lotSize / 10000;

    // One-hot encode location
    const locationVector = [];
    const locationKey = location.toLowerCase().trim();
    
    // Get the number of unique locations from metadata (subtracting 1 for the reference level)
    const locationMapEntries = Object.entries(featureMap.location_map);
    const numLocations = locationMapEntries.length - 1;
    
    // Initialize with all zeros
    for (let i = 0; i < numLocations; i++) {
      locationVector.push(0);
    }
    
    // Find the location index (skipping the reference level)
    for (const [loc, idx] of locationMapEntries) {
      if (idx > 0 && locationKey.includes(loc.toLowerCase())) {
        locationVector[idx - 1] = 1;
        break;
      }
    }

    // One-hot encode property type
    const propertyTypeVector = [];
    const propertyTypeKey = propertyType.toLowerCase().trim();
    
    // Get the number of unique property types from metadata (subtracting 1 for the reference level)
    const propertyTypeMapEntries = Object.entries(featureMap.property_type_map);
    const numPropertyTypes = propertyTypeMapEntries.length - 1;
    
    // Initialize with all zeros
    for (let i = 0; i < numPropertyTypes; i++) {
      propertyTypeVector.push(0);
    }
    
    // Find the property type index (skipping the reference level)
    for (const [type, idx] of propertyTypeMapEntries) {
      if (idx > 0 && propertyTypeKey.includes(type.toLowerCase())) {
        propertyTypeVector[idx - 1] = 1;
        break;
      }
    }

    // Binary features
    const garageFeature = hasGarage ? 1 : 0;
    const poolFeature = hasPool ? 1 : 0;

    // Combine all features
    const features = [
      normalizedSquareFeet,
      normalizedBedrooms,
      normalizedBathrooms,
      normalizedYearBuilt,
      normalizedLotSize,
      ...locationVector,
      ...propertyTypeVector,
      garageFeature,
      poolFeature
    ];

    console.log('Preprocessed features:', features);
    
    return features;
  } catch (error) {
    console.error('Error in preprocessing:', error);
    throw new Error('Failed to preprocess property data');
  }
};
