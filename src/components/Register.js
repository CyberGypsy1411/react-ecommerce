import React, { useState } from "react";
import { auth } from "../firebaseConfig.js";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 const handleSignup = async () => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await sendEmailVerification(userCredential.user, {
  url: 'http://192.168.1.11:3000/email-verified'
});
    alert("Registration successful! Please check your email to verify.");
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      alert("Email already registered. Please login or verify your email.");
    }else{
      alert(error.message);
    }
  }
};

  return (
    <div>
      <h2>Register</h2>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input placeholder="Password" type="password" onChange={e => setPassword(e.target.value)} />
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
};

export default Register;
