import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

// Icons
import { pink } from "@mui/material/colors";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

export default function Footer() {
  return (
    
    <Box
      component="footer"
      sx={{
        backgroundColor: "#3B444B",
        color: "#fff",
        py: 3,
        textAlign: "center",
      }}>
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} Portfolio PWA
      </Typography>
      <Typography variant="body2">
        Built with Next.js, Material-UI and PWA
      </Typography>
      <Typography variant="body2">
        
      </Typography>
      
      {/* Icons  */}
      <Box
        sx={{
          "& > :not(style)": {
            m: 2,
          },
        }}>
        <LinkedInIcon color="primary" />
        <EmailIcon color="white" />
        <GitHubIcon color="success" />
        {/* <HomeIcon sx={{ color: pink[500] }} /> */}
      </Box>
    </Box>
  );
}
