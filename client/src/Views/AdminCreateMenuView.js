import React, { useState } from 'react';

const emptyForm = {
    category: "",
    dish: "",
    details: "",
    imagefile: "",
    price: ""
  };

function AdminCreateMenuView (props) {

    let [item, setItem] = useState(emptyForm);

      const handleChange = (event) => {
        setItem({...item, [event.target.name]: event.target.value});
      }
    
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(item);
        props.addItem(item);
        setItem(emptyForm);
      }
      return (
        <div className="createMenu">
          <form onSubmit = {handleSubmit}>
            <label> Category </label>
              <select name="category" value={item.category} onChange={handleChange}>
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
              <input type="text" name="dish" value={item.dish} onChange={handleChange}/>
            </label>
            <br></br>
            <label> Details
              <textarea name="details" value={item.details} onChange={handleChange}></textarea>
            </label>
            <br></br>
            <label> Image File
              <input type="url" name="imagefile" value={item.imagefile} onChange={handleChange}/>
            </label>
            <br></br>
            <label> Price
              <input type="number" name="price" value={item.price} onChange={handleChange}/>
            </label>
            <br></br>
            <button type = "submit">SUMBIT</button>
          </form>
        </div>
      );    
}

export default AdminCreateMenuView;