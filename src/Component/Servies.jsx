import React from "react";
import { CgWebsite } from "react-icons/cg";
import { FaRegUserCircle, FaStore } from "react-icons/fa";

function Servies() {
  return (
    <section className="servies" id="servies">
      <h1 className="title">Servies </h1>
      <div className="servies-box container">
        <div className="box">
          <span>
            <CgWebsite />
          </span>
          <h2>Website </h2>
        </div>
        <div className="box">
          <span>
            <FaRegUserCircle />
          </span>

          <h2>Portfolio </h2>
        </div>
        <div className="box">
          <span>
            <FaStore />
          </span>

          <h2>E-commerce </h2>
        </div>
      </div>
    </section>
  );
}

export default Servies;
