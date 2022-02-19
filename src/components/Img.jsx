import React from "react";
import { ReactDOM } from "react-dom";

export function Photo(props){
return <img className="circle-img" src={props.src} alt="avatar_img" />
}