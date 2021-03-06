import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiPower, FiTrash2, FiTrash } from 'react-icons/fi'

import api from '../../services/api'

import './styles.css'
import logoImg from '../../assets/logo.svg'

function Profile() {

    // estado
    const [incidents, setIncidents] = useState([])

    const history = useHistory()

    // recuperando os dados da Ong armazenado no storage do navegador
    const ongId = localStorage.getItem('ongId')
    const ongName = localStorage.getItem('ongName')

    // busca na api os casos criados pela Ong
    useEffect(() => {
        api.get('profile', {
            headers: {
                authorization: ongId,
            }
        }).then(response => {
            setIncidents(response.data)
        })
    }, [ongId])

    // apagar caso cadastrado
    async function handleDeleteIncident(id) {
        try {
            await api.delete(`incidents/${id}`, {
                headers: {
                    authorization: ongId,
                }
            })

            // atualiza o estado após o caso ser excluído
            setIncidents(incidents.filter(incident => incident.id !== id))

        } catch (err) {
            alert('Erro ao deletar caso, tente novamente')
        }
    }

    // logout
    function handleLogout() {
        localStorage.clear()

        history.push('/')
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be the Hero" />
                <span>Bem vinda, {ongName}</span>

                <Link to='/incidents/new' className="button">
                    Cadastrar novo caso
                </Link>

                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#e02041" />
                </button>
            </header>

            <h1>Casos cadastrados</h1>

            <ul>
                {incidents.map(incident => (

                    <li key={incident.id}>
                        <strong>CASO:</strong>
                        <p>{incident.title}</p>

                        <strong>DESCRIÇÃO:</strong>
                        <p>{incident.description}</p>

                        <strong>VALOR:</strong>
                        <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</p>

                        <button onClick={() => handleDeleteIncident(incident.id)} type="button">
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                    </li>

                ))}
            </ul>
        </div>

    )
}

export default Profile;