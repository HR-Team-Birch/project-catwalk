import React, {useEffect, useState} from 'react'

const AddToCart = (props) => {
  //state of size value
  const [size, setSize] = useState("Select Size")
  const [quantity, setQuantity] = useState(null)
  //state of quantity value
  return (
    <div className="AddToCart">
      {/*<form>
      <label>
      Select Size
        <select value={size}>
          <option value="S">Small</option>
          <option value="M">Medium</option>
          <option value="L">Large</option>
        </select>
      </label>
      <label>
      Select Quantity
        <select value={quantity}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </label>
      <button>Add To Cart</button>
      </form>*/}
    </div>
  ) 
}

export default AddToCart