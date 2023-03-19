import React from 'react';
import { Link } from 'react-router-dom';

import './CourseListError.scss';

const CourseListError:React.FC = () => (
  <div className="courses-error">
    <div className="courses-error__logo">
      <h2 className="courses-error__logo-text">Oops!</h2>
    </div>
    <div className="courses-error__message">
      <h3 className="courses-error__message-title">Error loading data</h3>
      <p className="courses-error__message-text">
        An error occurred while loading data, please reload the page
        <br />
        or try again later
      </p>
      <Link to="/" type="button" className="courses-error__message-btn">Go to homepage</Link>
    </div>
  </div>
);

export { CourseListError };
