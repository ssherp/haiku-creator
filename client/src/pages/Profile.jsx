import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { useState, useEffect } from 'react';
import unsplash from '../utils/unsplash';

import { USER } from '../utils/queries'; // Import the correct query

import Auth from '../utils/auth';
import Nav from "../components/Nav";
import Cards from "../components/Cards";

const Profile = () => {
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

  const { username: userParam } = useParams();

//  // FOR TESTING PURPOSES PLEASE FORGIVE ME MY SIGNUP AND LOGIN DONT WORK YET GUYS 
//  const mockUser = {
//   username: "testuser",
//   email: "testuser@example.com",
//   haikus: [
//     {
//       _id: "1",
//       content: "Haiku 1 Content",
//     },
//     {
//       _id: "2",
//       content: "Haiku 2 Content",
//     },
//   ],
// };

  // const user = mockUser;

  const { loading, data, error } = useQuery(userParam ? USER : USER, { 
    variables: { username: userParam },
  });

  const user = data?.user || {};

  if (Auth.loggedIn() && Auth.getProfile().authenticatedPerson.username === userParam) {
    return <Navigate to="/profile" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) { 
    console.error('Error fetching user data:', error);
    return <div>Error fetching user data.</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  return (
    <div className="container">
      <Nav />
      <main className="pure-g">
      <Cards />
      <div className="pure-u-1-3">
          <div className="user-profile">
            <h2>User Profile</h2>
            <p>
              Username: {user.username}
            </p>
            <p>
              Email: {user.email}
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
