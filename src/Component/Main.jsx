import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import like from "./img/like.svg"
import likebg from "./img/likebg.svg"


function Main({ addToLikedCats}) {
  const [data, setData] = useState([]);
  const [carrentPage, setCarrentPage]=useState(1)
  const [fething, setFething]=useState(true)
  const [favouriteCats, setFavouriteCats] = useState(JSON.parse(localStorage.getItem('favouriteCats')) || []);

  
  useEffect(() => {
    if (fething){
        console.log('fetching')
    axios
      .get(`https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=${carrentPage}&limit=15&api_key=live_BbyO57b6tfewekN9cRGXTotmA9Kf5TNyeIqJkxaH2WJcfBK7bm3ZLtG3teAxflsm`)
      .then((response) => {
        setData([...data, ...response.data]);
        setCarrentPage(prevState=>prevState+1)
    })
    .finally(()=>setFething(false))
    .catch((error) => {
        console.log(error);
        
    });
}
  }, [fething]);


  useEffect(()=>{
    document.addEventListener('scroll', scrollHandler)

    return function(){
        document.removeEventListener('scroll', scrollHandler)
    }
  },[])
  const scrollHandler = (e) => {
    if(e.target.documentElement.scrollHeight- (e.target.documentElement.scrollTop + window.innerHeight) < 100){
        setFething(true)
    }
 }
 /*const createCats= (newCats) => {
    setData([...data,newCats])
    console.log(createCats)
  } */


  const toggleFavourite = (cat) => {
    const isFav = favouriteCats.find((favouriteCat) => favouriteCat.id === cat.id);
    let updatedFavourites;
    if (isFav) {
      updatedFavourites = favouriteCats.filter((favouriteCat) => favouriteCat.id !== cat.id);
    } else {
      updatedFavourites = [...favouriteCats, cat];
    }
    setFavouriteCats(updatedFavourites);
    localStorage.setItem('favouriteCats', JSON.stringify(updatedFavourites));
  };

  return (
    <div>
        <Header className="nonscroll"/>
    <div className="CatsConteiner">
      <ul className="CatsList">
        {data.map((cat) => (
            
          <li key={cat.id} >
            <div>
             <img className="CatsImg" src={cat.url} alt="" />
             <div>
             <button className="checked" onClick={() => toggleFavourite(cat)} >
             {favouriteCats.some((favCat) => favCat.id === cat.id) ? <img  src={likebg} alt=""/> : <img  src={like} alt=""/>}
             </button>
             </div>
             </div>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}

export default Main;