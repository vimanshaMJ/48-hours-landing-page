import React from "react";
import classes from "./Homepage.module.css";
import TheNavbar from "../Components/Navbar";

export default function Homepage() {
  return (
    <div>
      <div className={`container-fluid ${classes.navbarSection}`}>
        <TheNavbar />
      </div>
    </div>
  );
}
