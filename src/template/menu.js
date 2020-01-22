import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/todos">Todo</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Alterna navegação">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li><Link to="/todos">Tarefas</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Menu;