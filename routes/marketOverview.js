const router = require("express").Router();
const axios = require('axios');




router.get("/marketOverview", (req, res, next) => {
  axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
                headers: { 'X-CMC_PRO_API_KEY': process.env.REACT_APP_X_CMC_PRO_API_KEY }
            })
            .then(response => {
                const data = response.data.data;
                console.log(data);
                res.json(data)
            })
            .catch(err => {
              next(err);
            })
})






module.exports = router;