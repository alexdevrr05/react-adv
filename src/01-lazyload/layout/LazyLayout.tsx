/**
 * Lazy loading: se refiere a la técnica de cargar recursos
 * (en este caso, componentes) de manera diferida, es decir,
 *  cargarlos solo cuando son necesarios en lugar de cargar
 * todo al inicio.
 */

import { NavLink, Navigate, Route, Routes } from 'react-router-dom';

import { LazyPage1, LazyPage2, LazyPage3 } from '../pages';

const LazyLayout = () => {
  return (
    <div>
      <h1>LazyLayout</h1>

      {/* Las rutas hijas irán aquí */}
      <ul>
        <li>
          <NavLink to='/lazyload/lazy1'>Lazy1</NavLink>
        </li>
        <li>
          <NavLink to='/lazyload/lazy2'>Lazy2</NavLink>
        </li>
        <li>
          <NavLink to='/lazyload/lazy3'>Lazy3</NavLink>
        </li>
      </ul>

      <Routes>
        <Route path='lazy1' element={<LazyPage1 />} />
        <Route path='lazy2' element={<LazyPage2 />} />
        <Route path='lazy3' element={<LazyPage3 />} />

        {/* <Route path='*' element={<h2>Not found</h2>} /> */}
        <Route path='*' element={<Navigate replace to='lazy1' />} />
      </Routes>
    </div>
  );
};

export default LazyLayout;
