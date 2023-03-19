import React from 'react';
import { Link } from 'react-router-dom';

import { ICourses } from '../../types';
import { PreviewPlayer } from '../PreviewPlayer';
import { Rating } from '../Rating';

import './CourseListItem.scss';

interface IProps {
  course: ICourses
}

const CourseListItem: React.FC<IProps> = ({ course }) => {
  const {
    id,
    title,
    rating,
    lessonsCount,
    description,
    meta,
    previewImageLink,
  } = course;

  const player = React.useRef<HTMLVideoElement>(null) as React.MutableRefObject<HTMLVideoElement>;

  const pausePreview = () => {
    if (player.current !== null) {
      const playPromise = player.current.play();

      if (playPromise) {
        playPromise.then(() => {
          player.current.pause();
        });
      }
    }
  };

  const playPreview = async () => {
    if (player.current !== null && player.current.paused) {
      await player.current.play()
        .catch(() => {
          pausePreview();
        });
    }
  };

  return (
    <div
      role="presentation"
      className="courses-item"
      onMouseOver={playPreview}
      onFocus={playPreview}
      onMouseLeave={pausePreview}
    >
      <div className="courses-item__poster-video">
        {meta.courseVideoPreview && player
          ? (
            <PreviewPlayer
              reference={player}
              poster={`${previewImageLink}/cover.webp`}
              link={meta.courseVideoPreview.link}
              classname="courses-item__poster-video__item"
            />
          )
          : (
            <img
              src={`${previewImageLink}/cover.webp`}
              alt={title}
              className="courses-item__poster-video__img"
            />
          )}
      </div>
      <div className="courses-item__info">
        <h3 className="courses-item__title">{title}</h3>
        <div className="courses-item__poster">
          <img
            src={`${previewImageLink}/cover.webp`}
            alt={title}
            className="courses-item__poster-img"
          />
        </div>
        <span className="courses-item__about">
          <Rating rate={rating} />
          <span className="courses-item__lessons-count">
            {' '}
            {lessonsCount}
            {' '}
            lectures;
          </span>
        </span>
        <p className="courses-item__desc">{description}</p>
        <ul className="courses-item__skills">
          {meta.skills && meta.skills.map((skill) => (
            <li
              className="courses-item__skills-item"
              key={Math.random()}
            >
              {skill}
            </li>
          ))}
        </ul>
        <div className="courses-item__bottom">
          <Link key={id} to={`/courses/${id}`} className="courses-item__btn">
            Open Course
          </Link>
        </div>
      </div>
    </div>
  );
};

export { CourseListItem };
