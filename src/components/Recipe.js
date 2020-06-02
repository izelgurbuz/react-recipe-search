import React from "react";
import style from "../css/recipe.module.css";

const Recipe = ({ title, ingredients, image }) => {
  return (
    <div className={style.recipe}>
      <h3>{title}</h3>
      <img src={image} alt=""></img>
      {ingredients.map((line) => (
        <p>{line.text}</p>
      ))}
    </div>
  );
};
export default Recipe;
