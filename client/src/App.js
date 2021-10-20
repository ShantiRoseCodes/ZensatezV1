import React, { useEffect, useState } from "react";
import "./App.css";

export default function App (){

  return (
    <div className="createMenu">
      <form>
        <label for="category"> Category </label>
          <select id="category" name="category">
            <option value="mdEntree"> MENU DIA Entree </option> 
            <option  value="mdMain"> MENU DIA Main </option> 
            <option  value="mdDessert"> MENU DIA Dessert </option> 
            <option  value="tapas"> Tapas </option> 
            <option  value="entree"> Entree </option> 
            <option  value="main"> Main </option> 
            <option  value="dessert"> Dessert </option> 
            <option  value="alcoholic"> Alcoholic </option> 
            <option  value="nonalcoholic"> Nonalcoholic </option>
          </select> 
          <br></br>
        <label> Dish / Drink
          <input type="text"/>
        </label>
        <br></br>
        <label> Details
          <textarea name="details"></textarea>
        </label>
        <br></br>
        <label> Image File
          <input type="text"/>
        </label>
        <br></br>
        <label> Price
          <input type="number"/>
        </label>
        <br></br>
        <button type = "submit">SUMBIT</button>
      </form>
    </div>
  );

}

  


