const axios = require('axios');
const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe';
const TOKEN = require('../config.js')


//get list of all products
const getAllProducts = () => {
  let options = {
    url: `${url}/products`,
    headers: {
      'Authorization': `token ${config.TOKEN}`
      'Content-Type': 'application/json'
    }
  };
  return axios.get(options)
}

//get data for product with this ID
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

//gets all styles of product with this id
const getAllStyles = (prodID) => {
  //options?
  let options = {
    url: `${url}/products/${prodID}/styles`,
    headers: {
      'Authorization': `token ${config.TOKEN}`
      'Content-Type': 'application/json'
    }
  };
  return axios.get(options)
}

//retrieves list of products added to card
const getItemsInCart = () => {
  let options = {
    url: `${url}/cart`,
    headers: {
      'Authorization': `token ${config.TOKEN}`
      'Content-Type': 'application/json'
    }
  };
  return axios.get(options)
}

//adds a product to the cart
const addToCart = (prodID) => {
  let options = {
    url: `${url}/cart/`,
    headers: {
      'Authorization': `token ${config.TOKEN}`
      'Content-Type': 'application/json'
    }
  };
  return axios.post(options, prodID)
}








module.exports = {
  getAllProducts: getAllProducts,
  getProductInfo: getProductInfo,
  addToCart: addToCart,
  getItemsInCart: getItemsInCart,
  getAllStyles: getAllStyles
}