import { Link } from 'react-router-dom'
// import './Navbar.scss'

function Navbar() {
    return (

        <nav className="navbar">
            <Link to='/'>About Me</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/resume'>Resume</Link>
        </nav>
    )
}

export default Navbar;