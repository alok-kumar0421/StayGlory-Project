const express = require("express");
const router = express.Router({ mergeParams: true });
const {isLoggedIn,isReviewAuthor} = require("../middleware.js");

const wrapAsync = require("../utils/wrapAsync.js");// for error handling
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");

const reviewController = require("../controllers/review.js")

//**********************create review route************** */
router.post("/",isLoggedIn,reviewController.createReview);
//*************delete review***************************** */
router.delete("/:reviewId",isLoggedIn,isReviewAuthor,wrapAsync(reviewController.deleteReview)
);

module.exports = router;