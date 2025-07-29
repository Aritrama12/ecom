import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./public/Home";
import Signup from "./public/Signup";

function App() {
  return (
   <Routes>
    <Route path="/"element={<> <Navbar/><Home/></>}/>
    <Route path="/signup"element={<> <Navbar/><Signup/></>}/>
   </Routes>
  );
}

export default App;
