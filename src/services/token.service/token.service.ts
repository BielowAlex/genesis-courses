import { axiosService } from '../axios.service';
import { urls } from '../../constants';

interface IToken {
  token:string
}

const setToken = async () => {
  const { token } = await axiosService.get(urls.token).then(({ data }) => data as IToken);
  localStorage.setItem('token', token);
};

export {
  setToken,
};
