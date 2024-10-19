import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/mainpage';
import ContactForm from './pages/contact';
import MainPage from './pages/substianble/main';
import FertilizerQuantityForm from './pages/quantity';
import SoilTestForm from './SoilTestForm';
import Idea1 from './pages/substianble/idea1';
import Idea2 from './pages/substianble/idea2';
import Idea3 from './pages/substianble/idea3';
import HelpPage from './help';
// import SoilTestForm from './pages/soildata';
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
import FeedbackForm from './FeedBack';
import Income from './pages/income';
import PredictionForm from "./pages/PredictionForm";
// import GoogleTranslate from './GoogleTranslate';
function App() {
    return (
        <Router>
            {/* <GoogleTranslate /> */}
            <Routes>
                <Route path="/signin" element={<SignIn />} />
                {/* <Route path="/soilhealth" element={<SoilDataForm />} /> */}
                { <Route path="/waterconservation" element={<Water />} />}
                <Route path="/machine-learning-analysis" element={<SoilTestForm />} />
                <Route path='/FeedBack' element={<FeedbackForm/>}/>
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
                <Route path="/contacts" element={<ContactForm/>}/>
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
