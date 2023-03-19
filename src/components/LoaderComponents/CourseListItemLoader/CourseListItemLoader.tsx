import React from 'react';

import './CourseListItemLoader.scss';

const CourseListItemLoader:React.FC = () => (
  <div className="courses-item-skeleton">
    <div className="courses-item-skeleton__poster" />
    <div className="courses-item-skeleton__info">
      <div className="courses-item-skeleton__title" />
      <div className="courses-item-skeleton__poster-img" />
      <div className="courses-item-skeleton__about" />
      <div className="courses-item-skeleton__desc" />
      <div className="courses-item-skeleton__desc" />
      <div className="courses-item-skeleton__skills">
        <div className="courses-item-skeleton__skills-item" />
        <div className="courses-item-skeleton__skills-item" />
        <div className="courses-item-skeleton__skills-item" />
        <div className="courses-item-skeleton__skills-item" />
        <div className="courses-item-skeleton__skills-item" />
      </div>
      <div className="courses-item-skeleton__btn" />
    </div>
  </div>
);

export { CourseListItemLoader };
