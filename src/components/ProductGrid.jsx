/* eslint-disable react/prop-types */
import ProductGridCard from './ProductGridCard';

const ProductGrid = ({ products }) => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 ">
      {products.map((product) => (
        <ProductGridCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
