const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/checkAuth');
const Employee = require('../model/Employee');



router.post('/', async(req, res) => {
    try {

        const { name, email,phone,topic } = req.body;
        // console.log(name, email,phone,topic);

        const data = new Employee(
            {
            name,
            email,
            phone,
            topic
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
 router.get("/", checkAuth,async(req, res) => {

    try {

        const data = await Employee.find();//findall
        console.log("GET CTA ",data);
        res.status(200).json(data); //json wedihata return wenne

    } catch (e) {
        res.sendStatus(500);
    }
});


//update method
router.put("/:id", async(req, res) => {


    try {
        const {id} = req.params;
        const {name} = req.body;
    

        await Employee.updateOne({_id:id},{name,name});
        return  res.sendStatus(200); 



    } catch (error) {
        res.sendStatus(500);
    }
});

module.exports = router;