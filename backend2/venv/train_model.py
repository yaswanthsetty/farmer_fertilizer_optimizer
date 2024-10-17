import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score
import joblib

# Load your dataset
data = pd.read_csv(r'C:\Users\HARSHITH RAJU\OneDrive\Desktop\Fertilizer Prediction 1.csv')

# Separate features and target
X = data[['Nitrogen', 'Phosphorous', 'Potassium', 'Soil Type', 'Crop Type', 'Temparature', 'Humidity ', 'Moisture']]
y = data['Fertilizer Name']  # Replace 'Fertilizer' with the actual name of the target column in your dataset

# Convert categorical columns to numeric using one-hot encoding
X = pd.get_dummies(X, columns=['Soil Type', 'Crop Type'], drop_first=True)

# Split the dataset into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Normalize the feature values
scaler = StandardScaler()
X_train = scaler.fit_transform(X_train)
X_test = scaler.transform(X_test)

# Train a Random Forest model
model = RandomForestClassifier()
model.fit(X_train, y_train)

# Test the model and print the accuracy
y_pred = model.predict(X_test)
accuracy = accuracy_score(y_test, y_pred)
print(f"Model Accuracy: {accuracy * 100:.2f}%")

# Save the trained model and scaler
joblib.dump(model, 'fertilizer_model.pkl')
joblib.dump(scaler, 'scaler.pkl')

print("Model and scaler saved successfully!")
