const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const { PythonShell } = require('python-shell');  // Import python-shell
const authRoutes = require('./routes/auth');
const predictRoutes = require('./routes/predict');

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

  // Prepare the input data to be passed to the Python script
  const data = JSON.stringify({
    Nitrogen,
    Phosphorous,
    Potassium,
    SoilType,
    CropType,
    Temperature,
    Humidity,
    Moisture,
  });

  // Execute the Python script with input arguments
  PythonShell.run('predict.py', { args: [data], timeout:60000 }, (err, result) => {
    if (err) {
      console.error('Error running Python script:', err);
      return res.status(500).json({ error: 'Error during prediction!' });
    }

    console.log('Raw result from Python script:', result);
    
    try {
      // Parse and send the prediction result
      const prediction = JSON.parse(result[0]); // Assuming the first item in the result array is the output
      console.log('Parsed prediction:', prediction);
      res.json({ predictedFertilizer: prediction });
    } catch (parseError) {
      console.error('Error parsing prediction result:', parseError);
      return res.status(500).json({ error: 'Error parsing prediction result!' });
    }
  });
});

// Routes
app.use('/api', predictRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});