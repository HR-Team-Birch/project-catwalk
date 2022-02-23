import React, {useEffect, useState} from 'react'

const Description = ({product}) => {

  if (product) {
    
    return(
      <div className="overviewDescription">
        <div id="slogan">{product.slogan}</div>
        <div>{product.description}</div>
      </div>
    ) 
  } else {
    return (<div>Hey</div>)
  }
  
  
  
}

export default Description;