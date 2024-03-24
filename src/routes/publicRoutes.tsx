import { HomePage } from '@/pages/user/home';
import { TopPage } from '@/pages/common/top';
import { PrivateRoutes } from './PrivateRoutes';

export const publicRoutes = [
  {
    path: '/',
    element: <TopPage />,
  },
  {
    path: '/home',
    element: (
      <PrivateRoutes>
        <HomePage />
      </PrivateRoutes>
    ),
  },
];
