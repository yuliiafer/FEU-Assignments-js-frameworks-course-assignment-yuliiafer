import { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { ComponentUser } from "./Icons";

const AdminComponent = () => {
  const [auth, setAuth] = useContext(AuthContext);
  const [error, setError] = useState(null);
  const history = useHistory();

  async function logout() {
    const confirmLogOut = window.confirm("Do you want to log out?");
    if (confirmLogOut) {
      try {
        setAuth(null);
        history.push("/");
      } catch (error) {
        setError(error);
      }
    }
  }
  return (
    <>
      <div className="admin-icon">
        <ComponentUser />
      </div>
      <div className="login-form">
        <div className="group admin__group">
          {auth ? (
            <>
              <h3>{`Hi, ${auth.user.username + " "}`}</h3>
              <h3>Welcome back</h3>
              {error ? (
                "Error"
              ) : (
                <Link to="/login">
                  <button onClick={logout} className="button">
                    Log out
                  </button>
                </Link>
              )}
            </>
          ) : (
            <Link to="/login" />
          )}
        </div>
      </div>
    </>
  );
};

export default AdminComponent;
