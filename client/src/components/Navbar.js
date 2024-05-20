import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-white text-xl font-bold">E-Ticaret Yönetim Sistemi</Link>
                <div>
                    <Link to="/dashboard" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Dashboard</Link>
                    <Link to="/products" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Ürünler</Link>
                    <Link to="/orders" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Siparişler</Link>
                    <Link to="/settings" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Ayarlar</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
