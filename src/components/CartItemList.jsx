import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const CartItemList = () => {
  const { cartItems } = useSelector((store) => store.cart);
  return (
    <div className="lg:col-span-8">
      {cartItems.map(
        ({ cartId, image, title, selectedColor, company, amount, price }) => (
          <CartItem
            key={cartId}
            image={image}
            title={title}
            color={selectedColor}
            company={company}
            amount={amount}
            price={price}
            cartId={cartId}
          />
        )
      )}
    </div>
  );
};

export default CartItemList;
