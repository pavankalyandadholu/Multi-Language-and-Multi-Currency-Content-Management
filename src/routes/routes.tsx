import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';
import Layout from '../components/Layout';

const Home = lazy(() => import('../pages/Home'));
// Add more page components as needed
// const About = lazy(() => import('../pages/About'));
// const Contact = lazy(() => import('../pages/Contact'));

export const routes: RouteObject[] = [
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      // Add more routes as needed
      // {
      //   path: '/about',
      //   element: <About />,
      // },
      // {
      //   path: '/contact',
      //   element: <Contact />,
      // },
    ],
  },
]; 