import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home";
import axios from "axios";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ViewRecipe from "./Components/ViewRecipe";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const apikey = process.env.REACT_APP_API_KEY;

  const getRecipes = async () => {
    const results = await axios.get(
      `https://api.spoonacular.com/recipes/random?apiKey=${apikey}`
    );
    console.log(results.data);
    setRecipes(results.data.recipes);
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route
            path="/viewrecipe"
            exact
            // component={() => <ViewRecipe recipes={recipes} />}
            render={(props) => <ViewRecipe {...props} recipes={recipes} />}
          />
          <Home recipes={recipes} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
