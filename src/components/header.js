import React from 'react';
import classnames from 'classnames';
import { ReactComponent as Logo } from '../images/logo.svg';

export default () => {
  const [partyMode, setPartyMode] = React.useState(false);
  const [menuOpened, setMenuOpened] = React.useState(false);
  const togglePartyMode = () => {
    setPartyMode((x) => !x);
  };

  const toggleMenu = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setMenuOpened((x) => !x);
  };

  const buttonText = partyMode ? 'Party is no more' : "Let's Party!!";
  const burgerClasses = classnames('navbar-burger link', { 'is-active': menuOpened });
  const menuClasses = classnames('navbar-menu', { 'is-active': menuOpened });

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a href="/" className="navbar-item">
          <Logo width="55" className={partyMode ? 'party-color' : 'default-color-svg'} />
        </a>
        <a href="#" onClick={toggleMenu} className={burgerClasses} aria-label="main menu" aria-controls="main-menu" aria-expanded={menuOpened}>
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>

      </div>
      <div id="main-manu" className={menuClasses}>
        <div className="navbar-start">
          <a className="navbar-item" href="/about"> ABOUT </a>
          <a className="navbar-item" href="/news"> NEWS </a>
          <a className="navbar-item" href="/contact"> CONTACT </a>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <button type="button" className="button is-info" onClick={togglePartyMode}>{buttonText}</button>
          </div>
        </div>
      </div>
    </nav>
  );
};
