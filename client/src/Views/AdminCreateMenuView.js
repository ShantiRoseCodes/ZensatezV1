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
          <div className="container">
          <form onSubmit = {handleSubmit}>
            <div className="form-group">
              <label for="category"> Category </label>
                <div className="col-4">
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
            </div>  
              <div className="form-group">
              <label for="formGroupDish" > Dish / Drink </label>
                <div className="col-4">
                <input type="text" name="dish" id="formGroupDish" className="form-control border border-dark" value={item.dish} onChange={handleChange} />
                </div>
              </div>
              
              <div className="form-group">
              <label for="formGroupDetails"> Details </label>
                <div className="col-4">
                <textarea id="formGroupDetails" className="form-control border border-dark" name="details" value={item.details} onChange={handleChange}></textarea>
                </div>
              </div>

              <div className="form-group">
              <label for="formGroupImage"> Image File </label>
                <div className="col-4">
                <input  id="formGroupImage" className="form-control border border-dark" type="url" name="imagefile" value={item.imagefile} onChange={handleChange}/>
                </div>
              </div>
              
              <div className="form-group">
              <label for="formGroupPrice"> Price </label>
                <div className="col-4">
                <input id="formGroupPrice" className="form-control border border-dark" type="number" name="price" value={item.price} onChange={handleChange}/>
                </div>
              </div>
              <button type = "submit" class="btn btn-primary btn-lg">SUBMIT</button>
            </form>
          </div>
        </div>
      );    
}

export default AdminCreateMenuView;