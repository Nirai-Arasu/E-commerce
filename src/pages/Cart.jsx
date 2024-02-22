import { CartItemList, CartTotals } from '../components';

const Cart = () => {
  return (
    <>
      <div className="border-b border-base-300 pb-5">
        <h2 className="text-3xl font-medium tracking-wider capitalize">
          Shopping Cart
        </h2>
      </div>
      <div className="mt-8 grid gap-8 lg:grid-cols-12">
        <CartItemList />
        <CartTotals />
      </div>
    </>
  );
};

export default Cart;
