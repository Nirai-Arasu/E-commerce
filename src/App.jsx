import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import {
  About,
  Cart,
  Checkout,
  Error,
  HomeLayout,
  Landing,
  Login,
  Orders,
  Products,
  Register,
  SingleProduct,
} from './pages';
import { loader as landingLoader } from './pages/Landing';
import { loader as SingleProductLoader } from './pages/SingleProduct';
import { loader as ProuctsLoader } from './pages/Products';
import { loader as checkoutLoader } from './pages/Checkout.jsx';
import { loader as orderLoader } from './pages/Orders.jsx';
import { action as registerAction } from './pages/Register';
import { action as loggedInAction } from './pages/Login.jsx';
import { action as checkoutFormAction } from './components/CheckoutForm.jsx';

import ErrorElement from './pages/ErrorElement';
import store from './store.js';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        loader: landingLoader(queryClient),
        errorElement: <ErrorElement />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'checkout',
        element: <Checkout />,
        loader: checkoutLoader(store),
        action: checkoutFormAction(store),
      },
      {
        path: 'orders',
        element: <Orders />,
        loader: orderLoader(store),
      },
      {
        path: 'products',
        element: <Products />,
        loader: ProuctsLoader(queryClient),
        errorElement: <ErrorElement />,
      },
      {
        path: 'products/:id',
        element: <SingleProduct />,
        loader: SingleProductLoader(queryClient),
        errorElement: <ErrorElement />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
    action: loggedInAction(store),
    errorElement: <Error />,
  },
  {
    path: '/register',
    element: <Register />,
    action: registerAction(store),
    errorElement: <Error />,
  },
]);
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
export default App;
