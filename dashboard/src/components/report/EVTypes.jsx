import React from "react";
import "./report.css";

const TypeSet = () => {
  return (
    <div
      style={{
        height: "300px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "3rem",
      }}
    >
      <div className="circleSection">
        <div className="circle blue">Battery Electric Vehicles (BEVs) </div>
        <div className="circle orange">
          Plugged-in Hybrid Electric Vehicles (PHEVs)
        </div>
      </div>
      <div className="circleSection">
        <div className="circle green">
          Mild-Hybrid Electric Vehicles (MHEVs)
        </div>
        <div className="circle red">Two-Wheelers</div>
      </div>
    </div>
  );
};

const EVTypes = () => {
  return (
    <section className="sub-section-1">
      <TypeSet />
    </section>
  );
};

export default EVTypes;
