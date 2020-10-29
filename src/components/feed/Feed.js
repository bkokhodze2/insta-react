import React, { useState, useEffect } from "react";
import Posts from "./postss/Posts";
import Users from "./Users";

export default function Feed() {
  return (
    <div className="container feed">
      <Posts />
      <Users />
    </div>
  );
}
