import './userProfile.css'; // CSS geral
import { useParams, Link } from 'react-router-dom';
import avatarDefault from '../../assets/avatar.png';
import { FiEdit, FiArrowLeft } from 'react-icons/fi';
import { useState, useEffect } from 'react';

export default function UserProfile({ isMyProfile }) {
    const { userId } = useParams(); // Pegando o ID do usuário da URL
    const [userData, setUserData] = useState(null); // Estado para armazenar os dados do usuário
    const [isFollowing, setIsFollowing] = useState(false); // Simular o estado de seguir

    // Função para buscar os dados do usuário
    const fetchUserData = async () => {
        try {
            const response = await fetch(`http://25.52.167.55:5001/infoUser/${userId}`); // URL da sua API
            const data = await response.json();
            setUserData(data); // Armazena os dados do usuário
        } catch (error) {
            console.error('Erro ao buscar dados do usuário:', error);
        }
    };

    useEffect(() => {
        fetchUserData(); // Chama a função para buscar os dados ao montar o componente
    }, [userId]);

    const handleFollowToggle = () => {
        setIsFollowing(!isFollowing);
    };

    return (
        <div className='container-user'>
            <Link to={'/user'}> <FiArrowLeft size={24}/></Link>
            <div className='profile'>
                <img src={userData?.avatar || avatarDefault} alt='foto de perfil'/> {/* Usa a foto de perfil do usuário ou um padrão */}
                <h1>{userData ? userData.name : 'Carregando...'}</h1> {/* Nome do usuário */}
                <p>{userData ? `@${userData.profileName}` : 'Carregando...'}</p> {/* Nome de usuário com @ */}

                <div className='stats'>
                    <div className='stat'>
                        <span><strong>{userData?.following || 0}</strong> Seguindo</span>
                    </div>
                    <div className='stat'>
                        <span><strong>{userData?.followers || 0}</strong> Seguidores</span>
                    </div>
                    <div className='stat'>
                        <span><strong>{userData?.articlesPublished || 0}</strong> Artigos publicados</span>
                    </div>
                </div>

                {isMyProfile ? (
                    <div className='edit-profile'>
                        <Link to={'/editProfile'}>
                            <button>Editar perfil <FiEdit size={14}/></button>
                        </Link>
                    </div>
                ) : (
                    <div className='profile-actions'>
                        <button onClick={handleFollowToggle}>
                            {isFollowing ? 'Seguindo' : 'Seguir'}
                        </button>
                        <Link className='report' to={`/report/${userId}/${userData?.username}`}>
                            Denunciar perfil
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}
