import pandas as pd
import joblib
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from sklearn.ensemble import RandomForestClassifier

# Load the dataset
try:
    data = pd.read_csv(r'C:\Users\Yaswanth\OneDrive\Desktop\Farmer-main\dataset\Fertilizer Prediction.csv')
    print("Data loaded successfully")
except Exception as e:
    print(f"Error loading data: {e}")

# Ensure that data is defined
if 'data' in locals():
    print(data.head())  # Show the first few rows to ensure it's loaded properly

    # Select features and target
    X = data[['Nitrogen', 'Phosphorous', 'Potassium', 'Temparature', 'Humidity', 'Moisture', 'Soil Type', 'Crop Type']]
    y = data['Fertilizer Name']

    # One-hot encode categorical variables
    X = pd.get_dummies(X, columns=['Soil Type', 'Crop Type'], drop_first=True)
    print("Shape of training features:", X.shape)
    
    # Split the dataset
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    # Encode 'Fertilizer Name' into numerical values
    label_encoder = LabelEncoder()
    y_train_encoded = label_encoder.fit_transform(y_train)

    # Initialize and train the model
    model = RandomForestClassifier()
    model.fit(X_train, y_train_encoded)

    # Save the model and label encoder with error handling
    try:
        print(model)
        joblib.dump(model, r'C:\Users\Yaswanth\OneDrive\Desktop\Farmer-main\backend2\fertilizer_model.pkl')
        print("Model saved successfully.")
    except Exception as e:
        print(f"Error saving model: {e}")

    try:
        print(label_encoder.classes_)
        joblib.dump(label_encoder, r'C:\Users\Yaswanth\OneDrive\Desktop\Farmer-main\backend2\label_encoder.pkl')
        print("Label encoder saved successfully.")
    except Exception as e:
        print(f"Error saving label encoder: {e}")

    # Continue with your code...
else:
    print("Data not loaded, please check the previous error.")
