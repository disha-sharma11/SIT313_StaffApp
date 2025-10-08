import { useState } from "react";
import Input from "../Input";
import Button from "../Button";
import "../Header.css";
import { Link } from "react-router-dom";
import { signupWithEmailAndPassword, createUserDoc } from "../util/firebase";

function Signup() {
    let [contact, setContact] = useState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const { displayName, email, password, confirmPassword } = contact;
    console.log(contact);

    function handleChange(e) {
        const { name, value } = e.target;
        setContact((preValue) => ({
            ...preValue,
            [name]: value
        }));
    }

    async function usersignup() {
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        try {
            const {user} = await signupWithEmailAndPassword(email, password);
            console.log(user);
            await createUserDoc(user, {displayName});
        } catch (error) {
            console.error("Error during signup:", error.message);
        }
    }

    return (
        <div className="auth-container">
            <Input 
  name="displayName" 
  what="Name" 
  placeholder="Name" 
  value={contact.displayName} 
  onChange={handleChange} 
/>
<Input 
  name="email" 
  what="Email" 
  placeholder="Email" 
  value={contact.email} 
  onChange={handleChange} 
/>
<Input 
  name="password" 
  what="Password" 
  placeholder="Password" 
  value={contact.password} 
  onChange={handleChange} 
/>
<Input 
  name="confirmPassword" 
  what="Password" 
  placeholder="Confirm Password" 
  value={contact.confirmPassword} 
  onChange={handleChange} 
/>
            <Button onClick={usersignup} type="submit" placeholder="Sign Up" text="Sign Up" />
            <br />
            <Link to="/login" style={{ color: "black", textDecoration: "none" }}>
                <Button type="submit" text="Already have an account? Login" />
            </Link>
        </div>
    );
}

export default Signup;
