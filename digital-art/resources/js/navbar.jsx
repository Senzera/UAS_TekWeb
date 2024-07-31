import React from 'react';
import { Link } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';

const Navbar = ({ auth }) => {
    const handleLogout = (e) => {
        e.preventDefault();
        Inertia.post('/logout');
    };

    return (
        <div className="navbar">
            <div className="navbar-content">
                <div className="logo">DART</div>
                <div className="menu">
                    <Link href="/items/create" className={`menu-item ${window.location.pathname === '/items/create' ? 'active' : ''}`}>
                        Form
                    </Link>
                    <Link href="/items" className={`menu-item ${window.location.pathname === '/items' ? 'active' : ''}`}>
                        Items
                    </Link>
                </div>
                <div className="auth">
                    {auth?.user ? (
                        <>
                            <div className="username">{auth.user.name}</div>
                            <form onSubmit={handleLogout}>
                                <button type="submit" className="logout-btn">Logout</button>
                            </form>
                        </>
                    ) : (
                        <>
                            <div className="login">
                                <Link href='/login' className="login-link">Login</Link>
                            </div>
                            <div className="register">
                                <Link href='/register' className="register-link">Register</Link>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
