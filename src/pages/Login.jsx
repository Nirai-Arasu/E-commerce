import { FormInput, SubmitBtn } from '../components';
import { Link } from 'react-router-dom';
FormInput;
const Login = () => {
  return (
    <section className="h-screen grid place-items-center">
      <form
        method="post"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4">
        <h1 className="text-3xl text-center font-bold">Login</h1>
        <FormInput
          label="Email"
          type="text"
          name="email"
          defaultValue="demouser"
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
        <button className="btn btn-secondary">GUEST USER</button>

        <p className="text-center">
          Not a member yet?{' '}
          <Link className="ml-2 link link-hover link-primary" to="/register">
            Register
          </Link>
        </p>
      </form>
    </section>
  );
};

export default Login;
