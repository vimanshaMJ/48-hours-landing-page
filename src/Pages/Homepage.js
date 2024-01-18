import React from "react";
import Form from "react-bootstrap/Form";
import classes from "./Homepage.module.css";
import TheNavbar from "../Components/Navbar";
import SecondaryButton from "../Components/SecondaryButton";
import img1 from "../Images/image-1.jpg";
import rightIcon from "../Images/right-icon.png";
import PrimaryButton from "../Components/PrimaryButton";

export default function Homepage() {
  return (
    <div>
      <div className={`container-fluid ${classes.navbarSection}`}>
        <TheNavbar />
      </div>

      <div className={`container-fluid ${classes.firstSection}`}>
        <div className="container">
          <div className="row">
            <div className={`col-sm-6 ${classes.section1LeftCol}`}>
              <SecondaryButton
                buttonText={"WE ARE HIRING "}
                buttonIcon={
                  <span className="material-symbols-outlined">east</span>
                }
              />
              <h1 className={classes.colTitle}>
                The best place to find your dream job
              </h1>
              <p className={classes.colPara}>
                Find job you love and research the fastest-growing companies,
                and hire experienced workers.
              </p>
              <div className={`row ${classes.searchBar}`}>
                <div className="col-4">
                  <Form.Control
                    type="text"
                    placeholder="Job Title"
                    className={classes.jobTitleSearch}
                  />
                </div>

                <div className="col-4">
                  <Form.Control
                    type="text"
                    placeholder="Location"
                    className={classes.locationSearch}
                  />
                </div>
                <div className="col-4">
                  <PrimaryButton
                    buttonText={"Search >"}
                    className={classes.searchBtn}
                  />
                </div>
              </div>
              <p>
                {" "}
                <span>
                  {" "}
                  <img src={rightIcon} className={classes.rightIcon} />{" "}
                </span>{" "}
                7 Days free trial{" "}
                <span>
                  {" "}
                  <img src={rightIcon} className={classes.rightIcon} />{" "}
                </span>{" "}
                Easy to set up{" "}
              </p>
            </div>
            <div className={`col-sm-6 ${classes.section1RightCol}`}>
              <img src={img1} alt="img1" className={classes.img1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
