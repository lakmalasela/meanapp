const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/checkAuth');
const Topics = require('../model/Topics');



router.post('/', async(req, res) => {
    try {

        const { name } = req.body;
        console.log(name);

        const data = new Topics(
            {
            name
        
          });
      
        await data.save();

        console.log('req', req.body);
        // items.push(req.body);    
         //success
        res.sendStatus(200);

        // throw new Error();
    } catch (e) {
        //server error
        console.log("Error", e);
        res.sendStatus(500);


    }
});


 //get method
 router.get("/",async(req, res) => {

    try {

        const data = await Topics.find();//findall
        console.log("GET CTA ",data);
        res.status(200).json(data); //json wedihata return wenne

    } catch (e) {
        res.sendStatus(500);
    }
});



module.exports = router;