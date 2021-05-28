import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import axios from "axios";
const App = () => {
  const [recipes, setRecipes] = useState([]);
  const apikey = process.env.REACT_APP_API_KEY;

  const getRecipes = async () => {
    const results = await axios.get(
      ` https://api.spoonacular.com/recipes/random?apiKey=${apikey}`
    );
    console.log(results.data);
    setRecipes(results.data.recipes);
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <div className="App">
      <Home recipes={recipes} />
    </div>
  );
};

export default App;
