import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Button from "../Button";
import { useContext } from "react";
import { UserInfo } from "../context/User_context";


function AboutPage(){
    const auth =getAuth();
    const user = auth.currentUser;
    const navigate = useNavigate();
    const { setcurrentuser } = useContext(UserInfo);


    function userlogout(){
        signOut(auth)
      .then(() => {
        setcurrentuser(null);
        alert("Signed out successfully!");
        navigate("/");
      })
      .catch((error) => {
        console.error("Sign out error:", error);
        alert("Error signing out. Try again.");
      });
    }
    return(
    <div className="auth-container">
        {user ? (
        <h1>Logged in as: {user.email}</h1>
      ) : (
        <h1>No user logged in</h1>
      )}
      <Button onClick={userlogout} type="submit" text="Log Out" />
    </div>
)}

export default AboutPage;
