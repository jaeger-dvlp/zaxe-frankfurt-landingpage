import React, { useContext } from 'react';

import Contexts from '../ContextApi';

export default function ImageViewer() {
  const { selectedImage, imageViewerStatus, setImageStatus } =
    useContext(Contexts);

  const closeImg = () => {
    setImageStatus('');
  };

  return (
    <div className={`imageViewer ${imageViewerStatus}`}>
      <div onClick={closeImg} className="closeBtn">
        &#10005;
      </div>
      <img src={selectedImage} />
    </div>
  );
}
