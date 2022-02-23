import React, {useEffect, useState} from 'react'
import ImageGalleryRegular from './ImageGalleryRegular.jsx'
//import ImageGalleryExpanded from './ImageGalleryExpanded.jsx'
import ProductInfo from './ProductInfo.jsx'
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';



const ExtendedView = ({currentStyle, allStyles, product, reviewMeta, setCurrentStyle}) => {
  //if view extention is clicked:
  
  const [expandStatus, setExpandStatus] = useState(false)
  
  return(
    <div className="ExtendedViewParent">
        <ImageGalleryRegular currentStyle={currentStyle} allStyles={allStyles} expandStatus={expandStatus} setExpandStatus={setExpandStatus}/>
        { !expandStatus && (
          <div className="allProductStuff">          
            <ProductInfo product={product} currentStyle={currentStyle} reviewMeta={reviewMeta}/>
            <StyleSelector allStyles={allStyles} currentStyle={currentStyle} setCurrentStyle={setCurrentStyle}/>
            <AddToCart currentStyle={currentStyle}/>
          </div>
          )}

      </div>
    )
  //} else {
  //  return (<ImageGalleryExpanded currentStyle={currentStyle} allStyles={allStyles} expandStatus={expandStatus} setExpandStatus={setExpandStatus}/>)
  //}
}

export default ExtendedView;