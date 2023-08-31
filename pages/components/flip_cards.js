import React from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const FlipCard = ({ title, skills }) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", padding: 1 }}>
      <Flippy
        flipOnHover={true}
        flipOnClick={true}
        flipDirection="vertical"
        style={{ width: "25rem", height: "15rem" }}  // Adjust dimensions
      >
        <FrontSide
          style={{
            backgroundColor: "#41669d",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "8px", // Add padding for smaller screens
          }}
        >
          <Typography textAlign="center" variant="h6" gutterBottom>
            {title}
          </Typography>
        </FrontSide>
        <BackSide
          style={{
            backgroundColor: "#175852",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "8px", // Add padding for smaller screens
          }}
        >
          <ul style={{ listStyle: "none", padding: 0, textAlign: "center" }}>
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
