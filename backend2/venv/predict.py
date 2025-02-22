import sys
import json
import joblib
import numpy as np

# Load the trained model and scaler
model = joblib.load('fertilizer_model.pkl')
scaler = joblib.load('scaler.pkl')

# Get the data from command line arguments
data = json.loads(sys.argv[1])

# Extract features from the input data
nitrogen = float(data['Nitrogen'])
phosphorous = float(data['Phosphorous'])
potassium = float(data['Potassium'])
soil_type = data['SoilType']
crop_type = data['CropType']
temperature = float(data['Temperature'])
humidity = float(data['Humidity'])
moisture = float(data['Moisture'])

# Encode categorical variables
soil_type_map = {'Sandy': 0, 'Clayey': 1, 'Loamy': 2}
crop_type_map = {'Wheat': 0, 'Rice': 1, 'Maize': 2, 'Cotton': 3}

soil_type_encoded = soil_type_map.get(soil_type, -1)  # Default to -1 if not found
crop_type_encoded = crop_type_map.get(crop_type, -1)  # Default to -1 if not found

# Create a feature array
features = np.array([[nitrogen, phosphorous, potassium, temperature, humidity, moisture, soil_type_encoded, crop_type_encoded]])

# Scale the features
features_scaled = scaler.transform(features)

# Make prediction
predicted_fertilizer = model.predict(features_scaled)[0]

# Output the prediction
print(json.dumps(predicted_fertilizer))
