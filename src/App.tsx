import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { AppRoutes } from './routes/indext';

function App() {
  return (
    <>
      <Router>
        <ChakraProvider>
          <AppRoutes />
        </ChakraProvider>
      </Router>
    </>
  );
}

export default App;
