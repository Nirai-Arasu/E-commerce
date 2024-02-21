import { useLoaderData } from 'react-router-dom';
import { BsFillGridFill, BsList } from 'react-icons/bs';
import { useState } from 'react';
import ProductGrid from './ProductGrid';
import ProductList from './ProductList';

const ProductsContainer = () => {
  const { products, meta } = useLoaderData();
  const [layout, setLayout] = useState('grid');

  const total = meta.pagination.total;
  return (
    <>
      <div className="flex justify-between items-center mt-8 border-b border-base-300 pb-5">
        <h4 className="font-medium text-md">
          {total} {total === 0 ? 'product' : 'products'}
        </h4>
        <div className="flex gap-x-2">
          <button
            type="button"
            onClick={() => setLayout('grid')}
            className={`text-xl btn btn-circle btn-sm ${
              layout === 'grid' ? 'btn-primary' : 'btn-ghost'
            } text-based-content`}>
            <BsFillGridFill />
          </button>

          <button
            type="button"
            onClick={() => setLayout('list')}
            className={`text-xl btn btn-circle btn-sm ${
              layout === 'list' ? 'btn-primary' : 'btn-ghost'
            } text-based-content`}>
            <BsList />
          </button>
        </div>
      </div>
      {total === 0 ? (
        <h2 className="text-2xl pt-16">
          Sorry, no products matched your search...
        </h2>
      ) : layout == 'grid' ? (
        <ProductGrid products={products} />
      ) : (
        <ProductList products={products} />
      )}
    </>
  );
};

export default ProductsContainer;
