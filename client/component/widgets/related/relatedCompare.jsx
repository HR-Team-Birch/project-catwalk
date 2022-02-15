import React from 'react';

import Related from './related.jsx'
//import Comparison from './compare.jsx'

class RelatedComparison extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      relatedProduct: [],
      comparisonProducts: []
    }
  }

  render() {
    return (
      <div id="allRelatedItems">
        <h4>Related Product</h4>
        <Related/>
        <h4>Match/Compare</h4>
      </div>
    )
  }
}

export default RelatedComparison