import React from 'react';

import { ContentWrapper } from 'components/reusable';
import AppLogo from 'assets/Logo.svg';

function Header() {
  return (
    <div className='header'>
      <ContentWrapper className='header__content'>
        <div className='header__logo'>
          <img src={AppLogo} alt="logo" />
        </div>
        <div className='header__search'>
          <input type="text"/>
          <button>Поиск</button>
        </div>
      </ContentWrapper>
    </div>
  )
}

export default Header;