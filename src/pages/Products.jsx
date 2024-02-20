import Filters from '../components/Filters';
import ProductsContainer from '../components/ProductsContainer';
import { customFetch } from '../util';

export const loader = async ({ request }) => {
  let url = '/products';

  // Use the entries directly without wrapping them in an array
  const params = Object.fromEntries(
    new URL(request.url).searchParams.entries()
  );

  console.log(params);

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
