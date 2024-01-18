import React from "react";
import Form from "react-bootstrap/Form";
import classes from "./Homepage.module.css";
import TheNavbar from "../Components/Navbar";
import SecondaryButton from "../Components/SecondaryButton";
import img1 from "../Images/image-1.jpg";
import img2 from "../Images/image-2.jpg";
import rightIcon from "../Images/right-icon.png";
import PrimaryButton from "../Components/PrimaryButton";
import company1 from "../Images/company-1.jpg";
import company2 from "../Images/company-2.jpg";
import company3 from "../Images/company-3.jpg";
import company4 from "../Images/company-4.jpg";
import company5 from "../Images/company-5.jpg";
import icon1 from "../Images/icon-1.jpg";
import icon2 from "../Images/icon-2.jpg";
import icon3 from "../Images/icon-3.jpg";

export default function Homepage() {
  return (
    <div>
      <div className={`container-fluid ${classes.navbarSection}`}>
        <TheNavbar />
      </div>

      <div className={`container-fluid ${classes.firstSection}`}>
        <div className="container">
          <div className="row">
            <div className={`col-md-6 ${classes.section1LeftCol}`}>
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
            <div className={`col-md-6 ${classes.section1RightCol}`}>
              <img src={img1} alt="img1" className={classes.img1} />
            </div>
          </div>
        </div>
      </div>

      <div className={`container-fluid ${classes.secondSection}`}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h5>Trusted by 150+ world's best companies</h5>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-2 col-md-4 col-sm-6">
              <img src={company1} className={classes.companyLogo} />
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <img src={company2} className={classes.companyLogo} />
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <img src={company3} className={classes.companyLogo} />
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <img src={company4} className={classes.companyLogo} />
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <img src={company5} className={classes.companyLogo} />
            </div>
          </div>
        </div>
      </div>

      <div className={`container-fluid ${classes.thirdSection}`}>
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className={`col-12 ${classes.hiraceCol}`}>
              <SecondaryButton
                buttonText={"WHY HIRACE"}
                className={classes.hiraceBtn}
              />
              <h1 className={classes.rowTitle}>New way to get a job</h1>
              <p>
                Once you gain access to the Hirace platform you start out by
                adding you first team roles.
              </p>
            </div>
          </div>
          <div className={`row ${classes.cardRow}`}>
            <div className={`col-md-3 col-sm-4 ${classes.cardCol}`}>
              <img src={icon1} className={classes.icon} />
              <h4 className={classes.cardTitle}>Manage candidates easily</h4>
              <p className={classes.cardPara}>
                Our easy-to-use software lets you evaluate candidates and move
                them faster
              </p>
              <a href="">
                <h4 className={classes.cardLink}>Learn More</h4>{" "}
              </a>
            </div>

            <div className={`col-md-3 col-sm-4 ${classes.cardCol}`}>
              <img src={icon2} className={classes.icon} />
              <h4 className={classes.cardTitle}>
                User-friendly hiring software
              </h4>
              <p className={classes.cardPara}>
                Make it easy and quick for top candidates to find your job.
              </p>
              <a href="">
                <h4 className={classes.cardLink}>Learn More</h4>{" "}
              </a>
            </div>

            <div className={`col-md-3 col-sm-4 ${classes.cardCol}`}>
              <img src={icon3} className={classes.icon} />
              <h4 className={classes.cardTitle}>Make the perfect hire</h4>
              <p className={classes.cardPara}>
                Reduce hiring time by finding qualified candidates quickly and
                easily.
              </p>
              <a href="">
                <h4 className={classes.cardLink}>Learn More</h4>{" "}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={`container-fluid ${classes.fourthSection}`}>
        <div className="container-fluid">
          <div className="row">
            <div className={`col-12 ${classes.worksCol}`}>
              <SecondaryButton
                buttonText={"HOW IT WORKS"}
                className={classes.worksBtn}
              />
              <h1 className={classes.rowTitle}>Getting started is easy</h1>
              <p>
                Create a profile and we'll match you with the best jobs and your
                dream companies and jobs in the world.
              </p>
            </div>
          </div>

          <div className={`row ${classes.worksRow}`}>
            <div className={`col-md-5 ${classes.col5}`}>
              <img src={img2} className={classes.img2} />
            </div>
            <div className={`col-md-5 ${classes.col5}`}>
              <h4 className={classes.number}>02</h4>
              <h2 className={classes.subTitle}>Fill your personal data</h2>
              <p>
                Finish your register and complete your personal data and prepare
                your resume.
              </p>
              <hr className={classes.hrule} />

              <h5 className={classes.list}>
                <img src={rightIcon} className={classes.rightIcon} /> One
                workflow.
                <span>
                  <p style={{ display: "inline" }}>
                    Easily collaborate with temas to find & hire the right
                    candidate.
                  </p>
                </span>
              </h5>
              <h5 className={classes.list}>
                <img src={rightIcon} className={classes.rightIcon} /> Easier
                Applying.
                <span>
                  <p style={{ display: "inline" }}>
                    Create account that will engage your profile.
                  </p>
                </span>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
