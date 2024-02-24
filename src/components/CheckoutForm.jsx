import { Form, redirect } from 'react-router-dom';
import FormInput from './FormInput';
import SubmitBtn from './SubmitBtn';
import { customFetch, formatPrice } from '../util';
import { clearCart } from '../features/cart/cartSlice';
import { toast } from 'react-toastify';

const url = '/orders';
export const action =
  (store) =>
  async ({ request }) => {
    const { name, address } = Object.fromEntries(await request.formData());
    if (!name || !address) {
      toast.warn('Please enter the details');
      return null;
    }
    const { cartItems, orderTotal, numberOfItemsInCart } =
      store.getState().cart;

    const token = store.getState().user.user.token;
    const payload = {
      name,
      address,
      chargeTotal: orderTotal,
      orderTotal: formatPrice(orderTotal),
      cartItems,
      numItemsInCart: numberOfItemsInCart,
    };

    try {
      await customFetch.post(
        url,
        { data: payload },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      store.dispatch(clearCart());
      toast.success('Order Placed successfully');
      return redirect('/orders');
    } catch (error) {
      console.log(error);
      toast.error('Error try again later');
      if (error.response.status === 401) {
        return redirect('/login');
      }
      return null;
    }
  };
const CheckoutForm = () => {
  return (
    <Form className="flex flex-col gap-y-4" method="post">
      <h4 className="font-medium text-xl capitalize">Shipping Information</h4>
      <FormInput
        label="First Name"
        type="text"
        name="name"
        defaultValue=""
        size="input-md"
      />
      <FormInput
        label="Address"
        type="text"
        name="address"
        defaultValue=""
        size="input-md"
      />
      <SubmitBtn text="PLACE YOUR ORDER" />
    </Form>
  );
};

export default CheckoutForm;
