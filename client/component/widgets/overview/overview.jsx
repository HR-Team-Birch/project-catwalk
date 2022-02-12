import React from 'react'
import axios from 'axios'
import productInfo from './components/productInfo.jsx'
import styleSelector from './components/styleSelector.jsx'

//Will get current product from App.js
//will be an object
//example product object
//{
//  "id": 37311,
//  "campus": "hr-rfe",
//  "name": "Camo Onesie",
//  "slogan": "Blend in to your crowd",
//  "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
//  "category": "Jackets",
//  "default_price": "140.00",
//  "created_at": "2021-08-13T14:37:33.145Z",
//  "updated_at": "2021-08-13T14:37:33.145Z"
//}



class overview extends React.Component {
  
  constructor(props) {
    super(props)
  }
  
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
  
  getProductInfo(productID) {
    axios.get(`/products/${productID}`)
    .then((response) => {
      console.log(response)
      //do some other stuff with it
    })
    .catch((error) => {
      console.error('ERROR IN CLIENT GET', error)
    })
  }
  
  getAllStyles(productID) {
    axios.get(`/products/${productID}/styles`)
    .then((response) => {
      console.log(response)
      //do some other stuff with it
    })
    .catch((error) => {
      console.error('ERROR IN CLIENT GET', error)
    })
  }
  
  getItemsInCart() {
    axios.get('/cart')
    .then((response) => {
      console.log(response)
      //do some other stuff with it
    })
    .catch((error) => {
      console.error('ERROR IN CLIENT GET', error)
    })
  }
  
  addToCart(productID) {
    axios.post(`/cart`, {sku_id: productID})
    .then((response) => {
      console.log(response)
      //do some other stuff with it
    })
    .catch((error) => {
      console.error('ERROR IN CLIENT GET', error)
    })
  }
  
  render() {
    return (
      <div>
        <productInfo />
        <styleSelector />
      </div>
    )
    
  }
}

export default Overview;