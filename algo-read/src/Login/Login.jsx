import { Link } from 'react-router-dom';
import { useState } from 'react';

function Login() {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
    }
    

    return (
        <div className="login-container">
            <div className="login-content">
                <h1>Entrar</h1>
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <Link to="/EsqueciMinhaSenha">Esqueci minha senha</Link>
                    <button type="submit">Entrar</button>
                    <Link to="/Registar">Registar-se</Link>
                </form>
            </div>
        </div>
    );
}

export default Login;