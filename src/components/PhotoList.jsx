import PropTypes from 'prop-types'
import Photo from './Photo';


{/*function defines the PhotoList component  */}
function PhotoList({photos}) {
    return (
        <div className="photo-container">
            <h2>Results</h2>
        <ul>
{/*Checks if there are any photos in the photos array by mapping over each photo object in the array. Each photo then received the properties below and are used to display the image*/}
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
// *if the photo.length === 0 then the message below will be rendered meaning that if there are no pictures for the search this message will appear
            <li className="not-found">
                <h3>No results Found</h3>
                <p>Your search did not return any results. Please try again</p>

            </li>
        )}
        </ul>
        </div>
);
}
PhotoList.propTypes = {
    photos: PropTypes.array.isRequired,
};

export default PhotoList
