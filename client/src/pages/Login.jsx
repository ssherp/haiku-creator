import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

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
<div class="container">
        <header class="pure-g">
            <div class="pure-u-2-3">
                <h1>HAIKU HELPER</h1>
            </div>
            <nav class="pure-u-1-3">
                <ul>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">SIGN-UP/LOGIN</a></li>
                </ul>
            </nav>
        </header>
        <main class="pure-g">
            <div class="pure-u-1-2 login">
            </div>
            <div class="pure-u-1-5">
                <form>
                    <h2>LOGIN</h2>
                    <div>
                        <label for="username">Username:</label><br>
                        <input type="text" id="username" name="username" required>
                    </div>
                    <div>
                        <label for="password">Password:</label><br>
                        <input type="password" id="password" name="password" required>
                    </div>
                    <div>
                        <button type="submit">LOGIN</button>
                    </div>
                </form>
            </div>
            <div class="pure-u-1-5 sign">
                <form>
                    <h2>SIGN-UP</h2>
                    <div>
                        <label for="username">Username:</label><br>
                        <input type="text" id="username" name="username" required>
                    </div>
                    <div>
                        <label for="username">Email:</label><br>
                        <input type="email" id="email" name="email" required>
                    </div>
                    <div>
                        <label for="password">Password:</label><br>
                        <input type="password" id="password" name="password" required>
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