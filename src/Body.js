import React from "react";
import "./Body.css";

export default function Body() {
  return (
    <div className="Body">
      <h2>
        Create personalised jokes for homemade Christmas crackers. You can have
        football jokes for your sporty relations, science jokes for the smartie
        pants. Check out the generator below to find the perfect joke.
      </h2>
      <div className="generator">
        <form>
          <input className="input-text" type="text" placeholder="Enter topic" />
          <input className="input-button" type="submit" />
        </form>
        <h3>Example: cars, football, cooking, pets etc.</h3>
      </div>
    </div>
  );
}
