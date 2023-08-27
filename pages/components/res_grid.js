import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";

import Avatar from "./avatar";
import Item from "./item";

export default function ResponsiveGrid({ size, avatar }) {
  const columnSettings = {
    xs: 2,
    sm: size === 2 ? 6 : 4,
    md: size === 2 ? 6 : 4,
  };

  // number of columns 
  const spacing = {
    xs: size === 2 ? 1 : 3,
    sm: 2,
    md: 3,
  };

  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid
        container
        spacing={spacing}
        columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(Array(size)).map((_, index) => (
          <Grid
            key={index}
            xs={columnSettings.xs}
            sm={columnSettings.sm}
            md={columnSettings.md}>
           
            <Item>
              <Avatar textAlign="center"/>
                  Content
            </Item>

          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
