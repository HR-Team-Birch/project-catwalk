import React from 'react'
//import MainCarouselItem from './MainCarouselItem'

const MainCarousel = ({mainImg, setMainImg, allPics}) => {
  return(
    <img className="mainimg main-carousel-item" src={mainImg} alt="some pic idk"/>
    )
  
}

export default MainCarousel



//const MainCarousel = ({mainImg}) => {
//  return(
    
//    <img className="mainimg" src={mainImg} alt="some pic idk"/>
//  )
  
////}
//    <div className="mains">
//    {allPics && 
//    allPics.map((pic, index) => (
      
//        <MainCarouselItem pic={pic} key={index} mainImg={mainImg} setMainImg={setMainImg} /> 
//    ))
//    }
//  </div> 