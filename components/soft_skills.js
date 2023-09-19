import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

import FlipCard from "./flip_cards";

export default function SoftSkillGrid({ size }) {
  const columnSettings = {
    xs: 2,
    sm: size === 2 ? 6 : 4,
    md: size === 2 ? 6 : 4,
  };

  // number of columns
  const spacing = {
    xs: 2,
    sm: 2,
    md: 3,
  };

  const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));

  const teamPlayer = [
    "Effective Communication",
    "Teamwork",
    "Leadership",
    "Transparency",
  ];
  const critThinking = [
    "Critical Thinking",
    "Problem Solving",
    "Analytical Skills",
    "Decision Making",
  ];
  const creativityArr = [
    "Creativity",
    "Innovation",
    "Out-of-the-box Thinking",
    "Adaptability",
  ];

  const boxStyles = {
    flexGrow: 1,
    padding: 2,
    py: ".5rem",
    pb: "6rem",
    px: isMediumScreen ? "1rem" : "10rem",
    backgroundColor: "#FFFFFF",
  }

  const softHeading = {
    py: 2,
    fontWeight: 900,
    color: 'inherit',
  };

  return (
    <Box
      sx={{
       ...boxStyles
      }}>
      <Typography
        textAlign="center"
        variant="h3"
        sx={{ ...softHeading }}
        gutterBottom>
        Soft Skills
      </Typography>

      <Grid container spacing={spacing} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid
          xs={columnSettings.xs}
          sm={columnSettings.sm}
          md={columnSettings.md}
          container
          alignItems="center"
          justifyContent="center">
          <FlipCard title="Team Player" skills={teamPlayer} />
        </Grid>

        <Grid
          xs={columnSettings.xs}
          sm={columnSettings.sm}
          md={columnSettings.md}
          container
          alignItems="center"
          justifyContent="center">
          <FlipCard title="Critical Thinker" skills={critThinking} />
        </Grid>

        <Grid
          xs={columnSettings.xs}
          sm={columnSettings.sm}
          md={columnSettings.md}
          container
          alignItems="center"
          justifyContent="center">
          <FlipCard title="Curious Cat" skills={creativityArr} />
        </Grid>
      </Grid>
    </Box>
  );
}
