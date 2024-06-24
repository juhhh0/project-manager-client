import { NavLink, useNavigate } from "react-router-dom";
import useSignOut from "react-auth-kit/hooks/useSignOut";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";

export default function Navbar() {
  const signOut = useSignOut();
  const isAuthenticated = useIsAuthenticated();
  const navigate = useNavigate()

  const signout = () => {
    signOut();
    navigate("/login");
  };

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {isAuthenticated ? (
        <button onClick={signout}>Sign Out</button>
      ) : (
        <>
          <NavLink to="/signup">Sign up</NavLink>
          <NavLink to="/login">Login</NavLink>
        </>
      )}
    </nav>
  );
}
