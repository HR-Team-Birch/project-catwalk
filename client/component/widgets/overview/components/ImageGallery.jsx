import React, {useEffect, useState} from 'react'
import Carousel from './little components/Carousel.jsx'
//import ExtendedView from './ExtendedView.jsx'

  const ImageGallery = (props) => {
    
    //const [mainPic, setMainPic] = useState("https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-mediumSquareAt3X-v2.jpg")
    
    //const [allPics, setAllPics] = useState(null)
    
    //useEffect(() => {
    //  props.currentStyle ? setAllPics(props.currentStyle.photos) : setAllPics(null)
    //}, [props.currentStyle])
    
    //useEffect(() => {
    //  allPics ? setMainPic(allPics[0]) : console.log('idk')
    //}, [allPics])
    const allPics = props.currentStyle?.photos
    
    return (
      <div className="ImageGallery">
        {allPics && <img className="mainimg" src={allPics[0].url} alt="some pic idk"/>}
        <Carousel allPics={allPics}/>
        {/*<ExtendedView className="ExtendedView"/>*/}
      </div>
    )
  
  }
//}

export default ImageGallery;