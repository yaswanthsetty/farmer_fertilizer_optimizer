import sys
import json
import joblib
import pandas as pd

# Define constants
MODEL_PATH = 'path_to_your_model/fertilizer_model.pkl'
ENCODERS_PATH = 'path_to_your_model/label_encoders.pkl'
CATEGORICAL_COLUMNS = ['crop type', 'season', 'state']


# Load the model and label encoders
def load_model(model_path):
    return joblib.load(model_path)


def load_label_encoders(encoders_path):
    return joblib.load(encoders_path)


# Parse input data
def parse_input_data(json_input):
    return json.loads(json_input)


# Encode categorical features
def encode_categorical_features(input_data, label_encoders):
    for column in CATEGORICAL_COLUMNS:
        input_data[column] = label_encoders[column].transform([input_data[column]])[0]
    return input_data


# Create DataFrame
def create_input_dataframe(input_data):
    return pd.DataFrame([input_data])


# Make prediction
def make_prediction(model, input_df):
    return model.predict(input_df)


# Main execution
def main():
    input_data = parse_input_data(sys.argv[1])
    model = load_model(MODEL_PATH)
    label_encoders = load_label_encoders(ENCODERS_PATH)
    encoded_input_data = encode_categorical_features(input_data, label_encoders)
    input_df = create_input_dataframe(encoded_input_data)
    prediction = make_prediction(model, input_df)
    print(prediction[0])


if __name__ == "__main__":
    main()