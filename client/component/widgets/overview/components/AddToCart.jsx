import React, {useEffect, useState} from 'react'
import axios from 'axios'

const AddToCart = ({currentStyle}) => {

  const [size, setSize] = useState('unselected')
  const [quantity, setQuantity] = useState('unselectedQ')
  const [quantityArray, setQuantityArray] = useState([])
  const [skus, setSkus] = useState([])
  const [selectedSku, setSelectedSku] = useState(null)

  // console.log(selectedSku, quantity)

  const addToCart = (ID) => {
    axios.post(`/cart`, {sku_id: ID,
    count: quantity})
    .then((response) => {
      console.log('Added to Cart Correctly')
    })
    .catch((error) => {
        console.error('ERROR IN CLIENT GET', error)
      })
  }


  const handleSizeSelect = (event) => {
    setSelectedSku(event.target.value)
    setSize(currentStyle.skus[event.target.value])
    populateQuantityList(currentStyle.skus[event.target.value].quantity)
    setQuantity(1)
  }

  const handleQuantitySelect = (event) => {
    setQuantity(event.target.value)
  }

  const handleFormSubmit = () => {
    if (selectedSku && quantity) {
      addToCart(selectedSku, quantity)
    } else {
      console.log('didnt work')
    }
  }

  const populateQuantityList = (quantity) => {
    let numbies = []
    for (let i = 1; i <= quantity; i++) {
      if (i===16) {
        break;
      }
      numbies.push(i)
    }
    setQuantityArray(numbies)
  }

  useEffect(() => {
    let arr = []
    for (let option in currentStyle?.skus) {
      arr.push([option, currentStyle.skus[option]])
    }
    setSkus(arr)
  }, [currentStyle])

  return (
    <div className="AddToCart">
      {/*<form onSubmit={handleFormSubmit}>*/}
        <select onChange={handleSizeSelect} className="size" name={size}>
          <option value={size}>SELECT SIZE</option>
          {skus?.map((element, index) => (
            <option key={index} value={element[0]}>{element[1].size}</option>))
          }
        </select>
        <select onChange={handleQuantitySelect} value={quantity} className="quantity">
          {quantityArray.length > 0
          ? quantityArray.map((element, index) => (
            <option key={index} value={element}>{element}</option>
            ))
          : (<option value={quantity}>-</option>)
          }
        </select>
        <button onClick={handleFormSubmit}>ADD TO CART</button>
      {/*</form>*/}
    </div>
  )
}

export default AddToCart