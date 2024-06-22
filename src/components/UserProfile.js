
import { Avatar, Button, Dropdown } from 'flowbite-react';
import React, { useContext,useState } from 'react';
import Login from '../popup/Login';
import { DataContext } from '../context/Dataprovider';
import { Link, useNavigate } from 'react-router-dom';

const url = "https://ideogram.ai/assets/image/balanced/response/ihXk-5JzQFK11aI5Ri_r4A";

const UserProfile = () => {
  const{currentUser, setCurrentUser}= useContext(DataContext)
  const [showLogin, setShowLogin] = useState(false);
  const navigate= useNavigate()
  const handleLogin = () => {
    setShowLogin(true);
  }

  const handleCloseLogin = () => {
    setShowLogin(false);
  }
//handle signout function
const handleSignout=()=>{
  localStorage.removeItem('food_token')
  setCurrentUser(null)
  navigate('/')
}

  return (
    <div>
      {currentUser ? (
        <Dropdown
          arrowIcon={false}
          inline
          label={<Avatar alt='user' img={currentUser.profilePic} rounded />}
        >
          <Dropdown.Header>
            <span className='block text-sm'>{currentUser.name}</span>
            <span className='block text-sm'>{currentUser.email}</span>
            <span className='block text-sm'>{currentUser.isAdmin}</span>
          </Dropdown.Header>
          <Link to={'/dashboard?tab=profile'}>
              <Dropdown.Item>Profile</Dropdown.Item>
            </Link> 
            <Dropdown.Divider />
             <Dropdown.Item onClick={handleSignout}>Sign out</Dropdown.Item>
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
