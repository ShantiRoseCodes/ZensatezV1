# Zensatez Restaurant Management App

The app was created to have a more sustainable means of creating and distributing restaurant menus to customers. 

## The Back End

### The Database

A database with two tables was created for this app: a menu table and an orders table.
The menu table contains the details entered to create the menu: category, dish, details, and price.
The  orders table contains the customers' orders: date/time the order was made, the dish ordered, the quantity of the dish ordered, and the table number.

![databaseSchematic](./images/DatabseSchematic.jpg)

### The API
![api](./images/API.jpg)
The image shows the API get and post functions used by app.

## The Front End

### Menu Creator
In the admin view, the admin can create the menu by adding each new item using a form.

### Menu 
The menu allows customers to order dishes by indicating their table number, clicking the dish button, and choosing the quantity they would like to order.

### Admin Queue
Also, known as the KITCHEN on the navigator. This shows a queue of the orders made by the customers. It also includes a handlestrike function that allows kitchen staff to cross out the things they have finished. 

## Future Feature Extensions

*Image upload instead of URL's
*Order menu items by category
*Prices should have 2 decimal places
*Allow customers to submit their orders in one go.
*Customers see an order summary after ordering.
*Strikethrough needs to be permanent.