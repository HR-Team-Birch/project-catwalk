import React, {useEffect, useState} from 'react'

const AddToCart = (props) => {
  //state of size value
  
  const [size, setSize] = useState("Select Size")
  const [quantity, setQuantity] = useState(null)
  const thisFunc = () => {
    console.log('k')
  }
  //state of quantity value
  return (
    <div className="AddToCart">
      <form>
        <select onChange={thisFunc} className="size" value={'size'}>
          <option value="S">Small</option>
          <option value="M">Medium</option>
          <option value="L">Large</option>
        </select>
        <select onChange={thisFunc} className="quantity" value={'quantity'}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      <button>ADD TO CART</button>
      </form>
    </div>
  ) 
}

export default AddToCart