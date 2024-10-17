import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/mainpage';

import MainPage from './pages/substianble/main';
import FertilizerQuantityForm from './pages/quantity';

import Idea1 from './pages/substianble/idea1';
import Idea2 from './pages/substianble/idea2';
import Idea3 from './pages/substianble/idea3';
import HelpPage from './help';
import SoilTestForm from './pages/soildata';
import LandingPage from './pages/landing/landing';
import LanguageSwitcher from './Languageswitcher';
import  { SignIn } from './pages/signin';
import Water from './water';
//import DataOpti from './pages/dataopti';
import { SignUp } from './pages/signup';
//import MachineLearningAnalysis from './pages/analysis';
import ForgotPassword from './pages/updatepassword/forgot';
//import FertilizerRecommendation from './pages/recomm';
import About from './about';
import Income from './pages/income';
import PredictionForm from "./pages/PredictionForm";
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/signin" element={<SignIn />} />
                {/* <Route path="/soilhealth" element={<SoilDataForm />} /> */}
                { <Route path="/waterconservation" element={<Water />} />}
                <Route path="/machine-learning-analysis" element={<SoilTestForm />} />

                <Route path="/home" element={<HomePage />} />
                <Route path="/" element={<LandingPage />} />
                <Route path="/forgot" element={<ForgotPassword />} />
                <Route path="/crop-yield" element={<Income />} />
                <Route path="/help" element={<HelpPage />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/predict" element={<PredictionForm />} />
                {/* <Route path="/ferti" element={<FertilizerRecommendation />} /> */}
                <Route path="/about" element={<About />} />
                <Route path="/language" element={<LanguageSwitcher />} />

                <Route path="/sustainable-agriculture" element={<MainPage />} />
                <Route path="/idea1" element={<Idea1 />} />
                <Route path="/idea2" element={<Idea2 />} />
                <Route path="/idea3" element={<Idea3 />} />
                <Route path="/data-driven-solution" element={<FertilizerQuantityForm />} />
            </Routes>
        </Router>
    );
}

export default App;
