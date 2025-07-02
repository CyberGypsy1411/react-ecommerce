import React, { useState } from "react";
import { sendEmailVerification,signInWithEmailAndPassword,signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    if (!user.emailVerified) {
      await sendEmailVerification(user); // 👈 Resend the verification
      alert("Email not verified. A new verification link has been sent to your email.");
      await signOut(auth);
      return;
    }

    alert("Logged in successfully!");
  } catch (error) {
    if (error.code === "auth/user-not-found") {
      alert("No account found. Please register.");
    } else {
      alert(`Login failed: ${error.message}`);
    }
  }
};


  return (
    <div>
      <h2>Login</h2>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input placeholder="Password" type="password" onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
