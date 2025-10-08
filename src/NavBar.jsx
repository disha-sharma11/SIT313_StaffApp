import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import "./NavBar.css"
import { useContext } from "react";
import { UserInfo } from "./context/User_context";

function NavBar() {
  const {currentuser} = useContext(UserInfo);
  console.log("NavBar current user:", currentuser);
  return (
    <>
      <Link to="/">Home</Link> |
      <Link to="/about">About</Link> |
      <Link to="/contact">Contact</Link> |
      {/* <Link to="/login">Login</Link> */}

      {currentuser ? (
        <span>Hi, {currentuser.email}</span>
      ) : (
        <Link to="/login">Login</Link>
      )}

      
      <hr />  
      <Outlet />
    </>
  );
}

export default NavBar;