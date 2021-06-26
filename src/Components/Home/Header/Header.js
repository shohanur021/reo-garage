import React from 'react';
import { useContext } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import carLogo from '../../images/carLogo.jpg';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const handleLogout = () => {
        setLoggedInUser({});
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand className="d-flex justify-content-center ml-md-3"><img src={carLogo} alt=""></img><h3 className="ml-1">Reo Garage</h3></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Link className="nav-link mr-2" aria-current="page" to="/home">Home</Link>
                    <a className="nav-link mr-2" aria-current="page" href="#services">Services</a>
                    <a className="nav-link mr-2" aria-current="page" href="#reviews">Reviews</a>
                    <Link className="nav-link mr-2" aria-current="page" to="/bookinglist">Your Bookings</Link>
                    <Link className="nav-link mr-2" aria-current="page" to="/addService">Admin</Link>
                    <a className="nav-link mr-2" aria-current="page" href="#aboutUs">About Us</a>
                    {
                    loggedInUser.name ? <button type="button" className="btn btn-danger" onClick={handleLogout}> Logout </button> : <Link to="/login"><button type="button" className="btn btn-primary"> Login </button></Link>
                }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;