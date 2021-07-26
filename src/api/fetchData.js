import authAxios from './request';
import store from '../redux/store';
import { addItems, loadItems } from '../redux/actions';

const fetchData = async () => {
  store.dispatch(loadItems());
  const response = await authAxios().get('breeds')
    .then((response) => store.dispatch(addItems(response.data))).catch((error) => error);
  return response;
};

export default fetchData;
