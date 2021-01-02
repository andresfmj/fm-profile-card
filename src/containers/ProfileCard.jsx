import React from 'react';

import ProfilePicture from '../components/UI/ProfilePicture';
import Header from '../components/UI/Header';
import SubHeader from '../components/UI/SubHeader';

import Footer from '../containers/Footer';

import '../styles/containers/profileCard.scss';

import backHeader from '../images/bg-pattern-card.svg';
import displayImage from '../images/image-victor.jpg';


function ProfileCard()
{
  return (
    <div className="ProfileCard">
      <div className="Header-Background" style={headerStyles.bannerBackground}></div>
      <div className="ProfileCard-Inner">
        <div className="ProfileImage-Container">
          <ProfilePicture imageUrl={displayImage} altText="Victor Crest" />
        </div>
        <div className="Header-Container">
          <Header profileName="Victor Crest" age="26" />
          <SubHeader location="London" />
        </div>
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
