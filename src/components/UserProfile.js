
import { Avatar, Button, Dropdown } from 'flowbite-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const url = "https://ideogram.ai/assets/image/balanced/response/ihXk-5JzQFK11aI5Ri_r4A"

const UserProfile = () => {
  const [currentUser, setCurrentUser] = useState(false) // Initialize with false

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
        <Link to='/sign-in'>
          <Button gradientDuoTone='purpleToBlue' outline>
            Sign In
          </Button>
        </Link>
      )}
    </div>
  )
}

export default UserProfile
