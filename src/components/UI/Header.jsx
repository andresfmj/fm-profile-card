import React from 'react';

import ProfilePicture from './ProfilePicture';

import '../../styles/components/header.scss';

import displayImage from '../../images/image-victor.jpg';


function Header({ profileName, age }) 
{
  return (
    <div className="Header">
      <ProfilePicture imageUrl={displayImage} altText={profileName} />
      <h2>
        { profileName }
        <span>{ age }</span>
      </h2>
    </div>
  )
}

export default Header;
