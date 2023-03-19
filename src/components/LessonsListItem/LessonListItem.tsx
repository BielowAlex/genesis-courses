import React from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { lessonsActions } from '../../redux/slices';

import './LessonsListItem.scss';

interface IProps {
  id:string
  status:string,
  order:number,
  title:string
}

const LessonListItem:React.FC<IProps> = ({
  status, id, title, order,
}) => {
  const { currentLesson } = useAppSelector((state) => state.lessonReducer);
  const dispatch = useAppDispatch();

  const setCurrentLesson = () => {
    dispatch(lessonsActions.setCurrentLesson({ id }));
  };
  return (
    <button
      type="button"
      className={`course-lessons__item ${id === currentLesson.id ? 'active' : ''} ${status !== 'unlocked' ? 'locked' : ''}`}
      onClick={status === 'unlocked' ? setCurrentLesson : undefined}
    >
      <span className="course-lessons__item-order">{order}</span>
      <h3 className="course-lessons__item-title">{title}</h3>
      <div className="course-lessons__item-status">
        {status === 'unlocked'
          ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path
                d="M352 144c0-44.2 35.8-80 80-80s80 35.8 80 80v48c0 17.7 14.3 32 32 32s32-14.3 32-32V144C576 64.5 511.5 0 432 0S288 64.5 288 144v48H64c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V256c0-35.3-28.7-64-64-64H352V144z"
              />
            </svg>
          )
          : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path
                d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"
              />
            </svg>
          )}
      </div>
    </button>
  );
};

export { LessonListItem };
