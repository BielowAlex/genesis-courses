import React from 'react';

import './CoursePlayerDesc.scss';

const CoursePlayerDesc:React.FC = () => (
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
);

export { CoursePlayerDesc };
