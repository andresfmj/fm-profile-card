import React from 'react';

import FooterItem from '../components/UI/FooterItem';

import '../styles/containers/footer.scss';


function Footer({ footerItems })
{
  return (
    <div className="Footer">
      {footerItems && footerItems.map(i => (
        <FooterItem key={i.id} number={i.number} numberLabel={i.numberLabel} />
      ))}
    </div>
  )
}

export default Footer;
