import React, { useEffect, useState } from "react";
//import { useHistory } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from './Components/Navbar';

import AdminCreateMenuView from './Views/AdminCreateMenuView';
import AdminQueueView from './Views/AdminQueueView';
import UserMenuView from './Views/UserMenuView';


export default function App (){
  let [menu, setMenu] = useState([]);
  let [orders, setOrders] = useState([]);
  
  useEffect (() => {
    getMenu();
    getOrder();
      }, []);

  const getMenu = () => {
    fetch('/menu')
      .then(response => response.json())
      .then(menu => {setMenu(menu); 
        console.log(menu)})
      .catch(error => {console.log(error);
      })
  }

  const getOrder = () => {
    fetch('/menu/orders')
      .then(response => response.json())
      .then(orders => {setOrders(orders); 
        console.log(orders)})
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

  async function addOrder (orderItems) {
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(orderItems)
    }

    try{
      let response = await fetch('/menu/orders', options);
      if(response.ok){
        let data = await response.json();
        setOrders(data);
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
      <Routes>
        <Route path="/admin" element={<AdminCreateMenuView addItem = {item => addItem(item)} />}/>
        <Route path="/queue" element = {<AdminQueueView orders={orders}/>}/>
        <Route path="/menu" element = {<UserMenuView menu = {menu}   addOrder = {orders => addOrder(orders)} orders={orders} />}/>
      </Routes>
    </div>
  );

}

  


