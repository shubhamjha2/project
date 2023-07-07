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
              src="https://i.postimg.cc/1RMTCJqD/Pik-Png-com-ramen-noodles-png-654531-11zon.png"
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

              <h3>FIRMKING PVT. LTD.</h3>
              <div className="align_center-button">
                <a href="#">READ MORE</a>
              </div>
            </div>
          </div>
        </div>
        <div className="firminfo">
          <div className="firminfo-info">
            <p>
              We have the best laid out Cryogenic plant in India. This is The
              GLOBAL NEXT Generation grinding technology under super cool
              environment. This ensures that nutrients and the essential oils in
              the spices are retained. Thus, the goodness, aroma, and texture of
              the products are perfectly maintained.
            </p>

            <h3>FARMKING FOOD PRODUCTS PVT. LTD.</h3>
          </div>
          <div className="firminfo-info">
            <p>
              We have the best laid out Cryogenic plant in India. This is The
              GLOBAL NEXT Generation grinding technology under super cool
              environment. This ensures that nutrients and the essential oils in
              the spices are retained. Thus, the goodness, aroma, and texture of
              the products are perfectly maintained.
            </p>

            <h3>FARMKING FOOD PRODUCTS PVT. LTD.</h3>
          </div>
          <div className="firminfo-info">
            <p>
              We have the best laid out Cryogenic plant in India. This is The
              GLOBAL NEXT Generation grinding technology under super cool
              environment. This ensures that nutrients and the essential oils in
              the spices are retained. Thus, the goodness, aroma, and texture of
              the products are perfectly maintained.
            </p>

            <h3>FARMKING FOOD PRODUCTS PVT. LTD.</h3>
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
