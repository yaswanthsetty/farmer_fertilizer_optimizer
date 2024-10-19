from flask import Flask, request, jsonify
import joblib
import pandas as pd

app = Flask(__name__)

# Load the trained model
model = joblib.load('fertilizer_model.pkl')

# Create a route for predictions
@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()  # Get the input data from the frontend

    # Create a DataFrame for prediction
    df = pd.DataFrame({
        'Temparature': [data['Temparature']],  # Updated key
        'Humidity': [data['Humidity']],        # Updated key
        'Moisture': [data['Moisture']],        # Updated key
        'Soil Type': [data['SoilType']],       # Updated key
        'Crop Type': [data['CropType']],       # Updated key
        'Nitrogen': [data['Nitrogen']],        # Updated key
        'Potassium': [data['Potassium']],       # Updated key
        'Phosphorous': [data['Phosphorous']]   # Updated key
    })
    
    # Predict the fertilizer
    prediction = model.predict(df)
    
    # Return the prediction result as a JSON response
    return jsonify({'predictedFertilizer': prediction[0]})

if __name__ == '__main__':
    app.run(debug=True)
