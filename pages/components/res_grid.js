import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Rating from "@mui/material/Rating";

import Item from "./item";
import Icon from "./icon";

export default function ResponsiveGrid({ size, icon, skills, ratings }) {
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

  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container spacing={2} columns={{ xs: 4, sm: 6, md: 12 }}>

        {skills.map((skill, index) => (
          <Grid
            key={index}
            xs={columnSettings.xs}
            sm={columnSettings.sm}
            md={columnSettings.md}>
            <Item textAlign="center" elevation={3}>
              
              {/* Logo Icon  */}
              <Icon altName={skill} />
              {/* Skill name  */}
              {skill}
              {/* Rating for each skill  */}
              <Rating name="read-only" value={ratings[skill]} readOnly />

            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
