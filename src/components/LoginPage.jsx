import React, { useState } from 'react';
import styles from '../styles/LoginPage.module.css';
import { signInWithEmailAndPassword, sendEmailVerification, signOut } from 'firebase/auth';
import { auth } from "../firebaseConfig";
import { useNavigate } from 'react-router-dom';
import EmailVerificationNotice from './EmailVerificationNotice';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [needsVerification, setNeedsVerification] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      if (!userCredential.user.emailVerified) {
        setNeedsVerification(true);
        await sendEmailVerification(userCredential.user);
        await signOut(auth);
      } else {
        navigate('/dashboard');
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Welcome, <br />Glad to see you!</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
        {error && <p className={styles.error}>{error}</p>}
      </form>
      {needsVerification && <EmailVerificationNotice email={email} />}
      <p className={styles.link}>Don't have an account? <a href="/signup">Sign Up Now</a></p>
    </div>
  );
}