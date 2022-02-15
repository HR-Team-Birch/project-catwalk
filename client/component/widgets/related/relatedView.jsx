import React from 'react';

const RelatedView = (props) => {

//console.log(props);
let image = props.item.image;

  return (
    <div id="relatedItem">
      <img src={image} id="relatedPhoto"></img>
      <div>{props.item.category}</div>
      <div>{props.item.name}</div>
      <div>{props.item.expanded}</div>
      <div>{'$' + props.item.default_price}</div>
      <div>*****</div>
    </div>
  )
}

export default RelatedView;