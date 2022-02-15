import React, {useEffect, useState} from 'react'
//import ExtendedView from './ExtendedView.jsx'

  const ImageGallery = (props) => {
    
    const [mainPic, setMainPic] = useState("https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-mediumSquareAt3X-v2.jpg")
    const [allPics, setAllPics] = useState(null)
    
    useEffect(() => {
      props.currentStyle ? setAllPics(props.currentStyle.photos) : setAllPics(null)
    }, [props.currentStyle])
    
    useEffect(() => {
      allPics ? setMainPic(allPics[0]) : console.log('idk')
    }, [allPics])
    
    console.log('ALLLLLLLLLL', allPics)
    return (
      <div className="ImageGallery">
        <img className="mainimg" src={mainPic} alt="some pic idk"/>
        {/*<div className="thumbnails">
          {allPics 
            ? (allPics.map((pic, index) => (<img src={pic.url} alt="a thumbnail of the main style" key={index}/>)))
            : (
            <div>YO</div>)
          }
        </div>*/}
        {/*<ExtendedView className="ExtendedView"/>*/}
      </div>
    )
  
  }
//}

export default ImageGallery;