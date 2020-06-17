import React from 'react';
import { data } from '../util/mocks/data'
import '../style/studies.css'


const ListStudies = () => {
    return (
      <div className="row studies-color d-flex justify-content-center mt-5 mb-5 overf">
        {data.studies.map((inf, index) => {
          return (
            <div key={index} className="col-lg-4">
              <div className="d-flex justify-content-center">
                <img src={inf.img} alt="icono estudios" />
              </div>
              <ul className="list-unstyled contenido-lista mt-3 mb-4">
                <li className="text-studies">{inf.name}</li>
                <li className="text-studies">{inf.nameAcademia}</li>
                <li className="text-studies">{inf.typeStudy}</li>
                <a
                  className="link-studies text-decoration-none"
                  target="_blank"
                  href={inf.ref}
                >
                  {" "}
                  Conocer <span>🔗</span>
                </a>
              </ul>
            </div>
          );
        })}
      </div>
    );
}
export default ListStudies

