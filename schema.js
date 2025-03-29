const Joi = require("joi");

module.exports.listingSchema = Joi.object({
    listing: Joi.object({
        title: Joi.string().required(),
        image: Joi.string().uri().required(),
        price: Joi.number().min(0).required(),
        location: Joi.string().required(),
        description: Joi.string().required()
    }).required()
});
