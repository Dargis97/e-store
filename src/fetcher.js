import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

const fetcher = async (url) => {
  let responseObject = { errorMessage: '', data: [] };
  try {
    const res = await axios(BASE_URL + url);

    responseObject.data = res.data;
  } catch (err) {
    responseObject.errorMessage = err.message;
  }
  return responseObject;
};

export const getCategories = () => {
  return fetcher('/categories');
};

export const getProducts = (id) => {
  return fetcher('/products?catId=' + id);
};

export const getProductById = (id) => {
  return fetcher('/products/' + id);
};
