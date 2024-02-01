import classes from "./Button.module.css"
import React from "react";
const Button =({children, ...props}) => {
    return(
        <button {...props} className={classes.Btn}>
            {children}
        </button>
    )
};
export default Button;