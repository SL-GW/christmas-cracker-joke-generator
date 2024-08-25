import React from "react";
import "./Header.css";
import santa from "./santa_claus.png";

export default function Header() {
  return (
    <div className="Header">
      <div className="row header-grid">
        <div className="col-2">
          <img className="img-fluid" src={santa} alt="Santa Claus" />
        </div>
        <div className="col-8">
          <h1>Christmas Cracker Joke Generator</h1>
        </div>
        <div className="col-2">
          <img className="img-fluid mr-5" src={santa} alt="Santa Claus" />
        </div>
      </div>
    </div>
  );
}
