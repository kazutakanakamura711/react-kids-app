import { FC } from 'react';
import { Navigate } from 'react-router-dom';

type PrivateRoutesProps = {
  children: React.ReactNode;
};

const isAuthenticated = () => {
  const token = localStorage.getItem('sb-usxglodcktbzuwfognig-auth-token');
  if (!token) return false;
  return true;
};

export const PrivateRoutes: FC<PrivateRoutesProps> = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/" />;
};
