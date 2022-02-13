import React from 'react'
import imageGallery from './little components/imageGallery.jsx'
import addToCart from './little components/imageGallery.jsx'

class styleSelector extends React.Component {
  constructor(props) {
    super(props)
    //current style
  }
  
  render() {
    return (
      
    <div>
      <imageGallery />
      <addToCart />
    </div>
    )
  }
}

export default styleSelector