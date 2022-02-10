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




const getReviews = (productId) => {
  let options = {
    url: `${url}/reviews/${productId}`,
    headers: {
      'Authorization': `token ${config.TOKEN}`,
      'Content-Type': 'application/json'
    }
  };
  return axios.get(options);
};

const getReviews = (productId) => {
  let options = {
    url: `${url}/reviews/meta/${productId}`,
    headers: {
      'Authorization': `token ${config.TOKEN}`,
      'Content-Type': 'application/json'
    }
  };
  return axios.get(options);
};

const postReview= (review) => {
  let options = {
    url: `${url}/reviews`,
    headers: {
      'Authorization': `token ${config.TOKEN}`,
      'Content-Type': 'application/json'
    }
  };
  return axios.post(options, review);
};

const markReviewAsHelpful = (reviewId) => {
  let options = {
    url: `${url}/reviews`,
    headers: {
      'Authorization': `token ${config.TOKEN}`,
      'Content-Type': 'application/json'
    }
  };
  //increment helpfulness count
  return axios.put(options, reviewId);
};

const reportReview = (reviewId) => {
  let options = {
    url: `${url}/reviews/${reviewId}/`,
    headers: {
      'Authorization': `token ${config.TOKEN}`,
      'Content-Type': 'application/json'
    }
  };
  //changes something from false to true
  return axios.put(options);
}



module.exports = {
  getProductInfo: getProductInfo
}

















