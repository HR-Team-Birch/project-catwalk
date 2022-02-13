import React from 'react'
import axios from 'axios'
import ProductInfo from './components/ProductInfo.jsx'
import StyleSelector from './components/StyleSelector.jsx'
import ImageGallery from './components/ImageGallery.jsx'
import Description from './components/Description.jsx'
import AddToCart from './components/AddToCart.jsx'


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



class Overview extends React.Component {
  
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
      <div className="Overview">
        <ImageGallery />
        <ProductInfo />
        <StyleSelector />
        <Description />
        <AddToCart />
      </div>
    )
    
  }
}

export default Overview;