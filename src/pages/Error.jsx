import { useRouteError, Link } from 'react-router-dom';

const Error = () => {
  const error = useRouteError();
  if (error.status == 404) {
    return (
      <main className="h-screen flex items-center justify-center flex-col gap-5">
        <h1 className="text-9xl font-semibold text-primary">404</h1>
        <h2 className="tect-3xl font-bold tracking-tight  sm:text-5xl">
          page not found
        </h2>
        <p className="text-lg leading-7">
          Sorry we couldnt find the page you are looking for
        </p>
        <div className="mt-5">
          <Link to="/" className="btn btn-secondary uppercase">
            Go Back Home
          </Link>
        </div>
      </main>
    );
  }
  return (
    <main className="h-screen flex items-center justify-center flex-col ">
      <div className="text-center font-bold text-4xl">there was an error</div>
    </main>
  );
};

export default Error;
