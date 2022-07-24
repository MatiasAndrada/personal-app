import React from "react";
import matiasAndradaIMG from "../../../assets/img/matiasAndrada.png";

const SobreMi = () => {
  return (
    <section className="sobremi" id="sobreMi">
      <h2 className="sobremi__title">SOBRE MÍ</h2>

      <div className="sobremi__container">
        <img
          className="container__img"
          src={matiasAndradaIMG}
          alt="Personal Img"
        />
        <p className="container__paragraph">
          ¡Hola!, Soy Matias Andrada tengo 18 años y soy desarollador, ademas
          tengo experiencia en la edicion de multimedia, tengo conocimiento en
          la creacion de diversas aplicaciones web, utilizando las mejores
          tecnologias y tecnicas, para lograr desde una simple idea hasta una
          aplicacion web completa. <br />
          Adaptando el diseño a las necesidades de cada cliente, y trabajando en
          equipo para lograr los objetivos que nosotros deseamos.
        </p>
      </div>
    </section>
  );
};
export default SobreMi;
