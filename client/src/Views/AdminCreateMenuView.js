import React, { useState } from 'react';
import './AdminCreateMenuView.css'

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
        props.addItem(item);
        setItem(emptyForm);
      }
      return (
        <div className="createMenu">
          <div className="container">
          <form onSubmit = {handleSubmit}>
            
            <div className = "one-third">
              <label for="category"> Category </label>
                <select className="form-control border border-dark" id="category" name="category" value={item.category} onChange={handleChange}>
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
            </div>

              <label  for="formGroupDish" > Dish / Drink 
              <input type="text" name="dish" id="formGroupDish"  value={item.dish} onChange={handleChange} />
              </label>

              <label  for="formGroupImage"> Image File 
              <input  id="formGroupImage"  type="url" name="imagefile" value={item.imagefile} onChange={handleChange}/>
              </label>

              <label for="formGroupPrice"> Price 
              <input id="price"  type="number" name="price" value={item.price} onChange={handleChange}/>
              </label>
              
              <div className="full-width">
              <label  for="details"> Details </label>
              <textarea id="formGroupDetails"  name="details" value={item.details} onChange={handleChange}></textarea>
              </div>
              
              
              <div className = "full-width">
              <button type = "submit">SUBMIT</button>
              </div>
            </form>
          </div>
        </div>
      );    
}

export default AdminCreateMenuView;