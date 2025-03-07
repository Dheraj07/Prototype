import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-5xl font-bold mb-6">Your Journey, Your Way</h1>
          <p className="text-xl mb-8">Find the perfect ride for your next destination</p>
          <Link to="/search" className="btn-primary">Find a Ride</Link>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-primary-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Enter Location</h3>
              <p className="text-gray-600">Tell us where you want to go</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-primary-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Choose a Ride</h3>
              <p className="text-gray-600">Select from available drivers</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-primary-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Enjoy the Journey</h3>
              <p className="text-gray-600">Travel safely to your destination</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-600 mb-4">{testimonial.text}</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-200"></div>
                  <div className="ml-4">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-gray-500 text-sm">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Routes */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Routes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularRoutes.map((route, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{route.from} → {route.to}</h3>
                <p className="text-gray-600 mb-4">Starting from ₹{route.price}</p>
                <Link to={`/search?from=${route.from}&to=${route.to}`} className="text-primary-600 hover:text-primary-700">
                  Book Now →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const testimonials = [
  {
    text: "The best ride-sharing experience I've ever had. Professional drivers and clean cars.",
    name: "Sai Sriram",
    location: "Kovvur"
  },
  {
    text: "Quick, reliable, and affordable. Exactly what I need for my daily commute.",
    name: "Supreeth N",
    location: "Tuni"
  },
  {
    text: "Great service! The app is easy to use and the drivers are always on time.",
    name: "Bhaskhar Rayudu",
    location: "Rajamahendravaram"
  }
];

const popularRoutes = [
  {
    from: "Kukatpally",
    to: "JNTUH",
    price: 800
  },
  {
    from: "Miyapur",
    to: "Ameerpet",
    price: 400
  },
  {
    from: "Banjara Hills",
    to: "Rajiv Gandhi International Airport",
    price: 500
  }
];