import React from "react";
import Avatar from "@mui/material/Avatar";
import Image from "next/image"

// import PersonIcon from "@mui/icons-material/Person"; // Import the icon components you need

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
      {/* <Avatar
          alt={altName}
          src={`/images/${altName.toLowerCase()}.png`} // Fix the src attribute
          sx={{
            width: { xs: 64, sm: 80, md: 100 }, // Adjust values as needed
            height: { xs: 64, sm: 80, md: 100 }, // Adjust values as needed
          }}
        >
        </Avatar> */}

      <div
        style={{
          width: "100px", // Adjust the size as needed
          height: "100px", // Adjust the size as needed
          // borderRadius: "50%", // Make it round
          overflow: "hidden", // Hide any content that overflows the rounded shape
        }}>
        <Image
          src={`/images/${altName.toLowerCase()}.png`}
          alt={altName}
          width={100} // Adjust the size as needed
          height={100} // Adjust the size as needed
          layout="responsive" // Make it responsive
        />
      </div>
    </div>
  );
}

export default ResponsiveIcons;
