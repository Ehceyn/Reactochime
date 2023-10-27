import React, { useState } from "react";
import GoToTop from "../components/GoToTop/GoToTop";
import ProfileCard from "../components/Profile/ProfileCard/ProfileCard";
import SubscriptionAndTxns from "../components/Profile/SubscriptionAndTxns/SubscriptionAndTxns";

const Profile = () => {
  return (
    <div className="font-poppins">
      <ProfileCard />
      <SubscriptionAndTxns />
      <GoToTop />
    </div>
  );
};

export default Profile;
