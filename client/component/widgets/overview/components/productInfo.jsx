import React from 'react'
import SocialMedia from './little components/SocialMedia.jsx'
import StarRatings from './../../Shared components/StarRatings.jsx'

function ProductInfo(props) {
  return(
    <div className="ProductInfo">
      <StarRatings />
      <SocialMedia />
      <div>
        
        <div>Price</div>
        <div>Category</div>
        <div>Name</div>
      </div>
    </div>
  )
}
export default ProductInfo;



