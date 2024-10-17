import React from "react";
import "./help.css";

const HelpPage = () => {
  return (
    <div className="help-page container mt-5">
      <div className="help-page">
  <h2 className="page-title">Farmer's Help Center</h2>
</div>

      {/* Section 1: Common Problems and Solutions */}
      <div className="section-block common-problems mb-5">
        <div className="row">
          <div className="col-md-6 order-md-2">
            <img
              src="/assets/farming-solutions.jpg"
              alt="Farming Solutions"
              className="img-fluid section-img rounded shadow-lg"
            />
          </div>
          <div className="col-md-6 order-md-1">
            <div className="section-content">
              <h3 className="section-title text-center mb-4">Common Farming Problems and Solutions</h3>

              <div className="faq-item">
                <h4 className="faq-title text-center">1. How to Increase Profitability?</h4>
                <p>Farmers can increase profitability through a variety of methods:</p>
                <ul className="solution-list">
                  <li><strong>Diversification:</strong> Growing multiple crops, including high-value crops like fruits and vegetables alongside staples, increases income.</li>
                  <li><strong>Modern Equipment:</strong> Using tractors, harvesters, and irrigation systems improves efficiency, reduces labor costs, and increases yield.</li>
                  <li><strong>Precision Farming:</strong> GPS and soil sensors can monitor soil conditions, water levels, and fertilizers to minimize waste and boost productivity.</li>
                  <li><strong>Government Schemes:</strong> Avail subsidies and grants from agricultural schemes such as PM-Kisan, providing financial support for new technologies.</li>
                </ul>
              </div>

              <div className="faq-item">
                <h4 className="faq-title text-center">2. How to Avoid Crop Diseases?</h4>
                <p>To prevent crop diseases:</p>
                <ul className="solution-list">
                  <li><strong>Plant Resistant Varieties:</strong> Choose crop varieties that are naturally resistant to common pests and diseases in the region.</li>
                  <li><strong>Proper Crop Spacing:</strong> Avoid overcrowding to ensure good air circulation, reducing the risk of fungal diseases.</li>
                  <li><strong>Use Organic Pest Control:</strong> Introduce natural predators, like ladybugs, to control pests without using harmful chemicals.</li>
                  <li><strong>Crop Rotation:</strong> Rotate crops regularly to prevent the buildup of pathogens and pests in the soil.</li>
                </ul>
              </div>

              <div className="faq-item">
                <h4 className="faq-title text-center">3. Best Practices for Soil Management?</h4>
                <p>Healthy soil leads to better crop yields. Implement these practices:</p>
                <ul className="solution-list">
                  <li><strong>Regular Soil Testing:</strong> Monitor nutrient levels, pH, and organic matter to determine the exact needs of your soil.</li>
                  <li><strong>Organic Fertilizers:</strong> Use compost or manure to naturally enrich the soil and improve its structure over time.</li>
                  <li><strong>Drip Irrigation:</strong> Implement drip irrigation to maintain optimal moisture levels without waterlogging, reducing the risk of root diseases.</li>
                  <li><strong>Cover Crops:</strong> Grow cover crops such as legumes during the offseason to improve soil structure and nutrient content.</li>
                </ul>
              </div>

              <div className="faq-item">
                <h4 className="faq-title text-center">4. How to Reduce Fertilizer Costs?</h4>
                <p>Fertilizer costs can be reduced through efficient usage:</p>
                <ul className="solution-list">
                  <li><strong>Precision Application:</strong> Use precision agriculture tools to apply fertilizers only where needed, preventing overuse and waste.</li>
                  <li><strong>Composting:</strong> Create and use organic compost from farm waste, which is a cost-effective and environmentally friendly fertilizer alternative.</li>
                  <li><strong>Split Fertilizer Application:</strong> Apply fertilizers in smaller doses during critical growth stages rather than all at once.</li>
                  <li><strong>Integrated Nutrient Management (INM):</strong> Combine organic and inorganic fertilizers to optimize plant growth while minimizing chemical use.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Disease Prevention and Management */}
      <div className="section-block disease-prevention mb-5">
        <div className="row">
          <div className="col-md-6">
            <img
              src="/assets/crop-disease-prevention.jpg"
              alt="Disease Prevention"
              className="img-fluid section-img rounded shadow-lg"
            />
          </div>
          <div className="col-md-6">
            <div className="section-content">
              <h3 className="section-title text-center mb-4">Disease Prevention and Management</h3>
              <p>Follow these steps to manage and prevent crop diseases:</p>
              <ul className="solution-list">
                <li><strong>Resistant Varieties:</strong> Always select crop varieties that are resistant to common diseases.</li>
                <li><strong>Sanitize Tools:</strong> Regularly clean farming tools to avoid transferring pathogens between fields.</li>
                <li><strong>Water Management:</strong> Avoid overwatering as it can promote fungal growth; use drip irrigation for better control.</li>
                <li><strong>Pesticides:</strong> If necessary, use natural or organic pesticides to control outbreaks while keeping the soil healthy.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: Profit-Boosting Strategies */}
      <div className="section-block profit-boosting mb-5">
        <div className="row">
          <div className="col-md-6 order-md-2">
            <img
              src="/assets/profit-boosting.jpg"
              alt="Profit Boosting"
              className="img-fluid section-img rounded shadow-lg"
            />
          </div>
          <div className="col-md-6 order-md-1">
            <div className="section-content">
              <h3 className="section-title text-center mb-4">Profit-Boosting Strategies</h3>
              <p>Increase your farm’s profitability by:</p>
              <ul className="solution-list">
                <li><strong>Implementing Precision Agriculture:</strong> Invest in technology such as soil sensors and drones to maximize resource use and minimize waste.</li>
                <li><strong>Growing High-Value Crops:</strong> Supplement staple crops with high-value items like fruits, vegetables, or flowers to diversify income.</li>
                <li><strong>Marketing Direct to Consumers:</strong> Participate in local markets or offer subscription services for organic produce to get higher returns.</li>
                <li><strong>Government Subsidies:</strong> Research and apply for agricultural subsidies and grants that support innovation and modernization.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;