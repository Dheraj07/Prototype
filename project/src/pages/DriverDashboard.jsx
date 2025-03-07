import { useState } from 'react';

export default function DriverDashboard() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [registrationForm, setRegistrationForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    vehicleMake: '',
    vehicleModel: '',
    vehicleYear: '',
    licensePlate: '',
  });

  const mockEarnings = {
    today: 145,
    week: 850,
    month: 3200,
    rides: [
      {
        id: 1,
        date: '2024-02-13',
        passenger: 'Sai Sriram',
        from: 'Rajamahendravaram',
        to: 'Kovvur',
        amount: 250
      },
      {
        id: 2,
        date: '2024-02-14',
        passenger: 'Bhaskhar Rayudu',
        from: 'KL University',
        to: 'Pandit Nehru- Bus Stand',
        amount: 150
      }
    ]
  };

  const handleRegistrationSubmit = (e) => {
    e.preventDefault();
    setIsRegistered(true);
  };

  if (!isRegistered) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-8">Become a Driver</h1>
        <form onSubmit={handleRegistrationSubmit} className="bg-white rounded-lg shadow-md p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                className="input-field"
                value={registrationForm.fullName}
                onChange={(e) => setRegistrationForm({...registrationForm, fullName: e.target.value})}
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
                value={registrationForm.email}
                onChange={(e) => setRegistrationForm({...registrationForm, email: e.target.value})}
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
                value={registrationForm.phone}
                onChange={(e) => setRegistrationForm({...registrationForm, phone: e.target.value})}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Vehicle Make
              </label>
              <input
                type="text"
                className="input-field"
                value={registrationForm.vehicleMake}
                onChange={(e) => setRegistrationForm({...registrationForm, vehicleMake: e.target.value})}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Vehicle Model
              </label>
              <input
                type="text"
                className="input-field"
                value={registrationForm.vehicleModel}
                onChange={(e) => setRegistrationForm({...registrationForm, vehicleModel: e.target.value})}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Vehicle Year
              </label>
              <input
                type="number"
                className="input-field"
                value={registrationForm.vehicleYear}
                onChange={(e) => setRegistrationForm({...registrationForm, vehicleYear: e.target.value})}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                License Plate
              </label>
              <input
                type="text"
                className="input-field"
                value={registrationForm.licensePlate}
                onChange={(e) => setRegistrationForm({...registrationForm, licensePlate: e.target.value})}
                required
              />
            </div>
          </div>
          <div className="mt-6">
            <button type="submit" className="btn-primary w-full">
              Register as Driver
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-2">Today's Earnings</h3>
          <p className="text-3xl font-bold">₹{mockEarnings.today}</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-2">This Week</h3>
          <p className="text-3xl font-bold">₹{mockEarnings.week}</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-2">This Month</h3>
          <p className="text-3xl font-bold">₹{mockEarnings.month}</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-6">Recent Rides</h2>
        <div className="space-y-4">
          {mockEarnings.rides.map((ride) => (
            <div key={ride.id} className="border rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-semibold mb-1">{ride.passenger}</p>
                  <p className="text-gray-600 text-sm">
                    {ride.from} → {ride.to}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-semibold">₹{ride.amount}</p>
                  <p className="text-gray-500 text-sm">{ride.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}