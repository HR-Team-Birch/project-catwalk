import React, {useEffect, useState} from 'react'
import SocialMedia from './little components/SocialMedia.jsx'
import StarRatings from './../../Shared components/starRatings.jsx'
import axios from 'axios'

const ProductInfo = (props) => {

  const [product, setProduct] = useState({})
  //const [reviewMeta, setReviewMeta] = useState(null)

  useEffect(() => {
    props.product ? setProduct(props.product) : setProduct({})
    //getReviewMeta()
  }, [props.product])


  //const getReviewMeta = () => {
  //  axios.get(`/reviews/meta/?product_id=${props.product?.id}`)
  //    .then((meta) => {
  //      console.log(meta.data.reviews)
  //      setReviewMeta(meta.data);
  //    })
  //    .catch((err) => console.error(err));
  //}

  return(
    <div className="ProductInfo">
      {/*<div>Star Ratings *****</div>*/}
      {props.reviewMeta ?
      <StarRatings meta={props.reviewMeta.ratings}/>
      : <div>NOT WORKING</div>
      }
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



