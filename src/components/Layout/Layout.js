import { Outlet} from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation';
import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';

export const Layout = () => {


  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};


