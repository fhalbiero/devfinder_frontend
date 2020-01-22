import React from 'react';
import './style.css';

export default function DevItem({ dev, onRemoveDev }) {

    async function handleRemoveDev(e) {
        e.preventDefault();

        await onRemoveDev(dev._id);
    }

    return ( 
        <li key={dev._id} className="dev-item">
            <a className="remove" href='#' onClick={handleRemoveDev}>X</a>
            <header>
                <img src={dev.avatar_url} alt="fabio" />
                <div className="user-info">
                    <strong>{dev.name}</strong>
                    <span>{dev.techs.join(', ')}</span>
                </div>
            </header>
            <p>{dev.bio}</p>
            <a href={`https://github.com/${dev.github_username}`}>acessar perfil no Github</a>
        </li>
  )
} 