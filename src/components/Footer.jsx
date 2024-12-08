

export default function Footer() {

    return (
        <footer>
            <div className="footer-content">
                <div className="footer-section contact">
                <h2>Contacto</h2>
                <p className="contact-info">Email: kgm00@iesemilidarder.com</p>
                <p className="contact-info">Teléfono: +123 456 789</p>
                </div>
            
                <div className="footer-section links">
                <h2>Enlaces</h2>
                <ul>
                    <li><a href="#home">Inicio</a></li>
                    <li><a href="#projects">Proyectos</a></li>
                    <li><a href="#more-info">Más información</a></li>
                    <li><a href="#contact">Contacto</a></li>
                    
                </ul>
                </div>
            </div>
            
            <div className="footer-bottom">
                <p>© 2024 Portafloio de Kevin García. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}