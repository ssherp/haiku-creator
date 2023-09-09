import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_USER, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';

const Profile = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};
  if (
    Auth.loggedIn() && 
    /* Run the getProfile() method to get access to the unencrypted token value in order to retrieve the user's username, and compare it to the userParam variable */
    Auth.getProfile().authenticatedPerson.username === userParam
  ) {
    return <Navigate to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
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
        <header className="pure-g">
            <div className="pure-u-2-3">
                <h1>HAIKU HELPER</h1>
            </div>
            <nav className="pure-u-1-3">
                <ul>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">SIGN-UP/LOGIN</a></li>
                    <li><a href="#">PROFILE</a></li>
                </ul>
                <a href="#"><span className="creator">CREATE HAIKU</span></a>
            </nav>
        </header>
        <main className="pure-g">
            <ul className="pure-u-2-3 cardDeck">
                <li className="card">Whispers of the wind...</li>
                <li className="card">Whispers of the wind...</li>
                <li className="card">Whispers of the wind...</li>
                <li className="card">Whispers of the wind...</li>
                <li className="card">Whispers of the wind...</li>
                <li className="card">Whispers of the wind...</li>
                <li className="card">Whispers of the wind...</li>
                <li className="card">Whispers of the wind...</li>
              </ul>

            <div className="pure-u-1-3">
                <p><b>Haiku Helper:</b> Your Gateway to Poetic Bliss! Unleash your inner poet with ease using our intuitive platform. Craft beautiful haikus effortlessly, guided by our user-friendly drag-n-drop interface. Dive into a world of syllabic harmony and nature-inspired verse. Let your creativity flourish with <b>Haiku Helper</b>! Start composing today.</p>
            </div>
        </main>
    </div>
  );
};

export default Profile;