import './App.css';

import AppRoutes from './AppRoutes';
import Footer from './Componentes/Footer';

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <AppRoutes/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
