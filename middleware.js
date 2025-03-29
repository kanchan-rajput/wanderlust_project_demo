const Listing = require("./models/listing");
const ExpressError = require("./utils/ExpressError.js");
const {listingSchema} = require("./schema.js");

module.exports.isLoggedIn = (req , res , next)=>{
    if(!req.isAuthenticated()){
        req.session.redirectUrl = req.originalUrl;
        req.flash("error" , "you must be logged in to create listing!");
       return res.redirect("/login");
    }
    next();
};

module.exports.saveRedirectUrl = (req , res , next) =>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
};

module.exports.isOwner = async(req , res,  next)=>{
    let {id} = req.params;
    let listing = await Listing.findById(id);
    if(!listing.owner.equals(res.locals.currUser._id)){
        req.flash("error" , "You don't have permission to edit");
        return res.redirect(`/listings/${id}`);
    }
    next();
};

module.exports.validateListing = (req , res , next)=>{
    console.log("Request Body:", req.body); // Debugging step

    if (!req.body.listing) {
        throw new ExpressError(400, "Invalid Request: Missing listing data!");
    }

    let { error } = listingSchema.validate(req.body.listing);
    if (error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
};
