/* eslint-disable react-refresh/only-export-components */

import FeaturedProducts from '../components/FeaturedProducts.jsx';
import Hero from '../components/Hero.jsx';
import { customFetch } from '../util/index.js';

const url = '/products?featured=true';

const featuredProductsQuery = () => {
  return {
    queryKey: ['featured'],
    queryFn: async () => {
      const { data } = await customFetch.get(url);
      return data.data;
    },
  };
};

export const loader = (queryClient) => async () => {
  const data = queryClient.ensureQueryData(featuredProductsQuery());
  return data;
};

const Landing = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
};

export default Landing;
