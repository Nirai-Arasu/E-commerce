import Filters from '../components/Filters';
import ProductsContainer from '../components/ProductsContainer';
import { customFetch } from '../util';

const url = '/products';
export const loader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  const { data } = await customFetch.get(url, { params });

  const products = data.data;
  const meta = data.meta;

  return { products, meta, params };
};

const Products = () => {
  return (
    <>
      <Filters />
      <ProductsContainer />
    </>
  );
};

export default Products;
