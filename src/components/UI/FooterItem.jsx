import React from 'react';

import '../../styles/components/footerItems.scss';


function FooterItem({ number, numberLabel }) {
  return (
    <div className="FooterItem">
      <h3>{number}</h3>
      <p>{numberLabel}</p>
    </div>
  )
}

export default FooterItem;
