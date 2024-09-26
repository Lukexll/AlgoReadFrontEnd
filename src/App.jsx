import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cadastro from './Cadastro/Cadastro';
import Login from './Login/Login';
//mport RoutesApp from './Routes/RoutesApp';

function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Rota para a página de login */}
          <Route path="/" element={<Login />} />

          {/* Rota para a página de cadastro */}
          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
