const axios = require('axios');
const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe';
//import token from config

const getProductInfo = (prodID) => {
  //options?
  let options = {
    url: `${url}/products/${prodID}`,
    headers: {
      'Authorization': `token ${config.TOKEN}`
      'Content-Type': 'application/json'
    }
  };
  return axios.get(options)
}










module.exports = {
  getProductInfo: getProductInfo
}

















