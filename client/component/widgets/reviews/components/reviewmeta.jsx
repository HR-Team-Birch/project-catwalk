import React from 'react';

class ReviewMeta extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewMeta: []
    }
  }

  render() {
    return (
      <div className="reviewsmeta">
        <h6>Ratings  Reviews</h6>
        <div>overall rating and stars</div>
      </div>
    )
  }
}

export default ReviewMeta;