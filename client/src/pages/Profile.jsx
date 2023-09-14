import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { useState, useEffect } from 'react';
import unsplash from '../utils/unsplash';
import { ADD_USER } from '../utils/mutations';
import { useMutation } from '@apollo/client';

import { USER } from '../utils/queries'; // Import the correct query

import Auth from '../utils/auth';
import Nav from "../components/Nav";
import Cards from "../components/Cards";

const Profile = () => {
  const {loading, error, data} = useQuery(USER)
  const { userInfo } = data || {}

  const [unsplashDataLoaded] = useState(false);
  useEffect(() => {

    unsplash()
      .then(() => {
        // Handle the successful loading of the image if needed
      })
      .catch((error) => {
        console.error('Error loading unsplash data:', error);
      });
  }, []);

  return (
    <div className="container">
      <Nav />
      <main className="pure-g">
      <Cards />
      <div className="pure-u-1-3">
          <div className="user-profile">
            <h2>User Profile</h2>
            <p>
              Username: {userInfo?.username}
              {console.log(USER)}
            </p>
            <p>
              {/* Email: {userInfo.email} */}
            </p>
          </div>
          {/* <div className="user-haikus">
            <h2> User's Haikus </h2>
            <ul>
              {user.haikus.map((haiku) => (
                <li key={haiku._id}>{haiku.content}</li>
              ))}
            </ul>
          </div>       */}
      </div>
    </main>
      <aside className="unsplash" id="haikuPicture"></aside>
    </div>
  );
};

export default Profile;