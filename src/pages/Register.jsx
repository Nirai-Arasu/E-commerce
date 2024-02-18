import { FormInput, SubmitBtn } from '../components';
import { Link } from 'react-router-dom';
FormInput;
const Register = () => {
  return (
    <section className="h-screen grid place-items-center">
      <form
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
      </form>
    </section>
  );
};

export default Register;
