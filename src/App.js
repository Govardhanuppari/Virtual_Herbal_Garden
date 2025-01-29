import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import TraditionalHealingSystems from "./components/TraditionalHealingSystems";
import PlantsPage from "./pages/PlantsPage"; // New PlantsPage
import DiseasesPage from "./pages/DiseasesPage"; // New DiseasesPage
import SupportSection from "./components/SupportSection";
import Login from "./components/Login";
import Signup from "./components/Signup";
import "./styles.css";

const App = () => {
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showSignupModal, setShowSignupModal] = useState(false);

    const handleLoginClick = () => {
        setShowLoginModal(true);
        setShowSignupModal(false); // Ensure Signup modal is closed if Login is clicked
    };

    const handleSignupClick = () => {
        setShowSignupModal(true);
        setShowLoginModal(false); // Ensure Login modal is closed if Signup is clicked
    };

    const closeModal = () => {
        setShowLoginModal(false);
        setShowSignupModal(false);
    };

    return (
        <Router>
            <div>
                <Header onLoginClick={handleLoginClick} />

                <main>
                    <Routes>
                        {/* Home Page */}
                        <Route
                            path="/"
                            element={
                                <>
                                    <HeroSection />
                                    <SupportSection />
                                    <TraditionalHealingSystems />
                                </>
                            }
                        />

                        {/* Plants Page */}
                        <Route path="/plants" element={<PlantsPage />} />

                        {/* Diseases Page */}
                        <Route path="/diseases" element={<DiseasesPage />} />
                    </Routes>
                </main>

              
                
                {/* Footer */}
                <footer>© 2024 Virtual Herbal Garden</footer>
            </div>
        </Router>
    );
};

export default App;
