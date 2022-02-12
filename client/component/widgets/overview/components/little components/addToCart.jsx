import React from 'react'
import cartForm from './cartForm.jsx'

class addToCart extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <button>Add To Cart</button>
        <cartForm />
      </div>
    )
  }
}

export default addToCart