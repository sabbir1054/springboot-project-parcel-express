import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Admin/Dashboard";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import TrackingPage from "./pages/TrackingPage";
import AddOrder from "./pages/Users/AddOrder";
import MakePaymentPage from "./pages/Users/MakePaymentPage";
import OrderHistory from "./pages/Users/OrderHistory";
import Profile from "./pages/Users/Profile";
import Footer from "./shared/Footer";
import NavigationBar from "./shared/NavigationBar";

function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/user/profile" element={<Profile />} />
        <Route path="/new-order/payment" element={<MakePaymentPage />} />
        <Route path="/user/history" element={<OrderHistory />} />
        <Route path="/user/new-order" element={<AddOrder />} />
        <Route path="/admin/profile" element={<Profile />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/parcelTracking" element={<TrackingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
