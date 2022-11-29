import React from "react";

const LorryDimensions: React.FC = () => {
  return (
    <>
      <h5 className="module__header">
        Wymiary przestrzeni ładunkowej pojazdu:
      </h5>
      <div className="row module__row">
        <div className="col col-md-6">
          <label htmlFor="lorryLength">Długość (m)</label>
        </div>
        <div className="col col-md-6">
          <input type="number" id="lorryLength" required />
        </div>
      </div>
      <div className="row module__row">
        <div className=" col col-md-6">
          <label htmlFor="lorryWidth">Szerokość (m)</label>
        </div>
        <div className="col col-md-6">
          <input type="number" id="lorryWidth" required />
        </div>
      </div>
      <div className="row module__row">
        <div className="col col-md-6">
          <label htmlFor="lorryHeight">Wysokość (m)</label>
        </div>
        <div className="col col-md-6">
          <input type="number" id="lorryHeight" required />
        </div>
      </div>
    </>
  );
};

export default LorryDimensions;
