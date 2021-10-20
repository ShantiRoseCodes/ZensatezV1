var express = require('express');
var router = express.Router();
const db = require("../model/helper");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({ title: 'Express' });
});

router.post('/', async function(req,res,next){
  let { category, dish, details, imagefile, price } = req.body;

  try{
    let sql = 
      `INSERT INTO menu (category, dish, details, imagefile, price)  
      VALUES ("${category}", "${dish}", "${details}", "${imagefile}", "${price}");`;
    await db(sql);
    let results = db("SELECT * FROM menu;");
    res.send(results.data);
  } catch(err) {
    res.status(500).send({ error: err.message});
  }  
});

module.exports = router;
