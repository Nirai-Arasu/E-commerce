import { NavLink } from 'react-router-dom';

const NavLinks = () => {
  const links = [
    { id: 1, link: '/', name: 'Home' },
    { id: 2, link: '/about', name: 'About' },
    { id: 3, link: '/products', name: 'Products' },
    { id: 4, link: '/cart', name: 'Cart' },
  ];
  return (
    <>
      {links.map(({ id, link, name }) => {
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
