import React from "react";
import "./process.css";
import leftImage1 from "./images_pro/1815-500x500.jpg";
import rightImage1 from "./images_pro/Italian-Pasta-Types-720x.jpg";
import leftImage2 from "./images_pro/July-blog-3-min.jpg";
import rightImage2 from "./images_pro/image.jpg";
import leftImage3 from "./images_pro/Noodles-Blog-JAN2.jpg";
// ... add import statements for other images if needed

export default function Process() {
  return (
    <section className="process-section">
      <div className="backdeopfilbri">
        <div className="containerflexing">
          <div className="insert_img_flx">
            <div className="process_img">
              <img src={leftImage1} alt="Left_Image" className="image" />
            </div>

            <div className="container">
              <div className="section-content">
                <div className="text">
                  <h2 className="section-title">Advanced Automated System</h2>
                  <p className="section-description">
                    Our noodle-making technology incorporates an advanced
                    automated system that streamlines the entire production
                    process. From mixing the dough to cutting the noodles, every
                    step is meticulously executed with precision and efficiency.
                    Say goodbye to labor-intensive methods and hello to a future
                    of automation.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="insert_img_flx1">
            <div className="container">
              <div className="section-content">
                <div className="text">
                  <h2 className="section-title">
                    Customizable Noodle Varieties
                  </h2>
                  <p className="section-description">
                    We understand that taste preferences differ, which is why
                    our technology allows for customizable noodle varieties.
                    Whether you want thin or thick noodles, long or short, our
                    machines can adapt to your specific requirements. Get ready
                    to cater to a diverse range of consumer tastes, expanding
                    your market reach.
                  </p>
                </div>
              </div>
            </div>
            <div className="process_img">
              <img src={rightImage1} alt="rightImage" className="image" />
            </div>
          </div>
          <div className="insert_img_flx">
            <div className="process_img">
              <img src={leftImage2} alt="Left10Image" className="image" />
            </div>

            <div className="container">
              <div className="section-content">
                <div className="text">
                  <h2 className="section-title">Enhanced Quality Control</h2>
                  <p className="section-description">
                    Quality is the cornerstone of our technology. Our machines
                    are equipped with advanced sensors and monitoring systems
                    that ensure consistent quality at every stage. From
                    measuring the precise ratio of ingredients to monitoring
                    cooking times, we leave no room for error. Deliver noodles
                    of the highest standard with FirmKing Pvt. Ltd.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="insert_img_flx1">
            <div className="container">
              <div className="section-content">
                <div className="text">
                  <h2 className="section-title">Energy Efficiency</h2>
                  <p className="section-description">
                    At FirmKing Pvt. Ltd., we are committed to sustainability.
                    Our noodle-making technology is designed to be
                    energy-efficient, reducing your carbon footprint without
                    compromising on productivity. Experience the benefits of a
                    greener approach while maximizing your operational
                    efficiency.
                  </p>
                </div>
              </div>
            </div>
            <div className="process_img">
              <img src={rightImage2} alt="right1Image" className="image" />
            </div>
          </div>
          <div className="insert_img_flx">
            <div className="process_img">
              <img src={leftImage3} alt="Left2_Image" className="image" />
            </div>

            <div className="container">
              <div className="section-content">
                <div className="text">
                  <h2 className="section-title">
                    Comprehensive Support and Training
                  </h2>
                  <p className="section-description">
                    We believe that investing in our clients' success is
                    crucial. Alongside our cutting-edge technology, we provide
                    comprehensive support and training to ensure a seamless
                    transition and optimal utilization of our noodle-making
                    systems. Our team of experts is always ready to assist you,
                    empowering you to excel in the competitive noodle market.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
