import { NavLink } from 'react-router-dom';
import { BsCart3, BsMoonFill, BsSunFill } from 'react-icons/bs';
import { FaBarsStaggered } from 'react-icons/fa6';
import NavLinks from './NavLinks';
import { toggleTheme } from '../features/cart/userSlice';
import { useDispatch, useSelector } from 'react-redux';

const Navbar = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((store) => store.user);
  const { numberOfItemsInCart } = useSelector((store) => store.cart);
  return (
    <nav className="bg-base-200">
      <div className="navbar align-element">
        <div className="navbar-start">
          <NavLink
            to="/"
            className="hidden lg:flex btn btn-primary text-3xl items-center ">
            C
          </NavLink>
          <div className="lg:hidden dropdown dropdown-bottom">
            <div tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaBarsStaggered className="h-6 w-6" />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
              <NavLinks />
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal">
            <NavLinks />
          </ul>
        </div>
        <div className="navbar-end">
          <label className="swap swap-rotate">
            <div onClick={() => dispatch(toggleTheme())}>
              <BsSunFill
                className={`${
                  theme === 'light' ? 'swap-on' : 'swap-off'
                } h-4 w-4`}
              />
            </div>
            <div onClick={() => dispatch(toggleTheme())}>
              <BsMoonFill
                className={`${
                  theme === 'dark' ? 'swap-on' : 'swap-off'
                } h-4 w-4`}
              />
            </div>
          </label>
          <NavLink to="cart" className="btn btn-ghost btn-circle ml-4">
            <div className="indicator">
              <BsCart3 className="w-6 h-6 " />
              <div className="indicator-item badge badge-primary badge-sm">
                {numberOfItemsInCart}
              </div>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
