import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiPower, FiTrash2, FiTrash } from 'react-icons/fi'

import api from '../../services/api'

import './styles.css'
import logoImg from '../../assets/logo.svg'

function Profile() {

    // estado
    const [incidents, setIncidents] = useState([])

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

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be the Hero" />
                <span>Bem vinda, {ongName}</span>

                <Link to='/incidents/new' className="button">
                    Cadastrar novo caso
                </Link>

                <button type="button">
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

                        <button type="button">
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                    </li>

                ))}
            </ul>
        </div>

    )
}

export default Profile;