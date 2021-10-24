import { Route, Switch } from 'react-router-dom';
import React from 'react';

import AdminCreateMenuView from '../Views/AdminCreateMenuView';
import AdminQueueView from '../Views/AdminQueueView';
import Error404View from '../Views/Error404View';
import UserMenuView from '../Views/UserMenuView';
import UserOrderSummaryView from '../Views/UserOrderSummaryView';


function Routes(props) {
    return (
        <Switch>
            {/* Home: Use 'exact' or else this route will match EVERYTHING */}
            {/* <Route path="/" exact>
                <HomeView />
            </Route> */}

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
    
            {/* This contains all the items ordered by the customer */}
            {/* <Route path="/orders">
                <UserOrderSummaryView />
            </Route> */}

            {/* None of the routes matched: Error 404! */}
            {/* <Error404View /> */}
        </Switch>
    );
}

export default Routes;