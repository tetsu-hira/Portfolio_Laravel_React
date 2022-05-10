import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import Icon from './image/search.png';

const Header: React.FC = () => {
  const [top, setTop] = useState<boolean>(false);
  const [about, setAbout] = useState<boolean>(false);
  const [user, setUser] = useState<boolean>(false);

  const handleOnTop = () => {
    setTop(true);
    setAbout(false);
    setUser(false);
  };
  const handleOnAbout = () => {
    setTop(false);
    setAbout(true);
    setUser(false);
  };
  const handleOnUser = () => {
    setTop(false);
    setAbout(false);
    setUser(true);
  };
  const URL = window.location.pathname;

  return (
    <div className='Header'>
      <div className='HeaderContainer'>
        <div className='WebTitle'>2setMatch</div>
        <ul className='HeaderLink'>
          <Link to='/' className='HeaderLink__item' onClick={handleOnTop}>
            <li className={URL === '/' ? 'HeaderLink__text' : 'HeaderLink__false'}>Top</li>
          </Link>
          <Link to='/about' className='HeaderLink__item' onClick={handleOnAbout}>
            <li className={URL === '/about' ? 'HeaderLink__text' : 'HeaderLink__false'}>About</li>
          </Link>
          <Link to='/user' className='HeaderLink__item' onClick={handleOnUser}>
            <li className={URL === '/user' ? 'HeaderLink__text' : 'HeaderLink__false'}>Team</li>
          </Link>
        </ul>
        <div className='HeaderRight'>
          <div className='search'>
            <img className='icon' src={Icon} alt='アイコン' />
          </div>
          <div className='account'>
            <a className='circle'>TH</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
