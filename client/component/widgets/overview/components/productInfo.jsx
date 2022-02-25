import React, { useEffect, useState } from 'react'
import SocialMedia from './little components/SocialMedia.jsx'
import StarRatings from './../../Shared components/starRatings.jsx'
import axios from 'axios'

const ProductInfo = ({ product, currentStyle, reviewMeta }) => {
  
  return (
    <div className="ProductInfo" id="TEST">
      {reviewMeta ?
        <StarRatings meta={reviewMeta.ratings} />
        : null
      }
      <SocialMedia />
      <div className="Details">
        <div className="productCategory">{product.category?.toUpperCase()}</div>
        <div className="productName">{product.name}</div>
        {currentStyle?.sale_price !== null
          ? <div>
              <span id="salePrice"> ${currentStyle?.sale_price}</span>
              <span className="oldPrice"> ${product.default_price}</span>
            </div>
          : <div>
              <span className="productPrice">$ {product.default_price}</span>
          </div>
          }

        <div className="stylename">Style > {currentStyle?.name}</div>
      </div>
    </div>
  )
}
export default ProductInfo;



