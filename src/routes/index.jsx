import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cadastro from '../Cadastro/Cadastro';
import Login from '../Login/Login';


function RoutesApp() {
    return (
            <Routes>
               
                {/* Rota para a página de login  */}
                <Route path="login" element={<Login />} />

                {/* Rota para a página de cadastro */}
                <Route path="cadastro" element={<Cadastro />} />
            </Routes>
       
    );
};

export default RoutesApp;
