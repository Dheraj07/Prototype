import { useState } from 'react';
import { useRide } from '../context/RideContext';
import { useNavigate } from 'react-router-dom';

export default function SearchPage() {
  const { state, dispatch } = useRide();
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    // Simulate API call
    setSearchResults([
      {
        id: 1,
        driver: "DHERAJ MAJETI",
        car: "Swift Dzire",
        rating: 4.8,
        price: 400,
        availableSeats: 3
      },
      {
        id: 2,
        driver: "N. Supreeth",
        car: "Ertiga MUV",
        rating: 4.9,
        price: 350,
        availableSeats: 4
      },
      // Add more mock results
    ]);
  };

  const handleRideSelect = (ride) => {
    dispatch({ type: 'SET_SELECTED_RIDE', ride });
    navigate('/booking');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Find Your Ride</h1>
      
      {/* Search Form */}
      <form onSubmit={handleSearch} className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Pickup Location</label>
            <input
              type="text"
              className="input-field"
              value={state.pickup}
              onChange={(e) => dispatch({ type: 'SET_LOCATION', field: 'pickup', value: e.target.value })}
              placeholder="Enter pickup location"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Drop-off Location</label>
            <input
              type="text"
              className="input-field"
              value={state.dropoff}
              onChange={(e) => dispatch({ type: 'SET_LOCATION', field: 'dropoff', value: e.target.value })}
              placeholder="Enter drop-off location"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
            <input
              type="date"
              className="input-field"
              value={state.date}
              onChange={(e) => dispatch({ type: 'SET_LOCATION', field: 'date', value: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
            <input
              type="time"
              className="input-field"
              value={state.time}
              onChange={(e) => dispatch({ type: 'SET_LOCATION', field: 'time', value: e.target.value })}
            />
          </div>
        </div>
        <div className="mt-4">
          <button type="submit" className="btn-primary w-full md:w-auto">
            Search Rides
          </button>
        </div>
      </form>

      {/* Search Results */}
      {searchResults.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {searchResults.map((ride) => (
            <div key={ride.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold">{ride.driver}</h3>
                  <p className="text-gray-600">{ride.car}</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold">₹{ride.price}</p>
                  <p className="text-sm text-gray-500">per ride</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <span className="text-yellow-400">★</span>
                <span className="ml-1">{ride.rating}</span>
                <span className="mx-2">•</span>
                <span>{ride.availableSeats} seats available</span>
              </div>
              <button
                onClick={() => handleRideSelect(ride)}
                className="btn-primary w-full"
              >
                Select Ride
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
