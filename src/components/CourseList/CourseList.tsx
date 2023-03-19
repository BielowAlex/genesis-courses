import React from 'react';

import { CourseListItem } from '../CourseListItem';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { coursesActions } from '../../redux/slices';
import Pagination from '../Pagination/Pagination';
import { CourseListError } from '../ErrorComponents';
import { CourseListItemLoader } from '../LoaderComponents';

import './CourseList.scss';

const CourseList:React.FC = () => {
  const {
    PaginationCourseList,
    isCourseListError,
    isLoaded,
  } = useAppSelector((state) => state.coursesReducer);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(coursesActions.getAll());

    dispatch(coursesActions.updatePaginationCourseList({ start: 0, end: 10 }));
  }, [dispatch]);

  return (
    <section className="courses">
      <div className="courses-container container">
        <div className="courses-title">
          <h2 className="courses-title__text">Courses</h2>
        </div>
        {isCourseListError
          ? <CourseListError />
          : (
            <>
              <div className="courses-list">
                { isLoaded
                  ? PaginationCourseList
                    .map((course) => <CourseListItem course={course} key={course.id} />)
                  : [...new Array(10)].map(() => <CourseListItemLoader key={Math.random()} />)}
              </div>
              <Pagination />
            </>
          )}
      </div>
    </section>
  );
};

export { CourseList };
