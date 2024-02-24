import { useLoaderData } from 'react-router-dom';
import ProductGridCard from './ProductGridCard';

const ProductsGrid = () => {
  const data = useLoaderData();

  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {data.map((product) => (
        <ProductGridCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsGrid;
