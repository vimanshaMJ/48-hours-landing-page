import React from "react";
import classes from "./Homepage.module.css";
import TheNavbar from "../Components/Navbar";
import SecondaryButton from "../Components/SecondaryButton";

export default function Homepage() {
  return (
    <div>
      <div className={`container-fluid ${classes.navbarSection}`}>
        <TheNavbar />
      </div>

      <div className={`container-fluid ${classes.firstSection}`}>
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <SecondaryButton
                buttonText={"WE ARE HIRING "}
                buttonIcon={
                  <span className="material-symbols-outlined">east</span>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
