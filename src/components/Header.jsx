import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
        <div className="box-header">
            <nav>
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/projects">Proyectos</Link></li>
                <li><Link to="/contact">Contacto</Link></li>
                <li><Link to="/newsletter">Newsletter</Link></li>
            </ul>
        </nav>
        </div>
    </header>
  );
}

export default Header;
