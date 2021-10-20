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
    res.status(400).send({ error: "Sorry. We are encountering technical difficulties."});
  }  
});

router.post('/', async function(req,res,next){
  let { category, dish, details, imagefile, price } = req.body;

  try{
    let sql = 
      `INSERT INTO menu (category, dish, details, imagefile, price)  
      VALUES ("${category}", "${dish}", "${details}", "${imagefile}", ${price});`;
    await db(sql);
    let results = await db("SELECT * FROM menu;");
    res.send(results.data);
    console.log(results.data);
  } catch(err) {
    res.status(500).send({ error: err.message});
  }  
});

module.exports = router;
