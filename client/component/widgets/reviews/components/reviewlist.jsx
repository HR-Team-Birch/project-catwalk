import React from 'react';
import ReviewMeta from './reviewmeta.jsx';
import ReviewTile from './reviewtile.jsx';
import AddReview from './addreview.jsx';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewlist: []
    }
  }

  render() {
    return (
      <>
        <ReviewMeta reviewmeta={this.props.reviewMeta} />
        <div className="reviewlistparent">
          <div className="sortandsearchparent">
            <div className="sort">sort dropdown </div>
            <div className="reviewsearch">review search box</div>
          </div>
          <div className="reviewtileparent">
            <div className="reviewtile">review tile</div>
            <div className="reviewtile">review tile</div>
          </div>
          <div className="buttons">
            <button>More Reviews</button>
            <button >Add Review</button>
          </div>
        </div>
      </>
    )
  }
}

export default ReviewList;