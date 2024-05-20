import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link to="/" className="btn btn-ghost normal-case text-xl">E-Ticaret Yönetim Sistemi</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/">Dashboard</Link></li>
                    <li><Link to="/products">Ürünler</Link></li>
                    <li><Link to="/orders">Siparişler</Link></li>
                    <li><Link to="/settings">Ayarlar</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
