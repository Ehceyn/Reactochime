import { Routes, Route, Navigate } from "react-router-dom";
import SingleDevice from "./components/Devices/SingleDevice";
import Main from "./layouts/Main";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Device from "./pages/Device";
import LogIn from "./pages/LogIn";
import Reports from "./pages/Reports";
import SignUp from "./pages/SignUp";
import Users from "./pages/users";
import SuccessPage from "./pages/SuccessPage";
import VerifyEmail from "./pages/VerifyEmail";
import TestSignUp from "./pages/testSignup";
//NOTE: remove this later
import NotificationsPage from "./pages/NotificationsPage";
import Profile from "./pages/Profile";
import ProxyDevice from "./components/Devices/ProxyDevice";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <div>
      <AnimatePresence exitBeforeEnter>
        <Routes>
          {/* start routes excluding the default layout */}
          {/* ROUTES GOES IN HERE */}
          <Route path="/sig" element={<TestSignUp />} />
          {/* end routes excluding the default layout */}
          {/* start routes using the default layout */}
          <Route path="/" element={<Main />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/devices" element={<Device />} />
            <Route
              path="/singledevice/:deviceName"
              element={<SingleDevice />}
            />
            <Route path="/proxydevice/:deviceName" element={<ProxyDevice />} />
            <Route path="/users" element={<Users />} />
            <Route path="/notifications" element={<NotificationsPage />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
          {/* end routes using the default layout */}
          {/* This route does not use the default layout */}
          {/* Auth routes starts */}/{" "}
          <Route path="auth" element={<Auth />}>
            <Route path="login" element={<LogIn />} />
            <Route path="signup" element={<SignUp />} />
          </Route>
          <Route path="/auth/verify_email" element={<VerifyEmail />} />
          <Route path="/auth/success" element={<SuccessPage />} />
          {/* Auth routes ends */}
          <Route index element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
