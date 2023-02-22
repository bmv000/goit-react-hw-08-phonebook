import { Outlet} from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation';
import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';

export const Layout = () => {
//   const { id } = useParams();

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


//  <header>{!id && <Navigation />}</header>;