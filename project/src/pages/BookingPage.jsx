import { useState } from 'react';
import { useRide } from '../context/RideContext';
import { useNavigate } from 'react-router-dom';

export default function BookingPage() {
  const { state } = useRide();
  const navigate = useNavigate();
  const [passengerDetails, setPassengerDetails] = useState({
    name: '',
    phone: '',
    email: '',
    passengers: 1
  });
  const [paymentMethod, setPaymentMethod] = useState('card');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle booking submission
    navigate('/dashboard');
  };

  if (!state.selectedRide) {
    navigate('/search');
    return null;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Confirm Your Booking</h1>

      {/* Ride Details */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">Ride Details</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-gray-600">Driver</p>
            <p className="font-semibold">{state.selectedRide.driver}</p>
          </div>
          <div>
            <p className="text-gray-600">Vehicle</p>
            <p className="font-semibold">{state.selectedRide.car}</p>
          </div>
          <div>
            <p className="text-gray-600">From</p>
            <p className="font-semibold">{state.pickup}</p>
          </div>
          <div>
            <p className="text-gray-600">To</p>
            <p className="font-semibold">{state.dropoff}</p>
          </div>
          <div>
            <p className="text-gray-600">Date</p>
            <p className="font-semibold">{state.date}</p>
          </div>
          <div>
            <p className="text-gray-600">Time</p>
            <p className="font-semibold">{state.time}</p>
          </div>
        </div>
      </div>

      {/* Passenger Details Form */}
      <form onSubmit={handleSubmit}>
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-semibold mb-4">Passenger Details</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                className="input-field"
                value={passengerDetails.name}
                onChange={(e) => setPassengerDetails({...passengerDetails, name: e.target.value})}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                className="input-field"
                value={passengerDetails.phone}
                onChange={(e) => setPassengerDetails({...passengerDetails, phone: e.target.value})}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                className="input-field"
                value={passengerDetails.email}
                onChange={(e) => setPassengerDetails({...passengerDetails, email: e.target.value})}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Number of Passengers
              </label>
              <select
                className="input-field"
                value={passengerDetails.passengers}
                onChange={(e) => setPassengerDetails({...passengerDetails, passengers: parseInt(e.target.value)})}
              >
                {[1, 2, 3, 4].map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Payment Method */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <input
                type="radio"
                id="card"
                name="payment"
                value="card"
                checked={paymentMethod === 'card'}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="mr-2"
              />
              <label htmlFor="card">Credit/Debit Card</label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="cash"
                name="payment"
                value="cash"
                checked={paymentMethod === 'cash'}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="mr-2"
              />
              <label htmlFor="cash">Cash</label>
            </div>
          </div>
        </div>

        {/* Price Summary */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-semibold mb-4">Price Summary</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Base Fare</span>
              <span>₹{state.selectedRide.price}</span>
            </div>
            <div className="flex justify-between">
              <span>Service Fee</span>
              <span>₹200</span>
            </div>
            <div className="border-t pt-2 mt-2">
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>₹{state.selectedRide.price + 200}</span>
              </div>
            </div>
          </div>
        </div>

        <button type="submit" className="btn-primary w-full">
          Confirm Booking
        </button>
      </form>
    </div>
  );
}