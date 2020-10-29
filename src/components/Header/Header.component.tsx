import React from 'react';

import './Header.style.css';
import map from '../../images/icon_map@2x.png';

interface HeaderProps {
  
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className="app-header">
        <div>
        <figure>
          </figure>
        </div>
        <h2 className="header-title">Lunch Tyme</h2>
        <div>
          <figure>
            <img src={map} alt='header map logo'/>
          </figure>
        </div>
    </div>
  );
};

export default Header;