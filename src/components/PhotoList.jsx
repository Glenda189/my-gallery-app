import React from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types';

const PhotoList = ({ photos, loading }) => {
  if (loading) return <p>Loading...</p>;
  if (!loading && photos.length === 0) return <p>No photos found</p>;

  return (
    <ul>
      {photos.map((photo) => (
        <Photo key={photo.id} photo={photo} />
      ))}
    </ul>
  );
};

PhotoList.propTypes = {
  photos: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default PhotoList;
