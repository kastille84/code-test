import React from 'react';

import './Footer.style.css';
import food from '../../images/tab_lunch@2x.png';
import internets from '../../images/tab_internets@2x.png';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <div className="app-footer">
      <div className="app-footer__item">
        <figure>
          <img src={food} />
        </figure>
        <p>lunch</p>
      </div>
      <div className="app-footer__item">
        <figure>
          <img src={internets} />
        </figure>
        <p>internets</p>
      </div>
    </div>
  );
};

export default Footer;