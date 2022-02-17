import React, {useEffect, useState} from 'react'

const Description = (props) => {
  
  const [description, setDesc] = useState("")
  useEffect(() => {
    props.product ? setDesc(props.product.description) : setDesc("")
  })
  return(
    <div className="Description">{description}</div>
  )
}

export default Description;