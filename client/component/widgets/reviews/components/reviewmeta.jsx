import React, { useState, useEffect } from 'react';
import StarRatings from '../../Shared components/starRatings.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const ReviewMeta = ({reviewMeta, reviews}) => {
  //TODO
  //create onclick event for review numbers to filter and rerender review list
  const triangle = <FontAwesomeIcon icon={faCaretDown} />;

  const [percentRecommend, setPercentRecommend] = useState(0);
  const [fiveStarCount, setFiveStarCount] = useState(0);
  const [fourStarCount, setFourStarCount] = useState(0);
  const [threeStarCount, setThreeStarCount] = useState(0);
  const [twoStarCount, setTwoStarCount] = useState(0);
  const [oneStarCount, setOneStarCount] = useState(0);
  const [starFilter, setStarFilter] = useState(false);

  const [starFilterClicked, setStarFilterClicked] = useState(false);

  const [fiveStarPercentage, setFiveStarPercentage] = useState(0);
  const [fourStarPercentage, setFourStarPercentage] = useState(0);
  const [threeStarPercentage, setThreeStarPercentage] = useState(0);
  const [twoStarPercentage, setTwoStarPercentage] = useState(0);
  const [oneStarPercentage, setOneStarPercentage] = useState(0);

  const starBarsPercentage = () => {
    let totalReviews = reviews.length;
    setFiveStarPercentage(Math.round((fiveStarCount/totalReviews) * 100));
    setFourStarPercentage(Math.round((fourStarCount/totalReviews) * 100));
    setThreeStarPercentage(Math.round((threeStarCount/totalReviews) * 100));
    setTwoStarPercentage(Math.round((twoStarCount/totalReviews) * 100));
    setOneStarPercentage(Math.round((oneStarCount/totalReviews) * 100));
  }


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

  // const starFilterClicked = () => {

  // }

  // console.log('reviews in meta', reviews)

  useEffect(() => {
    getPercentRecommend();
    countReviews()
    starBarsPercentage()
  }, [])

  useEffect(() => {
    starBarsPercentage()
  }, [oneStarCount])

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
              <div className="bar5" style={{width: `${fiveStarPercentage}%`}}></div>
            </div>
          </div>
          <div className="starsBarsRight">
            <u style={{fontSize: "14px"}} onClick={ () => { setStarFilter(true); setStarFilterClicked('5'); } } >{fiveStarCount}</u>
          </div>
        </div>

        <div className="starBars">
          <div className="starBarsLeft">
            <div style={{fontSize: "14px"}}>4 star</div>
          </div>
          <div className="starBarsMiddle">
            <div className="barcontainer">
              <div className="bar4" style={{width: `${fourStarPercentage}%`}}></div>
            </div>
          </div>
          <div className="starsBarsRight">
            <u style={{fontSize: "14px"}} onClick={ () => { setStarFilter(true); setStarFilterClicked('4'); }}>{fourStarCount}</u>
          </div>
        </div>

        <div className="starBars">
          <div className="starBarsLeft">
            <div style={{fontSize: "14px"}}>3 star</div>
          </div>
          <div className="starBarsMiddle">
            <div className="barcontainer">
              <div className="bar3" style={{width: `${threeStarPercentage}%`}}></div>
            </div>
          </div>
          <div className="starsBarsRight">
            <u style={{fontSize: "14px"}} onClick={ () => { setStarFilter(true); setStarFilterClicked('3'); }}>{threeStarCount}</u>
          </div>
        </div>

        <div className="starBars">
          <div className="starBarsLeft">
            <div style={{fontSize: "14px"}}>2 star</div>
          </div>
          <div className="starBarsMiddle">
            <div className="barcontainer">
              <div className="bar2" style={{width: `${twoStarPercentage}%`}}></div>
            </div>
          </div>
          <div className="starsBarsRight">
            <u style={{fontSize: "14px"}} onClick={ () => { setStarFilter(true); setStarFilterClicked('2'); } }>{twoStarCount}</u>
          </div>
        </div>

        <div className="starBars">
          <div className="starBarsLeft">
            <div style={{fontSize: "14px"}}>1 star</div>
          </div>
          <div className="starBarsMiddle">
            <div className="barcontainer">
              <div className="bar1" style={{width: `${oneStarPercentage}%`}}></div>
            </div>
          </div>
          <div className="starsBarsRight">
            <u style={{fontSize: "14px"}} onClick={ () => { setStarFilter(true); setStarFilterClicked('1'); } }>{oneStarCount}</u>
          </div>
        </div>
      </div>
      <br></br>
      {starFilter ? <div style={{fontSize: "12px", textAlign: "center"}} >{starFilterClicked} star filter applied <u onClick={ () => setStarFilter(false) }>Remove all filters</u></div>
      : null
      }


      <div id="characteristicscontainer">

        <div className="characteristics">
          <div id="fit" style={{fontSize: "14px"}}>Fit</div>
          <div className="charparent">
            <div className="charcontainer">
              <div className="fit" style={{width: `${fiveStarPercentage}%`}}>{triangle}</div>
            </div>
          </div>
          <div className="starsBarsRight">
            <u style={{fontSize: "14px"}}  >{fiveStarCount}</u>
          </div>
          {/* {TODO make the triangle to show the percentage} */}
        </div>

        <div className="characteristics">
          <div id="fit" style={{fontSize: "14px"}}>Size</div>
          <div className="charparent">
            <div className="charcontainer">
              <div className="sizechar" style={{width: `${fiveStarPercentage}%`}}></div>
            </div>
          </div>
          <div className="starsBarsRight">
            <u style={{fontSize: "14px"}}  >{fiveStarCount}</u>
          </div>
          {/* {TODO make the triangle to show the percentage} */}
        </div>

        <div className="characteristics">
          <div id="fit" style={{fontSize: "14px"}}>Comfort</div>
          <div className="charparent">
            <div className="charcontainer">
              <div className="comfort" style={{width: `${fiveStarPercentage}%`}}></div>
            </div>
          </div>
          <div className="starsBarsRight">
            <u style={{fontSize: "14px"}}  >{fiveStarCount}</u>
          </div>
          {/* {TODO make the triangle to show the percentage} */}
        </div>

        <div className="characteristics">
          <div id="fit" style={{fontSize: "14px"}}>Quality</div>
          <div className="charparent">
            <div className="charcontainer">
              <div className="quality" style={{width: `${fiveStarPercentage}%`}}></div>
            </div>
          </div>
          <div className="starsBarsRight">
            <u style={{fontSize: "14px"}} >{fiveStarCount}</u>
          </div>
          {/* {TODO make the triangle to show the percentage} */}
        </div>

        <div className="characteristics">
          <div id="fit" style={{fontSize: "14px"}}>Width</div>
          <div className="charparent">
            <div className="charcontainer">
              <div className="width" style={{width: `${fiveStarPercentage}%`}}></div>
            </div>
          </div>
          <div className="starsBarsRight">
            <u style={{fontSize: "14px"}} >{fiveStarCount}</u>
          </div>
          {/* {TODO make the triangle to show the percentage} */}
        </div>

        <div className="characteristics">
          <div id="fit" style={{fontSize: "14px"}}>Length</div>
          <div className="charparent">
            <div className="charcontainer">
              <div className="length" style={{width: `${fiveStarPercentage}%`}}></div>
            </div>
          </div>
          <div className="starsBarsRight">
            <u style={{fontSize: "14px"}} >{fiveStarCount}</u>
          </div>
          {/* {TODO make the triangle to show the percentage} */}
        </div>



      </div>


    </div>
  )

};

export default ReviewMeta;