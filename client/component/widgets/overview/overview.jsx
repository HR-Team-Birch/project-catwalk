import React from 'react'
import axios from 'axios'

getAllProducts() {
  axios.get('/products')
    .then((response) => {
      console.log(response)
      //do some other stuff with it
    })
    .catch((error) => {
      console.error('ERROR IN CLIENT GET', error)
    })
}

getProductInfo() {
  axios.get('/products')
  .then((response) => {
    console.log(response)
    //do some other stuff with it
  })
  .catch((error) => {
    console.error('ERROR IN CLIENT GET', error)
  })
}

getAllStyles() {
  axios.get('/products')
  .then((response) => {
    console.log(response)
    //do some other stuff with it
  })
  .catch((error) => {
    console.error('ERROR IN CLIENT GET', error)
  })
}

getItemsInCart() {
  axios.get('/products')
  .then((response) => {
    console.log(response)
    //do some other stuff with it
  })
  .catch((error) => {
    console.error('ERROR IN CLIENT GET', error)
  })
}

addToCart() {
  axios.get('/products')
  .then((response) => {
    console.log(response)
    //do some other stuff with it
  })
  .catch((error) => {
    console.error('ERROR IN CLIENT GET', error)
  })
}