const router = require("express").Router();
const axios = require('axios');
const Asset = require("../models/Asset")


router.get("/marketOverview", (req, res, next) => {
  axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
                headers: { 'X-CMC_PRO_API_KEY': process.env.REACT_APP_X_CMC_PRO_API_KEY }
            })
            .then(response => {
                const data = response.data.data;
                // console.log(data);
                res.json(data)
            })
            .catch(err => {
              next(err);
            })
})


router.get("/favourites/:ownerName", (req, res, next) => {
  const assetOwner = req.params.ownerName
  Asset.find({owner: assetOwner})
  .then(assets => {
    // console.log("Hola", assets)
    const symbols = assets.map(obj => {
      return obj.symbol
    })
    const query = symbols.join(",")
    // console.log(query)
    axios.get(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=${query}`, {
      headers: { 'X-CMC_PRO_API_KEY': process.env.REACT_APP_X_CMC_PRO_API_KEY }
  })
  .then(response => {
    const data = response.data.data;
    // map over the data - if you are at one of these elements, you check the quantity
    // then you create a new field: that should be quantity and what you get from the array
    // res.status(201).json(data);
    // console.log("Hello", data)
    assets.forEach(asset => data[asset.symbol].quantity = asset.quantity)
    // console.log("Test", data)
    const result = []
    for (let key in data) {
      result.push(data[key])
    }
    console.log(result)
    res.json(result)
  })
  })
                                // .then(response => console.log(response))
  .catch(err => {
    next(err);
  })
  
  // axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
  //               headers: { 'X-CMC_PRO_API_KEY': process.env.REACT_APP_X_CMC_PRO_API_KEY }
  //           })
  //           .then(response => {
  //               const data = response.data.data;
  //               console.log(data);
  //               res.json(data)
  //           })
  //           .catch(err => {
  //             next(err);
  //           })
})

router.post("/favourites", (req, res, next) => {
  const { symbol, quantity, owner } = req.body
  console.log(req.user)
  Asset.create({
    symbol,
    quantity,
    owner
  })
    .then(asset => {
      res.status(201).json(asset);
    })
    .catch(err => {
      next(err);
    })
})






module.exports = router;