import { Suspense } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate,
} from 'react-router-dom';

import { routes } from '../routes/routes';

import logo from '../logo.svg';

export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <BrowserRouter>
        <div className='main-layout'>
          <nav>
            <img src={logo} alt='React Logo' />
            <ul>
              {routes.map(({ path, to, name }) => (
                <li key={path}>
                  <NavLink
                    to={to}
                    className={({ isActive }) => (isActive ? 'nav-active' : '')}
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <Routes>
            {routes.map((route) => (
              <Route
                key={route.to}
                path={route.path}
                element={<route.Component />} // <></>
              />
            ))}

            <Route path='/*' element={<Navigate to={routes[0].to} replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};
