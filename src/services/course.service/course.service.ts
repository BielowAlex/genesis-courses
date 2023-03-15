import { AxiosResponse } from 'axios';
import { axiosService } from '../axios.service';
import { urls } from '../../constants';
import { ICourse, ICoursesResp } from '../../types';

export interface IToken { token:string }
type Res<T> = Promise<AxiosResponse<T>>;

const courseService = {
  getAll: ():Res<ICoursesResp> => axiosService.get(urls.courses),
  getById: (id:string):Res<ICourse> => axiosService.get(`${urls.courses}/${id}`),
  getToken: ():Res<IToken> => axiosService.get(urls.token),
};

export { courseService };
