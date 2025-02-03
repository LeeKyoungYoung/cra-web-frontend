import Footer from './components/Footer/Footer.tsx';
import Header from './components/Header/Header.tsx';
import ScrollToTop from './utils/ScrollToTop.tsx';
import { RouterProvider } from '@tanstack/react-router';
import './App.css';
import { routes } from './routes/routes.ts';
import { Suspense } from 'react';
const Loding = {
  padding: '10rem',
};

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="contents">
        <ScrollToTop />
        <Suspense fallback={<div style={Loding}>Loading...</div>}>
          <RouterProvider router={routes} />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}

export default App;
