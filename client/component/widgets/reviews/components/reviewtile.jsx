import React from 'react';
import ViewImageModal from './viewimagemodal.jsx';

class ReviewTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewtile: []
    }
  }

  render() {
    return (
      <>
        <ViewImageModal />

      </>

    )
  }
}

export default ReviewTile;