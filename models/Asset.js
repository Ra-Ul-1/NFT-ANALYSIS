const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

const assetSchema = new Schema ({
    // Do we need to use camelCase if camelCase not used in API?
    id: Number,
    name: String,
    symbol: String,
    price: Number,
    cmcRank: Number,
    volume24h: Number,
    percentChange1h: Number,
    percentChange24h: Number,
    percentChange7d: Number,
    percentChange30d: Number,
    percentChange60d: Number,
    percentChange90d: Number,
    marketCap: Number,
});

const Asset = mongoose.model("Asset", articleSchema);

module.exports = Asset;