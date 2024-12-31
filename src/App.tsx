import Footer from './components/Footer/Footer.js';
import Header from './components/Header/Header.js';
import AppRoutes from './pages/AppRoutes.js';
import './App.css';

function App() {
  return (
    <div className='app-container'>
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
