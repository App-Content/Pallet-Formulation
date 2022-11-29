import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <>
      <div className="row navbar__ribbon--smMore">
        <ul className="nav justify-content-center d-none d-sm-flex">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Form" className="nav-link">
              Formularz
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Scores" className="nav-link">
              Wyniki
            </Link>
          </li>
          <li className="nav-item nav__header--last">
            <button type="button" className="btn btn-dark">
              Tryb ciemny
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
