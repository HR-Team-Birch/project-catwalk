import React, { useState, useEffect } from 'react';
import StarRatings from '../../Shared components/starRatings.jsx';

const ReviewMeta = ({reviewMeta, reviews}) => {

  //create stars
  //create recommendation

  const [percentRecommend, setPercentRecommend] = useState(0);

  const getPercentRecommend = () => {
    //iterate through props.reviews
    //create counter to keep track of how many true
    //divide counter by props.reviews length
    let counter = 0;
    reviews.forEach((review) => {
      if (review.recommend === true) {
        counter++;
      }
    })

    let percent = (counter / reviews.length) * 100;
    setPercentRecommend(counter)
  }
  // console.log('percentRecommend', percentRecommend)

  // console.log('props in meta', props)

  // useEffect(() => {
  //   setPercentRecommend()
  // }, [])

  return (
    <div className="reviewsmeta">
      <p style={{ fontWeight: "400"}}>Ratings  Reviews</p>
      <div>
        <StarRatings  meta={reviewMeta.ratings}/>
      </div>
      <br></br>
      <div style={{fontSize: "12px"}}>____ of reviews recommend this product</div>

      <div className="starBarsContainer">

        <div className="starBars">
          <div className="starBarsLeft">
            <div style={{fontSize: "14px"}}>5 star</div>
          </div>
          <div className="starBarsMiddle">
            <div className="barcontainer">
              <div className="bar5"></div>
            </div>
          </div>
          <div className="starsBarsRight">
            <div>30</div>
          </div>
        </div>

        <div className="starBars">
          <div className="starBarsLeft">
            <div style={{fontSize: "14px"}}>4 star</div>
          </div>
          <div className="starBarsMiddle">
            <div className="barcontainer">
              <div className="bar4"></div>
            </div>
          </div>
          <div className="starsBarsRight">
            <div>#</div>
          </div>
        </div>

        <div className="starBars">
          <div className="starBarsLeft">
            <div style={{fontSize: "14px"}}>3 star</div>
          </div>
          <div className="starBarsMiddle">
            <div className="barcontainer">
              <div className="bar3"></div>
            </div>
          </div>
          <div className="starsBarsRight">
            <div>#</div>
          </div>
        </div>

        <div className="starBars">
          <div className="starBarsLeft">
            <div style={{fontSize: "14px"}}>2 star</div>
          </div>
          <div className="starBarsMiddle">
            <div className="barcontainer">
              <div className="bar2"></div>
            </div>
          </div>
          <div className="starsBarsRight">
            <div >#</div>
          </div>
        </div>

        <div className="starBars">
          <div className="starBarsLeft">
            <div style={{fontSize: "14px"}}>1 star</div>
          </div>
          <div className="starBarsMiddle">
            <div className="barcontainer">
              <div className="bar1"></div>
            </div>
          </div>
          <div className="starsBarsRight">
            <div>#</div>
          </div>
        </div>

      </div>

      <div>type of filter applied</div>

      <div>Characteristics bars</div>
    </div>
  )

};

export default ReviewMeta;