import React from "react";
import "./report.css";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import { CardContent, Typography } from "@mui/material";
import EVMshare from "./EVMshare";
import EVProjectedGrowth from "./EVProjectedGrowth";
import EVTypes from "./EVTypes";
import EVMsizeGrowth from "./EVMsizeGrowth";

const Report = () => {
  return (
    <div className="report">
      <section className="report-summary">
        <h2>EV Market Statistics 2022 Report</h2>
        <p>
          This report provides an overview of EV market statistics in India in
          2022, based on various sources and criteria. We'll examine the market
          share, types of EV, market size and projected EV growth.
        </p>
      </section>
      <div className="report-section">
        <Card className="cards">
          <CardHeader
            className="cardTitle"
            title="Projected EV Growth in India"
          />
          <EVProjectedGrowth />
          <CardContent className="cardContent">
            <Typography variant="p">
              The chart above shows the potential growth of EV sales over the
              years. Already sold 40K units in 2022 and projected sales till
              2025 and 2030 are 150K units and 500K units respectively.
            </Typography>
          </CardContent>
        </Card>
        <Card className="cards">
          <CardHeader
            className="cardTitle"
            title="EV Market Share in India (2022)"
          />
          <EVMshare />
          <CardContent className="cardContent">
            <Typography variant="p">
              This chart displays the market share of EV for the year 2022.
              Two-Wheelers have the major market share of 5.17% followed by
              Commercial Vehicles with 1.14%.
            </Typography>
          </CardContent>
        </Card>
      </div>
      <div className="report-section">
        <Card className="cards">
          <CardHeader
            className="cardTitle"
            title="Types of Electric Vehicles in India"
          />
          <EVTypes />
          <CardContent className="cardContent">
            <Typography variant="p">
              BEVs - Powered solely by electricity from a battery. Examples:
              Hyundai Kona Electric, Tata Nexon EV.
            </Typography>
            <br />
            <Typography variant="p">
              PHEVs - Can run on both electric power and gasoline or diesel.
              Examples: Toyota Prius Prime, Honda Civic Hybrid.
            </Typography>
            <br />
            <Typography variant="p">
              MHEVs - Use regenerative braking to recharge the battery, but can
              also run on gasoline or diesel. Examples: Maruti Suzuki Swift
              Hybrid, Hyundai Elite i20 Hybrid.
            </Typography>
            <br />
            <Typography variant="p">
              Two-Wheelers (E-Scooters and E-Bikes) - Designed for personal use,
              often with a smaller range and lower price point. Examples: Ather
              450X, Okinawa Praise.
            </Typography>
            <br />
          </CardContent>
        </Card>
        <Card className="cards">
          <CardHeader className="cardTitle" title="EV Market Size in India" />
          <EVMsizeGrowth />
          <CardContent className="cardContent">
            <Typography variant="p">
              This chart shows the market size of EV in Indian market. This
              shows the current market size as of 2022 and the compound annual
              growth rate(CAGR), with the two-wheeler segment leading it.
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Report;
