import React, {useEffect, useState} from 'react'

const Description = ({product, productFeatures}) => {

  if (product) {
    
    return(
      <div className="overviewDescription">
        <div id="slogan">{product.slogan}</div>
        <div id="description">{product.description}</div>
        <div id="features">
          {productFeatures?.length > 0
          ? productFeatures.map((element, index) => (
            <div key={index}>{element.feature}: {element.value}</div>
          ))
          : null
          }
        </div>
      </div>
    ) 
  } else {
    return (null)
  }
  
  
  
}

export default Description;