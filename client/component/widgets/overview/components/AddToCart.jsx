import React, {useEffect, useState} from 'react'

const AddToCart = ({currentStyle}) => {
  
  const [size, setSize] = useState("unselected")
  const [quantity, setQuantity] = useState("unselectedQ")
  const [quantityChoice, setQuantityChoice] = useState(0)
  const [styleOptions, setStyleOptions] = useState([])
  const [quantityArray, setQuantityArray] = useState([])
  
  const handleSizeSelect = (event) => {
    setSize(event.target.name)
    setQuantity(event.target.value)
  }
  
  const handleQuantitySelect = (event) => {
    setQuantityChoice(event.target.value)
  }
  
  useEffect(() => {
    let arr = []
    for (let option in currentStyle?.skus) {
      arr.push(currentStyle.skus[option])
    } 
    setStyleOptions(arr)
  }, [currentStyle])
  
  useEffect(() => {
    let numbies = []
    for (let i = 1; i <= quantity; i++) {
      if (i===16) {
        break;
      }
      numbies.push(i)
    }
    setQuantityArray(numbies)
  }, [quantity])
  
  return (
    <div className="AddToCart">
      <form>
        <select onChange={handleSizeSelect} className="size" name="idk">
          <option value={size}>SELECT SIZE</option>
          {styleOptions?.map((element, index) => (
            <option key={index} value={element.quantity} name={element.size}>{element.size}</option>))
          }
        </select>
        <select onChange={handleQuantitySelect} className="quantity">
          {quantityArray.length > 0
          ? quantityArray.map((element, index) => (
            <option key={index} value={element}>{element}</option>
            ))
          : (<option value={quantity}>-</option>)
          }
        </select>
        <button>ADD TO CART</button>
      </form>
    </div>
  ) 
}

export default AddToCart