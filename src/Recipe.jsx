import React from "react";
import "./recipe.css";

const Recipe = ({ title, image, ingredients }) => {
  return (
    <div className="recipe">
      <h1>{title}</h1>
      <ol>
        {ingredients.map((ingredient) => (
          <li key={Math.random() * 100}>{ingredient.text}</li>
        ))}
      </ol>
      <img src={image} alt="image" className="image" />
    </div>
  );
};

export default Recipe;
