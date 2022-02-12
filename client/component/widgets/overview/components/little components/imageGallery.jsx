import React from 'react'
import extendedView from './extendedView'

class imageGallery extends React.Component {
  constructor(props) {
    super(props)
    //current photo
  }
  render() {
    return (
      <div>
        Photos
        <extendedView />
      </div>
    )
  }
}

export default imageGallery;