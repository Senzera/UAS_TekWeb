import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { usePage } from '@inertiajs/inertia-react';
import Layout from '../../Layouts/Layout';

export default function Register() {
    const { errors } = usePage().props;
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password_confirmation, setPasswordConfirmation] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.post('/register', { name, email, password, password_confirmation });
    };

    return (
        <Layout>
             <div className="form">
                <div className="form-container">
                    <div className="header">
                        <div className="title">Register</div>
                    </div>
                    <div className="form-content">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    autoFocus
                                />
                                {errors.name && <span>{errors.name}</span>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">E-Mail Address</label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                {errors.email && <span>{errors.email}</span>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                {errors.password && <span>{errors.password}</span>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="password-confirm">Confirm Password</label>
                                <input
                                    id="password-confirm"
                                    type="password"
                                    name="password_confirmation"
                                    value={password_confirmation}
                                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <button type="submit">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
        </div>
        </Layout>
       
    );
}
