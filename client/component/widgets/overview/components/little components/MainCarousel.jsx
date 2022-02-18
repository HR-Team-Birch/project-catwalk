import React from 'react'
import MainCarouselItem from './MainCarouselItem'

const MainCarousel = ({mainImg, setMainImg, allPics}) => {
  return(
    <div className="mains">
    {allPics && 
    allPics.map((pic, index) => (
      
        <MainCarouselItem pic={pic} key={index} mainImg={mainImg} setMainImg={setMainImg} /> 
    ))
    }
  </div> 
  )
  
}

export default MainCarousel



//const MainCarousel = ({mainImg}) => {
//  return(
    
//    <img className="mainimg" src={mainImg} alt="some pic idk"/>
//  )
  
//}