import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";

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

  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
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
