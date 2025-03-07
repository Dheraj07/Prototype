import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRide } from '../context/RideContext';
import AuthModal from './AuthModal';

export default function Navbar() {
  const { state, dispatch } = useRide();
  const [showAuth, setShowAuth] = useState(false);

  const handleSignOut = () => {
    dispatch({ type: 'SIGN_OUT' });
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary-600">
              RideShare
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/search" className="text-gray-700 hover:text-primary-600">
              Find a Ride
            </Link>
            <Link to="/driver" className="text-gray-700 hover:text-primary-600">
              Drive with Us
            </Link>
            {state.isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <Link to="/dashboard" className="text-gray-700 hover:text-primary-600">
                  User Dashboard
                </Link>
                <button
                  onClick={handleSignOut}
                  className="text-gray-700 hover:text-primary-600"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <button
                onClick={() => setShowAuth(true)}
                className="btn-primary"
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      </div>
      {showAuth && <AuthModal onClose={() => setShowAuth(false)} />}
    </nav>
  );
}