import * as React from "react";

// Material UI
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";

// Components
import Item from "./item";

// Icons
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";

export default function HobbiesGrid({ size, hobbies }) {
  const columnSettings = {
    xs: 2,
    sm: size === 2 ? 6 : 3,
    md: size === 2 ? 6 : 3,
  };

  // number of columns
  const spacing = {
    xs: 2,
    sm: 2,
    md: 4,
  };

  return (
    <Box sx={{ flexGrow: 1, padding: 2}}>
      <Grid container spacing={2} justifyContent="center" columns={{ xs: 2 , sm: 8, md: 12 }}>
        {/* Financial Exploration  */}
        <Grid
          xs={columnSettings.xs}
          sm={columnSettings.sm}
          md={columnSettings.md}>
          <Item>
            <TrendingUpIcon />
            <Typography textAlign="center" sx={{ p: 2 }}>
              {hobbies[0]}
            </Typography>
          </Item>
        </Grid>

        {/* Active Lifestyle  */}
        <Grid
          xs={columnSettings.xs}
          sm={columnSettings.sm}
          md={columnSettings.md}>
          <Item>
            <FitnessCenterIcon />
            <Typography textAlign="center" sx={{ p: 2 }}>
              {hobbies[1]}
            </Typography>
          </Item>
        </Grid>

        {/* Entertainment  */}
        <Grid
          xs={columnSettings.xs}
          sm={columnSettings.sm}
          md={columnSettings.md}>
          <Item>
            <SportsEsportsIcon />
            <Typography textAlign="center" sx={{ p: 2 }}>
              {hobbies[2]}
            </Typography>
          </Item>
        </Grid>

        {/* Travelling  */}
        <Grid
          xs={columnSettings.xs}
          sm={columnSettings.sm}
          md={columnSettings.md}>
          <Item>
            <FlightTakeoffIcon />
            <Typography textAlign="center" sx={{ p: 2 }}>
              {hobbies[3]}
            </Typography>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
