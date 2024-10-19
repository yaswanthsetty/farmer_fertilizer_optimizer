# Prediction code
import numpy as np
import joblib
import sys
import json

# Load the model and label encoder
try:
    model = joblib.load('fertilizer_model.pkl')
    label_encoder = joblib.load('label_encoder.pkl')
    print("Model and label encoder loaded successfully")
except Exception as e:
    print(f"Error loading model or label encoder: {e}")
    sys.exit()

def predict_fertilizer(nitrogen, phosphorous, potassium, temperature, humidity, moisture, soil_type, crop_type):
    # Define all soil types and crop types (based on your dataset)
    soil_types = ['black', 'red', 'clay', 'loamy', 'sandy']
    crop_types = ['maize', 'sugarcane', 'cotton', 'paddy', 'barley', 'ground nuts', 'oil seeds', 'pulses', 'millets']

    # Create one-hot encoded features for soil and crop types
    soil_type_encoded = [1 if soil_type == st else 0 for st in soil_types]  # Results in 5 features
    crop_type_encoded = [1 if crop_type == ct else 0 for ct in crop_types]  # Results in 10 features

    # Combine all input features
    input_features = [nitrogen, phosphorous, potassium, temperature, humidity, moisture] + soil_type_encoded + crop_type_encoded

    # Check if the number of features is correct
    print(f"Number of input features: {len(input_features)}")  # Debugging line
    if len(input_features) != 20:  # 6 basic features + 5 soil + 10 crop = 20 features
        raise ValueError(f"Expected 20 features, but got {len(input_features)}")

    # Reshape input for prediction
    input_reshaped = np.array(input_features).reshape(1, -1)

    # Predict the label
    try:
        predicted_label = model.predict(input_reshaped)
        print("Prediction successful")
    except Exception as e:
        print(f"Error during prediction: {e}")
        sys.exit()

    # Convert the label back to the fertilizer name
    predicted_fertilizer = label_encoder.inverse_transform(predicted_label)
    
    return predicted_fertilizer[0]

if __name__ == "__main__":
    if len(sys.argv) > 1:
        # Get the JSON input passed via the server
        try:
            data = json.loads(sys.argv[1])
            print(f"Received data: {data}")
        except Exception as e:
            print(f"Error loading JSON input: {e}")
            sys.exit()
    else:
        # Hardcoded example input for local testing
        data = {
            'Nitrogen': 90,
            'Phosphorous': 42,
            'Potassium': 43,
            'Temperature': 22.5,
            'Humidity': 80,
            'Moisture': 60,
            'SoilType': 'loamy',
            'CropType': 'maize'
        }

    # Extract values
    try:
        nitrogen = float(data['Nitrogen'])
        phosphorous = float(data['Phosphorous'])
        potassium = float(data['Potassium'])
        temperature = float(data['Temperature'])
        humidity = float(data['Humidity'])
        moisture = float(data['Moisture'])
        soil_type = data['SoilType'].lower()
        crop_type = data['CropType'].lower()
    except Exception as e:
        print(f"Error extracting input values: {e}")
        sys.exit()

    # Call prediction function
    try:
        predicted_fertilizer = predict_fertilizer(nitrogen, phosphorous, potassium, temperature, humidity, moisture, soil_type, crop_type)
        print(f"Predicted Fertilizer: {predicted_fertilizer}")
    except Exception as e:
        print(f"Error in prediction function: {e}")
        sys.exit()
        
    # Return the prediction as a JSON string
    print(json.dumps(predicted_fertilizer))