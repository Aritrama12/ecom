import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./public/Home";
import Signup from "./public/Signup";
import Login from "./public/Login";

function App() {
  return (
   <Routes>
    <Route path="/"element={<> <Navbar/><Home/></>}/>
    <Route path="/signup"element={<> <Navbar/><Signup/></>}/>
    <Route path="/Login"element={<> <Navbar/><Login/></>}/>
   </Routes>
  );
}

export default App;
