import Homepage from "./route/Homepage";
import {Route, Routes} from "react-router-dom";
import AboutPage from "./route/AboutPage"
import NavFooter from "./NavFooter";
import ContactPage from "./route/ContactPage";
import Login from "./route/Login";
import SignUp from "./route/SignUp";
import Profile from "./route/Profile";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<NavFooter />} >
        {/* <Route path="/home" element={<Homepage />} /> */}
        <Route index element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        </Route>
        
      </Routes>
    </div>
  );
}

export default App;