import { useState } from 'react';
import { useRide } from '../context/RideContext';

export default function AuthModal({ onClose }) {
  const { dispatch } = useRide();
  const [isSignIn, setIsSignIn] = useState(true);
  const [credentials, setCredentials] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!credentials.email || !credentials.password) {
      setError('Please fill in all required fields');
      return;
    }

    if (!isSignIn) {
      if (credentials.password !== credentials.confirmPassword) {
        setError('Passwords do not match');
        return;
      }
      if (!credentials.name) {
        setError('Please enter your name');
        return;
      }
    }

    // In a real app, you would validate against a backend
    dispatch({
      type: isSignIn ? 'SIGN_IN' : 'SIGN_UP',
      user: {
        id: 1,
        name: credentials.name || 'Sriram Majeti',
        email: credentials.email
      }
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">{isSignIn ? 'Sign In' : 'Sign Up'}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {error && (
          <p className="text-red-500 mb-4">{error}</p>
        )}

        <form onSubmit={handleSubmit}>
          {!isSignIn && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                className="input-field"
                value={credentials.name}
                onChange={(e) => setCredentials({...credentials, name: e.target.value})}
                required={!isSignIn}
              />
            </div>
          )}

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              className="input-field"
              value={credentials.email}
              onChange={(e) => setCredentials({...credentials, email: e.target.value})}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              className="input-field"
              value={credentials.password}
              onChange={(e) => setCredentials({...credentials, password: e.target.value})}
              required
            />
          </div>

          {!isSignIn && (
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                className="input-field"
                value={credentials.confirmPassword}
                onChange={(e) => setCredentials({...credentials, confirmPassword: e.target.value})}
                required={!isSignIn}
              />
            </div>
          )}

          <div className="flex flex-col space-y-4">
            <button
              type="submit"
              className="btn-primary"
            >
              {isSignIn ? 'Sign In' : 'Sign Up'}
            </button>
            
            <button
              type="button"
              onClick={() => setIsSignIn(!isSignIn)}
              className="text-primary-600 hover:text-primary-700 text-sm"
            >
              {isSignIn ? "Don't have an account? Sign Up" : "Already have an account? Sign In"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}