import React from "react";

function Footer() {
  return (
    <div className="footer" id="contact">
      <div className="container">
        <a href="#" className="logo">
          Amer
        </a>
        <div className="link">
          <a
            href="https://www.facebook.com/profile.php?id=100010224039198&mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=201033705805"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-whatsapp"></i>
          </a>
          <a
            href="https://instagram.com/ahmed_3amer118?igshid=MzNlNGNkZWQ4Mg=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/ahmed-amer-884242289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
        <div className="line">
          <i className="fas fa-map-marker-alt fa-fw"></i>
          <div className="info">Egypt, Cairo, Obour city</div>
        </div>
        <div className="line">
          <i className="fas fa-phone-volume fa-fw"></i>
          <div className="info">
            <span>
              <a href="tel:01033705805">01033705805</a>
            </span>
          </div>
        </div>
      </div>
      <h2>
        Made with  by
        <span>
          <a href="mailto:amer73090@gmail.com">amer73090@gmail.com</a>
        </span>
      </h2>
    </div>
  );
}

export default Footer;
