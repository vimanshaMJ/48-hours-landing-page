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
import loom from "../Images/loom.png";
import hubspot from "../Images/hubspot.png";
import framer from "../Images/framer.png";
import notion from "../Images/notion.png";
import spotify from "../Images/spotify.png";
import twitter from "../Images/twitter.png";
import location from "../Images/location.png";
import coin from "../Images/coin.png";

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
              <h5 className={classes.companyTitle}>
                Trusted by 150+ world's best companies
              </h5>
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
                <h4 className={classes.cardLink}>
                  Learn More{" "}
                  <span className="material-symbols-outlined">east</span>{" "}
                </h4>{" "}
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
                <h4 className={classes.cardLink}>
                  Learn More{" "}
                  <span className="material-symbols-outlined">east</span>{" "}
                </h4>
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
                <h4 className={classes.cardLink}>
                  Learn More
                  <span className="material-symbols-outlined">east</span>
                </h4>
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
            <div className={`col-md-5 ${classes.imgCol}`}>
              <img src={img2} className={classes.img2} />
            </div>
            <div className={`col-md-5 ${classes.col5}`}>
              <h4 className={classes.number}>02</h4>
              <h2 className={classes.subTitle}>Fill your personal data</h2>
              <p className={classes.personalPara}>
                Finish your register and complete your personal data and prepare
                your resume.
              </p>
              <hr className={classes.hrule} />

              <h5 className={classes.list}>
                <img src={rightIcon} className={classes.rightIcon} /> One
                workflow.
                <span>
                  <p className={classes.plist}>
                    Easily collaborate with temas to find & hire the right
                    candidate.
                  </p>
                </span>
              </h5>
              <h5 className={classes.list}>
                <img src={rightIcon} className={classes.rightIcon} /> Easier
                Applying.
                <span>
                  <p className={classes.plist}>
                    Create account that will engage your profile.
                  </p>
                </span>
              </h5>
            </div>
          </div>

          <div className={`row ${classes.cardRow2}`}>
            <div className={`col-lg-2 col-md-4 ${classes.cardCol2}`}>
              <p>01</p>
              <p className={classes.cardTitle2}>Login or Register</p>
              <p className={classes.cardPara2}>
                Follow the whole step and you're just ready to get started.
              </p>
            </div>
            <div className={`col-lg-2 col-md-4 ${classes.cardCol2}`}>
              <p>02</p>
              <p className={classes.cardTitle2}>Fill your Personal Data</p>
              <p className={classes.cardPara2}>
                Finish your register and complete your personal data.
              </p>
            </div>
            <div className={`col-lg-2 col-md-4 ${classes.cardCol2}`}>
              <p>03</p>
              <p className={classes.cardTitle2}>Upload your Resume</p>
              <p className={classes.cardPara2}>
                Upload your latest resume and match with your background.
              </p>
            </div>
            <div className={`col-lg-2 col-md-4 ${classes.cardCol2}`}>
              <p>04</p>
              <p className={classes.cardTitle2}>Find the Match Job</p>
              <p className={classes.cardPara2}>
                Look for job vacancy and immediately get your dream job.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className={classes.fifthSection}>
        <div className="container">
          <div className="row justify-content-center">
            <div className={`col-12 ${classes.vacancyCol}`}>
              <SecondaryButton
                buttonText={"JOB VACANCY"}
                className={classes.vacancyBtn}
              />
              <h1 className={classes.rowTitle}>Discover the best job</h1>
              <p>
                Start career with the best company in the world, we ensures you
                to get the best job possible.
              </p>
            </div>
            <div className={`col-2 ${classes.btncol1}`}>
              <PrimaryButton
                buttonText={"Popular"}
                className={classes.popularBtn}
              />
            </div>
            <div className={`col-2 ${classes.btncol2}`}>
              <PrimaryButton
                buttonText={"Latest"}
                className={classes.latestBtn}
              />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row justify-content-center">
            <div className={`col-sm-5  ${classes.jobCard}`}>
              <div className="row">
                <div className="col-2">
                  <img src={loom} alt="" className={classes.jobIcon} />
                </div>
                <div className="col-8">
                  <h5 className={classes.cardPosition}>Web Developer</h5>
                  <p>Loom</p>
                </div>
                <div className="col-2">
                  <span
                    className={`material-symbols-outlined ${classes.jobArrow}`}
                  >
                    east
                  </span>
                </div>
              </div>
              <div className="row">
                <p>
                  We are on a mission to empower everyone at work to communicate
                  more effectively.
                </p>
                <hr />
                <p>
                  <img src={location} className={classes.location} />
                  New York •
                  <img src={coin} className={classes.coin} /> 75k-90k / Year •
                  Part-Time
                </p>
              </div>
            </div>

            <div className={`col-sm-5  ${classes.jobCard}`}>
              <div className="row">
                <div className="col-2">
                  <img src={hubspot} alt="" className={classes.jobIcon} />
                </div>
                <div className="col-7">
                  <h5 className={classes.cardPosition}>
                    Senior DevOps Engineer
                  </h5>
                  <p>Hubspot</p>
                </div>
                <div className="col-3">
                  <p className={classes.cardDate}>7 Jan 2022</p>
                </div>
              </div>
              <div className="row">
                <p>
                  Hubspot is a linear customer relationship management platform
                  for scaling companies.
                </p>
                <hr />
                <p>
                  <img src={location} className={classes.location} />
                  California •
                  <img src={coin} className={classes.coin} /> 75k-90k / Year •
                  Contract
                </p>
              </div>
            </div>

            <div className={`col-sm-5  ${classes.jobCard}`}>
              <div className="row">
                <div className="col-2">
                  <img src={framer} alt="" className={classes.jobIcon} />
                </div>
                <div className="col-7">
                  <h5 className={classes.cardPosition}>Product Designer</h5>
                  <p>Framer</p>
                </div>
                <div className="col-3">
                  <p className={classes.cardDate}>23 Jan 2022</p>
                </div>
              </div>
              <div className="row">
                <p>
                  We are Framer. We're buliding the web design platform to help
                  you do that.
                </p>
                <hr />
                <p>
                  <img src={location} className={classes.location} />
                  San Diego •
                  <img src={coin} className={classes.coin} /> 75k-90k / Year •
                  Part-Time
                </p>
              </div>
            </div>

            <div className={`col-sm-5  ${classes.jobCard}`}>
              <div className="row">
                <div className="col-2">
                  <img src={notion} alt="" className={classes.jobIcon} />
                </div>
                <div className="col-7">
                  <h5 className={classes.cardPosition}>Frontend Engineer</h5>
                  <p>Notion</p>
                </div>
                <div className="col-3">
                  <p className={classes.cardDate}>15 Jan 2022</p>
                </div>
              </div>
              <div className="row">
                <p>
                  You all-in-one workspace for tasks, notes, wikis, databases
                  and team collaboration.
                </p>
                <hr />
                <p>
                  <img src={location} className={classes.location} />
                  New York •
                  <img src={coin} className={classes.coin} /> 10k-18k / Month •
                  Internship
                </p>
              </div>
            </div>

            <div className={`col-sm-5  ${classes.jobCard}`}>
              <div className="row">
                <div className="col-2">
                  <img src={spotify} alt="" className={classes.jobIcon} />
                </div>
                <div className="col-7">
                  <h5 className={classes.cardPosition}>Data Scientist</h5>
                  <p>Spotify</p>
                </div>
                <div className="col-3">
                  <p className={classes.cardDate}>2 Feb 2022</p>
                </div>
              </div>
              <div className="row">
                <p>
                  Passionate music fans. Innovative tech props. Perfect hermony.
                  Join our band.
                </p>
                <hr />
                <p>
                  <img src={location} className={classes.location} />
                  California •
                  <img src={coin} className={classes.coin} /> 75k-90k / Year •
                  Full-Time
                </p>
              </div>
            </div>

            <div className={`col-sm-5  ${classes.jobCard}`}>
              <div className="row">
                <div className="col-2">
                  <img src={loom} alt="" className={classes.jobIcon} />
                </div>
                <div className="col-7">
                  <h5 className={classes.cardPosition}>UX Resercher</h5>
                  <p>Twitter</p>
                </div>
                <div className="col-3">
                  <p className={classes.cardDate}>13 Feb 2022</p>
                </div>
              </div>
              <div className="row">
                <p>
                  Twitter is the market leading linking platform that was the
                  first of its kind.
                </p>
                <hr />
                <p>
                  <img src={location} className={classes.location} />
                  California •
                  <img src={coin} className={classes.coin} /> 8k-15k / Month •
                  Internship
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
