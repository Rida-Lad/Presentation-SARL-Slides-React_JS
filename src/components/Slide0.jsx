import React from "react";
import "./Slide0.css";

const Slide0 = () => {
  return (
    <div className="slide-section slide0-container">
      {/* Main Title */}
      <h1 className="main-title">L'entreprise SARL</h1>

      {/* Presentation Axes */}
      <div className="axes-grid">
        <div className="axis-card">
          <h3 className="axis-title">Introduction au SARL</h3>
        </div>
        <div className="axis-card">
          <h3 className="axis-title">Les étapes de création d'une SARL</h3>
        </div>
        <div className="axis-card">
          <h3 className="axis-title">Avantages et inconvénients</h3>
        </div>
        <div className="axis-card">
          <h3 className="axis-title">Statistiques et Experts</h3>
        </div>
        <div className="axis-card">
          <h3 className="axis-title">Conclusion</h3>
        </div>
      </div>

      {/* Presenters Section */}
      <div className="presenters-container">
        <h3 className="presenters-title">Présentée par :</h3>
        <div className="presenters-names">
          <p className="presenter-name">SALIMA BENGHADDI</p>
          <p className="presenter-name">HAJAR BENSIKA</p>
        </div>
        <h3 className="presenters-title">Présenté par :</h3>
        <p className="presenter-name">RIDA LADIB</p>
      </div>
    </div>
  );
};

export default Slide0;