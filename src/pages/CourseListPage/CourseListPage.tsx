import React from 'react';
import { CourseList } from '../../components';
import { courseService } from '../../services';

const CourseListPage:React.FC = () => {
  React.useEffect(() => {
    courseService.getToken()
      .then(({ data }) => localStorage.setItem('token', data.token))
      .catch(() => {});
  }, []);
  return (
    <main className="content">
      <CourseList />
    </main>
  );
};

export { CourseListPage };
