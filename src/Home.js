import Logo from "url:./images/Logo.png?as=png&width=400"; /* eslint-disable-line */
import { Fragment } from "react";

const Home = () => {
  return (
    <Fragment>
      <div className="home"></div>
      <div className="home-overlay">
        <div className="breadcrumbs">
          <ul>
            <li className="active">Home</li>
            <li>Kebudayaan</li>
            <li>Kuliner</li>
            <li>Wisata</li>
          </ul>
        </div>
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
    </Fragment>
  );
};

export default Home;
