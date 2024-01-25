import React, { useState, useEffect } from "react";
import "./home.css"; // CSS import
const logos = [
  process.env.PUBLIC_URL + "/images/home_img/certificate_img/logo1-1.png",
  process.env.PUBLIC_URL + "/images/home_img/certificate_img/logo2.png",
  process.env.PUBLIC_URL + "/images/home_img/certificate_img/logo3.png",
  process.env.PUBLIC_URL + "/images/home_img/certificate_img/logo4.png",
  process.env.PUBLIC_URL + "/images/home_img/certificate_img/logo5.png",
  process.env.PUBLIC_URL + "/images/home_img/certificate_img/logo6.png",
];
export default function Home2() {
  const [currentLogo, setCurrentLogo] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogo((prevLogo) => (prevLogo + 1) % logos.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className=" home2_bg">
        <div className="indiabesyt">
          <div className="firminfo">
            <div className="left-section">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/images/prefabricated-warehouse-structure-1000x1000.jpg"
                }
                alt="wherehouse"
              />
            </div>

            <div className="right-section">
              <div className="firminfo-info">
                <div className="home_ri_tp">
                  <h2>BEST NOODLE QUALITY IN INDIA</h2>
                </div>
                <p>
                  With our relentless pursuit of innovation and quality,
                  FirmKing Pvt. Ltd. has emerged as the leader in the
                  noodle-making industry. Our state-of-the-art technology has
                  redefined the standards for excellence, setting a new
                  benchmark for the entire market. Let us take you on a journey
                  through our best noodle-making technology.
                </p>

                <h3 className="firmpvtltd">FIRMKING PVT. LTD.</h3>
                <div className="align_center-button">
                  <a href="/about">READ MORE</a>
                </div>
              </div>
            </div>
          </div>
          <div className="firminfo">
            <div className="firminfo-info">
              <h3 className="pinfohead">2000+ BOXES PER DAY </h3>

              <p className="jhajhsj">
                Our daily production is over 2000 packages per day including
                Boxes, Pouches, Containers and Non-Woven Bags.
              </p>
            </div>
            <div className="firminfo-info">
              <h3 className="pinfohead">SALE IN 15+ STATES</h3>

              <p className="jhajhsj">
                Firmking has been successfully exporting its products in all the
                ranges among 15 different states.
              </p>
            </div>
            <div className="firminfo-info">
              <h3 className="pinfohead">10+ PRODUCT RANGE</h3>
              <p className="jhajhsj">
                Firmking has more than 10+ different types of products including
                Basic , Blended , Whole and Wheat.
              </p>
            </div>
          </div>
          <div className="certificate">
            <h1 className="cofq">CERTIFICATE OF QUALITY</h1>
            <div className="logo-container">
              {logos.map((logo, index) => {
                const adjustedIndex = (index + currentLogo) % logos.length;
                return (
                  <img
                    className="logobox"
                    key={index}
                    src={logos[adjustedIndex]}
                    alt={`Logo ${adjustedIndex + 1}`}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}