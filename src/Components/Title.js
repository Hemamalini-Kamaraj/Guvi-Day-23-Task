import React from "react";
import { Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

const Title = () => {
  return (
    <>
      <div className="title">
        <div className="title-head">Dashboard</div>
        <div>
          <Button variant="contained">
            <DownloadIcon />
            Generate Report
          </Button>
        </div>
      </div>
    </>
  );
};

export default Title;