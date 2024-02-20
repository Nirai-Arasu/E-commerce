/* eslint-disable react-refresh/only-export-components */

import FeaturedProducts from '../components/FeaturedProducts.jsx';
import Hero from '../components/Hero.jsx';
import { customFetch } from '../util/index.js';

const url = '/products?featured=true';

export const loader = async () => {
  const { data } = await customFetch.get(url);
  return data.data;
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
