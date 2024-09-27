import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login/Login';

function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Rota para a página de login */}
          <Route path="login" element={<Login />} />

          {/* Rota para a página de cadastro */}
          <Route path="cadastro" element={<Cadastro />} />
        </Routes>
        <Login/>
      </div>
    </Router>
  );
}

export default App;
