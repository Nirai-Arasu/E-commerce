import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const NavLinks = () => {
  const { user } = useSelector((store) => store.user);

  const links = [
    { id: 1, link: '/', name: 'Home' },
    { id: 2, link: '/about', name: 'About' },
    { id: 3, link: '/products', name: 'Products' },
    { id: 4, link: '/cart', name: 'Cart' },
    { id: 5, link: '/checkout', name: 'Checkout' },
    { id: 6, link: '/orders', name: 'Orders' },
  ];
  return (
    <>
      {links.map(({ id, link, name }) => {
        if ((link === '/checkout' || link === '/orders') && !user) {
          return null;
        }
        return (
          <li key={id}>
            <NavLink to={link}>{name}</NavLink>
          </li>
        );
      })}
    </>
  );
};

export default NavLinks;
