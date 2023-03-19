import React from 'react';
import { Link } from 'react-router-dom';

import './NotFoundPage.scss';

const NotFoundPage: React.FC = () => (
  <section className="not-found">
    <div className="not-found-back">
      <svg width="855" height="323" viewBox="0 0 855 323" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          opacity="0.06"
          d="M0.5 261.289H150.146V316.093H213.171V261.289H251.838V208.464H213.171V4.3186H130.66L0.5 209.377V261.289ZM151.364 208.464H66.8739V206.028L148.928 76.173H151.364V208.464Z"
          fill="white"
          fillOpacity="0.9"
        />
        <path
          opacity="0.06"
          d="M426.575 322.944C504.975 322.944 552.32 263.268 552.472 160.51C552.624 58.5138 504.671 0.0560303 426.575 0.0560303C348.327 0.0560303 300.83 58.3615 300.678 160.51C300.373 262.964 348.022 322.792 426.575 322.944ZM426.575 268.292C390.8 268.292 367.66 232.365 367.813 160.51C367.965 89.7217 390.952 54.099 426.575 54.099C462.045 54.099 485.185 89.7217 485.185 160.51C485.337 232.365 462.198 268.292 426.575 268.292Z"
          fill="white"
          fillOpacity="0.9"
        />
        <path
          opacity="0.06"
          d="M603.329 261.289H752.975V316.093H816V261.289H854.667V208.464H816V4.3186H733.489L603.329 209.377V261.289ZM754.193 208.464H669.703V206.028L751.757 76.173H754.193V208.464Z"
          fill="white"
          fillOpacity="0.9"
        />
      </svg>
    </div>
    <div className="not-found-message">
      <h2 className="not-found-message__title">Page not found</h2>
      <p className="not-found-message__desc">
        There was a problem loading, this page does not exist
        {' '}
        <br />
        {' '}
        or has been deleted.
      </p>
      <Link to="/" className="not-found-message__btn">Back to homepage</Link>
    </div>
  </section>

);

export
{
  NotFoundPage,
};
