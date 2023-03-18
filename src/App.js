import React from "react";
import ReactDOM from "react-dom";
import useMediaQuery from "./useMediaQuery";
import "./styles.css";
import "./carousel.css";
import ImageGallery from "react-image-gallery";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function App() {
  const matches = useMediaQuery("(min-width: 600px)");

  return (
    <div className="App">
      <div style={{ position: "relative", marginBottom: 40 }}>
        <div
          style={{
            position: "absolute",
            float: "left",
            paddingLeft: 20,
            paddingTop: 10
          }}
        >
          Call Us: +994 51 504 2506
        </div>
        <div
          style={{
            position: "absolute",
            right: 0,
            paddingRight: 20,
            paddingTop: 10
          }}
        >
          Open Hours: 08:00 - 18:00
        </div>
      </div>
      <nav>
        <div className="logo">
          <img
            src="https://i.ibb.co/1KJxJyR/logonotready-removebg-preview.png"
            alt="Gym Logo"
            // height="100px"
            width="80"
          />
        </div>
        <ul>
          <li>
            <a href="#">Ana Səhifə</a>
          </li>
          <li>
            <a href="#">Xidmətlər</a>
          </li>
          <li>
            <a href="#">Haqqımızda</a>
          </li>
          <li>
            <a href="#">Əlaqə</a>
          </li>
        </ul>
        <div className="clear"></div>
      </nav>
      <header>
        <div className="App">
          {matches ? (
            <p>Amir</p>
          ) : (
            <Carousel
              dynamicHeight="false"
              autoPlay={true}
              infiniteLoop={true}
              interval="2300"
              showThumbs={false}
              swipeable={false}
              showStatus={false}
              className="mains-lide"
            >
              <div className="card">
                <img
                  src="https://i.ibb.co/mBGvP14/2023-01-11-13.jpg"
                  className="darkened-image"
                />
                <h1 className="text">
                  <span className="blue-span">RE</span>FOCUS
                </h1>
              </div>
              <div className="card">
                <img
                  src="https://i.ibb.co/c8DrCg6/2023-01-11-7.jpg"
                  alt="DALL-E-2023-02-09-10-53-19-inferno-mysterio-king-renaissance-drawing-style"
                  className="darkened-image"
                />
                <h1 className="text">
                  <span className="blue-span">RE</span>SET
                </h1>
              </div>
              <div className="card">
                <img
                  src="https://i.ibb.co/mBGvP14/2023-01-11-13.jpg"
                  className="darkened-image"
                />
                <h1 className="text">
                  <span className="blue-span">RE</span>START
                </h1>
              </div>
            </Carousel>
          )}
        </div>
      </header>

      {/* <ImageGallery items={images} /> */}
      <section className="services">
        <h2 style={{ color: "rgb(47,114,229)" }}>Our Services</h2>
        <div className="services-container">
          <div className="service">
            <img
              src="https://i.ibb.co/FnybVGW/personal-training1.png"
              alt="Service 1"
              height="100"
            />
            <h3>Personal Training</h3>
            <p>
              Our expert trainers will help you achieve your fitness goals with
              personalized training plans and motivation.
            </p>
          </div>
          <div className="service">
            <img
              src="https://i.ibb.co/fx5ZLSY/hands1.png"
              alt="Service 2"
              height="100"
            />
            <h3>Group Fitness Classes</h3>
            <p>
              Join our high-energy group fitness classes for a fun and effective
              workout experience.
            </p>
          </div>
          <div className="service">
            <img
              src="https://i.ibb.co/2WFSwBh/noun-food-16676851.png"
              alt="Service 3"
              height="100"
            />
            <h3>Nutrition Coaching</h3>
            <p>
              Our nutrition experts will help you develop healthy eating habits
              and create a personalized meal plan for your fitness goals.
            </p>
          </div>
        </div>
      </section>

      {/* coach */}
      <section className="services coach">
        <h2 style={{ color: "rgb(47,114,229)" }}>Our Professionals</h2>
        <div className="App">
          {matches ? (
            <p>Amir</p>
          ) : (
            <Carousel
              // dynamicHeight="false"
              autoPlay={true}
              infiniteLoop={true}
              interval="3000"
              showThumbs={false}
              showStatus={false}
              showIndicators={false}
              swipeable={false}
            >
              <div>
                <div class="fitness_card">
                  <img
                    src="https://www.superprof.com/images/teachers/teacher-home-personal-training-amp-nutrition-planning-darmstadt-and-the-surrounding-area-licensed-personal-trainer-fitness-trainer.jpg"
                    alt="Fitness Trainer"
                  />
                  <h2>Fitness Trainer</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam ac justo vel velit volutpat dictum ac vitae mi.
                    Pellentesque accumsan, risus eu finibus semper, mauris leo
                    aliquet justo, non fringilla urna risus vel risus.
                  </p>
                  <a href="#" class="btn">
                    Elage saxla
                  </a>
                </div>
              </div>
              <div>
                <div class="fitness_card">
                  <img
                    src="https://images.squarespace-cdn.com/content/v1/596e6be5d2b8575f1ef5f41b/1557161067570-Z9MKP85TMDLWDDZE8N8F/IMG-4947.JPG?format=1000w"
                    alt="Fitness Trainer"
                  />
                  <h2>Fitness Trainer</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam ac justo vel velit volutpat dictum ac vitae mi.
                    Pellentesque accumsan, risus eu finibus semper, mauris leo
                    aliquet justo, non fringilla urna risus vel risus.
                  </p>
                  <a href="#" class="btn">
                    Elage saxla
                  </a>
                </div>
              </div>
              <div>
                <div class="fitness_card">
                  <img
                    src="https://nationalpti.org/wp-content/uploads/2014/02/Personal-Trainer.jpg"
                    alt="Fitness Trainer"
                  />
                  <h2>Fitness Trainer</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam ac justo vel velit volutpat dictum ac vitae mi.
                    Pellentesque accumsan, risus eu finibus semper, mauris leo
                    aliquet justo, non fringilla urna risus vel risus.
                  </p>
                  <a href="#" class="btn">
                    Elage saxla
                  </a>
                </div>
              </div>
            </Carousel>
          )}
        </div>
      </section>

      {/* payment */}
      <section className="services">
        <h2 style={{ color: "rgb(47,114,229)" }}>AYLIQ VƏ İLLİK TARİFLƏR</h2>
        <div className="payment_m">
          <div class="card_payment_m">
            <h2>Kişilər üçün</h2>
            <p className="payment_det_m">&#10004; 1 gun - 35 AZN</p>
            <p className="payment_det_m">&#10004; 1 ayliq - 60 AZN</p>
            <p className="payment_det_m">&#10004; 3 ayliq - 110 AZN</p>
            <p className="payment_det_m">&#10004; 6 ayliq - 160 AZN</p>
            <p className="payment_det_m">&#10004; 6 ayliq - 700 AZN</p>
            <br />
            <br />
            <button class="button-28" role="button">
              Elage saxla
            </button>
          </div>
          <div class="card_payment_m">
            <h2>Qadınlar üçün</h2>
            <p className="payment_det_m">&#10004; 1 gun - 35 AZN</p>
            <p className="payment_det_m">&#10004; 1 ayliq - 60 AZN</p>
            <p className="payment_det_m">&#10004; 3 ayliq - 110 AZN</p>
            <p className="payment_det_m">&#10004; 6 ayliq - 160 AZN</p>
            <p className="payment_det_m">&#10004; 6 ayliq - 700 AZN</p>
            <br />
            <br />
            <button class="button-28" role="button">
              Elage saxla
            </button>
          </div>
        </div>
      </section>
      <section className="about">
        <h2>About Us</h2>
        <p>
          We are a team of passionate fitness professionals dedicated to helping
          you achieve your fitness goals. Our gym is equipped with
          state-of-the-art equipment and our trainers and coaches are highly
          skilled and experienced. We offer a wide range of services including
          personal training, group fitness classes, nutrition coaching, and
          more. Join us today and start your journey towards a healthier,
          happier you.
        </p>
      </section>
      <footer>
        <div className="logo">
          <img
            src="https://www.example.com/logo.png"
            alt="Gym Logo"
            height="50"
          />
        </div>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <div className="clear"></div>
        <p>© 2023 Gym Name. All rights reserved.</p>
      </footer>
    </div>
  );
}
export default App;
