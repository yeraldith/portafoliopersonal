import React from "react";
import Lottie from "react-lottie";
import animation from '../animation.json'
import Contacto from "./Contacto";
import "../style/profile.css";

const Profile = () => {
  const defaultOptions={
    loop:true,
    autoplay:true,
    animationData:animation
  }
  return (
    <section className="container" id="Perfil">
      <div className="profile-container">
        <Lottie options={defaultOptions} />
        <div className="profile-subtitle">
          <p className="profile-subtitle-p">
            {" "}
            "Cuando te enamoras de lo que haces, disfrutas cada segundo"{" "}
            <span>💚 ❣</span>
          </p>
          <p className="profile-subtitle-p-p">
            Me considero una persona responsable, dinámica y creativa, con
            facilidad de adaptación y capacidad de trabajar en equipo,
            apasionada por la tecnología y el desarrollo web, con muchas ganas
            de seguir aprendiendo.
            Con habilidades en CSS3 HTML5 Javascript React js
          </p>
        </div>
      </div>
      <Contacto />
    </section>
  );
};
export default Profile;
