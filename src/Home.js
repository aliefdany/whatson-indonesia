import Logo from "url:./images/Logo.png?as=png&width=400"; /* eslint-disable-line */
import { Fragment } from "react";
import Card from "./Card";

const Home = () => {
  return (
    <Fragment>
      <div className="home"></div>
      <ul className="breadcrumbs">
        <li className="active">Home</li>
        <li>Kebudayaan</li>
        <li>Kuliner</li>
        <li>Wisata</li>
      </ul>
      <div className="home-overlay">
        <div className="welcome-text">
          <h3>Halaman Utama | ID</h3>
          <h1>Kenali Indonesia Lebih Jauh</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            interdum orci ipsum, in consequat risus tempor id. Etiam at massa
            eleifend, tempus diam id, facilisis est. Duis turpis risus,
            convallis vel consectetur in, hendrerit vitae justo. Praesent
            ultricies lorem urna, eget cursus dui luctus quis. Nam malesuada non
            ex sed.
          </p>
          <button>Selengkapnya</button>
        </div>
        <img src={Logo} alt="company-logo" className="welcome-logo"></img>
      </div>
      <div className="page-2">
        <div className="home-section culture">
          <div className="home-section-image bg">
            <div className="section-image">
              <div className="section-text">
                <h4>Lorem | Ipsum</h4>
                <h1>Lorem Ipsum Dolor Anjay</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque eget venenatis libero, vel feugiat odio. Nunc
                  fringilla eros purus. Aliquam ac leo a erat iaculis pharetra.
                  Sed ultricies erat tellus.{" "}
                </p>
              </div>
              <div className="image-location">Location Here</div>
            </div>
          </div>
          <div className="home-section-cards bg">
            <Card
              images="https://via.placeholder.com/500"
              title="Some Text"
              subtitle="lorem ipsum dolor sit amet. i dont know what to write anymore"
            />
            <Card
              images="https://via.placeholder.com/500"
              title="Some Text"
              subtitle="lorem ipsum dolor sit amet. i dont know what to write anymore"
            />
            <Card
              images="https://via.placeholder.com/500"
              title="Some Text"
              subtitle="lorem ipsum dolor sit amet. i dont know what to write anymore"
            />
          </div>
          <div className="home-section-news bg">
            <h4>Lorem | Ipsum</h4>
            <h1>Lorem Ipsum Dolor Anjay</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque eget venenatis libero, vel feugiat odio. Nunc
              fringilla eros purus. Aliquam ac leo a erat iaculis pharetra. Sed
              ultricies erat tellus.{" "}
            </p>
            <button>Selengkapnya</button>
          </div>
        </div>
      </div>
      <div className="page-3"></div>
    </Fragment>
  );
};

export default Home;
