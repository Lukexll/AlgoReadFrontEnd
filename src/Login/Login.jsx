import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom'; 
import './Login.css';


const Login = () => {
   

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Limpa erros
    setError('');

    // Validação simples de campos
    if (!user || !password) {
      setError('Usuário e senha são obrigatórios.');
      return;
    }

   

    alert('Login realizado com sucesso!');
  };



return (
    <div className="login-container">
        <h2>Bem Vindo ao AlgoRead</h2>
        <form onSubmit={handleSubmit}>

    <div className="login-form">
        <label htmlFor="user">Usuário</label>
        <input
          type="text"
          id="user"
          placeholder="Usuário"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        {errors.user && <p className="error-message">{errors.user}</p>}

        <FaUser className="icon"/>
        </div>

    <div className="login-form">
        <label htmlFor="password">Senha</label>
         <input
          type="password"
          id="password"
          placeholder="Digite sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p className="error-message">{errors.password}</p>}

        <FaLock className="icon"/>

        </div>

        <div className="extra-options">
         <a href="#">Esqueceu a senha?</a>
         </div>

        <button type="submit">Entrar</button>

        <div className="redirect">
        <p>Não tem conta? <Link to="/cadastro">Cadastre-se</Link></p>
        </div>



        </form>
    </div>

)


}
export default Login;
