import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logoutUser } from '../features/cart/userSlice';
import { clearCart } from '../features/cart/cartSlice';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((store) => store.user);
  const username = user?.username;
  const logoutHandler = () => {
    navigate('/');
    dispatch(logoutUser());
    dispatch(clearCart());
  };
  return (
    <header className="bg-neutral text-neutral-content py-2">
      <div className=" align-element flex  justify-center sm:justify-end">
        <div className="flex items-center justify-center gap-x-6">
          {user ? (
            <div className="flex gap-x-2 sm:gap-x-8 items-center">
              <p className="text-xs sm:text-sm">Hello, {username}</p>
              <button
                className="btn btn-outline btn-primary btn-xs"
                onClick={logoutHandler}>
                LOGOUT
              </button>
            </div>
          ) : (
            <div className="flex items-center justify-center gap-x-6">
              <Link className="link link-hover text-xs sm:text-sm" to="/login">
                Sign in / Guest
              </Link>
              <Link
                className="link link-hover text-xs sm:text-sm"
                to="/register">
                Create Account
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
