import { useState } from 'react';
import { useRide } from '../context/RideContext';

export default function SignInModal({ onClose }) {
  const { dispatch } = useRide();
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would validate credentials against a backend
    if (credentials.email && credentials.password) {
      dispatch({
        type: 'SIGN_IN',
        user: {
          id: 1,
          name: 'Sriram Majeti',
          email: credentials.email
        }
      });
      onClose();
    } else {
      setError('Please enter both email and password');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Sign In</h2>
        {error && (
          <p className="text-red-500 mb-4">{error}</p>
        )}
        <form onSubmit={handleSubmit}>
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
          <div className="mb-6">
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
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="btn-secondary"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn-primary"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}