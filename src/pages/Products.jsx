import Filters from '../components/Filters';
import PaginationContainer from '../components/PaginationContainer';
import ProductsContainer from '../components/ProductsContainer';
import { customFetch } from '../util';

const url = '/products';

const productQuery = (params) => {
  const { search, category, company, sort, price, shipping, page } = params;
  return {
    queryKey: [
      'products',
      category ?? 'all',
      company ?? 'all',
      sort ?? 'a-z',
      price ?? 100000,
      search ?? '',
      shipping ?? false,
      page ?? 1,
    ],
    queryFn: async () => {
      const { data } = await customFetch.get(url, { params });
      return data;
    },
  };
};
export const loader =
  (queryClient) =>
  async ({ request }) => {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    const data = await queryClient.ensureQueryData(productQuery(params));
    const products = data.data;
    const meta = data.meta;
    return { products, meta, params };
  };

const Products = () => {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
};

export default Products;
