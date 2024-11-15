import PropTypes from "prop-types";

// {/* This function defines the photo component. Each prop inside the function provides the details for each picture*/}
function Photo({ server, id, secret, title }) {
  return (
    <li>
      <img
// {/* the url is used to fetch the photo from Flickr using each prop*/}
        src={`https://live.staticflickr.com/${server}/${id}_${secret}_m.jpg`}
        alt={title}
      />
    </li>
  );
}
// {/*Specifies tha props are required and should should output an error on console if they are missing or not strings*/}
Photo.propTypes = {
  server: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  secret: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
export default Photo;
