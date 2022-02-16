import React, {useEffect, useState} from 'react'
import Carousel from './little components/Carousel.jsx'
//import ExtendedView from './ExtendedView.jsx'

  const ImageGallery = (props) => {

    const allPics = props.currentStyle?.photos
    
    console.log('AAAAALLLLL', props.currentStyle)
    
    const [mainImg, setMainImg] = useState("")
    
    useEffect(() => {
      if (allPics?.length > 0) {
        
        setMainImg(allPics[0].url)
      }
      //ONCE ALLPICS IS RECEIVED, DEFINE WHAT MAINIMG IS
    }, [allPics])
    
    
    //return (
    //  //<div className="ImageGallery">
    //  //  {allPics && <img className="mainimg" src={allPics[0].url} alt="some pic idk"/>}
    //  //  <Carousel allPics={allPics}/>
    //  //  {/*<ExtendedView className="ExtendedView"/>*/}
    //  //</div>

    //)
    if (allPics && mainImg) {
      return (
        <div className="ImageGallery">
          <img className="mainimg" src={mainImg} alt="some pic idk"/>
        <Carousel setMainImg={setMainImg} allPics={allPics}/>
        {/*<ExtendedView className="ExtendedView"/>*/}
      </div>
      )
    } else {
      
      return (
        <div className="ImageGallery"></div>
      )
    }
  
  }
//}

export default ImageGallery;