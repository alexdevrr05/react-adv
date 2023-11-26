import { lazy } from 'react';
// import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';
import { NoLazy } from '../01-lazyload/pages';

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  // Component: () => JSX.Element;
  Component: React.LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const LazyLayout = lazy(
  () =>
    import(
      /* webpackChunkName: "LazyLayout" */ '../01-lazyload/layout/LazyLayout'
    )
);
// const Lazy2 = lazy(
//   () =>
//     import(/* webpackChunkName: "LazyPage2" */ '../01-lazyload/pages/LazyPage2')
// );
// const Lazy3 = lazy(
//   () =>
//     import(/* webpackChunkName: "LazyPage3" */ '../01-lazyload/pages/LazyPage3')
// );

export const routes: Route[] = [
  // lazy loading
  {
    to: '/lazyload',
    path: 'lazyload/*',
    Component: LazyLayout,
    name: 'lazy-layout',
  },
  {
    path: 'no-lazy',
    to: '/no-lazy',
    Component: NoLazy,
    name: 'no-lazy',
  },
];
