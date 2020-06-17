import React from "react";
import '../style/Home.css'
import img from '../images/foto.jpg'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="color-fondo">
      <section className="color-intermedio"></section>
      <div className="fondo">
        <img className="imagen-perfil" src={img} alt="FotoYeraldith"></img>
      </div>
      <div className="contenido">
        <Link to="/portafolio" className="text-decoration-none">
          <button className="border-gradient">
            <i className="fas fa-lightbulb "> </i> Proyectos
          </button>
        </Link>
        <Link to="/portafolio" className="text-decoration-none">
          <button className="border-gradient">
            <i className="fas fa-user-check"></i> Perfil
          </button>
        </Link>
        <Link to="/portafolio" className="text-decoration-none">
          <button className="border-gradient">
            <i className="fas fa-info-circle"></i> Contacto
          </button>
        </Link>
      </div>
    </div>
  ); 
  };
export default Home;
