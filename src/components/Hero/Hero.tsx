import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.scss';

const Hero:React.FC = () => (
  <section className="hero">
    <div className="hero-container container">
      <div className="hero-about">
        <div className="hero-about__info">
          <h2 className="hero-about__info-title">Learn skills from home</h2>
          <p className="hero-about__info-desc">
            Genesis Courses the latest standart in online education. Our courses
            include
            those by highest-ranked specialists from all around the globe. We will
            help you learn virtually
            anything.
          </p>
        </div>
        <Link to="/courses" className="hero-about__btn">Course List</Link>
      </div>
      <div className="hero-poster">
        <img
          src="./assets/images/hero-poster.svg"
          alt="courses study"
          className="hero-poster__img"
        />
        <div className="hero-poster__back" />
      </div>
    </div>
  </section>
);

export { Hero };
