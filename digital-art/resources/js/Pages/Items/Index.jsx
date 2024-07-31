import React from "react";
import Layout from '../../Layouts/Layout';
import { Link } from "@inertiajs/inertia-react";
import { Inertia } from '@inertiajs/inertia';

export default function Index({ items, user }) {
    const handleDelete = (id) => {
        if (confirm('Apakah anda ingin mengapus item ini?')) {
            Inertia.post(`/items/${id}`, {
                _method: 'DELETE'
            });
        }
    };

    return (
        <Layout user={user}>
            <div className="index">
                <div className="index-container">
                    <div className="index-content">
                        <div className="card-header">
                            <div className="float-start">ART Collection</div>
                            <div className="float-end">
                                <Link href="/items/create">Upload</Link>
                            </div>
                        </div>
                        <div className="card-body">
                            {items.data.length > 0 ? items.data.map((item) => {
                                const imageUrl = `/storage/${item.image}`;

                                return (
                                    <div key={item.id} className="custom-item-container" style={{ backgroundImage: `url(${imageUrl})` }}>
                                        <div className="custom-item-actions">
                                            <form onSubmit={(e) => { e.preventDefault(); handleDelete(item.id); }}>
                                                <Link href={`/items/${item.id}`}>Show</Link>
                                                <Link href={`/items/${item.id}/edit`}>Edit</Link>
                                                <button type="submit">Delete</button>
                                            </form>
                                        </div>
                                        <div className="custom-item-description">
                                            <div className="custom-item-title">{item.judul}</div>
                                            <div className="custom-item-artist"><span>created by</span> {item.artist}</div>
                                        </div>
                                    </div>
                                );
                            }) : (
                                <div className="custom-no-item-found">
                                    <span className="text-danger"><strong>No Items Found!</strong></span>
                                </div>
                            )}
                        </div>
                        <div className="pagination-links">
                            {items.links.map((link, index) => (
                                <Link 
                                    key={index} 
                                    href={link.url} 
                                    className={`pagination-link ${link.active ? 'active' : ''}`} 
                                    dangerouslySetInnerHTML={{ __html: link.label }} 
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
