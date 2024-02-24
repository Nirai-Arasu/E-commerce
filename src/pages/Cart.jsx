import { useSelector } from 'react-redux';
import { CartItemList, CartTotals } from '../components';
import SectionTitle from '../components/SectionTitle';
import { Link } from 'react-router-dom';
const Cart = () => {
  const { user } = useSelector((store) => store.user);
  const { numberOfItemsInCart } = useSelector((store) => store.cart);

  if (numberOfItemsInCart === 0) {
    return <SectionTitle text="Your cart is empty" />;
  }
  return (
    <>
      <SectionTitle text="Shopping Cart" />

      <div className="mt-8 grid gap-8 lg:grid-cols-12">
        <CartItemList />
        <div className="lg:col-span-4 lg:pl-4">
          <CartTotals />
          {user ? (
            <Link to="/checkout" className="btn btn-primary w-full mt-8">
              PROCEED TO CHECKOUT
            </Link>
          ) : (
            <Link to="/login" className="btn btn-primary w-full mt-8">
              PLEASE LOGIN
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
