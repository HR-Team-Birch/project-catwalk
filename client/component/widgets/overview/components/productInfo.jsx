import React, {useEffect, useState} from 'react'
import SocialMedia from './little components/SocialMedia.jsx'
import StarRatings from './../../Shared components/StarRatings.jsx'

const ProductInfo = (props) => {
  return(
    <div className="ProductInfo">
      <StarRatings />
      <SocialMedia />
      <div className="Details">
        
        <div className="productCategory">{props.product.category}</div>
        <div className="productName">{props.product.name}</div>
        <div className="productPrice">${props.product.default_price}</div>
      </div>
    </div>
  )
}
export default ProductInfo;



