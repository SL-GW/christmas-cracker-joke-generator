import React from "react";
import "./Body.css";

export default function Body() {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Body">
      <h2>
        Create personalised jokes for homemade Christmas crackers. You can have
        football jokes for your sporty relations, science jokes for the smartie
        pants and kid's jokes for the little ones. Check out the generator below
        to find the perfect joke.
      </h2>
      <div className="generator">
        <form onSubmit={handleSubmit}>
          <input className="input-text" type="text" placeholder="Enter topic" />
          <input className="input-button" type="submit" />
        </form>
        <h3>Example: cars, football, cooking, pets etc.</h3>
      </div>
    </div>
  );
}
