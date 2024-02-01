
import Header from "./Header";
import likebg from "./img/likebg.svg"
import React, { useEffect, useState } from "react";
const LikeCats = () => {
    const [favouriteCats, setFavouriteCats] = useState(JSON.parse(localStorage.getItem('favouriteCats')) || []);

  const removeFromFavourites = (catId) => {
    const updatedFavourites = favouriteCats.filter((cat) => cat.id !== catId);
    setFavouriteCats(updatedFavourites);
    localStorage.setItem('favouriteCats', JSON.stringify(updatedFavourites));
  };

  useEffect(() => {
    setFavouriteCats(JSON.parse(localStorage.getItem('favouriteCats')) || []);
  }, []);
  return (
    <div>
      <div>
        <Header/>
      </div>
      <div className="CatsConteiner">
      <div className="CatsList">
      {favouriteCats.map((cat) => (
        <div key={cat.id}>
          <img className="CatsImg" src={cat.url} alt="" />
          <button className="checked" onClick={() => removeFromFavourites(cat.id)}><img src={likebg} alt=""/></button>
        </div>
      ))}
      </div>
      </div>
    </div>
  );
};

export default LikeCats;