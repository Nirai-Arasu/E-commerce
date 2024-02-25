import { redirect, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';

import { customFetch } from '../util';

import SectionTitle from '../components/SectionTitle';
import OrderList from '../components/OrderList';
import CreatePaginationContainer from '../components/CreatePaginationContainer';
const url = '/orders';

export const loader =
  (store) =>
  async ({ request }) => {
    const user = store.getState()?.user?.user;
    if (!user) {
      toast.warn('You must be logged in to view orders');
      return redirect('/login');
    }
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);
    try {
      const { data } = await customFetch.get(url, {
        params,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      return data;
    } catch (error) {
      console.log(error);
      toast.error('Error try again later');
      if (error.response.status === 401) {
        return redirect('/login');
      }
      return null;
    }
  };
const Orders = () => {
  const { meta } = useLoaderData();
  if (meta.pagination.total == 0) {
    return <SectionTitle text="Please make an order" />;
  }
  return (
    <>
      <SectionTitle text="Your Orders" />
      <OrderList />
      <CreatePaginationContainer />
    </>
  );
};

export default Orders;
