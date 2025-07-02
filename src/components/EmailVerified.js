// src/components/EmailVerifiedRedirect.js
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const EmailVerifiedRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to /login as soon as the component loads
    navigate("/login", { replace: true });
  }, [navigate]);

  return null; // Nothing to show on /email-verified
};

export default EmailVerifiedRedirect;
