import React from "react";
import Avatar from "@mui/material/Avatar";

import PersonIcon from "@mui/icons-material/Person"; // Import the icon components you need

function ResponsiveIcons({ altName }) {
  // // Define a mapping of altName values to corresponding icon components
  // const iconMappings = {
  //   person: <PersonIcon />,
  //   // Add more mappings as needed for other altName values and corresponding icons
  // };

  // // Use the iconMappings object to render the appropriate icon based on altName
  // const selectedIcon = iconMappings[altName.toLowerCase()];

  return (
    <div>
      {/* {selectedIcon == "react" ? ( */}
        <Avatar
          alt={altName}
          src={`/images/${altName.toLowerCase()}.png`} // Fix the src attribute
          sx={{
            width: { xs: 64, sm: 80, md: 100 }, // Adjust values as needed
            height: { xs: 64, sm: 80, md: 100 }, // Adjust values as needed
          }}
        >
        </Avatar>
      {/* ) : (
        // Render a default icon or message if altName doesn't match any known icons
        <Avatar alt={altName} src={src} />
      )} */}
    </div>
  );
}

export default ResponsiveIcons;
