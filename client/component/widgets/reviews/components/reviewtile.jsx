import React from 'react';
import ViewImageModal from './viewimagemodal.jsx';

const ReviewTile = (props) => {

  // componentDidMount() {
  //   this.setState({
  //     reviews: this.props.reviewlist
  //   })
  // }

    console.log('this.props inside reviewtile', props)
    return (

      <div className="reviewtileparent">
        <div className="reviewtile">
          <div>stars here *****</div>
          <div></div>
          {/* <ViewImageModal /> */}
        </div>
        <div className="reviewtile">
          <div>stars here *****</div>
          {/* <ViewImageModal /> */}
        </div>
      </div>

    )

}

export default ReviewTile;