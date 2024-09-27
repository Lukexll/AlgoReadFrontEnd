import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login/Login';
import Cadastro from './Cadastro/Cadastro';

function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="cadastro" element={<Cadastro />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;