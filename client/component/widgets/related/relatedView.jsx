import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';

const RelatedView = (props) => {

  const solidStar = <FontAwesomeIcon icon={faStar} />;
  const emptyStar = <FontAwesomeIcon icon={faStarRegular} />;
  let image = props.item.image;

  return (
    <div id="relatedItemParent">
      <div id="relatedcontainer"></div>
      <img src={image} id="relatedPhoto" alt="related product photo"></img>
      <div>{props.item.category}</div>
      <div>{props.item.name}</div>
      <div>{props.item.expanded}</div>
      <div>{'$' + props.item.default_price}</div>
      <div className="star">{solidStar}{solidStar}{solidStar}{solidStar}{emptyStar}</div>
    </div>
  )
}

export default RelatedView;