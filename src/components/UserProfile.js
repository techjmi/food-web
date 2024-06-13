
import { Avatar, Button, Dropdown } from 'flowbite-react';
import React, { useState } from 'react';
import Login from '../popup/Login';

const url = "https://ideogram.ai/assets/image/balanced/response/ihXk-5JzQFK11aI5Ri_r4A";

const UserProfile = () => {
  const [currentUser, setCurrentUser] = useState(false); // Initialize with false
  const [showLogin, setShowLogin] = useState(false);

  const handleLogin = () => {
    setShowLogin(true);
  }

  const handleCloseLogin = () => {
    setShowLogin(false);
  }

  return (
    <div>
      {currentUser ? (
        <Dropdown
          arrowIcon={false}
          inline
          label={<Avatar alt='user' img={url} rounded />}
        >
          <Dropdown.Header>
            <span>shamim</span>
            <span>akhter</span>
          </Dropdown.Header>
        </Dropdown>
      ) : (
        <>
          <Button gradientDuoTone='purpleToBlue' outline onClick={handleLogin}>
            Sign In
          </Button>
          {showLogin && <Login onClose={handleCloseLogin} />}
        </>
      )}
    </div>
  );
}

export default UserProfile;
