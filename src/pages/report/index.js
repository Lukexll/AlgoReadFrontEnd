import { useParams } from 'react-router-dom';
import { useState } from 'react';
import './report.css';
import { Link } from 'react-router-dom';



export default function UserReport() {

    const { userId } = useParams(); // Pega o ID do usuário da URL
    const [reason, setReason] = useState('');
    const [details, setDetails] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui você pode enviar os dados para o servidor ou API para processar a denúncia
        console.log('Denúncia enviada para o usuário:', userId);
        console.log('Razão:', reason);
        console.log('Detalhes:', details);
    };
    
    return (
        <div className="report-container">
            <Link className='back' to={'/'}>⬅️voltar</Link>
            <h1>Denunciar @{userId}</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="reason">Razão da denúncia:</label>
                    <select id="reason" value={reason} onChange={(e) => setReason(e.target.value)} required>
                        <option value="">Selecione uma razão</option>
                        <option value="abuso">Abuso</option>
                        <option value="spam">Spam</option>
                        <option value="outros">Outros</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="details">Detalhes:</label>
                    <textarea
                        id="details"
                        value={details}
                        onChange={(e) => setDetails(e.target.value)}
                        rows="5"
                        required
                        ></textarea>
                </div>

                <button type="submit" className="submit-btn">Enviar denúncia</button>
            </form>
        </div>
    );
}


