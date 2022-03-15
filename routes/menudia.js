var express = require('express');
var router = express.Router();
const db = require("../model/helper");


router.get('/', async function(req, res, next){
    try{
      let results = await db("SELECT * FROM menu ORDER BY category;");
      res.send(results.data);
    } catch(err) {
      res.status(500).send({ error: "Sorry. We are encountering technical difficulties."});
    }  
  });





module.exports = router;