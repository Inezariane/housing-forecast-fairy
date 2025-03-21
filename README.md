
# HomeValueAI

HomeValueAI is a comprehensive property valuation application that uses machine learning to predict house prices based on various property features and location data.

## Features

- 🏠 AI-powered property price prediction
- 📊 Interactive price history visualization
- 🔍 Detailed property analysis
- 📱 Responsive design for all devices
- 🔒 Modern and intuitive user interface

## Tech Stack

### Frontend
- React with TypeScript
- Tailwind CSS
- shadcn/ui component library
- Recharts for data visualization
- React Router for navigation

### Backend
- Node.js with Express
- TensorFlow.js for model inference
- RESTful API architecture

### Machine Learning
- Python with TensorFlow for model training
- scikit-learn for data preprocessing
- Model conversion to TensorFlow.js format

## Getting Started

See [INTEGRATION.md](INTEGRATION.md) for detailed setup and integration instructions.

## Project Structure

```
home-value-ai/
├── src/                   # Frontend source code
│   ├── components/        # React components
│   ├── pages/             # App pages
│   ├── utils/             # Utility functions
│   └── ...
├── server/                # Node.js backend
│   ├── controllers/       # API controllers
│   ├── models/            # Model loaders
│   ├── routes/            # API routes
│   ├── trained_models/    # Saved ML models
│   └── utils/             # Backend utilities
└── model_training/        # Python model training
    ├── data/              # Training data
    └── train_model.py     # Training script
```

## License

[MIT](LICENSE)
