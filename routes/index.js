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
    console.log(assets)
    const symbols = assets.map(obj => {
      return obj.symbol
    })
    const query = symbols.join(",")
    console.log(query)
    // NEXT STEP: ADD Axios.get here
    res.status(201).json(assets);
  })
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