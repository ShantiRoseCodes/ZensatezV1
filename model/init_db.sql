SET foreign_key_checks = 0;
DROP TABLE IF EXISTS menudia; 
DROP TABLE IF EXISTS food;
DROP TABLE IF EXISTS beverage;
-- DROP TABLE IF EXISTS orders; 
SET foreign_key_checks = 0;
 
CREATE TABLE menudia ( 
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
    dishType VARCHAR(100) 
); 

CREATE TABLE food ( 
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
    dish VARCHAR(200),
    details VARCHAR(500),
    imagefile VARCHAR(500),
    menudia_ID INT, 
    FOREIGN KEY (menudia_ID) REFERENCES menudia(id) ON DELETE CASCADE
); 

CREATE TABLE beverage ( 
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
    drink VARCHAR(200)
); 


-- CREATE TABLE orders ( 
--     id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
--     date_time DATETIME DEFAULT NOW(),
--     tablenumber SMALLINT,
--     dish VARCHAR(200),
--     quantity SMALLINT
-- ); 


INSERT INTO menudia (dishType)
    VALUES ('Starter'),
    ('Main'),
    ('Dessert');   


INSERT INTO food (dish, details, imagefile, menudia_ID)  
    VALUES ('Patatas Bravas', 'fried potatoes with salsa brava', 'https://spanishsabores.com/wp-content/uploads/2016/03/DSC07129.jpg', 1),
    ('Ensalada de Calabcin', 'zucchinni salad', 'https://i.blogs.es/293c4c/ensalada-de-calabacin-a-la-plancha-con-queso-feta-y-menta/840_560.jpg', 2),
    ('Brownie a la Mode', 'brownie with a scoop of chocolate or vanilla ice cream', 'https://scm-assets.constant.co/scm/unilever/d806c3b80def8183f2c1c0e93e7fb11b/38e0e79a-a552-4886-be32-6b93c030256c.jpg', 3);
    
INSERT INTO beverage (drink)
    VALUES ('House Red');


-- INSERT INTO orders (tablenumber, dish, quantity)
--     VALUES (1, 'Patatas Bravas', 1);
    
 

-- DROP TABLE IF EXISTS menu; 
-- DROP TABLE IF EXISTS orders; 

-- CREATE TABLE menu ( 
--     id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
--     category VARCHAR(100), 
--     dish VARCHAR(200),
--     details VARCHAR(500),
--     imagefile VARCHAR(500),
--     price DEC(5,2)
-- ); 
 
-- CREATE TABLE orders ( 
--     id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
--     date_time DATETIME DEFAULT NOW(),
--     tablenumber SMALLINT,
--     dish VARCHAR(200),
--     quantity SMALLINT
-- ); 

 
-- INSERT INTO menu (category, dish, details, imagefile, price)  
--     VALUES ('tapas', 'Patatas Bravas', 'fried potatoes with salsa brava', 'https://spanishsabores.com/wp-content/uploads/2016/03/DSC07129.jpg', 2.50); 


-- INSERT INTO orders (tablenumber, dish, quantity)
--     VALUES (1, 'Patatas Bravas', 1);
    