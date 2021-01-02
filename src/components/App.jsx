import React, { Fragment } from 'react';

import ProfileCard from '../containers/ProfileCard';

import '../styles/containers/app.scss';

import bgTop from '../images/bg-pattern-top.svg';
import bgBottom from '../images/bg-pattern-bottom.svg';


function App() 
{
  return (
    <Fragment>
      <div className="bgTop" style={styles.backgroundTopStyle}></div>
      <div className="bgBottom" style={styles.backgroundBottomStyle}></div>
      <div className="App">
        <ProfileCard />
      </div>
    </Fragment>
  )
}

const styles = {
  backgroundTopStyle: {
    position: 'absolute',
    top: '0',
    left: '0',
    backgroundImage: `url(${bgTop})`
  },
  backgroundBottomStyle: {
    position: 'absolute',
    bottom: '0',
    right: '0',
    backgroundImage: `url(${bgBottom})`
  }
}

export default App;
