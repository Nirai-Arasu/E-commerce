import { FormInput, SubmitBtn } from '../components';
import { Link, Form, redirect, useNavigate } from 'react-router-dom';
import { customFetch } from '../util';
import { loginUser } from '../features/cart/userSlice';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';

const url = '/auth/local';
export const action =
  (store) =>
  async ({ request }) => {
    try {
      const formData = await request.formData();
      const details = Object.fromEntries(formData);
      const { data } = await customFetch.post(url, details);

      const dispatch = store.dispatch;
      dispatch(loginUser({ source: 'Logged', user: data }));
      return redirect('/');
    } catch (err) {
      console.log(err);
      const errorMessage =
        err?.response?.data?.error?.message ||
        'Please double check your credentials';
      toast.error(errorMessage);
      return null;
    }
  };
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginGusetUser = async () => {
    try {
      const { data } = await customFetch.post(url, {
        identifier: 'test@test.com',
        password: 'secret',
      });
      dispatch(loginUser({ source: 'Guest Log in', user: data }));
      navigate('/');
    } catch (error) {
      console.log(error);
      toast.error('guest user login error,please try later');
    }
  };
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="post"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4">
        <h1 className="text-3xl text-center font-bold">Login</h1>
        <FormInput
          label="Email"
          type="text"
          name="identifier"
          defaultValue=""
        />
        <FormInput
          label="Password"
          type="text"
          name="password"
          defaultValue=""
        />
        <div className="mt-4">
          <SubmitBtn text="LOGIN" />
        </div>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={loginGusetUser}>
          GUEST USER
        </button>

        <p className="text-center">
          Not a member yet?{' '}
          <Link className="ml-2 link link-hover link-primary" to="/register">
            Register
          </Link>
        </p>
      </Form>
    </section>
  );
};

export default Login;
