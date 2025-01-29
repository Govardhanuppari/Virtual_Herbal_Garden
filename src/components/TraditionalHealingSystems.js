// src/components/TraditionalHealingSystems.js
import React from 'react';
import '../styles.css'; // Ensure this file exists and is in the correct folder

// Import images directly
import AyurvedaImage from '../assets/Ayurveda1.jpg';
import YogaImage from '../assets/yoga.jpg';
import NaturopathyImage from '../assets/naturopathy.jpg';
import UnaniImage from '../assets/unani.jpg';
import SiddhaImage from '../assets/siddha.jpg';
import HomeopathyImage from '../assets/homeopathy.webp';

const TraditionalHealingSystems = () => {
    return (
        <section id="ayush" className="systems">
            <h2 className="section-title">Traditional Healing Systems</h2>
            <div className="systems">
                {/* Card for Ayurveda */}
                <div className="system-card">
                    <div className="card-image">
                        <img src={AyurvedaImage} alt="Ayurveda" />
                    </div>
                    <div className="card-content">
                        <h2>Ayurveda</h2>
                        <p>Ayurveda is a traditional system of medicine that originated in India thousands of years ago. It is based on the belief that the mind and body are interconnected.</p>
                    </div>
                </div>

                {/* Card for Yoga */}
                <div className="system-card">
                    <div className="card-content">
                        <h2>Yoga</h2>
                        <p>Yoga is a physical, mental, and spiritual practice that aims to promote balance and harmony in the body and mind. It includes postures, breathing exercises, and meditation.</p>
                    </div>
                    <div className="card-image">
                        <img src={YogaImage} alt="Yoga" />
                    </div>
                </div>

                {/* Card for Naturopathy */}
                <div className="system-card">
                    <div className="card-image">
                        <img src={NaturopathyImage} alt="Naturopathy" />
                    </div>
                    <div className="card-content">
                        <h2>Naturopathy</h2>
                        <p>Naturopathy is a holistic approach to healing that emphasizes natural remedies and the body's ability to heal itself. It incorporates diet, exercise, and lifestyle management.</p>
                    </div>
                </div>

                {/* Card for Unani */}
                <div className="system-card">
                    <div className="card-content">
                        <h2>Unani</h2>
                        <p>Unani medicine offers a holistic approach to health and well-being and takes into account the physical, mental, and emotional aspects of health.</p>
                    </div>
                    <div className="card-image">
                        <img src={UnaniImage} alt="Unani" />
                    </div>
                </div>

                {/* Card for Siddha */}
                <div className="system-card">
                    <div className="card-image">
                        <img src={SiddhaImage} alt="Siddha" />
                    </div>
                    <div className="card-content">
                        <h2>Siddha</h2>
                        <p>Siddha medicine focuses on maintaining a balance between the five elements of the body: earth, water, fire, air, and ether.</p>
                    </div>
                </div>

                {/* Card for Homeopathy */}
                <div className="system-card">
                    <div className="card-content">
                        <h2>Homeopathy</h2>
                        <p>Homeopathy is based on the principle that "like cures like" – a substance that causes symptoms in a healthy person can cure the same symptoms in a sick person.</p>
                    </div>
                    <div className="card-image">
                        <img src={HomeopathyImage} alt="Homeopathy" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TraditionalHealingSystems;
