import React from "react";
//img
import webDesign from "../../../assets/icon/iconservice/web-design-128.png";
import javascript from "../../../assets/icon/iconservice/javascript-128.png";
import reactNative from "../../../assets/icon/iconservice/react-native-128.png";
import backend from "../../../assets/icon/iconservice/backend-128.png";

const Service = () => {
  return (
    <section className="service" id="service">
      <h2 className="service__title">SERVICIOS</h2>
      {/* <p>
        Te ayudo a diseñar soluciones para cubrir el mercado digital y te guío
        en la consecución de tus objetivos comerciales.
      </p> */}

      <div className="service__container">
        <div className="container__item container__item--orange">
          <img clasName="item__img" src={webDesign} alt="diseño web"/>
          <h3 className="item__title">DISEÑO WEB</h3>
          <p className="item__paragraph">
            Con experiencia en una amplia gama de tecnologías disponibles para
            hacer sitios adaptados a sus necesidades, en: HTML, CSS, SASS,
            Bootstrap, Git y además siempre responsive.
          </p>
        </div>
        <div className="container__item container__item--lightBlue">
          <img clasName="item__img" src={javascript}/>
          <h3 className="item__title">JavaScript</h3>
          <p className="item__paragraph">
          su sintaxis, pasando por Ciclos, Variables, Funciones, Arrays, DOM, Eventos, JSON, Storage, Librerías, Promises, Ajax, Fetch, entre otras
          </p>
        </div>
        <div className="container__item container__item--yellow">
          <img clasName="item__img" src={reactNative}/>
          <h3 className="item__title">ReactJS</h3>
          <p className="item__paragraph">
            Me aseguraré de que su sitio web sea visible en la web y pueda
            empezar a competir en la industria digital: redes sociales,
            community management, analytics y más.
          </p>
        </div>
        <div className="container__item container__item--green">
          {<img clasName="item__img" src={backend} />}
          <h3 className="item__title">Back-End</h3>
          <p className="item__paragraph">
            ¡Ganar mas! Soy el responsable de realizar los cambios necesarios
            para que aparezca primero en tus búsquedas: SEO y SEM, lo que
            maximizará tus resultados de ventas.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Service;
