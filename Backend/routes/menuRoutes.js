const express = require('express');
const router = express.Router();
const MenuItem = require('../models/menuItem');


//defining route to get the items grouped by category wise.
router.get('/', async (req,res) => {

        try{
            //first getting all menu item that are available.
            const menuItems =  await MenuItem.find();

            //grouping the menu item by category
            const categorizedMenu = {};     //initially keeping it as empty.

            menuItems.forEach(item => {
                const category = item.category || "Uncategorized";

                if(!categorizedMenu[category]){
                    categorizedMenu[category] = [];
                }

                categorizedMenu[category].push(item);
            });

            res.json(categorizedMenu);
        }catch(error){
            console.log(error);
            res.status(500).send("Server Error");
        }

});

module.exports = router;
