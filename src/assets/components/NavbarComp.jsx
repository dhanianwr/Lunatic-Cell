import { useNavigate } from "react-router-dom";

const NavbarComp = () => {

    const navigate = useNavigate()

    return (
        
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top" id="navbar">
        <div className="container-fluid">
            <h1 className="navbar-brand" href="#" id="brand">Lunatic Cell</h1>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#tentang">Tentang Kami</a>
                </li>
                <li className="nav-brand">
                <a className="nav-link" href="#reservasi">Reservasi</a>
                </li>
            </ul>
            </div>
        </div>
        <button className="btn btn-primary" id="button-nav" onClick={() => navigate('/login-admin')}>
        Login Admin
      </button>
        </nav>


    );
}

export default NavbarComp;