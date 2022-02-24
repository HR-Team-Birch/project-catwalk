import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Description from './components/Description.jsx';
import ExtendedView from './components/ExtendedView.jsx';


const Overview = ({reviewMeta, selectedProduct, currentStyle, setCurrentStyle, allStyles, setAllStyles, productFeatures}) => (
  <div className="Overview">
    <ExtendedView currentStyle={currentStyle} allStyles={allStyles} product={selectedProduct} currentStyle={currentStyle} reviewMeta={reviewMeta} setCurrentStyle={setCurrentStyle}/>
    <Description product={selectedProduct} productFeatures={productFeatures}/>

  </div>
)


//getItemsInCart() {
  //  axios.get('/cart')
  //  .then((response) => {
    //    // console.log(response)
    //    //do some other stuff with it
    //  })
    //  .catch((error) => {
      //    console.error('ERROR IN CLIENT GET', error)
      //  })
      //}



export default Overview;