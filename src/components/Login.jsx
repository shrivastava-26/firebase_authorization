import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth, googleProvider, facebookProvider } from '../firebase/firebase';  // Correct path to firebase

const Login = () => {
  const navigate = useNavigate();

  const handleSignIn = async (provider) => {
    try {
      await signInWithPopup(auth, provider);
      console.log("Sign-in successful"); // Debugging
      navigate('/dashboard'); // Redirect to dashboard after successful login
    } catch (error) {
      console.error("Error signing in:", error.message);
    }
  };

  const buttonStyle = {
    margin: '10px',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '16px'
  };

  const googleButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#db4437'
  };

  const facebookButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#3b5998'
  };

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Sign In</h1>
      <button
        style={googleButtonStyle}
        onClick={() => handleSignIn(googleProvider)}
      >
        Sign In with Google
      </button>
      <button
        style={facebookButtonStyle}
        onClick={() => handleSignIn(facebookProvider)}
      >
        Sign In with Facebook
      </button>
    </div>
  );
};

export default Login;
