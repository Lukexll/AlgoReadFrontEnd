import { useState } from "react";
import { FaLock } from "react-icons/fa";
import { BsEnvelope  } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom'; 
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setError] = useState('');
  const [serverError, setServerError] = useState('');

  const navigate = useNavigate(); // Hook de navegação

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Limpa erros
    setError('');
    setServerError('');

    // Validação simples de campos
    if (!email || !password) {
      setError('Email e senha são obrigatórios.');
      return;
    }

    try {
      // Faz o POST para o backend no endpoint /loginaccount
      const response = await fetch('http://25.17.225.123:5152/loginaccount', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        alert('Login realizado com sucesso!');
        // Redirecionar ou armazenar dados do usuário aqui
      } else {
        const data = await response.json();
        setServerError(data.message || 'Erro ao fazer login.');
      }
    } catch (error) {
      setServerError('Erro ao se conectar com o servidor. Tente novamente mais tarde.');
    }
  };

  const handleClose = () => {
    navigate('/'); // Redireciona para a página inicial (ou outra página)
};

  return (
    <div className="login-container">
      <span className="close-button" onClick={handleClose}>
                x {/* O &times; representa o símbolo de "X" */}
            </span>
      <h2>Bem-Vindo ao AlgoRead</h2>
      
      <form onSubmit={handleSubmit}>
        {serverError && <p className="error-message">{serverError}</p>}
        {errors && <p className="error-message">{errors}</p>}

        <div className="login-form">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <BsEnvelope className="icon" />
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
          <FaLock className="icon" />
        </div>

        <div className="extra-options">
          <Link to="/esqueceusenha">Esqueceu a senha?</Link>
        </div>

        <button type="submit">Entrar</button>

        <div className="redirect">
          <p>Não tem conta? <Link to="/cadastro">Cadastre-se</Link></p>
        </div>
      </form>
    </div>
  );
};

export default Login;
