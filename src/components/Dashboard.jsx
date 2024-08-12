import React, { useEffect, useState } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      console.log("Auth state changed:", user); // Debugging
      if (!user) {
        navigate('/'); // Redirect to login if not authenticated
      } else {
        setUser(user);
      }
    });
    return () => unsubscribe();
  }, [auth, navigate]);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      console.log("Sign-out successful"); // Debugging
      navigate('/'); // Redirect to login page after sign out
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };

  // Inline CSS styles
  const dashboardStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#f0f2f5',
    padding: '20px'
  };

  const profileContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '500px',
    width: '100%',
    textAlign: 'center'
  };

  const profileImageStyle = {
    borderRadius: '50%',
    width: '150px',
    height: '150px',
    objectFit: 'cover',
    marginBottom: '15px'
  };

  const buttonStyle = {
    marginTop: '20px',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#ff4444',
    color: '#ffffff',
    cursor: 'pointer',
    fontSize: '16px'
  };

  if (!user) {
    return <div style={dashboardStyle}>Loading...</div>;
  }

  return (
    <div style={dashboardStyle}>
      <div style={profileContainerStyle}>
        <h2>Welcome, {user.displayName || 'User'}!</h2>
        <img
          src={user.photoURL || 'https://via.placeholder.com/150'}
          alt="Profile"
          style={profileImageStyle}
        />
        <p><strong>Email:</strong> {user.email}</p>
        {/* <p><strong>UID:</strong> {user.uid}</p> */}
        <p><strong>Provider:</strong> {user.providerData[0]?.providerId}</p>
        <p><strong>Phone:</strong> {user.phoneNumber || 'N/A'}</p>
        <p><strong>Last Sign-In:</strong> {user.metadata?.lastSignInTime || 'N/A'}</p>
        <button onClick={handleSignOut} style={buttonStyle}>
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
