import Footer from './components/Footer/Footer.tsx';
import Header from './components/Header/Header.tsx';
import ScrollToTop from './utils/ScrollToTop.tsx';
import { RouterProvider } from '@tanstack/react-router';
import styles from './App.module.css';
import { routes } from './routes/routes.ts';
import { Suspense } from 'react';

function App() {
  return (
    <div className={styles.appContainer}>
      <Header />
      <div className={styles.contents}>
        <ScrollToTop />
        <Suspense fallback={<div>Loading...</div>}>
          <RouterProvider router={routes} />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}

export default App;
