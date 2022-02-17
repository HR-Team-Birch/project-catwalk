
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


const Overview = (props) => {

    const [product, setProduct] = useState(null)
    const [currentStyle, setCurrentStyle] = useState(null)
    const [allStyles, setAllStyles] = useState(null)
    

    const getAllProducts = () => {
      axios.get('/products')
      .then((response) => {
        setProduct(response.data[4])
        console.log('REPOSNE', response)
        console.log('PRODUCT', product)
        getAllStyles(response.data[4].id);
      })
      .catch((error) => {
        console.error('ERROR IN CLIENT GET', error)
      })
    }
    
    const getAllStyles = (productID) => {
      axios.get(`/products/${productID}/styles`)
      .then((response) => {
        //do some other stuff with it
        setAllStyles(response.data.results)
        setCurrentStyle(response.data.results[0])
      })
      .catch((error) => {
        console.error('ERROR IN CLIENT GET', error)
      })
    }
    
    useEffect(() => {
      getAllProducts()
    }, [])
    
    return (
      <div className="Overview">
        <ImageGallery currentStyle={currentStyle} allStyles={allStyles}/>
        <ProductInfo product={product}/>
        <StyleSelector allStyles={allStyles} currentStyle={currentStyle} setCurrentStyle={setCurrentStyle}/>
        <Description product={product}/>
        <AddToCart currentStyle={currentStyle}/>
      </div>
    )
    // console.log(this.state)
    }

//  getItemsInCart() {
//    axios.get('/cart')
//    .then((response) => {
//      // console.log(response)
//      //do some other stuff with it
//    })
//    .catch((error) => {
//      console.error('ERROR IN CLIENT GET', error)
//    })
//  }

//  addToCart(productID) {
//    axios.post(`/cart`, {sku_id: productID})
//    .then((response) => {
//      // console.log(response)
//      //do some other stuff with it
//    })
//    .catch((error) => {
//      console.error('ERROR IN CLIENT GET', error)
//    })
//  }

//  render() {
//}

export default Overview;
