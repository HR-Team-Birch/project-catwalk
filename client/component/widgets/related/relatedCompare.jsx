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
      <div id="relatedparent">
        <div id="allRelatedItems">
          <div id="relatedTitle">RELATED PRODUCTS</div>
          <Related/>
          {/* <h4>Match/Compare</h4> */}
        </div>
      </div>
    )
  }
}

export default RelatedComparison