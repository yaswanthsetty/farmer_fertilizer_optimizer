import React from "react";
import "./recomm.css"; // Custom CSS file

const FertilizerRecommendation = () => {
  return (
    <div className="fertilizer-page container mt-5">
      <h2 className="text-center mb-4">Sustainable Fertilizer Recommendation</h2>
      
      <div className="input-form card p-4 shadow">
        <form>
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="temperature" className="form-label">Temperature (°C)</label>
              <input type="number" className="form-control" id="temperature" placeholder="Enter temperature" />
            </div>
            <div className="col-md-6">
              <label htmlFor="humidity" className="form-label">Humidity (%)</label>
              <input type="number" className="form-control" id="humidity" placeholder="Enter humidity" />
            </div>
          </div>
          
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="moisture" className="form-label">Soil Moisture (%)</label>
              <input type="number" className="form-control" id="moisture" placeholder="Enter soil moisture" />
            </div>
            <div className="col-md-6">
              <label htmlFor="soilType" className="form-label">Soil Type</label>
              <select className="form-select" id="soilType">
                <option>Loamy</option>
                <option>Sandy</option>
                <option>Clay</option>
                <option>Silty</option>
              </select>
            </div>
          </div>
          
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="cropType" className="form-label">Crop Type</label>
              <select className="form-select" id="cropType">
                <option>Wheat</option>
                <option>Rice</option>
                <option>Maize</option>
                <option>Soybean</option>
              </select>
            </div>
            <div className="col-md-6">
              <label htmlFor="nitrogen" className="form-label">Nitrogen Content (N%)</label>
              <input type="number" className="form-control" id="nitrogen" placeholder="Enter nitrogen content" />
            </div>
          </div>
          
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="potassium" className="form-label">Potassium Content (K%)</label>
              <input type="number" className="form-control" id="potassium" placeholder="Enter potassium content" />
            </div>
            <div className="col-md-6">
              <label htmlFor="phosphorus" className="form-label">Phosphorus Content (P%)</label>
              <input type="number" className="form-control" id="phosphorus" placeholder="Enter phosphorus content" />
            </div>
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-success mt-3 px-5">Get Fertilizer Recommendation</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FertilizerRecommendation;