const axios = require('axios');
const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe';
const {TOKEN} = require('../config.js')


//get list of all products
// const getAllProducts = () => {
//   let options = {
//     url: `${url}/products`,
//     headers: {
//       'Authorization': `token ${config.TOKEN}`
//       'Content-Type': 'application/json'
//     }
//   };
//   return axios.get(options)
// }

// //get data for product with this ID
// const getProductInfo = (prodID) => {
//   //options?
//   let options = {
//     url: `${url}/products/${prodID}`,
//     headers: {
//       'Authorization': `token ${config.TOKEN}`
//       'Content-Type': 'application/json'
//     }
//   };
//   return axios.get(options)
// }

// //gets all styles of product with this id
// const getAllStyles = (prodID) => {
//   //options?
//   let options = {
//     url: `${url}/products/${prodID}/styles`,
//     headers: {
//       'Authorization': `token ${config.TOKEN}`
//       'Content-Type': 'application/json'
//     }
//   };
//   return axios.get(options)
// }

// //retrieves list of products added to card
// const getItemsInCart = () => {
//   let options = {
//     url: `${url}/cart`,
//     headers: {
//       'Authorization': `token ${config.TOKEN}`
//       'Content-Type': 'application/json'
//     }
//   };
//   return axios.get(options)
// }

// //adds a product to the cart
// const addToCart = (prodID) => {
//   let options = {
//     url: `${url}/cart/`,
//     headers: {
//       'Authorization': `token ${config.TOKEN}`
//       'Content-Type': 'application/json'
//     }
//   };
//   return axios.post(options, prodID)
// }




const getReviews = (productId) => {
  console.log('productId inside apiconnect', productId)
  let options = {
    url: `${url}/reviews/?product_id=${productId.product_id}&count=${productId.count ? productId.count : 5}&page=${productId.page ? productId.page : 1}`,
    headers: {
      'Authorization': `${TOKEN}`
    }
  };
  return axios.get(options.url, options);
};

const getReviewsMeta = (productId) => {
  let options = {
    url: `${url}/reviews/meta/?product_id=${productId.product_id}`,
    headers: {
      'Authorization': `${TOKEN}`
    }
  };
  return axios.get(options.url, options);
};

const postReview = (product) => {
  let options = {
    url: `${url}/reviews/${product.product_id}`,
    headers: {
      'Authorization': `${TOKEN}`
    }
  };
  return axios.post(options.url, options, product.review);
};

// const markReviewAsHelpful = (reviewId) => {
//   let options = {
//     url: `${url}/reviews`,
//     headers: {
//       'Authorization': `token ${config.TOKEN}`,
//       'Content-Type': 'application/json'
//     }
//   };
//   //increment helpfulness count
//   return axios.put(options, reviewId);
// };

// const reportReview = (reviewId) => {
//   let options = {
//     url: `${url}/reviews/${reviewId}/`,
//     headers: {
//       'Authorization': `token ${config.TOKEN}`,
//       'Content-Type': 'application/json'
//     }
//   };
//   //changes something from false to true
//   return axios.put(options);
// }






module.exports = {
  // getAllProducts: getAllProducts,
  // getProductInfo: getProductInfo,
  // addToCart: addToCart,
  // getItemsInCart: getItemsInCart,
  // getAllStyles: getAllStyles,
  getReviews: getReviews,
  getReviewsMeta: getReviewsMeta,
  postReview: postReview,
  // markReviewAsHelpful: markReviewAsHelpful,
  // reportReview: reportReview

}