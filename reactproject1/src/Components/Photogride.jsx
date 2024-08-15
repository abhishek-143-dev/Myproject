import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PhotoGrid = () => {
  const [photos, setPhotos] = useState([]);

  const fetchPhotos = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=9');
    setPhotos(response.data.map(photo => photo.url));
  };

  useEffect(() => {
    fetchPhotos();
    const interval = setInterval(fetchPhotos, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="photo-grid">
      {photos.map((photo, index) => (
        <img key={index} src={photo} alt={`Photo ${index + 1}`} />
      ))}
    </div>
  );
};

export default PhotoGrid;
