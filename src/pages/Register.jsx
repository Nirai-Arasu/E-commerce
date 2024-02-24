import { FormInput, SubmitBtn } from '../components';
import { Link, Form, redirect } from 'react-router-dom';
import { customFetch } from '../util';
import { toast } from 'react-toastify';
import { loginUser } from '../features/cart/userSlice';

const url = '/auth/local/register';

export const action =
  (store) =>
  async ({ request }) => {
    try {
      const formData = await request.formData();
      const details = Object.fromEntries(formData);
      const { data } = await customFetch.post(url, details);

      const dispatch = store.dispatch;
      dispatch(loginUser({ source: 'Registered', user: data }));
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
const Register = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="post"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4">
        <h1 className="text-3xl text-center font-bold">Register</h1>
        <FormInput
          label="Username"
          type="text"
          name="username"
          defaultValue=""
        />
        <FormInput label="Email" type="text" name="email" defaultValue="" />
        <FormInput
          label="Password"
          type="text"
          name="password"
          defaultValue=""
        />
        <div className="mt-4">
          <SubmitBtn text="REGISTER" />
        </div>

        <p className="text-center">
          Already a member?
          <Link className="ml-2 link link-hover link-primary" to="/login">
            Login
          </Link>
        </p>
      </Form>
    </section>
  );
};

export default Register;
