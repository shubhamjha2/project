import React, { useState, useEffect } from "react";
import "./home.css";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 2);
    }, 5666000);

    return () => clearInterval(interval);
  }, []);

  return (
      <div className="home_root">
        <div
          className={`home_bg1 ${currentSlide === 0 ? "visible" : "hidden"}`}
        >
          <img
            className="bg_pan_img"
            src={
              process.env.PUBLIC_URL +
              "/images/home_img/stone-black-cooking-background-kitchen-board-with-vegetables-spices-black-stone-background-top-view.jpg"
            }
            alt="Background"
          />

          <img
            className="overlay_image"
            src={process.env.PUBLIC_URL + "/images/home_img/Daco-1408473.png"}
            alt="Overlay"
          />
          <img
            className="overlay_image1"
            src={process.env.PUBLIC_URL + "/images/home_img/pngegg-min.png"}
            alt="Overlay"
          />
          <img
            className="overlay_image2"
            src={
              process.env.PUBLIC_URL + "/images/home_img/pngegg-2-min (1).png"
            }
            alt="Overlay"
          />
          <img
            className="overlay_image3"
            src={process.env.PUBLIC_URL + "/images/home_img/pngegg-1-min.png"}
            alt="Overlay"
          />
          <img
            className="overlay_image4"
            src={process.env.PUBLIC_URL + "/images/home_img/pngegg-3-min.png"}
            alt="Overlay"
          />

          <h1 className="overlay_text">Discover The Perfect Taste</h1>
        </div>
        <div
          className={`home_bg2 ${currentSlide === 1 ? "visible" : "hidden"}`}
        >
          <img
            className="bg_pan_img1"
            src={
              process.env.PUBLIC_URL +
              "/images/home_img/slide_img/wepik-export-20230723105824j9jm (1) (1).png"
            }
            alt="Background1"
          />
          <img
            className="overlay_image_slide1"
            src={
              process.env.PUBLIC_URL +
              "/images/home_img/slide_img/imgbin_indomie-distribution-product-marketing-instant-noodle-png.png"
            }
            alt="Overlay_slide1"
          />
          <img
            className="overlay_image_slide1_1"
            src={
              process.env.PUBLIC_URL +
              "/images/home_img/slide_img/jpeg-optimizer_—Pngtree—enthusiastic crowd concert stage_528268 (1) (1).png"
            }
            alt="Overlayslide12"
          />
          <img
            className="overlay_image_slide1_2"
            src={
              process.env.PUBLIC_URL +
              "/images/home_img/slide_img/kisspng-lighting-table-pendant-light-light-fixture-creative-simple-white-lamps-5aaaf31b95b645.1793482715211527956132.png"
            }
            alt="Overlayslide13"
          />
          <img
            className="overlay_image_slide1_3"
            src={
              process.env.PUBLIC_URL +
              "/images/home_img/slide_img/pngegg (5).png"
            }
            alt="Overlayslide14"
          />
          <h1 className="overlay_text_slide1">Noodles That Inspire Delight</h1>
          <a className="home_slide1_but" href="/product">
            BUY NOW
          </a>
        </div>
        <div className="slide_dots">
          <span
            className={`dot ${currentSlide === 0 ? "active" : ""}`}
            onClick={() => setCurrentSlide(0)}
          ></span>
          <span
            className={`dot ${currentSlide === 1 ? "active" : ""}`}
            onClick={() => setCurrentSlide(1)}
          ></span>
        </div>
      </div>
  );
}
