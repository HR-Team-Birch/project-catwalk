import React, {useEffect, useState} from 'react'

const Description = (props) => {
  return(
    <div className="Description">{props.currentProduct.description}</div>
  )
}

export default Description;