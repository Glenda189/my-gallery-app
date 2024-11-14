import React from 'react';
import PropTypes from 'prop-types';

const Photo = ({ photo }) => {
  const url = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
  return (
    <li>
      <img src={url} alt={photo.title} />
    </li>
  );
};

Photo.propTypes = {
  photo: PropTypes.object.isRequired,
};

export default Photo;