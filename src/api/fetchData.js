import authAxios from './request';

const fetchData = async () => {
  const response = await authAxios().get()
    .then((response) => response.data).catch((error) => error);
  return response;
};

export default fetchData;
