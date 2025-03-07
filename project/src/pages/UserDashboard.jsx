import { useState } from 'react';

export default function UserDashboard() {
  const [upcomingRides] = useState([
    {
      id: 1,
      date: 'Mar 1, 2024',
      time: '10:30 AM',
      from: 'Gachiboli',
      to: 'Airport',
      driver: 'Dheraj Majeti',
      status: 'Confirmed'
    },
    {
      id: 2,
      date: 'Mar 3, 2024',
      time: '2:00 PM',
      from: 'Gannavaram',
      to: 'Vijayawada',
      driver: 'Bhaskhar',
      status: 'Pending'
    }
  ]);

  const [pastRides] = useState([
    {
      id: 3,
      date: 'Feb 28, 2024',
      time: '9:00 AM',
      from: 'Airport',
      to: 'Pista-House',
      driver: 'Supreeth',
      status: 'Completed'
    }
  ]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow-md">
        {/* Profile Section */}
        <div className="p-6 border-b">
          <div className="flex items-center">
            <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
            <div className="ml-4">
              <h2 className="text-2xl font-bold">NAGA SAI SRIRAM</h2>
              <p className="text-gray-600">saisriram07@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-6">
          {/* Upcoming Rides */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Upcoming Rides</h3>
            <div className="space-y-4">
              {upcomingRides.map((ride) => (
                <div
                  key={ride.id}
                  className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center mb-2">
                        <span className="font-semibold">{ride.date}</span>
                        <span className="mx-2">•</span>
                        <span>{ride.time}</span>
                      </div>
                      <p className="text-gray-600 mb-2">
                        {ride.from} → {ride.to}
                      </p>
                      <p className="text-sm text-gray-500">Driver: {ride.driver}</p>
                    </div>
                    <div>
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        ride.status === 'Confirmed'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {ride.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Past Rides */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Past Rides</h3>
            <div className="space-y-4">
              {pastRides.map((ride) => (
                <div
                  key={ride.id}
                  className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center mb-2">
                        <span className="font-semibold">{ride.date}</span>
                        <span className="mx-2">•</span>
                        <span>{ride.time}</span>
                      </div>
                      <p className="text-gray-600 mb-2">
                        {ride.from} → {ride.to}
                      </p>
                      <p className="text-sm text-gray-500">Driver: {ride.driver}</p>
                    </div>
                    <div>
                      <span className="px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-800">
                        {ride.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}