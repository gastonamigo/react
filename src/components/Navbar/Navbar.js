import './Navbar.css';
import logo from './assets/logo1.png';
import CartWidget from '../CartWidget/CartWidget';
const Navbar = () => {
    return (
        <nav className='navbar navbar-expand-lg'>
            <div className='container-fluid'>
           <img className='logo'src={logo} href="#" alt="logo"/>
                <button className="brand" href="#">Kaira Printers</button>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                            <li className="nav-item">
                            <button className="nav-link" href="#">Productos</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" href="#">Soporte</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" href="#">Nosotros</button>
                        </li>
                        
                    </ul>
                </div>
                    <button className='cart'><CartWidget/></button>
            </div>

        </nav>



    )
}

export default Navbar