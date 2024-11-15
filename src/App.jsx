import{ useEffect, useState } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import apiKey from './config'


{/*Components*/}
import Nav from './components/Nav';
import PhotoList from './components/PhotoList';
import Search from './components/Search';

function App () {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
 


{/*// FetchPhotos function will fetch the photos from the flickr API*/}
  const fetchPhotos = async (query) => {
{/*  // sets loading to true which shows user loading message while the data is being fetched from APi*/}
    setLoading(true);


{/*  // Request is being made to flickr */}
    
    const response = await fetch (
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
    );


{/*// Parses JSON response from API */}
    const data = await response.json();
    setPhotos(data.photos.photo);

{/* // stops loading once the data is fetched  */}
     setLoading(false);
  };

{/* //  useEffect is used to perform an action. This function fetches photos when the route changes */}
  useEffect(() => {
    const path= location.pathname;
    if (path === '/cats'){
      fetchPhotos('cats')
    } else if (path === '/dogs') {
      fetchPhotos('dogs');
    } else if (path === '/computers'){
      fetchPhotos('computers')
  {/*Helps to navigate the path back and forth by extracting the word that is searched and then calling the function fetchPhotos to fetch the picture for that search*/}
    } else if (path.startsWith('/search/')){
      const query = path.split('/search/')[1];
      fetchPhotos(query);
    }
  }, [location]);

  return (
    <div className="container">
{/* render the search component where users can look up photos. prop onsearch is passed which means that when the search form is submitted the fetch photo function will be triggered */}

      <Search onSearch={fetchPhotos} />
{/*Renders Nav component onTopicClick prop allows each nav link to trigger a photo based on topic*/}
      <Nav onTopicClick={fetchPhotos} />
      { loading ? <p>Loading....</p> : null}
      <Routes>
        <Route path="/" element={<Navigate to="/cats" replace /> }/>
        <Route path="/cats" element={<PhotoList photos={photos}/>} />
        <Route path="/dogs" element={<PhotoList photos={photos} />} />
        <Route path="/computers" element={<PhotoList photos={photos} />} />
        <Route path="/search/:query" element={<PhotoList photos={photos}/>}/>
        <Route path="*" element={<h2>404-Page Not Found</h2>}/>
      </Routes>
    </div>
  );
}
export default App;