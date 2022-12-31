import Home from "./pages/Home/Home";
import Topbar from './components/topbar/Topbar'
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import {
  BrowserRouter as Router,
  Routes,
  Link,
  Route
} from 'react-router-dom'
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import { useContext } from "react";
import { Context } from "./context/Context";



function App() {
  const { user } = useContext(Context);

  return (
    <Router>
      <Topbar />
      <Routes >
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/settings" element={user ? <Settings /> : <Register />} />
        <Route path="/write-post" element={user ? <Write /> : <Register />} />
        <Route path="/post/:postId" element={<Single />} />
        <Route path="/about" element={<About />} />
         <Route path="/contact" element={<Contact />} />


      </Routes >
    </Router>
  );
}

export default App;
