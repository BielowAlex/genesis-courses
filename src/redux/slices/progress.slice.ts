import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ILessonProgres } from '../../types';

interface IState {
  lessonProgresList: ILessonProgres[],
}

const progresList = localStorage.getItem('progresList') !== null
  ? JSON.parse(localStorage.getItem('progresList') as string) : [];

const initialState:IState = {
  lessonProgresList: progresList,
};

const progresSlice = createSlice({
  name: 'progresSlice',
  initialState,
  reducers: {
    updateLessonsProgresList: (state, action:PayloadAction<ILessonProgres>) => {
      const lessonProgress = action.payload;

      const isExist = state.lessonProgresList.some((lesson) => lesson.id === lessonProgress.id);

      if (isExist) {
        state.lessonProgresList = state.lessonProgresList.map((lesson) => {
          if (lesson.id === lessonProgress.id && lesson.playCode < lessonProgress.playCode) {
            lesson = lessonProgress;
            return lesson;
          }
          return lesson;
        });
        localStorage.setItem('progresList', JSON.stringify(state.lessonProgresList));

        return;
      }
      state.lessonProgresList = [...state.lessonProgresList, lessonProgress];

      localStorage.setItem('progresList', JSON.stringify(state.lessonProgresList));
    },
    removeItemFromLessonsProgresList: (state, action:PayloadAction<string>) => {
      state.lessonProgresList = state.lessonProgresList.filter((lesson) => lesson.id !== action.payload);

      localStorage.setItem('progresList', JSON.stringify(state.lessonProgresList));
    },
  },
});

const {
  reducer: progresReducer,
  actions: {
    updateLessonsProgresList,
    removeItemFromLessonsProgresList,
  },
} = progresSlice;

const progressActions = {
  updateLessonsProgresList,
  removeItemFromLessonsProgresList,
};

export {
  progresReducer,
  progressActions,
};
