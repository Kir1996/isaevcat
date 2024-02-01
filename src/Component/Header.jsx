import Button from "./Button/Button";
import React from "react";
import { useNavigate } from "react-router-dom";
const Header= () =>{
    const navigate = useNavigate(); 
    const handleClick = () => navigate('/'); 
    const backClic= () => navigate('/like');
    return(
     <div className="Header">
      <Button type="button" onClick={handleClick}>Все котики</Button>
      <Button type="button" onClick={backClic}>Любимые котики</Button>
     </div>
    )
};
export default Header;