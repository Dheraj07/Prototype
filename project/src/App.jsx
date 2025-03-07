import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import BookingPage from './pages/BookingPage';
import UserDashboard from './pages/UserDashboard';
import DriverDashboard from './pages/DriverDashboard';
import { RideProvider } from './context/RideContext';

function App() {
  return (
    <Router>
      <RideProvider>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/booking" element={<BookingPage />} />
              <Route path="/dashboard" element={<UserDashboard />} />
              <Route path="/driver" element={<DriverDashboard />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </RideProvider>
    </Router>
  );
}

export default App;