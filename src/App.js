import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import MyBookings from "./pages/My-Bookings/MyBookings";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Venue from "./pages/Venue/Venue";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Navbar />
        <div className='conatiner'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/venues' element={<Venue />} />
            <Route path='/my-bookings' element={<MyBookings />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </div>
      </header>
      <div></div>
      <footer>
        <p>Copyright @ My Booking App 2024</p>
      </footer>
    </div>
  );
}

export default App;
