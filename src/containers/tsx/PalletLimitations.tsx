import React from "react";

const PalletLimitations: React.FC = () => {
  return (
    <>
      <h5 className="module__header">
        Ograniczenia wysokości i masy palety z ładunkiem:
      </h5>
      <div className="row module__row">
        <div className="col col-md-6">
          <label htmlFor="palletHeightLimit">Maksymalna wysokość (m)</label>
        </div>
        <div className="col col-md-6">
          <input type="number" id="palletHeightLimit" required />
        </div>
      </div>
      <div className="row module__row">
        <div className=" col col-md-6">
          <label htmlFor="palletMassLimit">Maksymalna masa (kg)</label>
        </div>
        <div className="col col-md-6">
          <input type="number" id="palletMassLimit" required />
        </div>
      </div>
    </>
  );
};

export default PalletLimitations;
