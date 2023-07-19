import React, { useState, useEffect } from "react";
import "./home.css";

const logos = [
  "https://i.postimg.cc/0jrd16v0/logo1-1.png",
  "https://i.postimg.cc/JhJ2S2xz/logo2.png",
  "https://i.postimg.cc/85mnzfq8/logo3.png",
  "https://i.postimg.cc/c1TbqYRw/logo4.png",
  "https://i.postimg.cc/q7811CBt/logo5.png",
  "https://i.postimg.cc/N07x6qbm/logo6.png",
];

export default function Home() {
  const [currentLogo, setCurrentLogo] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogo((prevLogo) => (prevLogo + 1) % logos.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home_root">
      <div className="home_bg1">
        <img
          className="bg_pan_img"
          src="https://i.postimg.cc/jS9d4ym9/stone-black-cooking-background-kitchen-board-with-vegetables-spices-black-stone-background-top-view.jpg"
          alt="Background"
        />

        <img
          className="overlay_image"
          src="https://i.postimg.cc/J4j4kYdh/Daco-1408473.png"
          alt="Overlay"
        />
        <img
          className="overlay_image1"
          src="https://i.postimg.cc/W1tw2sqJ/pngegg-min.png"
          alt="Overlay"
        />
        <img
          className="overlay_image2"
          src="https://i.postimg.cc/8z2tkwfS/pngegg-2-min.png"
          alt="Overlay"
        />
        <img
          className="overlay_image3"
          src="https://i.postimg.cc/vBzzzsqY/pngegg-1-min.png"
          alt="Overlay"
        />
        <img
          className="overlay_image4"
          src="https://i.postimg.cc/kg6TdL4s/pngegg-3-min.png"
          alt="Overlay"
        />

        <h1 className="overlay_text">Discover The Perfect Taste</h1>
      </div>
      <div className="indiabesyt">
        <div className="firminfo">
          <div className="left-section">
            <img
              src="https://i.postimg.cc/8cDBMntz/prefabricated-warehouse-structure-1000x1000.jpg"
              alt="Cryogenic Plant Image"
            />
          </div>

          <div className="right-section">
            <div className="firminfo-info">
              <div className="home_ri_tp">
                <h2>BEST NOODLE QUALITY IN INDIA</h2>
              </div>
              <p>
                With our relentless pursuit of innovation and quality, FirmKing
                Pvt. Ltd. has emerged as the leader in the noodle-making
                industry. Our state-of-the-art technology has redefined the
                standards for excellence, setting a new benchmark for the entire
                market. Let us take you on a journey through our best
                noodle-making technology.
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
  );
}
