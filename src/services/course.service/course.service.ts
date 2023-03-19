import { AxiosResponse } from 'axios';
import { axiosService } from '../axios.service';
import { urls } from '../../constants';
import { ICourse, ICoursesResp } from '../../types';

type Res<T> = Promise<AxiosResponse<T>>;

const courseService = {
  getAll: ():Res<ICoursesResp> => axiosService.get(urls.courses),
  getById: (id:string):Res<ICourse> => axiosService.get(`${urls.courses}/${id}`),
};

export { courseService };
