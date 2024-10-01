import React, { useState } from "react";
import './EsqueceuSenha.css'; // Para o estilo
import { BsEnvelope } from "react-icons/bs";


const EsqueceuSenha = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(""); // Limpar erros anteriores

    // Validação de e-mail
    const emailRegex = /\S+@\S+\.\S+/;
    if (!email) {
      setError("O e-mail é obrigatório.");
      return;
    } else if (!emailRegex.test(email)) {
      setError("E-mail inválido.");
      return;
    }

    alert("Um link de redefinição de senha foi enviado ao seu e-mail.");

    // Simulação de envio de e-mail de redefinição
    //setMessage("Um link de redefinição de senha foi enviado ao seu e-mail.");
    //setEmail("");
  };

  return (
    <div className="redefinir-container">
      <h1>Redefinir sua Senha</h1>
      <p>Insira seu endereço de e-mail associado a sua conta para receber um link de redefinição de senha.Caso não encontre o e-mail, verifique a pasta de spam ou lixo eletrônico.</p>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={error ? "input-error" : ""}

          />
          {error && <p className="error-message">{error}</p>}

           <BsEnvelope className="icon"/>
          
        </div>

        <button type="submit">Enviar</button>
      </form>

      {message && <p className="success-message">{message}</p>}
    </div>
  );
};

export default EsqueceuSenha;
