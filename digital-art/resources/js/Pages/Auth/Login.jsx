import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { usePage } from '@inertiajs/inertia-react';
import Layout from '../../Layouts/Layout';

export default function Login() {
    const { errors } = usePage().props;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.post('/login', { email, password });
    };

    return (
        <Layout>
            <div className="form">
            <div className="form-container">
                <div className="header">
                    <div className="title">Login</div>
                </div>
                <div className="form-content">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">E-Mail Address</label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                autoFocus
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
                            <button type="submit">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </Layout>
        
    );
}
