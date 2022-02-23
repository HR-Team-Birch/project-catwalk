import React, { useState, useEffect } from 'react';
import StarRatings from '../../Shared components/starRatings.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const ReviewMeta = ({reviewMeta, reviews, setBarFilter, setReviewsToRender}) => {
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

  const [fitBar, setFitBar] = useState(0);
  const [sizeBar, setSizeBar] = useState(0);
  const [comfortBar, setComfortBar] = useState(0);
  const [qualityBar, setQualityBar] = useState(0);
  const [widthBar, setWidthBar] = useState(0);
  const [lengthBar, setLengthBar] = useState(0);

  const [showFitBar, setShowFitBar] = useState(false);
  const [showSizeBar, setShowSizeBar] = useState(false);
  const [showComfortBar, setShowComfortBar] = useState(false);
  const [showQualityBar, setShowQualityBar] = useState(false);
  const [showWidthBar, setShowWidthBar] = useState(false);
  const [showLengthBar, setShowLengthBar] = useState(false);

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

  const characteristicsTriangle = () => {

    if (reviewMeta.characteristics.Fit) {
      setShowFitBar(true);
      setFitBar(Math.round((reviewMeta.characteristics.Fit.value / 5) * 100))
    }
    if (reviewMeta.characteristics.Size) {
      setShowSizeBar(true);
      setSizeBar(Math.round((reviewMeta.characteristics.Size.value / 5) * 100))
    }
    if (reviewMeta.characteristics.Comfort) {
      setShowComfortBar(true);
      setComfortBar(Math.round((reviewMeta.characteristics.Comfort.value / 5) * 100))
    }
    if (reviewMeta.characteristics.Quality) {
      setShowQualityBar(true);
      setQualityBar(Math.round((reviewMeta.characteristics.Quality.value / 5) * 100))
    }
    if (reviewMeta.characteristics.Width) {
      setShowWidthBar(true);
      setWidthBar(Math.round((reviewMeta.characteristics.Width.value / 5) * 100))
    }
    if (reviewMeta.characteristics.Length) {
      setShowLengthBar(true);
      setLengthBar(Math.round((reviewMeta.characteristics.Length.value / 5) * 100))
    }
  }



  // console.log('reviews in meta', reviews)

  useEffect(() => {
    getPercentRecommend();
    countReviews()
    starBarsPercentage()
    characteristicsTriangle()
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
            <u style={{fontSize: "14px"}} onClick={ () => { setStarFilter(true); setStarFilterClicked('5'); setBarFilter(5); } } >{fiveStarCount}</u>
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
            <u style={{fontSize: "14px"}} onClick={ () => { setStarFilter(true); setStarFilterClicked('4'); setBarFilter(4); }}>{fourStarCount}</u>
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
            <u style={{fontSize: "14px"}} onClick={ () => { setStarFilter(true); setStarFilterClicked('3'); setBarFilter(3); }}>{threeStarCount}</u>
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
            <u style={{fontSize: "14px"}} onClick={ () => { setStarFilter(true); setStarFilterClicked('2'); setBarFilter(2); } }>{twoStarCount}</u>
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
            <u style={{fontSize: "14px"}} onClick={ () => { setStarFilter(true); setStarFilterClicked('1'); setBarFilter(1); } }>{oneStarCount}</u>
          </div>
        </div>
      </div>
      <br></br>
      {starFilter ? <div style={{fontSize: "12px", textAlign: "center"}} >{starFilterClicked} star filter applied <u onClick={ () => { setStarFilter(false); setReviewsToRender(reviews); }}>Remove all filters</u></div>
      : null
      }


      <div id="characteristicscontainer">

        {showFitBar ?
        <div className="characteristics">
          <div id="charname" style={{fontSize: "14px"}}>Fit</div>
          <div className="charparent">
            <div className="charcontainer">
              <div className="fit" style={{width: `${fitBar}`}}>{triangle}</div>
            </div>
          </div>
        </div>
        : null
        }

        {showSizeBar ?
        <div className="characteristics">
          <div id="charname" style={{fontSize: "14px"}}>Size</div>
          <div className="charparent">
            <div className="charcontainer">
              <div className="sizechar" style={{width: `${sizeBar}%`}}>{triangle}</div>
            </div>
          </div>
        </div>
        : null
        }

        {showComfortBar ?
        <div className="characteristics">
          <div id="charname" style={{fontSize: "14px"}}>Comfort</div>
          <div className="charparent">
            <div className="charcontainer">
              <div className="comfort" style={{width: `${comfortBar}%`}}>{triangle}</div>
            </div>
          </div>
        </div>
        : null
        }

        {showQualityBar ?
        <div className="characteristics">
          <div id="charname" style={{fontSize: "14px"}}>Quality</div>
          <div className="charparent">
            <div className="charcontainer">
              <div className="quality" style={{width: `${qualityBar}%`}}>{triangle}</div>
            </div>
          </div>
        </div>
        : null
        }

        {showWidthBar ?
        <div className="characteristics">
          <div id="charname" style={{fontSize: "14px"}}>Width</div>
          <div className="charparent">
            <div className="charcontainer">
              <div className="width" style={{width: `${widthBar}%`}}>{triangle}</div>
            </div>
          </div>
        </div>
        : null
        }

        {showLengthBar ?
        <div className="characteristics">
          <div id="charname" style={{fontSize: "14px"}}>Length</div>
          <div className="charparent">
            <div className="charcontainer">
              <div className="length" style={{width: `${lengthBar}%`}}>{triangle}</div>
            </div>
          </div>
        </div>
        : null
        }



      </div>


    </div>
  )

};

export default ReviewMeta;