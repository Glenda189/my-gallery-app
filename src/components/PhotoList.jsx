import React from 'react';
import Photo from './Photo';

function PhotoList({photos}) {
    return (
        <div className="photo-container">
            <h2>Results</h2>
        <ul>
            {photos.length > 0 ? (
                photos.map((photo) => (
                 <Photo
                key={photo.id}
                server={photo.server}
                id={photo.id}
                secret={photo.secret}
                title={photo.title}
                />
                ))
         ) : (
            <li className="not-found">
                <h3>No results Found</h3>
                <p>Your search did not return any results. Please try again</p>

            </li>
        )}
        </ul>
        </div>
    );
}

export default PhotoList
