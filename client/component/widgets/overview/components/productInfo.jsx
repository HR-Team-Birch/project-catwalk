import React, {useEffect, useState} from 'react'
import SocialMedia from './little components/SocialMedia.jsx'
// import StarRatings from './../../Shared components/StarRatings.jsx'

const ProductInfo = (props) => {
  return(
    <div className="ProductInfo">
      {/* <StarRatings /> */}
      <SocialMedia />
      <div className="Details">

        <div className="productCategory">{props.currentProduct.category}</div>
        <div className="productName">{props.currentProduct.name}</div>
        <div className="productPrice">${props.currentProduct.default_price}</div>
      </div>
    </div>
  )
}
export default ProductInfo;



