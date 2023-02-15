import React from "react";
import "./CatImage.css";
import axios from "axios";
import { useEffect, useState } from "react";

export const CatImage = () => {
  const [imageUrl, setImageUrl] = useState([""]);
  const [isLoaded, setIsLoaded] = useState(true);
  const [buttonClicked, setButtonClicked] = useState(false);

  const fetchingCat = async () => {
    const response = await axios.get(
      "https://api.thecatapi.com/v1/images/search?limit=1"
    );
    const imageUrl = response.data[0].url;
    setImageUrl(imageUrl);
    console.log(response.data[0]);
  };

  useEffect(() => {
    fetchingCat();
  }, []);

  return (
    <div className="cat-image__box">
      {buttonClicked ? (
        isLoaded ? (
          <img className="cat__image" src={imageUrl} alt="cat" />
        ) : (
          <p>Loading...</p>
        )
      ) : (
        <button className="button-show__cat" onClick={() => setButtonClicked(true)}>Load Cat Image</button>
      )}
    </div>
  );
};
