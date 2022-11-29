import React from "react";
import UnitDimensions from "./UnitDimensions";
import PalletDimensions from "./PalletDimensions";
import PalletLimitations from "./PalletLimitations";
import LorryDimensions from "./LorryDimensions";
import { Link } from "react-router-dom";

const Form: React.FC = () => {
  return (
    <>
      <div className="row form__header text-center">
        <h3 className="form__header--text"> wpisz potrzebne dane</h3>
      </div>
      <form>
        <div className="row form__section--upper">
          <div className="col-lg-6 form__section--upperLeft">
            <UnitDimensions />
          </div>
          <div className="col-lg-6 form__section--upperRight">
            <PalletDimensions />
          </div>
        </div>
        <div className="row form__section--lower">
          <div className="col-lg-6 form__section--lowerLeft">
            <PalletLimitations />
          </div>
          <div className="col-lg-6 form__section--lowerRight">
            <LorryDimensions />
          </div>
        </div>

        <input
          type="submit"
          value="Oblicz"
          className="submitBtn btn btn-success"
        />
      </form>
    </>
  );
};

export default Form;
