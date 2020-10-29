import React, { useState, useEffect } from "react";
import PhotoCarousel from "./PhotoCarousel"
import Palette from "./Palette";

const Profile = () => {
  return (
    <div>
      <Palette />
      <PhotoCarousel/>
    </div>
  );
};

export default Profile;
