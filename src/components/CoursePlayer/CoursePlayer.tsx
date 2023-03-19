import React from 'react';
import ReactHlsPlayer from 'react-hls-player';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { CoursePlayerError } from '../ErrorComponents';
import { progressActions } from '../../redux/slices';
import { ILessonProgres } from '../../types';
import { CoursePlayerLoader } from '../LoaderComponents';
import { CoursePlayerDesc } from '../CoursePlayerDesc';

import './CoursePlayer.scss';

const CoursePlayer:React.FC = () => {
  const { currentLesson } = useAppSelector((state) => state.lessonReducer);
  const {
    link, previewImageLink, order, id,
  } = currentLesson;
  const dispatch = useAppDispatch();

  const player = React.useRef<HTMLVideoElement>() as React.MutableRefObject<HTMLVideoElement>;

  const [isVideoLoaded, setIsVideoLoaded] = React.useState<boolean>(false);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const openPictureInPicture = () => {
    if (player) {
      player.current.requestPictureInPicture();
    }
  };

  const setCurrentTime = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    const lessonProgresList:ILessonProgres[] = localStorage.getItem('progresList') !== null
      ? JSON.parse(localStorage.getItem('progresList') as string) : undefined;

    if (!lessonProgresList) {
      return;
    }

    if (lessonProgresList.some((lesson) => lesson.id === id)) {
      const currentProgres = lessonProgresList.find((lesson) => lesson.id === id) as ILessonProgres;
      e.currentTarget.currentTime = currentProgres.playCode;
    }
  };

  const updateProgress = () => {
    if (player.current.played) {
      dispatch(progressActions.updateLessonsProgresList({
        id,
        playCode: player.current.currentTime,
      }));
    }
  };

  const changePlaybackRate = (e:KeyboardEvent) => {
    if (!player.current.playbackRate) {
      return;
    }

    if (e.key === '+' && player.current.playbackRate < 2) {
      player.current.playbackRate += 0.5;
    }
    if (e.key === '-' && player.current.playbackRate > 0.5) {
      player.current.playbackRate -= 0.5;
    }
  };

  React.useEffect(() => {
    setIsVideoLoaded(false);
    setIsLoading(true);

    const clearLoading = setTimeout(() => {
      setIsLoading(false);
    }, 10000);

    return () => clearTimeout(clearLoading);
  }, [currentLesson]);

  React.useEffect(() => {
    document.addEventListener('keypress', changePlaybackRate);

    return () => {
      document.removeEventListener('keypress', changePlaybackRate);
    };
  }, []);

  return (
    <div className="course-lessons__player">
      <div className="course-lessons__player-container">
        <CoursePlayerLoader isLoading={isLoading} />
        <CoursePlayerError isVideoLoaded={isVideoLoaded} />
        <button
          type="button"
          className="course-lessons__player-pip"
          onClick={openPictureInPicture}
        >
          <svg width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g>
              <path fillRule="nonzero" d="M21 3a1 1 0 0 1 1 1v7h-2V5H4v14h6v2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18zm0 10a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h8zm-1 2h-6v4h6v-4zM6.707 6.293l2.25 2.25L11 6.5V12H5.5l2.043-2.043-2.25-2.25 1.414-1.414z" />
            </g>
          </svg>
        </button>
        <ReactHlsPlayer
          controls
          preload="metadata"
          autoPlay={false}
          src={link}
          poster={`${previewImageLink}/lesson-${order}.webp`}
          playerRef={player}
          className="course-lessons__player-video"
          hlsConfig={{ maxLoadingDelay: 10 }}
          onLoadedData={() => setIsLoading(false)}
          onError={() => setIsLoading(false)}
          onCanPlayThrough={() => setIsVideoLoaded(true)}
          onTimeUpdate={updateProgress}
          onEnded={() => dispatch(progressActions.removeItemFromLessonsProgresList(id))}
          onPlay={(e) => setCurrentTime(e)}
        />
      </div>
      <CoursePlayerDesc />
    </div>
  );
};

export { CoursePlayer };
