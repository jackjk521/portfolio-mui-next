import React from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

const FlipCard = ({ title, skills }) => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const cardStyle = {
    width: isSmallScreen ? "100%" : "25rem",
    height: isSmallScreen ? "auto" : "15rem",
    marginBottom: isSmallScreen ? "1rem" : 0,
    padding: isSmallScreen ? "0.5rem" : "1rem",
  };

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Flippy
        flipOnHover={true}
        flipOnClick={true}
        flipDirection="vertical"
        style={cardStyle}>
        <FrontSide
          style={{
            backgroundColor: "#93634a",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: isSmallScreen ? "1rem" : "8px",
          }}>
          <Typography
            textAlign="center"
            variant="h4"
            sx={{ fontWeight: "bold", color: "#FFFFFF" }}
            gutterBottom>
            {title}
          </Typography>
        </FrontSide>
        <BackSide
          style={{
            backgroundColor: "#93634a",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: isSmallScreen ? "1rem" : "8px",
          }}>
          <ul style={{ listStyle: "none", padding: 0, textAlign: "center" }}>
            {skills.map((skill, index) => (
              <li key={index} style={{ color: "#FFFFFF" }} >{skill}</li>
            ))}
          </ul>
        </BackSide>
      </Flippy>
    </Box>
  );
};

export default FlipCard;
