const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const { PythonShell } = require('python-shell');  // Import python-shell
const authRoutes = require('./routes/auth');

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000',  // Allow requests from this origin
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
}));

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use('/api/auth', authRoutes);

// Prediction route
app.post('/api/predict', (req, res) => {
  console.log('Prediction API called');
  console.log('Request data:', req.body);

  const { Nitrogen, Phosphorous, Potassium, SoilType, CropType, Temperature, Humidity, Moisture } = req.body;

  // Prepare the data for the Python script
  const data = {
    Nitrogen,
    Phosphorous,
    Potassium,
    SoilType,
    CropType,
    Temperature,
    Humidity,
    Moisture,
  };

  // Execute the Python script
  PythonShell.run('predict.py', { args: [JSON.stringify(data)] }, (err, result) => {
    if (err) {
      console.error('Error running Python script:', err);
      return res.status(500).json({ error: 'Error during prediction!' });
    }

    // Parse and send the prediction result
    const prediction = JSON.parse(result[0]);
    console.log('Prediction result:', prediction);
    res.json({ predicted_fertilizer: prediction });
  });
});

//change
const bodyParser = require('body-parser');
const predictRoutes = require('./routes/predict');

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', predictRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
