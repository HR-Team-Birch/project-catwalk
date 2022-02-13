import React from 'react'

class AddToCart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: "Select Size"
    }
  }
  render() {
    return (
      <div className="AddToCart">
        <form>
        <label>
        Select Size
          <select value={this.state.value}>
            <option value="S">Small</option>
            <option value="M">Medium</option>
            <option value="L">Large</option>
          </select>
        </label>
        <label>
        Select Quantity
          <select value={this.state.value}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </label>
        <button>Add To Cart</button>
        </form>
      </div>
    )
  }
}

export default AddToCart