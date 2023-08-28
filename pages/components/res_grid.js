import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";

import Item from "./item";

export default function ResponsiveGrid({ size, icon, hobbies }) {
  const columnSettings = {
    xs: 2,
    sm: size === 2 ? 6 : 3,
    md: size === 2 ? 6 : 3,
  };

  // number of columns
  const spacing = {
    xs: 2,
    sm: 2,
    md: 3,
  };
   console.log(hobbies)
  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container spacing={spacing} columns={{ xs: 4, sm: 8, md: 12 }}>
     
        {hobbies.map((hobby, index) => (
          <Grid
            key={index}
            xs={columnSettings.xs}
            sm={columnSettings.sm}
            md={columnSettings.md}>
            <Item>
              {icon}
              {hobby}
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
