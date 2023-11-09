import Image from 'next/image';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import useMediaQuery from '@mui/material/useMediaQuery';

import { motion } from 'framer-motion';

export default function PersonalInfo() {
  const columnSettings = {
    xs: 6,
    sm: 6,
    md: 6,
  };

  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  const avatarStyle = {
    xs: isSmallScreen ? 12 : columnSettings.xs,
    sm: isSmallScreen ? 12 : columnSettings.sm,
    md: columnSettings.md,
    display: 'flex',
    justifyContent: 'center', // Horizontally center
    alignItems: 'center', // Vertically center
    height: '10rem',
    position: 'relative',
  };

  const descriptionStyle = {
    textAlign: isSmallScreen ? 'center' : 'left',
    fontSize: isSmallScreen ? '1rem' : '1.125rem', // Adjust font size as needed
  };

  const boxStyles = {
    flexGrow: 1,
    px: isSmallScreen ? '1rem' : '7rem',
    py: isSmallScreen ? '1rem' : '4rem',
    backgroundColor: 'white',
  };

  const textStyles = {
    fontWeight: 900, 
    width: "100%", 
    textAlign: isSmallScreen ? 'center' : 'left'
  }
  return (
    <>
      {/* Personal Div  */}
      <Box sx={{ ...boxStyles }}>
        <Grid container p={0} spacing={2}>
          {/* Avatar  */}
          <Grid item xs={4} {...avatarStyle}>
            {/* <Image
              src="/images/profile.png"
              layout="fill"
              objectFit="cover"
              alt="Avatar"
            /> */}

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              style={{
                width: '10rem',
                height: '10rem',
                borderRadius: '30%',
                border: 3,
                borderColor: 'black',
                backgroundImage: 'url(/images/profile.png)',
                backgroundSize: 'cover',
              }}
            />
          </Grid>

          {/* Description  */}
          <Grid item {...avatarStyle}>
            <Typography variant="h4" gutterBottom sx={{...textStyles}}>
              Hi! I am Jed
              <br></br>
              <Typography
              variant="h4"
              gutterBottom
              sx={{ ...descriptionStyle, ...textStyles}}
            >
              Software Engineer , 
              <br></br>

              Developer , Project Manager
            </Typography>
            </Typography>
           
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
