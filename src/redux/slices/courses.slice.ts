import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ICourses, IPagCounts } from '../../types';
import { courseService, setToken } from '../../services';

interface IState {
  courseList: ICourses[]
  PaginationCourseList: ICourses[],
  isCourseListError: boolean,
  isLoaded: boolean
}

const initialState: IState = {
  courseList: [],
  PaginationCourseList: [],
  isLoaded: true,
  isCourseListError: false,
};

const getAll = createAsyncThunk<ICourses[], void>(
  'coursesSlice/getAll',
  async () => {
    await setToken();

    const { data } = await courseService.getAll();

    return data.courses;
  },
);

const coursesSlice = createSlice({
  name: 'courseSlice',
  initialState,
  reducers: {
    updatePaginationCourseList: (state, action:PayloadAction<IPagCounts>) => {
      state.PaginationCourseList = state.courseList.slice(action.payload.start, action.payload.end);
    },
    setIsCourseListError: (state, action:PayloadAction<boolean>) => {
      state.isCourseListError = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAll.fulfilled, (state, action) => {
        state.courseList = action.payload;
        state.isLoaded = true;
      })
      .addCase(getAll.pending, (state) => {
        state.isCourseListError = false;
        state.isLoaded = false;

        state.courseList = [];
      })
      .addCase(getAll.rejected, (state) => {
        state.isCourseListError = true;
      });
  },
});

const {
  reducer: coursesReducer,
  actions: {
    updatePaginationCourseList,
    setIsCourseListError,
  },
} = coursesSlice;

const coursesActions = {
  getAll,
  updatePaginationCourseList,
  setIsCourseListError,
};

export {
  coursesReducer,
  coursesActions,
};
