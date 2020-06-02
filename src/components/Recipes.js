import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import style from "../css/recipe.module.css";

const Recipes = () => {
  const APP_ID = "dd2cdded";
  const APP_KEY = "e1c1d9d83f2e7531f17010d0f0d73a4d	";
  const [recipeList, setRecipeList] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("coffee");

  useEffect(() => {
    searchRecipes();
  }, [query]);

  const searchRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipeList(data.hits);
    console.log(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };
  const getResult = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div>
      <div className={style.recipe}>
        <form onSubmit={getResult}>
          <input value={search} onChange={updateSearch}></input>
          <button className="btn btn-secondary">Search</button>
        </form>
      </div>
      <div className={style.recipes}>
        {recipeList.map((recipe, index) => {
          return (
            <Recipe
              key={index}
              title={recipe.recipe.label}
              ingredients={recipe.recipe.ingredients}
              image={recipe.recipe.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Recipes;
