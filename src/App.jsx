import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate, useLocation} from 'react-router-dom'
import apiKey from './config'


// components 
import Nav from './components/Nav';
import PhotoList from './components/PhotoList';
import Search from './components/Search';

function App () {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
   const location = useLocation();

  const fetchPhotos = async (query) => {
    setLoading(true);
    const response = await fetch (
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
    );
    const data = await response.json();
    setPhotos(data.photos.photo);
    setLoading(false);
  };

  useEffect(() => {
    if (location.pathname === '/cats'){
      fetchPhotos('cats')
    } else if (location.pathname === '/dogs') {
      fetchPhotos('dogs');
    } else if (location.pathname === '/computers'){
      fetchPhotos('computers')
    }
  }, [location]);


  return (
    <div className="container">
      <Search onSearch={fetchPhotos} />
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