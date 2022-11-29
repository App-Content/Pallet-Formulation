import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <>
      <div className="row text-center">
        <h1 className="home__header">kaklulator ładunku paletowego</h1>
      </div>
      <div className="row home__section text-center">
        <div className="col-md-4 home__section--left">
          <img
            src={require("../../picts/pallet_unit.png")}
            className=" pallet__photo img-fluid"
            alt="Pallet Unit"
          />
        </div>
        <div className="col-md-8 home__section--right d-flex align-items-center">
          <p>
            Aplikacja pomaga sformować paletowe jednostki ładunkowe z towarem w
            opakowaniach jednostkowych. Określa także liczbę samochodów
            potrzebnych do przewiezienia ładunku.
          </p>
        </div>
      </div>

      <Link to="/Form">
        <button type="button" className="btn btn-success begin__btn">
          Rozpocznij
        </button>
      </Link>
    </>
  );
};

export default Home;
