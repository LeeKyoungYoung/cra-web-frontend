import { Suspense } from 'react';
import { RouterProvider } from '@tanstack/react-router';
import { routes } from './routes/routes.ts';
import Header from './components/Header/Header.tsx';
import Footer from './components/Footer/Footer.tsx';
import ScrollToTop from './utils/ScrollToTop.ts';
import styles from './App.module.css';

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
