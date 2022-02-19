import React from "react";
import { ReactDOM } from "react-dom";
import { Details } from "./Details";
import { Photo } from "./Img";

export function Card(props) {
  return (
    <div className="card">
    <div className="top">
      <h2 className="name">{props.name}</h2>
      <p>{props.id}</p>
      <Photo src={props.src}/>
      </div>
      <div className="bottom">
      <Details 
      detailsInfo={props.email}

      />
      <Details
      detailsInfo={props.phone}
      />
      </div>
    </div>
  );
}

