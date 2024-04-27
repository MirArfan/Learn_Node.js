import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Error from "./components/Error";
import Layout from "./Header/Layout";

function App() {

  return (
    <BrowserRouter>
    <Layout/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
