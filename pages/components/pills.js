import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const pillButtonStyle = {
  borderRadius: "20px", // Adjust as needed
  textTransform: "none",
  padding: "8px 16px", // Adjust padding as needed
  margin: "4px", // Adjust margin as needed
};

const ResponsivePillButtons = () => {
  const buttons = ["Blog Site", "Past Projects", "Web Applications", "Button 4", "Button 5", "Button 6"];

  return (
    <Box >
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", marginTop: "16px" }}>
        {buttons.map((buttonText, index) => (
          <Button key={index} style={pillButtonStyle} variant="outlined">
            {buttonText}
          </Button>
        ))}
      </div>
    </Box>
  );
};

export default ResponsivePillButtons;
