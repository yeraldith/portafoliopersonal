import React from "react";
import { data } from "../util/mocks/data";
import bannerIncio from '../images/bannerInicio.png'
import "../style/Proyects.css";

const Proyects = () => {
  return (
    <section id="Proyectos" className="container-fluid">
      <h2 className="studies-tittle">Mis Proyectos</h2>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src={bannerIncio}
              alt="banner"
                          />
          </div>
          {data.proyects.map((proyect, index) => {
            return (
              <div key={index} className="carousel-item">
                <a href={proyect.ref} target="_blank" alt="banner">
                  <img className="d-block w-100" src={proyect.img} />
                </a>
              </div>
            );
          })}
          <a
            className="carousel-control-prev"
            href="#carouselExampleFade"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleFade"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </section>
  );
};
export default Proyects;
