import React, {useEffect, useState} from 'react'
import SocialMedia from './little components/SocialMedia.jsx'
import StarRatings from './../../Shared components/starRatings.jsx'

const ProductInfo = (props) => {

  const [product, setProduct] = useState({})

  useEffect(() => {
    props.product ? setProduct(props.product) : setProduct({})
  }, [props.product])

  console.log(props.currentStyle)
  return(
    <div className="ProductInfo">
      <div>Star Ratings *****</div>
      {/*<StarRatings />*/}
      <SocialMedia />
      <div className="Details">
        <div className="productCategory">{product.category?.toUpperCase()}</div>
        <div className="productName">{product.name}</div>
        <div className="productPrice">${product.default_price}</div>
        <div>Style > {props.currentStyle?.name}</div>
      </div>
    </div>
  )
}
export default ProductInfo;



