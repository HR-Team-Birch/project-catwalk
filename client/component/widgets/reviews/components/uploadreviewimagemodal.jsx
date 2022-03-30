import React, { useState } from 'react';

const UploadReviewImageModal = ({ photo }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleShowDialog = () => {
    setIsOpen(true);
  }

  const handleCloseDialog = () => {
    setIsOpen(false);
  }

  return (
    <div id="addreviewimagesection">
      <img className="newreviewimage" src={photo} onClick={handleShowDialog} alt="no image"></img>

      {isOpen && (
        <dialog className="newreviewimagemodal" style={{ position: "fixed" }} open onClick={handleCloseDialog}>
          <img className="newimg" src={photo} onClick={handleCloseDialog} alt="no image"></img>
        </dialog>
      )}

    </div>
  )
};

export default UploadReviewImageModal;