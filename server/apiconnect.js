const axios = require('axios');
const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe';
const {TOKEN} = require('../config.js')


//get list of all products
const getAllProducts = () => {
  let options = {
    url: `${url}/products`,
    headers: {
      'Authorization': `${TOKEN}`
    }
  };
  return axios.get(options.url, options)
}

//get data for product with this ID
const getProductInfo = (prodID) => {
  //options?
  let options = {
    url: `${url}/products/${prodID}`,
    headers: {
      'Authorization': `${TOKEN}`,
    }
  };
  return axios.get(options.url, options)
}

//gets all styles of product with this id
const getAllStyles = (prodID) => {
  let options = {
    url: `${url}/products/${prodID}/styles`,
    headers: {
      'Authorization': `${TOKEN}`
    }
  };
  return axios.get(options.url, options)
}

//retrieves list of products added to card
const getItemsInCart = () => {
  let options = {
    url: `${url}/cart`,
    headers: {
      'Authorization': `${TOKEN}`
    }
  };
  return axios.get(options.url, options)
}

//adds a product to the cart
const addToCart = (prodID) => {
  let data = prodID
  let options = {
    url: `${url}/cart`,
    headers: {
      'Authorization': `${TOKEN}`,
      'Content-Type': 'application/json'
    }
  };
  return axios.post(options.url, data, options)
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

const getReviewsMeta = (productId) => {
  let options = {
    url: `${url}/reviews/meta/${productId}`,
    headers: {
      'Authorization': `token ${config.TOKEN}`,
      'Content-Type': 'application/json'
    }
  };
  return axios.get(options);
};

const postReview = (review) => {
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

const getQuestions = (productId) => {
  let options = {
    url: `${url}/qa/questions/${productId}`,
    headers: {
      'Authorization': `token ${config.TOKEN}`
      'Content-Type': 'application/json'
    }
  };
  return axios.get(options)
}

const getAnswers = (questionId) => {
  let options = {
    url: `${url}/qa/questions/${questionId}/answers`,
    headers: {
      'Authorization': `token ${config.TOKEN}`
      'Content-Type': 'application/json'
    }
  };
  return axios.get(options)
}

const addQuestion = (data) => {
  let options = {
    url: `${url}/qa/questions`,
    headers: {
      'Authorization': `token ${config.TOKEN}`
      'Content-Type': 'application/json'
    },
    data: data
  };
  return axios.post(options, data)
}

const addAnswer = (questionId) => {
  let options = {
    url: `${url}/qa/questions/${questionId}/answers`,
    headers: {
      'Authorization': `token ${config.TOKEN}`
      'Content-Type': 'application/json'
    },
    data: data
  };
  return axios.post(options, data)
}

const markQHelpful = (questionId) => {
  let options = {
    url: `${url}/qa/questions/${questionId}/helpful`,
    headers: {
      'Authorization': `token ${config.TOKEN}`
      'Content-Type': 'application/json'
    },
  };
  return axios.put(options)
}

const reportQuestion = (questionId) => {
  let options = {
    url: `${url}/qa/questions/${questionId}/report`,
    headers: {
      'Authorization': `token ${config.TOKEN}`
      'Content-Type': 'application/json'
    },
  };
  return axios.put(options)
}

const markAHelpful = (answerId) => {
  let options = {
    url: `${url}/qa/answers/${answerId}/helpful`,
    headers: {
      'Authorization': `token ${config.TOKEN}`
      'Content-Type': 'application/json'
    },
  };
  return axios.put(options)
}

const reportAnswer = (answerId) => {
  let options = {
    url: `${url}/qa/answers/${answerId}/report`,
    headers: {
      'Authorization': `token ${config.TOKEN}`
      'Content-Type': 'application/json'
    },
  };
  return axios.put(options)
}


module.exports = {
  getAllProducts: getAllProducts,
  getProductInfo: getProductInfo,
  addToCart: addToCart,
  getItemsInCart: getItemsInCart,
  getAllStyles: getAllStyles,
  getReviews: getReviews,
  getReviewsMeta: getReviewsMeta,
  postReview: postReview,
  markReviewAsHelpful: markReviewAsHelpful,
  reportReview: reportReview,
  getQuestions: getQuestions,
  getAnswers: getAnswers,
  addQuestion: addQuestion,
  addAnswer: addAnswer,
  markQHelpful: markQHelpful,
  reportQuestion: reportQuestion,
  markAHelpful: markAHelpful,
  reportAnswer: reportAnswer
}