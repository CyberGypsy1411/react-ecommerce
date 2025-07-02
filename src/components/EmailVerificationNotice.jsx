import React from 'react';

export default function EmailVerificationNotice({ email }) {
  return (
    <div style={{ color: '#ff6666', marginTop: '20px' }}>
      <p>Email <strong>{email}</strong> is not verified.</p>
      <p>We've sent a new verification link. Please verify and log in again.</p>
    </div>
  );
}