import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home";
import axios from "axios";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ViewRecipe from "./Components/ViewRecipe";
import ViewSteps from "./Components/ViewSteps";

const App = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const apikey = process.env.REACT_APP_API_KEY;
    const getRecipes = async () => {
      const results = await axios.get(
        `https://api.spoonacular.com/recipes/random?apiKey=${apikey}`
      );
      setRecipes(results.data.recipes);
    };
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
          <Route
            path="/viewsteps"
            exact
            render={(props) => <ViewSteps {...props} recipes={recipes} />}
          />
          <Home recipes={recipes} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
