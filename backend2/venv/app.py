from flask import Flask, request, jsonify
import joblib
import numpy as np

app = Flask(__name__)

# Load the trained model and scaler
model = joblib.load('fertilizer_model.pkl')
scaler = joblib.load('scaler.pkl')

# Define a route for predictions
@app.route('/api/predict', methods=['POST'])
def predict():
    data = request.json
    
    # Extract features from request
    nitrogen = float(data['Nitrogen'])
    phosphorous = float(data['Phosphorous'])
    potassium = float(data['Potassium'])
    soil_type = data['Soil Type']
    crop_type = data['Crop Type']
    temperature = float(data['Temperature'])
    humidity = float(data['Humidity'])
    moisture = float(data['Moisture'])
    
    # Encode categorical variables (soil type and crop type)
    soil_type_map = {'Sandy': 0, 'Clayey': 1, 'Loamy': 2}
    crop_type_map = {'Wheat': 0, 'Rice': 1, 'Maize': 2, 'Cotton': 3}
    
    soil_type_encoded = soil_type_map[soil_type]
    crop_type_encoded = crop_type_map[crop_type]
    
    # Create a feature array
    features = np.array([[nitrogen, phosphorous, potassium, temperature, humidity, moisture, soil_type_encoded, crop_type_encoded]])
    
    # Scale the features
    features_scaled = scaler.transform(features)
    
    # Make prediction using the trained model
    predicted_fertilizer = model.predict(features_scaled)[0]
    
    # Return the prediction as JSON
    return jsonify({'predicted_fertilizer': predicted_fertilizer})

if __name__ == '__main__':
    app.run(port=5001, debug=True)
