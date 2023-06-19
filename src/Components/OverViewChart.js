import React from "react";
import EarningsOverview from "./EarningsOverview";

const OverViewChart = () => {
  return (
    <div className="overview-chart">
      <div className="overview-head">
        <h4>Earnings Overview</h4>
      </div>
      <div style={{ height: "350px", padding: "0px 15px" }}>
        <EarningsOverview />
      </div>
    </div>
  );
};

export default OverViewChart;
