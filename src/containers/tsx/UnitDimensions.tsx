import React from "react";

const UnitDimensions: React.FC = () => {
  return (
    <>
      <h5 className="module__header">
        Wymiary i masa opakowania jednostkowego:
      </h5>
      <div className="row module__row">
        <div className="col col-md-6">
          <label htmlFor="unitLength">Długość (m)</label>
        </div>
        <div className="col col-md-6">
          <input type="number" id="unitLength" required />
        </div>
      </div>
      <div className="row module__row">
        <div className=" col col-md-6">
          <label htmlFor="unitWidth">Szerokość (m)</label>
        </div>
        <div className="col col-md-6">
          <input type="number" id="unitWidth" required />
        </div>
      </div>
      <div className="row module__row">
        <div className="col col-md-6">
          <label htmlFor="unitHeight">Wysokość (m)</label>
        </div>
        <div className="col col-md-6 ">
          <input type="number" id="unitHeight" required />
        </div>
      </div>
      <div className="row module__row">
        <div className="col col-md-6">
          <label htmlFor="unitMass">Masa (kg)</label>
        </div>
        <div className="col col-md-6">
          <input type="number" id="unitMass" required />
        </div>
      </div>
    </>
  );
};

export default UnitDimensions;
