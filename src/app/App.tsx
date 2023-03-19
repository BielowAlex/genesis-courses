import React from 'react';

import { Route, Routes } from 'react-router-dom';

import '../styles/style.scss';
import { Header } from '../components';
import { MainLayout } from '../layouts/MainLayout';
import {
  CourseListPage, CoursePage, NotFoundPage,
} from '../pages';

function App() {
  return (
    <div className="wrap">
      <Header />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<CourseListPage />} />
          <Route path="courses/:id" element={<CoursePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
