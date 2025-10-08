import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Button from "../Button";


function AboutPage(){
    const auth =getAuth();
    const user = auth.currentUser;
    const navigate = useNavigate();


    function userlogout(){
        signOut(auth)
      .then(() => {
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