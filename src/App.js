import React from 'react';
/* import logo from './logo.svg';
import './App.css'; */
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router,Route} from "react-router-dom";

import Navbar from "./components/navbar.component";
import FoodList from "./components/food-list.component";
import EditFood from "./components/edit-food.component";
import CreateFood from "./components/create-food.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={FoodList}/>
        <Route path="/edit/:id" exact component={EditFood}/>
        <Route path="/create-food" exact component={CreateFood}/>
        <Route path="/create-user" exact component={CreateUser}/>
      </div>
    </Router>
  );
}

export default App;
