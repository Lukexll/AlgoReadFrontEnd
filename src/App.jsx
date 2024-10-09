import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login/Login';
import Cadastro from './Cadastro/Cadastro';
import EsqueceuSenha from './Forgot/EsqueceuSenha';
import ChangePassword from './ModificarSenha/ChangePassword';
import Navbar from './Navbar/Navbar';




function App() {

  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="cadastro" element={<Cadastro />} />
          <Route path="login" element={<Login />} />
          <Route path="esqueceusenha" element={<EsqueceuSenha />} />
          <Route path="ChangePassword" element={<ChangePassword />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;