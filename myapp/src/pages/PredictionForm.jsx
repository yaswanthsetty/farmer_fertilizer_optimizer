// File: `myapp/src/pages/PredictionForm.js`
import React, { useState } from 'react';
import axios from 'axios';

const PredictionForm = () => {
    const [formData, setFormData] = useState({
        Nitrogen: '',
        Phosphorous: '',
        Potassium: '',
        SoilType: '',
        CropType: '',
        Temperature: '',
        Humidity: '',
        Moisture: ''
    });

    const [prediction, setPrediction] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/predict', formData);
            setPrediction(response.data.predicted_fertilizer);
        } catch (error) {
            console.error('Error making prediction:', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {Object.keys(formData).map((key) => (
                    <div key={key}>
                        <label>{key}</label>
                        <input
                            type="text"
                            name={key}
                            value={formData[key]}
                            onChange={handleChange}
                        />
                    </div>
                ))}
                <button type="submit">Predict</button>
            </form>
            {prediction && <div>Predicted Fertilizer: {prediction}</div>}
        </div>
    );
};

export default PredictionForm;