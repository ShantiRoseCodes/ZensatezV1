var express = require('express');
var router = express.Router();
const db = require("../model/helper");

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.send({ title: 'Express' });
// });


router.get('/', async function(req, res, next){
  try{
    let results = await db("SELECT * FROM menu ORDER BY category;");
    res.send(results.data);
  } catch(err) {
    res.status(500).send({ error: "Sorry. We are encountering technical difficulties."});
  }  
});

router.post('/', async function(req,res,next){
  let { category, dish, details, imagefile, price } = req.body;

  try{
    let sql = 
      `INSERT INTO menu (category, dish, details, imagefile, price)  
      VALUES ("${category}", "${dish}", "${details}", "${imagefile}", ${price});`;
    await db(sql);
    let results = await db("SELECT * FROM menu ORDER BY category;");
    res.send(results.data);
  } catch(err) {
    res.status(500).send({ error: err.message});
  }  
});

router.get('/orders', async function(req, res, next){
  try{
    let response = await db("SELECT * FROM orders ORDER BY time;");
    res.send(response.data);
    console.log(response.data);
  } catch(err) {
    res.status(500).send({ error: "Sorry. We are encountering technical difficulties."});
  }  
});

router.post('/orders', async function(req,res,next){
  let { tablenumber, dish, quantity } = req.body;

  try{
    let mysql = 
      `INSERT INTO orders (tablenumber, dish, quantity)  
      VALUES ("${tablenumber}", "${dish}", "${quantity}");`;
    await db(mysql);
    let response = await db("SELECT * FROM orders ORDER BY time;");
    res.send(response.data);
  } catch(err) {
    res.status(500).send({ error: err.message});
  }  
});




module.exports = router;
