import { HomePage } from '@/pages/user/home';
import { TopPage } from '@/pages/common/top';
import { PrivateRoutes } from './PrivateRoutes';
import { RouteLabelType } from '@/types/routeLabel';
import { RoutePathType } from '@/types/routePath.ts';

export const publicRoutes = [
  {
    label: RouteLabelType.Top,
    path: RoutePathType.Top,
    element: <TopPage />,
  },
  {
    label: RouteLabelType.Home,
    path: RoutePathType.Home,
    element: (
      <PrivateRoutes>
        <HomePage />
      </PrivateRoutes>
    ),
  },
];
