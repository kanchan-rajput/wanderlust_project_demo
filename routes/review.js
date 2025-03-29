const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const {reviewSchema} = require("../schema.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const { validateReview, isLoggedIn} = require("../middleware.js");

const validateListing = (req , res , next)=>{
    let {error}= listingSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400 , errMsg);
    }else {
        next();
    }
};

const reviewController = require("../controllers/reviews.js");


//Post  Review Route
router.post(
    "/" ,wrapAsync(reviewController.createReview)
    );

//Delete Review Route
router.delete(
    "/:reviewId", wrapAsync(reviewController.destroyReview)
);

module.exports = router;
