import { Route, Switch } from 'react-router-dom';
import React from 'react';

import AdminCreateMenuView from '../Views/AdminCreateMenuView';
import AdminQueueView from '../Views/AdminQueueView';
import UserMenuView from '../Views/UserMenuView';

function Routes(props) {
    return (
        <Switch>
            
            {/* This contains the create menu form and menu preview */}
            <Route path="/admin">
                <AdminCreateMenuView addItem = {item => props.addItem(item)} />
            </Route>
    
            {/* This contains the list of orders for the kitchen */}
            <Route path="/queue">
                <AdminQueueView orders={props.orders}/>
            </Route>
    
            {/* This contains the menu for customers */}
            <Route path="/menu">
                <UserMenuView  menu= {props.menu} addOrder = {orderItems => props.addOrder(orderItems)} orders={props.orders} />
            </Route>

        </Switch>
    );
}

export default Routes;