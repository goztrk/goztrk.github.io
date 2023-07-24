import { useRoutes } from 'react-router-dom';
import { Blog, Home } from '~/pages';

export default function Routes() {
  const element = useRoutes([
    {
      index: true,
      element: <Home />,
    },
    {
      path: 'blog',
      element: <Blog />,
    },
  ]);
  return element;
}
