import React from 'react';
import './CourseList.scss';
import { courseService } from '../../services';
import { ICourses } from '../../types';
import { CourseListItem } from '../CourseListItem';

const CourseList:React.FC = () => {
  const [courseList, setCourseList] = React.useState<ICourses[]>([]);
  React.useMemo(() => {
    courseService.getAll()
      .then(({ data }) => {
        const { courses } = data;
        setCourseList(courses);
      })
      .catch(() => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        // console.log(err);
      });
  }, []);
  return (
    <section className="courses">
      <div className="courses-container container">
        <div className="courses-title">
          <h2 className="courses-title__text">Courses</h2>
        </div>
        <ul className="courses-list">
          { courseList.length > 0
            ? courseList.map((course) => <CourseListItem course={course} key={course.id} />)
            : null}
        </ul>
      </div>
    </section>
  );
};

export { CourseList };
