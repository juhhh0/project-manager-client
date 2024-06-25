import { NavLink, useNavigate } from "react-router-dom";
import useSignOut from "react-auth-kit/hooks/useSignOut";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";
import CustomButton from "./ui/Button";

export default function Navbar() {
  const signOut = useSignOut();
  const isAuthenticated = useIsAuthenticated();
  const navigate = useNavigate();

  const signout = () => {
    signOut();
    navigate("/login");
  };

  return (
    <nav>
      <div className="h-16 container flex items-center justify-between">
        <NavLink to="/">Home</NavLink>
        <div className="flex gap-3 items-center">
          {isAuthenticated ? (
            <>
              <NavLink to="/profile">
                <CustomButton label="Profile" />
              </NavLink>
              <button onClick={signout}>Sign Out</button>
            </>
          ) : (
            <>
              <NavLink to="/signup">Sign up</NavLink>
              <NavLink to="/login">
                <CustomButton label="Login" />
              </NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
