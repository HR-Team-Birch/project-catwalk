import React from 'react'
import SocialMedia from './little components/SocialMedia.jsx'
import StarRatings from './../../Shared components/StarRatings.jsx'

function ProductInfo(props) {
  return(
    <div className="ProductInfo">
      <StarRatings />
      <SocialMedia />
      <div className="Details">
        
        <div>{props.currentProduct.default_price}</div>
        <div>{props.currentProduct.category}</div>
        <div>{props.currentProduct.name}</div>
      </div>
    </div>
  )
}
export default ProductInfo;



