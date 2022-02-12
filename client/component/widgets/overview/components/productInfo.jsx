import React from 'react'
import socialMedia from './little components/socialMedia.jsx'
import starRatings from './../../Shared components/starRatings.jsx'

function productInfo(props) {
  return(
    <div>
      <div>Price {props.product.default_price}.</div>
      <div>Category</div>
      <div>Name</div>
      <div>Description</div>
      <socialMedia />
      <starRatings />
    </div>
  )
}
export default productInfo;



