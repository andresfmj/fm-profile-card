import React from 'react';

import '../../styles/components/header.scss';


function Header({ profileName, age }) 
{
  return (
    <div className="Header">
      <h2>
        { profileName }
        <span>{ age }</span>
      </h2>
    </div>
  )
}

export default Header;
