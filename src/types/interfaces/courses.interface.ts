export type ICoursesResp = {
  courses: ICourses[]
};

export interface ICourses {
  id: string,
  title: string,
  tags: string[],
  launchDate: string,
  status: string,
  description: string,
  duration: number,
  lessonsCount: number,
  containsLockedLessons: boolean,
  previewImageLink: string,
  rating: number,
  meta: ICourseMeta
}

export interface ICourseMeta {
  slug: string,
  skills: string[],
  courseVideoPreview: {
    link: string,
    duration: number,
    previewImageLink: string
  }
}

export interface ICourse {
  id: string,
  title: string,
  tags: string[],
  launchDate: string,
  status: string,
  description: string,
  duration: number,
  previewImageLink: string,
  rating: number,
  meta: ICourseMeta
  lessons: ICourseLesson[],
  containsLockedLessons: boolean
}

export interface ICourseLesson {
  id: string,
  title: string,
  duration: number,
  order: number,
  type: string,
  status: string,
  link: string,
  previewImageLink: string,
  meta: null
}
