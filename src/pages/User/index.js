import './user.css'; 
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import avatarDefault from '../../assets/avatar.png';

const UserList = ({ title, users, onClose }) => {
    const modalRef = useRef(null);

    // Função que detecta cliques fora da modal
    useEffect(() => {
        function handleClickOutside(event) {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose();
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    return (
        <div className="user-list-overlay">
            <div className="user-list-modal" ref={modalRef}>
                <h3>{title}</h3>
                <button className="close-button" onClick={onClose}>
                    X
                </button>
                <ul>
                    {users.map((user, index) => (
                        <li key={index} className="user-item">
                            <img src={user.avatar} alt="Avatar" className="avatar" />
                            <div className="user-info">
                                <strong>{user.name}</strong>
                                <p>@{user.profileName}</p>
                            </div>
                            <button className="follow-btn">Seguindo</button>
                            <Link className='denuncia' to={`/report`}>Report</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default function User() {
    const [showFollowers, setShowFollowers] = useState(false);
    const [showFollowing, setShowFollowing] = useState(false);

    const followers = [
        { avatar: avatarDefault, name: "Usuário 1", profileName: "user1" },
        { avatar: avatarDefault, name: "Usuário 2", profileName: "user2" }
    ];

    const following = [
        { avatar: avatarDefault, name: "Usuário 3", profileName: "user3" },
        { avatar: avatarDefault, name: "Usuário 4", profileName: "user4" }
    ];

    return (
        <div className='container-user'>
            <div className='profile'>
                <img src={avatarDefault} alt='foto de perfil'/>
                <h1>Nome do usuário</h1>
                <p>Nome de usuário</p>

                <div className='stats'>
                    <div className='stat'>
                        <span onClick={() => setShowFollowing(true)}><strong>0</strong> Seguindo</span>
                    </div>
                    <div className='stat'>
                        <span onClick={() => setShowFollowers(true)}><strong>0</strong> Seguidores</span>
                    </div>
                    <div className='stat'>
                        <span><strong>0</strong> Artigos publicados</span>
                    </div>
                </div>

                <div className='edit-profile'>
                    <Link to={'/editProfile'} ><button>Editar perfil</button></Link>
                </div>
            </div>

            {showFollowers && (
                <UserList title="Seguidores" users={followers} onClose={() => setShowFollowers(false)} />
            )}

            {showFollowing && (
                <UserList title="Seguindo" users={following} onClose={() => setShowFollowing(false)} />
            )}
        </div>
    );
}