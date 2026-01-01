import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import "../Styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container text-center mt-5 p-3">
      <p className="footer-text">
        © 2025 Travel Planner. All rights reserved.
      </p>

      <div className="footer-icons">

        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FacebookIcon className="footer-icon" />
        </a>

        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <InstagramIcon className="footer-icon" />
        </a>

        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <YouTubeIcon className="footer-icon" />
        </a>

        <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
          <PinterestIcon className="footer-icon" />
        </a>

        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <TwitterIcon className="footer-icon" />
        </a>

      </div>
    </footer>
  );
};

export default Footer;

