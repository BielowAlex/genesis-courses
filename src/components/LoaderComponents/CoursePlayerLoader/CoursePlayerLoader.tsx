import React from 'react';

import './CoursePlayerLoader.scss';

interface IProps {
  isLoading:boolean
}

const CoursePlayerLoader:React.FC<IProps> = ({ isLoading }) => (
  <div
    className="course-lessons__player-loader"
    style={{
      display: isLoading
        ? 'flex' : 'none',
    }}
  >
    <span className="course-lessons__player-loader__element" />
    <span className="course-lessons__player-loader__element" />
    <span className="course-lessons__player-loader__element" />
  </div>
);

export { CoursePlayerLoader };
