import { FiUpload } from 'react-icons/fi';
import { useState } from 'react';
import avatarDefault from '../../assets/avatar.png'; // Avatar padrão
import { toast } from 'react-toastify';

// Token JWT de teste definido manualmente
const token = "eyJhbGciOiJIUzI1NiIsImtpZCI6IkV2RWRGUm5Da1NJM25yakEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2VhYnJ1YWV2Y2twdmVwcXFxbWZ2LnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiI5MDRmNDJjYy03M2MzLTQ3ZWQtODdlNi01MDE3MzBlMTBkZjIiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzI4OTEyNjIwLCJpYXQiOjE3Mjg5MDkwMjAsImVtYWlsIjoiZXhhbXBsZUB0ZXN0Mi5jb20iLCJwaG9uZSI6IiIsImFwcF9tZXRhZGF0YSI6eyJwcm92aWRlciI6ImVtYWlsIiwicHJvdmlkZXJzIjpbImVtYWlsIl19LCJ1c2VyX21ldGFkYXRhIjp7ImVtYWlsIjoiZXhhbXBsZUB0ZXN0Mi5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsInBob25lX3ZlcmlmaWVkIjpmYWxzZSwic3ViIjoiOTA0ZjQyY2MtNzNjMy00N2VkLTg3ZTYtNTAxNzMwZTEwZGYyIn0sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoicGFzc3dvcmQiLCJ0aW1lc3RhbXAiOjE3Mjg5MDkwMjB9XSwic2Vzc2lvbl9pZCI6IjQ0ZDZlNzhlLWVkZWEtNDcxMi1hNWQzLTdlYjQ2YTdlYmQ0ZCIsImlzX2Fub255bW91cyI6ZmFsc2V9.DfC-ghPPXmOeeiyP0HYIPdFy33hd2k0fTisz6rpN5V4"; // Substitua "seu_token_jwt_aqui" pelo seu token JWT real

export default function Profile({ updateUserData }) {
  const [formData, setFormData] = useState({
    name: '',
    profileName: '',
    birthDate: '',
  });

  const [avatar, setAvatar] = useState(avatarDefault);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setAvatar(e.target.result); // Mostra a imagem no frontend
      };
      reader.readAsDataURL(file); // Lê o arquivo e exibe no preview
    }
  };

  // Função para enviar o formulário para o backend e atualizar o estado do perfil
  const handleSubmit = (e) => {
    e.preventDefault(); // Previne o comportamento padrão de reload

    // Cria um FormData para enviar os dados
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('username', formData.profileName);
    formDataToSend.append('date', formData.birthDate);

    // if (selectedFile) {
    //   formDataToSend.append('avatar', selectedFile); // Envia o avatar se tiver
    // }

    // Faz a requisição com o token diretamente no cabeçalho
    fetch('http://25.52.167.55:5001/UserCreate', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json', 
      },
      body: JSON.stringify(formData) // Envia os dados do formulário
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        updateUserData({
          name: formData.name,
          profileName: formData.profileName,
          avatar: avatar,
        });
        toast.success('Usuário criado com sucesso!');
      })
      .catch((error) => toast.error('Erro ao criar usuário!'));
  };

  return (
    <div className='content'>
      <div>
        <form className='form-profile' onSubmit={handleSubmit}>
          <label className='label-avatar'>
            <span>
              <FiUpload color='#fff' size={25} />
            </span>
            <input type='file' accept='image/*' onChange={handleAvatarChange} /> <br />
            <img src={avatar} alt='foto de perfil' width={250} height={250} />
          </label>

          <label>Nome</label>
          <input
            type='text'
            name='name'
            placeholder='Seu nome...'
            value={formData.name}
            onChange={handleChange}
          />

          <label>Nome de usuário</label>
          <input
            type='text'
            name='profileName'
            placeholder='Nome do Usuário...'
            value={formData.profileName}
            onChange={handleChange}
          />

          <label>Data de nascimento</label>
          <input
            type='date'
            name='birthDate'
            value={formData.birthDate}
            onChange={handleChange}
          />

          <button type='submit'>Criar perfil</button>
        </form>
      </div>
    </div>
  );
}
