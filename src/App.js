import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import React, { useEffect } from "react";
import {
  HashRouter ,Router,
  Route,
  Routes,
  Link,
  Outlet,
  useParams,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Team from "./components/Team";
import Privacy_Policy from "./components/Privacy-Policy";
import Terms_And_Condtions from "./components/Terms-And-Conditions";
import Refer_Friend from "./components/Refer-Friend";
import Blog from "./components/Blog";
import Blog_Details from "./components/Blog-Details";
// import Contact_Us from "./components/Contact_Us";
import Career from "./components/Career";
import Register from "./components/Register";
import Login from "./components/Login";
import Gym_Listing from "./components/Gym-Listing";
import Gym_Listing_Details from "./components/Gym-Listing-Details";
import PageNotFound from "./components/PageNotFound";
import Explore_passes from "./components/Explore_passes";
import "font-awesome/css/font-awesome.min.css";

import Findgym from "./components/Find_gym";
import Flexible_fitness from "./components/Flexible_fitness";
import Account from "./components/Account";
import Payment_Details from "./components/Payment_Details";
import Partnership from "./components/Partnership";
import How_it_works from "./components/How_it_works";
import VendorHome from "./components/vendor/VendorHome";
import History from "./components/vendor/History/History";
import Event from "./components/vendor/Event";
import Revieworder from "./components/Revieworder";
import UserHistory from "./components/UserHistory";
import Dashboard from "./components/vendor/Dashboard";
import MembersList from "./components/vendor/MembersList";
import CenterList from "./components/vendor/Dashboard/CenterList";
import Communication from "./components/vendor/Dashboard/Communication";
import SuperactiveOwner from "./components/SuperactiveOwner";
import SuperactiveOwnerForm from "./Element/SuperActiveOwner/SuperactiveOwnerForm";
import SuperActiveListing from "./Element/SuperActiveOwner/SuperActiveListing";
import SuperActiveOwner from "./Element/SuperActiveOwner/SuperActiveOwner";
import UserSettings from "./components/UserSettings";
import UserFeedback from "./components/UserFeedback";
import UserVoucher from "./components/UserVoucher";
import ContactUs from "./components/ContactUs";
import UserFaqs from "./components/UserFaqs";
import NotFound from "./components/404NotFound";
import ForgotPassword from "./components/ForgotPassword";
import Calendar from "./Element/Calendar";
import BookingAppointment from "./components/BookingAppointment";
import VenderLogin from "./components/VenderLogin";
import ThankYou from "./components/ThankYou";
import Revieworders from "./components/Reviewordercopy";
import AccountVerify from "./components/AccountVerify";
import Plan from './components/vendor/Plan';
function App() {
  const navigate = useNavigate();
  const isUserAuthenticated = JSON.parse(localStorage.getItem("userAuth"));
  const isVendorAuthenticated = JSON.parse(localStorage.getItem("vendorAuth"));
  console.log("isVendorAuthenticated", isVendorAuthenticated);
  // useEffect(() => {
  //   if (isUserAuthenticated) {
  //       navigate('/account')
  //   }

  // }, []);
  // useEffect(() => {
  //   if (isVendorAuthenticated) {
  //       navigate('/dashboard')
  //   }

  // }, []);
  return (
    <div className="App">
      {/* <AuthContextProvider> */}

      <Routes>
        <Route path="/review" element={<Revieworders />} />

        <Route
          path="/verify-user/:verificationToken"
          element={<AccountVerify />}
        />

        <Route path="/" element={<Home />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/privacy_policy" element={<Privacy_Policy />} />
        <Route path="/terms_and_condtions" element={<Terms_And_Condtions />} />
        <Route path="/refer_friend" element={<Refer_Friend />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog_details" element={<Blog_Details />} />
        <Route path="/contact_us" element={<ContactUs />} />
        <Route path="/career" element={<Career />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/vendor-login" element={<VenderLogin />} />
        <Route path="/gym_listing" element={<Gym_Listing />} />
        <Route path="/page_not_found" element={<PageNotFound />} />

        <Route path="/gym_listing_details" element={<Gym_Listing_Details />} />
        <Route
          path="/flexible-gym-day-and-monthly-passes"
          element={<Explore_passes />}
        />
        <Route path="/:centerparameter" element={<Findgym />} />
        <Route path="/flexible-fitness" element={<Flexible_fitness />} />
        <Route
          path="/account"
          element={isUserAuthenticated ? <Account /> : <Navigate to="/login" />}
        />
        <Route path="/Payment_Details" element={<Payment_Details />} />
        <Route path="/Partnership" element={<Partnership />} />
        <Route path="/How_it_works" element={<How_it_works />} />
        {/* <Route path="*" element={<Navigate to="/page_not_found" />} /> */}
        {/* <Route path="*" element={<Navigate to="/home" />} /> */}
        {/* vendor section */}
        <Route path="/vendor" element={<VendorHome />} />
        <Route path="/event" element={<Event />} />
        <Route path="/history" element={<History />} />
        <Route path="/user-history" element={<UserHistory />} />
        <Route path="/revieworder" element={<Revieworder />} />
        <Route
          path="/dashboard/*"
          element={
            isVendorAuthenticated ? (
              <Dashboard />
            ) : (
              <Navigate to="/vendor-login" />
            )
          }
        />

        <Route path="/members" element={<MembersList />} />
        <Route path="/my-centers" element={<CenterList />} />
        <Route path="/communication-channel" element={<Communication />} />
        <Route path="/superactive-owner" element={<SuperactiveOwner />} />
        <Route
          path="/superactive-owner-form"
          element={<SuperactiveOwnerForm />}
        />
        <Route
          path="/superactive-owner-listing"
          element={<SuperActiveListing />}
        />
        <Route path="/superactive-owner" element={<SuperActiveOwner />} />
        <Route path="/user-settings" element={<UserSettings />} />
        <Route path="/user-feedback" element={<UserFeedback />} />
        <Route path="/user-voucher" element={<UserVoucher />} />
        <Route path="/user-faqs" element={<UserFaqs />} />
        <Route path="/404-not-found" element={<NotFound />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/booking_appointment" element={<BookingAppointment />} />
      </Routes>

      {/* </AuthContextProvider> */}

      {/* <Outlet /> */}
    </div>
  );
}

export default App;
