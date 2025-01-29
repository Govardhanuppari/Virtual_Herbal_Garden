import React, { useState } from 'react';
import './PlantCard.css';

const PlantCard = ({ plant }) => {
    const [showBenefits, setShowBenefits] = useState(false);

    const toggleBenefits = () => {
        setShowBenefits(!showBenefits);
    };

    return (
        <div className="plant-card">
            <img src={plant.image} alt={plant.name} />
            <div className="plant-info">
                <h3>{plant.name} ({plant.scientificName})</h3>
                <p><strong>Known For:</strong> {plant.knownFor}</p>
                <h4>Medicinal Uses:</h4>
                <ul>
                    {plant.medicinalUses.map((use, index) => (
                        <li key={index}>{use}</li>
                    ))}
                </ul>
                <button onClick={toggleBenefits} className="benefits-link">
                    {showBenefits ? 'Hide Benefits' : 'Show Benefits'}
                </button>
                {showBenefits && (
                    <div className="plant-benefits">
                        <h4>Additional Benefits:</h4>
                        <ul>
                            {plant.additionalBenefits.map((benefit, index) => (
                                <li key={index}>
                                    <strong>{benefit.title}:</strong> {benefit.description}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PlantCard;
