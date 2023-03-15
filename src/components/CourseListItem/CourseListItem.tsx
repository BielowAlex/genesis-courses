import React from 'react';
import { ICourses } from '../../types';

interface IProps {
  course: ICourses
}

const CourseListItem: React.FC<IProps> = ({ course }) => {
  const {
    title,
    rating,
    lessonsCount,
    description,
    meta,
    previewImageLink,
  } = course;

  // eslint-disable-next-line @typescript-eslint/naming-convention
  const [, setIsPlaying] = React.useState<boolean>(false);

  // const player = React.useRef<ReactPlayer>(null) as React.MutableRefObject<ReactPlayer>;
  return (
    <li className="courses-item" onMouseOver={() => setIsPlaying(true)} onFocus={() => setIsPlaying(true)} onMouseLeave={() => setIsPlaying(false)}>
      <div className="courses-item__link">
        <div className="courses-item__poster-video">
          {meta.courseVideoPreview !== undefined
            ? (
          // eslint-disable-next-line jsx-a11y/media-has-caption
              <video
                // ref={player}
                // poster={`${previewImageLink}/cover.webp`}
                autoPlay
                controls
                muted
                loop
                preload="none"
                className="courses-item__poster-video__item"
                width={500}
              >
                <source src={`${meta.courseVideoPreview.link}`} type="application/x-mpegURL" />
                <source src={`${meta.courseVideoPreview.link}`} type="application/vnd.apple.mpegurl" />
              </video>
          //     <ReactPlayer
          //       url={meta.courseVideoPreview.link}
          //       playing={isPlaying}
          //       poster={`${previewImageLink}/cover.webp`}
          //       light={!isPlaying ? `${previewImageLink}/cover.webp` : false}
          //       preload="metadata"
          //       muted
          //       width="100%"
          //       height="272px"
          //       ref={player}
          //     />
            )
            : (
              <img
                src={`${previewImageLink}/cover.webp`}
                alt="poster"
                className="courses-item__poster-video__img"
              />
            )}
        </div>
        <div className="courses-item__info">
          <h3 className="courses-item__title">{title}</h3>
          <span className="courses-item__about">
            <span className="courses-item__rate">
              Rate:
              {rating}
              ;
            </span>
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
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
};

export { CourseListItem };
