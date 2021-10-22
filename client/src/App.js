import React, { useEffect, useState } from "react";
//import { useHistory } from 'react-router-dom';
import "./App.css";

import Navbar from './Components/Navbar';
import Routes from './Components/Routes';


export default function App (){
  let [menu, setMenu] = useState([]);
  
  useEffect (() => {
    getMenu();
      }, []);

  const getMenu = () => {
    fetch('/menu')
      .then(response => response.json())
      .then(menu => {setMenu(menu); 
        console.log(menu)})
      .catch(error => {console.log(error);
      })
  }

  async function addItem (item) {
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(item)
    }

    try{
      let response = await fetch('/menu', options);
      if(response.ok){
        let data = await response.json();
        setMenu(data);
      } else {
        console.log(`server error: ${response.status}`);
      }
    } catch (error) {
      console.log(`network error: ${error.message}`);
    }
  } 


  return (
    <div>
      <Navbar/>
      <Routes menu = {menu} addItem = {item => addItem(item)}/>  
    </div>
  );

}

  


