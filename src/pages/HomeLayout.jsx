import { Outlet, useNavigation } from 'react-router-dom';
import { Header, Navbar, Loading } from '../components';

const HomeLayout = () => {
  const { state } = useNavigation();
  const isLoading = state === 'loading';
  return (
    <>
      <Header />
      <Navbar />
      <section className="align-element py-20">
        {isLoading ? <Loading /> : <Outlet />}
      </section>
    </>
  );
};

export default HomeLayout;
