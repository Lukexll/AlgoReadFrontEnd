import { FaUser, FaLock } from "react-icons/fa";
import { BsEnvelope } from "react-icons/bs";
import { Link  } from 'react-router-dom';
import { useState } from "react";
import "./Cadastro.css";

function Cadastro() { 

  const [formData, setFormData] = useState({
  name: "",
  email: "",
  date: "",
  password: "",
});

const [errors, setErrors] = useState({});

const validate = () => {
  const newErrors = {};
  
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
  if (!formData.date) {
    newErrors.date = "Data de nascimento é obrigatória.";
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
    setFormData({ name: "", email: "", date: "", password: "" });
    setErrors({});
  }
};

const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};



  return (
    <div className="container">
            <h1>Junte-se ao AlgoRead</h1>
            <form onSubmit={handleSubmit}>

            <div className="form-group">
                <label htmlFor="name">Nome</label>
                <input 
                type="name"
                id="name"
                name="name" 
                placeholder='Digite seu nome completo'
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? "error" : ""} 

                />
                {errors.name && <p className="error-message">{errors.name}</p>}

                <FaUser className="icon"/>

            </div>

            <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input 
                type="email" 
                id="email"
                name="email"
                placeholder='Insira seu e-mail'
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? "error" : ""} 

                />
                {errors.email && <p className="error-message">{errors.email}</p>}

                <BsEnvelope className="icon"/>
            </div>
          
            <div className="form-group">
                <label htmlFor="date">Data de Nascimento</label>
                <input 
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className={errors.date ? "error" : ""}
                
                />
                {errors.date && <p className="error-message">{errors.date}</p>}
            </div>

          <div className="form-group">
                <label htmlFor="password">Senha</label>
               <input 
               type="password" 
               id="password"
               name="password"
               placeholder="Crie uma senha"
               value={formData.password}
               onChange={handleChange}
               className={errors.password ? "error" : ""}
               
               />
               {errors.password && <p className="error-message">{errors.password}</p>}

               <FaLock className="icon"/>

            </div>
            <button type="submit">Cadastrar</button>
            
            <div className="login-redirect">
                    <span>Já tem uma conta? <Link to="/login">Entrar</Link></span>
                   
                </div>
        </form>
      
    </div>
  )
}

export default Cadastro;
