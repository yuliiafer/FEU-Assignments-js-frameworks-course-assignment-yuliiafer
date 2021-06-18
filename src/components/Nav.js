import { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { ComponentDragon } from "./Icons";
import { CgMenuRightAlt } from 'react-icons/cg';
import { VscClose } from 'react-icons/vsc';

function Nav() {
  const [auth, setAuth] = useContext(AuthContext);
  const [click, setClick] = useState(false);
  const history = useHistory();

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  async function logout() {
    const confirmLogOut = window.confirm("Do you want to log out?");
    if (confirmLogOut) {
      setAuth(null);
      history.push("/");
    } else {
      history.push("/admin");
    }
  }

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <ComponentDragon />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? (
              <VscClose className="icons" />
            ) : (
              <CgMenuRightAlt className="icons" />
            )}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link className="nav-links" onClick={closeMobileMenu} to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-links"
                onClick={closeMobileMenu}
                to="/contact"
              >
                Contact
              </Link>
            </li>

            {auth ? (
              <>
                <li onClick={closeMobileMenu} className="nav-item">
                  <button className="nav-button" onClick={logout}>
                    Log out
                  </button>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <Link
                  className="nav-links"
                  onClick={closeMobileMenu}
                  to="/login"
                >
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Nav;
