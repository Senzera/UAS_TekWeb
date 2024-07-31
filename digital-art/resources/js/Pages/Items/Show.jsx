import React from 'react';
import { usePage, InertiaLink } from '@inertiajs/inertia-react';
import Layout from '../../Layouts/Layout';

const Show = () => {
  const { item } = usePage().props;

  return (
    <Layout>
      <div className="form">
        <div className="form-container-show">
          <div className="header-show">
            <div className="detail-top">Detail</div>
            <div className="back-link">
              <InertiaLink href="/items">
                <img src="https://cdn3.iconfinder.com/data/icons/arrow-outline-8/32/left-512.png" alt="Back" />
              </InertiaLink>
            </div>
          </div>
          <div className="details-container">
            <h2>{item.judul}</h2>
            <p>Created by {item.artist}</p>

            {/* Display the image if available */}
            {item.image ? (
              <div className="image-container">
                <img src={`/storage/${item.image}`} alt="Artwork" style={{ maxWidth: '300px' }} />
              </div>
            ) : (
              <p>No image available</p>
            )}

            <p>Upload time <strong>{item.created_at}</strong></p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Show;
