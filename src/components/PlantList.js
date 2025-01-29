import React, { useState } from 'react';
import PlantCard from './PlantCard';
import './PlantList.css';

const PlantList = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const plants = [
        {
            name: "Neem",
            scientificName: "Azadirachta indica",
            image: "neem.jpg",
            knownFor: "Antibacterial, antifungal, and anti-inflammatory properties.",
            medicinalUses: [
                "Treats skin conditions like acne and eczema.",
                "Boosts immunity and treats ulcers."
            ],
            additionalBenefits: [
                { title: "Treats Acne", description: "Neem's anti-inflammatory properties help reduce acne." },
                { title: "Nourishes Skin", description: "Rich in Vitamin E, neem repairs skin cells." }
                // Add more as needed
            ]
        },
        // Add more plant data
    ];

    const filteredPlants = plants.filter(plant =>
        plant.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <section id="plant-list" className="plant-list">
            <input
                type="text"
                placeholder="Search for plants"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="search-bar"
            />
            <div className="plants-container">
                {filteredPlants.map((plant, index) => (
                    <PlantCard key={index} plant={plant} />
                ))}
            </div>
        </section>
    );
};

export default PlantList;
