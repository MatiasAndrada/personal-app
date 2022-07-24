import React from "react";

const Home = () => {
  return (
    <section className="fullpage">
      <img src="" className="" alt=""/>
        <h1 className="fullpage__title">Matias Andrada</h1>
        <h3 className="fullpage__subtitle">Junior front-end developer</h3>
        <a href="#service" className="fullpage__btn">
          <svg className="fullpage__btn--icon"
            xmlns="http://www.w3.org/2000/svg"
            height="48px"
            viewBox="0 0 24 24"
            width="48px"
            fill="#fff"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
          </svg>
        </a>
    </section>
  );
};

export default Home;

