const axios = require('axios');
const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe';
const token = require('../config.js');

//import token from config

let options = {
  url: `${url}/products/${prodID}`,
  headers: {
    'Authorization': `token ${config.TOKEN}`
    'Content-Type': 'application/json'
  }
};
const getProductInfo = (prodID) => {
  //options?
  return axios.get(options)
}

const getQuestions = (prodId) => {
  axios.get({
    url : `${url}`
    })



}










module.exports = {
  getProductInfo: getProductInfo
}

















