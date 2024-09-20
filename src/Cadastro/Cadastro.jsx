import { FaUser, FaLock } from "react-icons/fa";
import { BsEnvelope } from "react-icons/bs";

import { useState } from "react";

import "./Cadastro.css";

function Cadastro() { 

  const [formData, setFormData] = useState({
  name: "",
  email: "",
  Date: "",
  password: "",
});

const [errors, setErrors] = useState({});

const validate = () => {
  let newErrors = {};
  
  // Validação do campo nome
  if (!formData.name.trim()) {
    newErrors.name = "Nome é obrigatório.";
  }

  // Validação do campo email
  const emailRegex = /\S+@\S+\.\S+/;
  if (!formData.email) {
    newErrors.email = "Email é obrigatório.";
  } else if (!emailRegex.test(formData.email)) {
    newErrors.email = "Email inválido.";
  }

  // Validação da data de nascimento
  if (!formData.Date) {
    newErrors.Date = "Data de nascimento é obrigatória.";
  }

  // Validação da senha
  const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/;
  if (!formData.password) {
    newErrors.password = "Senha é obrigatória.";
  } else if (formData.password.length < 6) {
    newErrors.password = "Senha deve ter no mínimo 6 caracteres.";
  } else if (!passwordRegex.test(formData.password)) {
    newErrors.password = "Senha deve possuir pelo menos uma letra maiúscula, um número e um símbolo.";
  }

  setErrors(newErrors);

  return Object.keys(newErrors).length === 0;
};

const handleSubmit = (event) => {
  event.preventDefault();
  
  if (validate()) {
    alert("Conta criada com sucesso!");
    // Enviar dados para o servidor ou limpar o formulário.
    setFormData({ name: "", email: "", Date: "", password: "" });
  }
};

const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};



  return (
    <div className='Container'>
            <h1>Junte-se ao AlgoRead</h1>
            <form onSubmit={handleSubmit}>

            <div className="form-group">
                <label>Nome</label>
                <input 
                type="Name"
                id="name"
                name="name" 
                placeholder='Nome'
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? "error" : ""} 

                />
                {errors.name && <p className="error-message">{errors.name}</p>}

                <FaUser className="icone"/>

            </div>

            <div className="form-group">
                <label>E-mail</label>
                <input 
                type="email" 
                id="email"
                name="email"
                placeholder='E-mail'
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? "error" : ""} 

                />
                {errors.email && <p className="error-message">{errors.email}</p>}

                <BsEnvelope className="icone"/>
            </div>
          
            <div className="form-group">
                <label>Data de Nascimento</label>
                <input 
                type="Date"
                id="Date"
                name="Date"
                value={formData.birthDate}
                onChange={handleChange}
                className={errors.birthDate ? "error" : ""}
                
                />
                {errors.birthDate && <p className="error-message">{errors.birthDate}</p>}
            </div>

          <div className="form-group">
                <label>Senha</label>
               <input 
               type="password" 
               id="password"
               name="password"
               placeholder='Senha'
               value={formData.password}
              onChange={handleChange}
              className={errors.password ? "error" : ""}
               
               />
               {errors.password && <p className="error-message">{errors.password}</p>}
               <FaLock className="icone"/>

            </div>
            <button type="submit">Cadastrar</button>
            <div className="login-redirect">
                    <span>Já tem uma conta? <a href="/login">Entrar</a></span>
                </div>
        </form>
      
    </div>
  )
}

export default Cadastro;
