import React from 'react';

function DisplayPicture({ imageUrl, altText })
{
  return (
    <img className="img-circle" src={imageUrl} alt={altText} />
  )
}

export default DisplayPicture;
