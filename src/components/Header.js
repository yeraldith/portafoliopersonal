import React from "react";
import { Link } from "react-router-dom";
import '../style/header.css'

const Header = () => {
  return (
    //Inicio de header
    <header className="container">
        <Link className="nav-link-home text-decoration-none" to="/">
          Yeraldith Camargo Ayala
        </Link>
    </header>
  );
};
export default Header;

