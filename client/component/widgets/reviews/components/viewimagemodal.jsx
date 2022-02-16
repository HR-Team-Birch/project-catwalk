import React, { useState } from 'react';


const ViewImageModal = (props) => {
  console.log('props in viewimagemodal', props)

  const [isOpen, setIsOpen] = useState(false);

  const handleShowDialog = () => {
    setIsOpen(true);
    console.log('clicked');
  }

  const handleCloseDialog = () => {
    setIsOpen(false);
    console.log('closed')
  }
  return (
    <div >
      <img className="reviewimage" src={props.url} onClick={ handleShowDialog} alt="no image"></img>
      {isOpen && (
        <dialog className="reviewimagemodal" style={{ position: "fixed"}} open onClick={handleCloseDialog}>
          <img className="image" src={props.url} onClick={handleCloseDialog} alt="no image"></img>
        </dialog>
      )}

    </div>
  )
};

export default ViewImageModal;