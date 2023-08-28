import React from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";

const FlipCard = ({ title, skills }) => {
  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Flippy
        flipOnHover={true} // default false
        flipOnClick={true} // default false
        flipDirection="vertical" // horizontal or vertical
        style={{ width: "200px", height: "200px" }} /// these are optional style, it is not necessary
      >
        <FrontSide
          style={{
            backgroundColor: "#41669d",
          }}>
          <Typography textAlign="center" variant="h5" gutterBottom>
            {title}
          </Typography>
          This is the front side of the card.
        </FrontSide>
        <BackSide style={{ backgroundColor: "#175852" }}>
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </BackSide>
      </Flippy>
    </Box>
  );
};

export default FlipCard;
