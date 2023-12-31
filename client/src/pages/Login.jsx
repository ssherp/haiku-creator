import { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { LOG_IN, ADD_USER } from '../utils/mutations';
import Nav from '../components/Nav';
import Auth from '../utils/auth';
import unsplash from '../utils/unsplash';

const Login = () => {
  const [formState, setFormState] = useState({ username: '', password: '', email: '' });
  const [login] = useMutation(LOG_IN);
  const [addUser] = useMutation(ADD_USER);
  const [isLogin, setIsLogin] = useState(false);
  const handleChange = (event) => {
    const { name, value } = event.target;


    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      if (isLogin) {
        const { data } = await login({
          variables: { username: formState.username, password: formState.password },
        });
        console.log(data)
        
        Auth.login(data.login.token);
      } else {
        const { data } = await addUser({
          variables: { ...formState },
        });
        console.log(data)

        Auth.login(data.addUser.token);
      }
      
    } catch (e) {
      console.error(e);
    }
    setFormState({
      username: '',
      password: '',
      email: '',
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

  return (
    <div className="container">
      <Nav />
      <main className="pure-g">
        <div className="pure-u-1-2 login" id="haikuPicture">
        </div>
        <form onSubmit={handleFormSubmit}>
          <h2>{isLogin ? 'LOGIN' : 'SIGN-UP'}</h2>
          <div>
            <label htmlFor="username">Username:</label><br />
            <input type="text" id="username" name="username" value={formState.username} onChange={handleChange} required />
          </div>
          {isLogin ? null : (
            <div>
              <label htmlFor="email">Email:</label><br />
              <input type="email" id="email" name="email" value={formState.email} onChange={handleChange} required />
            </div>
          )}
          <div>
            <label htmlFor="password">Password:</label><br />
            <input type="password" id="password" name="password" value={formState.password} onChange={handleChange} required />
          </div>
          <div>
            <button type="submit">{isLogin ? 'LOGIN' : 'SIGN-UP'}</button>
          </div>
        </form>
        <p>
          {isLogin ? (
            <>
              Dont have an account? <button onClick={() => setIsLogin(false)}>Sign Up</button>
            </>
          ) : (
            <>
              Already have an account? <button onClick={() => setIsLogin(true)}>Login</button>
            </>
          )}
        </p>
      </main>
    </div>
  );
};
export default Login;
