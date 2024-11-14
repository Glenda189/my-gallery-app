import React, { useState, useCallback } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Nav from './components/Nav';
import Search from './components/Search';
import PhotoList from './components/PhotoList';
import apiKey from './config';

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetchData = useCallback(async (query) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
      );
      const data = await response.json();
      setPhotos(data.photos.photo);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleSearch = (query) => {
    fetchData(query);
    navigate(`/${query}`);
  };

  return (
    <div>
      <Nav />
      <Search onSearch={handleSearch} />
      <Routes>
        <Route path="/" element={<PhotoList photos={photos} loading={loading} />} />
        <Route path="/:query" element={<PhotoList photos={photos} loading={loading} />} />
      </Routes>
    </div>
  );
};

export default App;


