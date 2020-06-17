import React from "react";
import { data } from "../util/mocks/data";
import '../style/contacto.css'

const Contacto = () => {
  return (
    <section className="contacto">
      {data.contacto.map((ref, index1) => {
        return (
          <ul key={index1}>
              <a
                rel="stylesheet"
                href={ref.ref}
                target="_blank"
              >
                <img className="contacto-img" src={ref.icon} alt="icono red social" />
              </a>
          </ul>
        );
      })}
    </section>
  );
};
export default Contacto;
