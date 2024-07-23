import React from 'react';
import { Link } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';
import Default from '../../Layouts/Default';

export default function CollectionIndex({ collections, session }) { // Define CollectionIndex component with collections and session props as parameters to be passed from the controller.

    // Method deleteCollection
    const deleteCollection = async (id) => {
        if (confirm('Are you sure?')) {
            Inertia.delete(`/collections/${id}`);
        }
    };

    return (
        <Default>
            <div style={{ marginTop: '100px' }}>
                <Link href="/collections/create" className="btn btn-success btn-md mb-3">TAMBAH COLLECTION</Link>
                {session && session.success && (
                    <div className="alert alert-success border-8 shadow-sm rounded-3">
                        {session.success}
                    </div>
                )}
                <div className="card border-rounded shadow-sm">
                    <div className="card-body">
                        <table className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">JUDUL</th>
                                    <th scope="col">GAMBAR</th>
                                    <th scope="col">DESKRIPSI</th>
                                    <th scope="col">UPLOADER</th>
                                    <th scope="col">ACTIONS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {collections.map((collection, index) => (
                                    <tr key={index}>
                                        <td>{collection.judul}</td>
                                        <td><img src={collection.gambar} alt={collection.judul} style={{ width: '100px', height: 'auto' }} /></td>
                                        <td>{collection.deskripsi}</td>
                                        <td>{collection.uploader}</td>
                                        <td className="text-center">
                                            <Link href={`/collections/${collection.id}/edit`} className="btn btn-sm btn-primary me-2">EDIT</Link>
                                            <button onClick={() => deleteCollection(collection.id)} className='btn btn-sm btn-danger'>DELETE</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Default>
    );
}
