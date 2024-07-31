import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import Layout from '../../Layouts/Layout';

const Create = () => {
    const [formData, setFormData] = useState({
        judul: '',
        artist: '',
        image: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setFormData({
            ...formData,
            [name]: files[0],
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('judul', formData.judul);
        data.append('artist', formData.artist);
        data.append('image', formData.image);

        Inertia.post('/items', data);
    };

    return (
        <Layout>
            
            <div className="form">
                <div className="form-container">
                    <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="judul">Judul</label>
                    <input
                        type="text"
                        id="judul"
                        name="judul"
                        value={formData.judul}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="artist">Artist</label>
                    <input
                        type="text"
                        id="artist"
                        name="artist"
                        value={formData.artist}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="image">Image</label>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        onChange={handleFileChange}
                    />
                </div>
                <div className="form-group">
                    <input type="submit" value="Add To Collection" />
                </div>
            </form>
                </div>
            
        </div>
        </Layout>
        
    );
};

export default Create;
