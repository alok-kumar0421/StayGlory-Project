const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");// for error handling
const Listing = require("../models/listing.js");
const {isLoggedIn, isOwner} = require("../middleware.js");

const listingController = require("../controllers/listings.js");

const multer = require("multer");
const {storage} = require("../cloudConfig.js");
const upload = multer({storage});

router.get("/listings/new",(req,res)=>{
    res.redirect("/listings");
});


//******************index route***************************** */
router.get("/",wrapAsync(listingController.index));
//***********send form for add new hotel*********** */
router.get("/new",isLoggedIn,listingController.renderNewForm);
//***************show route***************** */
router.get("/:id",wrapAsync(listingController.showListing));

//****************ADD route****************** */
router.post("/",isLoggedIn,upload.single('listing[image]'),wrapAsync(listingController.createListing));

//*****************edit route render form for edit*********** */

router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync(listingController.renderEditForm));

//*********update route*********** */
router.put("/:id",isLoggedIn,isOwner,upload.single('listing[image]'),wrapAsync(listingController.updateListing));

//**********delete************ */
router.delete("/:id",isLoggedIn,isOwner,wrapAsync(listingController.destroyListing));

module.exports = router; 

