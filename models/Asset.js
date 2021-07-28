const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

const assetSchema = new Schema ({
    // Do we need to use camelCase if camelCase not used in API?
    symbol: String,
    quantity: Number,
    owner: String,
});

const Asset = mongoose.model("Asset", assetSchema);

module.exports = Asset;