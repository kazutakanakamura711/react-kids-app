import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { AppRoutes } from './routes/index';
import { Header } from './components/layouts/Header';
import { MainLayout } from './components/layouts/MainLayout';
import { useEffect, useState } from 'react';
import { RoutePathType } from './types/routePath.ts';

const AppContent = () => {
  const location = useLocation();
  const [isAuthPage, setIsAuthPage] = useState(false);

  useEffect(() => {
    const path = location.pathname;
    setIsAuthPage(path === RoutePathType.Top);
  }, [location]);

  return (
    <>
      {!isAuthPage ? (
        <>
          <Header />
          <MainLayout>
            <AppRoutes />
          </MainLayout>
        </>
      ) : (
        <AppRoutes />
      )}
    </>
  );
};

function App() {
  return (
    <>
      <Router>
        <ChakraProvider>
          <AppContent />
        </ChakraProvider>
      </Router>
    </>
  );
}

export default App;
