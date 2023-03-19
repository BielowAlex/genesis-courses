import React from 'react';

import { CoursePlayerLoader } from '../CoursePlayerLoader';

import './CourseLoader.scss';

const CourseLoader:React.FC = () => (
  <>
    <div className="course-title-loader" />
    <div className="course-lessons-loader">
      <div className="course-lessons-loader__player">
        <div className="course-lessons-loader__player-container">
          <CoursePlayerLoader isLoading />
        </div>
        <div className="course-lessons__player-desc">
          <h3 className="course-lessons__player-desc__title">Change playback speed</h3>
          <p className="course-lessons__player-desc__text">
            To change the video playback speed, you can simply press the keys:
            <br />
            +  = to increase by 0.5
            <br />
            -  = to decrease by 0.5
          </p>
        </div>
      </div>
      <div className="course-lessons-loader__list">
        <h3 className="course-lessons__title">Playlist</h3>
        <div className="course-lessons-loader__item" />
        <div className="course-lessons-loader__item" />
        <div className="course-lessons-loader__item" />
        <div className="course-lessons-loader__item" />
        <div className="course-lessons-loader__item" />
      </div>
    </div>
  </>
);

export { CourseLoader };
