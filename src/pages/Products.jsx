import Filters from '../components/Filters';
import ProductsContainer from '../components/ProductsContainer';
import { customFetch } from '../util';

export const loader = async ({ request }) => {
  const url = new URL(request.url);
  const search = url.searchParams.get('search');
  let newUrl = '/products';
  if (search) {
    newUrl += `?search=${search}`;
  }
  const { data } = await customFetch.get(newUrl);
  const products = data.data;
  const meta = data.meta;
  return { products, meta };
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
