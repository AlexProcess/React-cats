import React from 'react'
import './CatImage.css'
import  axios  from "axios";
import { useEffect, useState } from "react";


export const CatImage = () => { 
    const [imageUrl, setImageUrl] = useState(['']); 
    const [isLoaded, setIsLoaded] = useState(false); 
    
    const fetchingCat = async () => {
      const response = await axios.get('https://api.thecatapi.com/v1/images/search');
      const imageUrl = response.data[0].url;
      setImageUrl(imageUrl);
      console.log(response.data[0]);
    };

    useEffect(() => {
      fetchingCat();
    }, []);
    
  return (
    <div>
      {isLoaded ? <img src={imageUrl} alt="cat"/> : (<p>Loading...</p>)}
    </div>
  );
};
