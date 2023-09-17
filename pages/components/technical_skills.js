import * as React from "react";
import { styled } from "@mui/material/styles";

import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import Box from "@mui/material/Box";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

import CustomGrid from "./res_grid";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },

  borderRadius: "1rem",
  padding: "0.5rem",
  margin: "0.5rem",
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "background-color: #fff;",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function TechnicalSkillsGrid() {
  const [expanded, setExpanded] = React.useState("featuredSkills");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  // Featured Skills Information
  const featuredSkills = ["React", "MySQL", "Laravel"];
  const featuredRatings = {
    React: 4,
    MySQL: 5,
    Laravel: 4,
  };

  // Web Dev Skills Information
  const webSkills = [
    "HTML",
    "CSS",
    "PhpMyAdmin",
    "NodeJS",
    "Javascript",
    "CodeIgniter",
    "MongoDB",
    "Express",
    "jQuery",
  ];
  const webRatings = {
    HTML: 4,
    CSS: 5,
    PhpMyAdmin: 4,
    NodeJS: 4,
    Javascript: 5,
    CondeIgniter: 4,
    MongoDB: 4,
    Express: 4,
    jQuery: 3,
  };

  // OOP Skills Information
  const OOPSkills = ["Java", "CSharp", "PHP"];
  const OOPRatings = {
    Java: 4,
    CSharp: 2,
    PHP: 4,
  };

  // DA Skills Information
  const dataSkills = ["Python", "PowerBI", "R", "SQL"];
  const dataRatings = {
    Python: 4,
    PowerBI: 2,
    R: 3,
    SQL: 5,
  };

  // Hosting Skills Information
  const hostingSkills = ["Bluehost", "Railway", "HostGator", "Vercel"];
  const hostingRatings = {
    Bluehost: 4,
    Railway: 5,
    HostGator: 3,
    Vercel: 5,
  };

  // No Code Skills Information
  const noCodeSkills = ["Webflow", "Bubble", "WordPress"];
  const noCodeRatings = {
    Webflow: 4,
    Bubble: 3,
    WordPress: 4,
  };

  // Version control or DevOps Skills Information
  const versionControlSkills = ["Git", "BitBucket", "Azure"];
  const versionControlRatings = {
    Git: 5,
    BitBucket: 5,
    Azure: 3,
  };

  return (
    <Box
      container
      sx={{
        flexGrow: 1,
        px: {
          xs: 2, // Extra small screens (default)
          sm: 4, // Small screens
          md: 6, // Medium screens
          lg: 8, // Large screens
          xl: 15, // Extra large screens
        },
        py: 2,
        backgroundColor: "#ae9789",
        pb: "3rem",
        px: isSmallScreen ? 0 : "10rem",
      }}>
      <Typography
        textAlign="center"
        variant="h3"
        sx={{ p: 3, fontWeight: "bold", color: "#FFFFFF" }}
        gutterBottom>
        Technical Skills
      </Typography>

      <Accordion
        expanded={expanded === "featuredSkills"}
        onChange={handleChange("featuredSkills")}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography variant="h6" textAlign="center">
            Featured
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <CustomGrid skills={featuredSkills} ratings={featuredRatings} />
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "webDevSkills"}
        onChange={handleChange("webDevSkills")}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography variant="h6" textAlign="center">
            Web Development
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <CustomGrid skills={webSkills} ratings={webRatings} />
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "OOPSkills"}
        onChange={handleChange("OOPSkills")}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography variant="h6" textAlign="center">
            Object Oriented Programming
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <CustomGrid skills={OOPSkills} ratings={OOPRatings} />
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "dataSkills"}
        onChange={handleChange("dataSkills")}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography variant="h6" textAlign="center">
            Data Analytics
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <CustomGrid skills={dataSkills} ratings={dataRatings} />
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "hostingSkills"}
        onChange={handleChange("hostingSkills")}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography variant="h6" textAlign="center">
            Hosting Services
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <CustomGrid skills={hostingSkills} ratings={hostingRatings} />
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "noCodeSkills"}
        onChange={handleChange("noCodeSkills")}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography variant="h6" textAlign="center">
            {" "}
            No Code Platforms
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <CustomGrid skills={noCodeSkills} ratings={noCodeRatings} />
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "versionControlSkills"}
        onChange={handleChange("versionControlSkills")}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography variant="h6" textAlign="center">
            {" "}
            Version Control or DevOps
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <CustomGrid
            skills={versionControlSkills}
            ratings={versionControlRatings}
          />
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
