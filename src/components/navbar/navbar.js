import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; 
import { FaUserEdit } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className='navbar'>
        <nav style={{ padding: '10px', background: '#333', color: '#fff' ,position:'sticky'}}>
            <ul style={{ display: 'flex', justifyContent: 'space-around', listStyleType: 'none', margin: 0, padding: 0 }}>
                <li>
                    <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>profileview <CgProfile  /></Link>
                </li>
                <li>
                    
                    <Link to="/edit-profile" style={{ color: '#fff', textDecoration: 'none' }}>Profile Edit <FaUserEdit /></Link>

                </li>
                <li>
                    <Link to="/search" style={{ color: '#fff', textDecoration: 'none' }}>Profile Search &nbsp;<FaSearch /></Link>
                </li>
            </ul>
        </nav>
        </div>
    );
};

export default Navbar;