import axios from 'axios';

const productionUrl = 'https://strapi-store-server.onrender.com/api/';

export const customFetch = axios.create({
  baseURL: productionUrl,
});

export const formatPrice = (price) => {
  const dollarsAmmount = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'INR',
  }).format((price / 10).toFixed(2));
  return dollarsAmmount;
};

export const range = (start, end, step = 1) => {
  let output = [];
  if (typeof end === 'undefined') {
    end = start;
    start = 0;
  }
  for (let i = start; i < end; i += step) {
    output.push(i);
  }
  return output;
};
