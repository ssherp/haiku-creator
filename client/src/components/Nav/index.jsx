import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {
  function handleLogout() {
    Auth.logout();
  }

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="#" onClick={handleLogout}>
              LOG OUT
            </Link>
          </li>
          <li>
            <Link to="/profile">PROFILE</Link>
          </li>
          <li>
            <Link to="/creator">CREATE HAIKU</Link>
          </li>
        </ul>
      );
    } else {
      return (
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/login">LOGIN/SIGN-UP</Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="pure-g">
      <div className="pure-u-2-3">
        <h1>
          <Link to="/">HAIKU HELPER</Link>
        </h1>
      </div>
      <nav className="pure-u-1-3">{showNavigation()}</nav>
    </header>
  );
}

export default Nav;
