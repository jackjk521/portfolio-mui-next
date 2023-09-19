import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Pills from './pills';

export default function Projects() {
  const projectHeading = {
    py: 2,
    fontWeight: 900,
    color: 'inherit',
  };

  const boxStyles = {
    flexGrow: 1,
    padding: 2,
    py: '2rem',
    px: '3rem',
    backgroundColor: 'white',
  };

  return (
    <div id="Projects">
      <Box
        sx={{
          ...boxStyles,
        }}
      >
        <Typography
          textAlign="center"
          variant="h3"
          sx={{ ...projectHeading }}
          gutterBottom
        >
          Project Showcase
        </Typography>

        <Pills />
      </Box>
    </div>
  );
}
