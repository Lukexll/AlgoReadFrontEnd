import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cadastro from '../Cadastro/Cadastro';
import Login from '../Login/Login';

function RoutesApp() {
    return (
        <Router>
            <Routes>
                {/* Rota para o Login (página inicial) */}
                <Route path="/" element={<Login />} />
                
                {/* Rota para a página de login (mesmo que a rota raiz) */}
                <Route path="/login" element={<Login />} />

                {/* Rota para a página de cadastro */}
                <Route path="/cadastro" element={<Cadastro />} />
            </Routes>
        </Router>
    );
};

export default RoutesApp;
