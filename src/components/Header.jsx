import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-neutral text-neutral-content py-2">
      <div className=" align-element flex  justify-center sm:justify-end">
        <div className="flex items-center justify-center gap-x-6">
          <Link className="link link-hover text-xs sm:text-sm" to="/login">
            Sign in / Guest
          </Link>
          <Link className="link link-hover text-xs sm:text-sm" to="/register">
            Create Account
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
