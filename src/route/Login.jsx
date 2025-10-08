import { href, Link } from "react-router-dom";
import Button from "../Button";
import { useContext, useState } from "react";
import Input from "../Input";
import "./auth-container.css";
import { UserInfo } from "../context/User_context";
import {
  signInWithGoogle,
  createUserDoc,
  loginWithEmailAndPassword,
} from "../util/firebase";
import { useNavigate } from "react-router-dom";

function Login() {
  const { currentuser, setcurrentuser } = useContext(UserInfo);

  const userlog = async () => {
    const { user } = await signInWithGoogle();
    console.log(user);
    createUserDoc(user);
    setcurrentuser(user);
  };

  const navigate = useNavigate();

  async function loginuser() {
    try {
      const { email, password } = contact;
      const { user } = await loginWithEmailAndPassword(email, password);

      navigate("/profile");

      setcurrentuser(user);

      console.log("log in component", user);
      console.log("Logged in user object:", user);
      console.log("After login, current user:", currentuser);

      alert(`Login successful! Welcome ${user.email}`);
    } catch (error) {
      console.error("Error during login:", error.code, error.message);
      switch (error.code) {
        case "auth/user-not-found":
          alert("No user found with this email.");
          break;
        case "auth/wrong-password":
          alert("Incorrect password.");
          break;
        case "auth/invalid-email":
          alert("Invalid email format.");
          break;
        default:
          alert("Login failed. Try again.");
      }
    }
  }

  const [contact, setcontact] = useState({
    email: "",
    password: "",
  });
  console.log(contact);
  console.log("Current user from context:", currentuser);

  function handlechange(e) {
    const { name, value } = e.target;
    setcontact((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  }

  return (
    <div className="auth-container">
      <Input
        name="email"
        what="email"
        placeholder="Email"
        value={contact.email}
        onChange={handlechange}
      />
      <Input
        name="password"
        what="Password"
        placeholder="Password"
        value={contact.password}
        onChange={handlechange}
      />
      {/* <Button onClick={() =>{href = "/signup"}} type="submit" text="Sign Up Instead"/> */}
      <Button onClick={loginuser} type="submit" text="Login" />
      <br />
      <Button onClick={userlog} type="submit" text="Sign in with Google" />
      <Link to="/signup" style={{ color: "black", textDecoration: "none" }}>
        <Button type="submit" text="Sign Up Instead" />
      </Link>
    </div>
  );
}

export default Login;
