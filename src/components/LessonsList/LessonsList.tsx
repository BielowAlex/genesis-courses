import React from 'react';

import { useAppSelector } from '../../hooks';
import { LessonListItem } from '../LessonsListItem';

import './LessonsList.scss';

const LessonsList:React.FC = () => {
  const { lessons } = useAppSelector((state) => state.lessonReducer);

  return (
    <div className="course-lessons__list">
      <h3 className="course-lessons__title">Playlist</h3>
      {lessons.length > 0
        && lessons.map((lesson) => (
          <LessonListItem id={lesson.id} title={lesson.title} order={lesson.order} status={lesson.status} key={lesson.id} />
        ))}
    </div>

  );
};

export { LessonsList };
