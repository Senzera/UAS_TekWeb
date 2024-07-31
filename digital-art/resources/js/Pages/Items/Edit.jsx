import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { Link, usePage } from '@inertiajs/inertia-react';
import Layout from '../../Layouts/Layout';

const Edit = ({items}) => {
  const { item, errors } = usePage().props;
  const [judul, setJudul] = useState(item.judul);
  const [artist, setArtist] = useState(item.artist);
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('_method', 'PATCH');
    formData.append('judul', judul);
    formData.append('artist', artist);
    if (image) {
      formData.append('image', image);
    }

    Inertia.post(`/items/${item.id}`, formData); // Updated to use path
  };

  return (
    <Layout>
      <div className="form">
        <div className="form-container">
          <div className="header">
            <div className="title">Edit Art</div>
            <div className="back-link">
              <Link href='/items'>
                <img src="https://cdn3.iconfinder.com/data/icons/arrow-outline-8/32/left-512.png" alt="Back" />
              </Link>
            </div>
          </div>
          <div className="form-content">
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <div className="form-group">
                <label htmlFor="judul">Judul</label>
                <input type="text" id="judul" name="judul" value={judul} onChange={(e) => setJudul(e.target.value)} required />
                {errors.judul && <span className="error-message">{errors.judul}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="artist">Artist</label>
                <input type="text" id="artist" name="artist" value={artist} onChange={(e) => setArtist(e.target.value)} required />
                {errors.artist && <span className="error-message">{errors.artist}</span>}
              </div>

              <div className="form-group">
                <label>Current Image</label>
                <img src={`/storage/${item.image}`} alt="Current Image" style={{ maxWidth: '300px' }} />
                <input type="file" id="image" name="image" onChange={(e) => setImage(e.target.files[0])} />
                {errors.image && <span className="error-message">{errors.image}</span>}
              </div>

              <div className="form-group">
                <button type="submit">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Edit;
