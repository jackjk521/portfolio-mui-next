import React from 'react';
import Image from 'next/image';
import { Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Services() {
  const gridItems = [
    {
      icon: '/images/website_icon.png',
      label: 'Website',
    },
    {
      icon: '/images/system_icon.png',
      label: 'Web Application',
    },
    {
      icon: '/images/project_management_icon.png',
      label: 'Project Management',
    },
  ];

  const StyledGridItem = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '0.5rem',
  };

  const StyledIcon = {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));


  const gridCentered = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    px: isSmallScreen || isMediumScreen ? '0' : '25rem',
    py: isSmallScreen || isMediumScreen ? '0' : '1rem',

  };

  return (
    <Box sx={{ padding: '2.5rem' }}>
      <Typography
        textAlign="center"
        variant="h3"
        sx={{ p: 2, fontWeight: 900, color: 'black' }}
        gutterBottom
      >
        Services
      </Typography>
      <Grid container p={0} spacing={2} sx={{ ...gridCentered }}>
        {gridItems.map((item, index) => (
          <Grid
            item
            xs={12}
            sm={4}
            md={4}
            key={index}
            sx={{ ...StyledGridItem }}
          >
            {/* <StyledIcon>
              <Image src={item.icon} alt="Icon" width={80} height={80} sx={{}} />
            </StyledIcon> */}
            <Image
              src={item.icon}
              alt="Icon"
              width={80}
              height={80}
              styles={{ ...StyledIcon }}
            />
            <Typography variant="h6" align="center">
              {item.label}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
