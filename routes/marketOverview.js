const router = require("express").Router();
const axios = require('axios');

axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
    headers: { 'X-CMC_PRO_API_KEY': '68bb4f81-fd88-4c2a-a258-c72ad4c1f56e' }
})

.then(response => {
  // console.log(response);
  console.log(response.data.data)
  })
.catch(err => console.log(err))


module.exports = router;