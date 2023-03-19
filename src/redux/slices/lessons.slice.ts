import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICourse, ICourseLesson } from '../../types';
import { courseService, setToken } from '../../services';

interface IState {
  selectedCourse: ICourse,
  lessons: ICourseLesson[],
  currentLesson: ICourseLesson,
  isCourseLoaded:boolean,
  isCourseError: boolean,
}

const initialState:IState = {
  selectedCourse: {} as ICourse,
  lessons: [],
  currentLesson: {} as ICourseLesson,
  isCourseLoaded: false,
  isCourseError: false,
};

const getCourseById = createAsyncThunk<ICourse, { id:string }>(
  'lessonsSlice/getCourseById',
  async ({ id }) => {
    await setToken();

    const { data } = await courseService.getById(id);

    return data;
  },
);

const lessonsSlice = createSlice({
  name: 'lessonsSlice',
  initialState,
  reducers: {
    setIsCourseError: (state, action:PayloadAction<boolean>) => {
      state.isCourseError = action.payload;
    },
    setCurrentLesson: (state, action:PayloadAction<{ id:string }>) => {
      const findLesson = state.lessons.find((lesson) => lesson.id === action.payload.id);

      if (findLesson) {
        state.currentLesson = findLesson;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCourseById.fulfilled, (state, action) => {
        state.selectedCourse = action.payload;

        const sortLessonArr = action.payload
          .lessons.sort((les, nLes) => les.order - nLes.order);
        if (sortLessonArr) {
          state.lessons = sortLessonArr;
        }

        state.isCourseLoaded = true;
      })
      .addCase(getCourseById.pending, (state) => {
        state.isCourseLoaded = false;

        state.selectedCourse = {} as ICourse;
      })
      .addCase(getCourseById.rejected, (state) => {
        state.isCourseError = true;
      });
  },
});

const {
  reducer: lessonReducer,
  actions: {
    setIsCourseError,
    setCurrentLesson,
  },
} = lessonsSlice;

const lessonsActions = {
  getCourseById,
  setIsCourseError,
  setCurrentLesson,
};

export {
  lessonReducer,
  lessonsActions,
};
