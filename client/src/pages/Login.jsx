import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOG_IN } from '../utils/mutations';
import Nav from "../components/Nav";
import Auth from '../utils/auth';
import unsplash from '../utils/unsplash';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOG_IN);
  
  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  
  const [unsplashDataLoaded, setUnsplashDataLoaded] = useState(false);
  useEffect(() => {
    unsplash()
      .then(() => {
        // Handle the successful loading of the image if needed
      })
      .catch((error) => {
        console.error('Error loading unsplash data:', error);
      });
  }, []);

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
<div className="container">
        <Nav />
        <main className="pure-g">
            <div className="pure-u-1-2 login" id="haikuPicture">
            </div>
            <div
            style={{
              backgroundImage: `url(${unsplashDataLoaded ? unsplash() : ''})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: '100%',
              height: '100%',
            }}
          ></div>
            <div className="pure-u-1-5">
                <form>
                    <h2>LOGIN</h2>
                    <div>
                        <label htmlFor="username">Username:</label><br />
                        <input type="text" id="username" name="username" value={formState.username} onChange={handleChange} required />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label><br />
                        <input type="password" id="password" name="password" value={formState.password} onChange={handleChange} required />
                    </div>
                    <div>
                        <button type="submit">LOGIN</button>
                    </div>
                </form>
            </div>
            <div className="pure-u-1-5 sign">
                <form>
                    <h2>SIGN-UP</h2>
                    <div>
                        <label htmlFor="username">Username:</label><br />
                        <input type="text" id="username" name="username" required />
                    </div>
                    <div>
                        <label htmlFor="username">Email:</label><br />
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label><br />
                        <input type="password" id="password" name="password" required />
                    </div>
                    <div>
                        <button type="submit">SIGN-UP</button>
                    </div>
                </form>
            </div>
        </main>
    </div>
    );
};

export default Login;