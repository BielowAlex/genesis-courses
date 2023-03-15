import React from 'react';

import { Route, Routes } from 'react-router-dom';

import '../styles/style.scss';
import { Header } from '../components';
import { MainLayout } from '../layouts/MainLayout';
import { CourseListPage, HomePage } from '../pages';

function App() {
  return (
    <div className="wrap">
      <Header />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<CourseListPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
