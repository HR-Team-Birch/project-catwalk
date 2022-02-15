import React from 'react'

import RelatedView from './relatedView.jsx';
const {relatedArray} = require('./fakedata.js');

const Related = () => {
  return (
    <div id="relatedProducts">
      {relatedArray.map((item, i) => (
        <RelatedView item={item} key={i}/>
      ))}
    </div>
  )
}

export default Related