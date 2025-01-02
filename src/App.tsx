import Footer from './components/Footer/Footer.js';
import Header from './components/Header/Header.js';
import AppRoutes from './pages/AppRoutes.js';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="contents">
        <AppRoutes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
