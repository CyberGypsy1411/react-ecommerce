import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/LoginPage";
import Register from "./components/SignupPage";
import Home from "./components/Home"; // your existing home
import EmailVerified from "./components/EmailVerified";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/email-verified" element={<EmailVerified />} />
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
