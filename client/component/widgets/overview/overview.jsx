import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ProductInfo from './components/ProductInfo.jsx';
import StyleSelector from './components/StyleSelector.jsx';
import ImageGallery from './components/ImageGallery.jsx';
import Description from './components/Description.jsx';
import AddToCart from './components/AddToCart.jsx';

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
    this.state = {
      currentProduct: {},
      currentStyle: {
        photos: [{url: "https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"}]
      },
      allStyles: []
    }
    this.getAllProducts = this.getAllProducts.bind(this)
    this.getAllStyles = this.getAllStyles.bind(this)
  }
  
  componentDidMount() {
    this.getAllProducts()
  }
  
  getAllProducts() {
    axios.get('/products')
      .then((response) => {
        this.setState({
          currentProduct: response.data[5]
        })
        this.getAllStyles(response.data[5].id);
      })
      .catch((error) => {
        console.error('ERROR IN CLIENT GET', error)
      })
  }
  
  getProductInfo(productID) {
    axios.get(`/products/${productID}`)
    .then((response) => {

      //do some other stuff with it
    })
    .catch((error) => {
      console.error('ERROR IN CLIENT GET', error)
    })
  }
  
  getAllStyles(productID) {
    axios.get(`/products/${productID}/styles`)
    .then((response) => {
      //do some other stuff with it
      this.setState({
        allStyles: response.data.results,
        currentStyle: response.data.results[0]
      })
      console.log(this.state)
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
        <ImageGallery currentStyle={this.state.currentStyle} allStyles={this.state.allStyles}/>
        <ProductInfo currentProduct=
        {this.state.currentProduct}/>
        <StyleSelector allStyles={this.state.allStyles}/>
        <Description currentProduct={this.state.currentProduct}/>
        <AddToCart />
      </div>
    )
    
  }
}

export default Overview;