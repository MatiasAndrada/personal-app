import React from "react";

const Service = () => {
  return (
    <section className="service" id="service">
      <h2 className="service__title">SERVICIOS</h2>
      {/* <p>
        Te ayudo a diseñar soluciones para cubrir el mercado digital y te guío
        en la consecución de tus objetivos comerciales.
      </p> */}

      <div className="service__container">
        <div className="container__item">
          {/* <img clasName="item__img" src="multimedia/iconservice/icon1.png" /> */}
          <h3 className="item__title">DISEÑO WEB</h3>
          <p className="item__paragraph">
            Con experiencia en una amplia gama de tecnologías disponibles para
            hacer sitios adaptados a sus necesidades, en: HTML, CSS, SASS,
            Bootstrap, Git y además siempre responsive.
          </p>
        </div>
        <div className="container__item">
          {/* <img clasName="item__img" src="multimedia/iconservice/icon2.png"/> */}
          <h3 className="item__title">DISEÑO CON CMS</h3>
          <p className="item__paragraph">
            Cada cliente es único por eso me enfoco en brindar soluciones
            personalizadas para cada uno.
          </p>
        </div>
        <div className="container__item">
          {/* <img clasName="item__img" src="multimedia/iconservice/icon3.png"/> */}
          <h3 className="item__title">MARKETING DIGITAL</h3>
          <p className="item__paragraph">
            Me aseguraré de que su sitio web sea visible en la web y pueda
            empezar a competir en la industria digital: redes sociales,
            community management, analytics y más.
          </p>
        </div>
        <div className="container__item">
          {/* <img clasName="item__img" src="multimedia/iconservice/icon4.png" /> */}
          <h3 className="item__title">OPTIMIZACION SEO</h3>
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
