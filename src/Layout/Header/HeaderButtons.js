import { useState, useEffect } from 'react';

import Modal from '../../UI/Modal';
import classes from './HeaderButtons.module.css';

const HeaderButtons = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  const showLoginHandler = () => {
    setShowLoginModal(true);
  };

  const hideLoginHandler = () => {
    setShowLoginModal(false);
  };

  const showSignupHandler = () => {
    setShowSignupModal(true);
  };

  const hideSignupHandler = () => {
    setShowSignupModal(false);
  };

  return (
    <>
      {showLoginModal && <Modal styles={[classes.modal]} hideModal={hideLoginHandler} />}
      {showSignupModal && <Modal styles={[classes.modal]} hideModal={hideSignupHandler} />}
      <div className={classes.actions}>
        <button onClick={showSignupHandler}>Sign Up</button>
        <button onClick={showLoginHandler}>Log In</button>
      </div>
    </>
  );
};
export default HeaderButtons;
