import React from "react";
import Avatar from "@mui/material/Avatar";

function ResponsiveIcons() {
  return (
    <div>
      <Avatar
        alt="User"
        src="/icon-512x512.png"
        sx={{
          width: { xs: 64, sm: 80, md: 100 }, // Adjust values as needed
          height: { xs: 64, sm: 80, md: 100 }, // Adjust values as needed
        }}
      />
    </div>
  );
}

export default ResponsiveIcons;
