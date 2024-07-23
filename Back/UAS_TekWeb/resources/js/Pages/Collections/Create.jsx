import React, { useState } from 'react';
import Layout from '../../Layouts/Default';
import { Inertia } from '@inertiajs/inertia';

export default function CreateCollection({ errors = {} }) {
    const [judul, setJudul] = useState('');
    const [gambar, setGambar] = useState(null);
    const [deskripsi, setDeskripsi] = useState('');
    const [uploader, setUploader] = useState('');

    const storeCollection = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('judul', judul);
        if (gambar) {
            formData.append('gambar', gambar);
        }
        formData.append('deskripsi', deskripsi);
        formData.append('uploader', uploader);

        Inertia.post('/collections', formData, {
            forceFormData: true,
        });
    };

    return (
        <Layout>
            <div className="row" style={{ marginTop: '100px' }}>
                <div className="col-12">
                    <div className="card border-rounded shadow-sm border-top-success">
                        <div className="card-header">
                            <span className="font-weight-bold">TAMBAH COLLECTION</span>
                        </div>
                        <div className="card-body">
                            <form onSubmit={storeCollection} encType="multipart/form-data">
                                <div className="mb-3">
                                    <label className="form-label fw-bold">Judul</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        value={judul} 
                                        onChange={(e) => setJudul(e.target.value)} 
                                        placeholder="Masukkan Judul Collection" 
                                    />
                                    {errors.judul && (
                                        <div className="alert alert-danger">
                                            {errors.judul}
                                        </div>
                                    )}
                                </div>
                                <div className="mb-3">
                                    <label className="form-label fw-bold">Gambar</label>
                                    <input 
                                        type="file" 
                                        className="form-control" 
                                        onChange={(e) => setGambar(e.target.files[0])} 
                                    />
                                    {errors.gambar && (
                                        <div className="alert alert-danger">
                                            {errors.gambar}
                                        </div>
                                    )}
                                </div>
                                <div className="mb-3">
                                    <label className="form-label fw-bold">Deskripsi</label>
                                    <textarea 
                                        className="form-control" 
                                        value={deskripsi} 
                                        onChange={(e) => setDeskripsi(e.target.value)} 
                                        placeholder="Masukkan Deskripsi Collection" 
                                        rows={4} 
                                    />
                                    {errors.deskripsi && (
                                        <div className="alert alert-danger">
                                            {errors.deskripsi}
                                        </div>
                                    )}
                                </div>
                                <div className="mb-3">
                                    <label className="form-label fw-bold">Uploader</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        value={uploader} 
                                        onChange={(e) => setUploader(e.target.value)} 
                                        placeholder="Masukkan Nama Uploader" 
                                    />
                                    {errors.uploader && (
                                        <div className="alert alert-danger">
                                            {errors.uploader}
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <button type="submit" className="btn btn-md btn-success me-2">
                                        <i className="fa fa-save"></i> SAVE
                                    </button>
                                    <button type="reset" className="btn btn-md btn-warning">
                                        <i className="fa fa-redo"></i> RESET
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
