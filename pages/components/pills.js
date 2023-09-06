import React from "react";

import Link from "next/link";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const pillButtonStyle = {
  borderRadius: "20px", // Adjust as needed
  textTransform: "none",
  padding: "8px 16px", // Adjust padding as needed
  margin: "4px", // Adjust margin as needed
};

const ResponsivePillButtons = () => {
  const buttons = [
    "Blog Site",
    "Past Projects",
    "Web Applications",
  ];

  return (
    <Box sx={{ pb: 5 }}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "16px",
        }}>
        {buttons.map((buttonText, index) => (
          <Button key={index} style={pillButtonStyle} variant="outlined">
            {(() => {
              if (buttonText === "Blog Site") {
                return (
                  <Link href="https://portfolioblogsite0001.wordpress.com/">
                    {buttonText}
                  </Link>
                );
              } else if (buttonText === "Past Projects") {
                return (
                  <Link href="https://example.com/blog-site-2">
                    {buttonText}
                  </Link>
                );
              } else if (buttonText === "Blog Site 3") {
                return (
                  <Link href="https://example.com/blog-site-3">
                    {buttonText}
                  </Link>
                );
              } else {
                return buttonText;
              }
            })()}
          </Button>
        ))}
      </div>
    </Box>
  );
};

export default ResponsivePillButtons;
