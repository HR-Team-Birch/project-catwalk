import React, { useState, useEffect } from 'react';
import StarRatings from '../../Shared components/starRatings.jsx';

const ReviewMeta = ({reviewMeta, reviews}) => {
  //TODO
  //create onclick event for review numbers to filter and rerender review list

  const [percentRecommend, setPercentRecommend] = useState(0);
  const [fiveStarCount, setFiveStarCount] = useState(0);
  const [fourStarCount, setFourStarCount] = useState(0);
  const [threeStarCount, setThreeStarCount] = useState(0);
  const [twoStarCount, setTwoStarCount] = useState(0);
  const [oneStarCount, setOneStarCount] = useState(0);
  const [starFilter, setStarFilter] = useState(false);


  const getPercentRecommend = () => {
    let counter = 0;
    reviews.forEach((review) => {
      if (review.recommend === true) {
        counter++;
      }
    })
    let percent = Math.round((counter / reviews.length) * 100);
    setPercentRecommend(percent)
  }

  const countReviews = () => {
    let five = 0;
    let four = 0;
    let three = 0;
    let two = 0;
    let one = 0;
    reviews.forEach((review) => {
      if (review.rating === 5 ) {
        five++;
      }
      if (review.rating === 4 ) {
        four++;
      }
      if (review.rating === 3 ) {
        three++;
      }
      if (review.rating === 2 ) {
        two++;
      }
      if (review.rating === 1 ) {
        one++;
      }
    })
    setFiveStarCount(five)
    setFourStarCount(four)
    setThreeStarCount(three)
    setTwoStarCount(two)
    setOneStarCount(one)
  };

  const starFilterClicked = () => {

  }

  // console.log('reviews in meta', reviews)

  useEffect(() => {
    getPercentRecommend();
    countReviews()
  }, [])

  return (
    <div className="reviewsmeta">
      <p style={{ fontWeight: "400"}}>RATINGS & REVIEWS</p>
      <div style={{marginLeft: "15px"}}>
        <StarRatings  meta={reviewMeta.ratings}/>
      </div>
      <br></br>
      <div style={{fontSize: "12px", textAlign: "center"}}>{percentRecommend}% of reviews recommend this product</div>

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
            <u style={{fontSize: "14px"}} onClick={ () => setStarFilter(true) } >{fiveStarCount}</u>
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
            <u style={{fontSize: "14px"}} onClick={ () => setStarFilter(true) }>{fourStarCount}</u>
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
            <u style={{fontSize: "14px"}} onClick={ () => setStarFilter(true) }>{threeStarCount}</u>
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
            <u style={{fontSize: "14px"}} onClick={ () => setStarFilter(true) }>{twoStarCount}</u>
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
            <u style={{fontSize: "14px"}} onClick={ () => setStarFilter(true) }>{oneStarCount}</u>
          </div>
        </div>
      </div>
      <br></br>
      {starFilter ? <div style={{fontSize: "12px", textAlign: "center"}}>__star filter applied <u onClick={ () => setStarFilter(false) }>Remove all filters</u></div>
      : null
      }


      <div>Characteristics bars</div>
    </div>
  )

};

export default ReviewMeta;