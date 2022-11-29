import React from "react";

const PalletDimensions: React.FC = () => {
  return (
    <>
      <h5 className="module__header">Wymiary i masa palety:</h5>
      <div className="row module__row">
        <div className="col col-md-6">
          <label htmlFor="palletLength">Długość (m)</label>
        </div>
        <div className="col col-md-6">
          <input type="number" id="palletLength" required />
        </div>
      </div>
      <div className="row module__row">
        <div className=" col col-md-6">
          <label htmlFor="palletWidth">Szerokość (m)</label>
        </div>
        <div className="col col-md-6">
          <input type="number" id="palletWidth" required />
        </div>
      </div>
      <div className="row module__row">
        <div className="col col-md-6">
          <label htmlFor="palletHeight">Wysokość (m)</label>
        </div>
        <div className="col col-md-6 ">
          <input type="number" id="palletHeight" required />
        </div>
      </div>
      <div className="row module__row">
        <div className="col col-md-6">
          <label htmlFor="palletMass">Masa (kg)</label>
        </div>
        <div className="col col-md-6">
          <input type="number" id="palletMass" required />
        </div>
      </div>
    </>
  );
};

export default PalletDimensions;
