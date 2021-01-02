import React from 'react';

import Header from '../components/UI/Header';
import SubHeader from '../components/UI/SubHeader';

import Footer from '../containers/Footer';

import '../styles/containers/profileCard.scss';

import backHeader from '../images/bg-pattern-card.svg';


function ProfileCard()
{
  return (
    <div className="ProfileCard">
      <div className="Header-Background" style={headerStyles.bannerBackground}></div>
      <div className="ProfileCard-Inner">
        <Header profileName="Victor Crest" age="26" />
        <SubHeader location="London" />
      </div>
      <Footer footerItems={[
        {id: 100, number: '80K', numberLabel: 'Followers'},
        {id: 101, number: '803K', numberLabel: 'Likes'},
        {id: 102, number: '1.4K', numberLabel: 'Photos'}
      ]} />
    </div>
  )
}

const headerStyles = {
  bannerBackground: {
    background: `url(${backHeader})`,
    backgroundSize: 'cover'
  }
}

export default ProfileCard;
