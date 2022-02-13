import React from 'react'
//import ExtendedView from './ExtendedView.jsx'

class ImageGallery extends React.Component {
  constructor(props) {
    super(props)
    //current photo
  }
  render() {
    return (
      <div className="ImageGallery">
        Photos
        {/*<ExtendedView className="ExtendedView"/>*/}
      </div>
    )
  }
}

export default ImageGallery;