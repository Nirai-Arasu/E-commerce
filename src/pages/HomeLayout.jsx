import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
  return (
    <div>
      <h2>HomeLayout</h2>
      <Outlet />
    </div>
  );
};

export default HomeLayout;
