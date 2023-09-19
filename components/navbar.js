import React, { useState } from 'react';

import Link from 'next/link';

// Material UI
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import useMediaQuery from '@mui/material/useMediaQuery';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

// Menu Items
const pages = ['Projects', 'About', 'Contact'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));

  const logoText = {
    mr: 2,
    flexGrow: isMediumScreen ? 1 : 1,
    // textAlign: isSmallScreen ? 'center' : 'right',
    fontFamily: 'monospace',
    fontWeight: 700,
    letterSpacing: '.3rem',
    color: 'black',
    textDecoration: 'none',
  };

  const pagesBox = {
    flexGrow: 1,
    display: { xs: 'none', md: 'flex' },
    justifyContent: 'flex-end',
  };

  const pagesButtons = {
    my: 2,
    color: 'black',
    display: 'block',
    '& .MuiTab-root:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
    },
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'white', px: '1rem' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Hamburger when it goes to small screens */}

          {/* Logo Icon  */}
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          {/* Logo Name  */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              display: { xs: 'none', md: 'flex' },
              ...logoText,
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    {page === 'Projects' ? (
                      <Link href={`#${page}`}>{page}</Link>
                    ) : (
                      <Link href={`/${page.toLowerCase()}`}>{page}</Link>
                    )}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Desktop view  */}
          {/* Logo Icon  */}
          <AdbIcon
            sx={{
              display: { xs: 'flex', md: 'none' },
              mr: 1,
            }}
          />
          {/* Logo Name  */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              display: { xs: 'flex', md: 'none' },
              ...logoText,
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ ...pagesBox }}>
            {pages.map((page) => (
              <Tabs
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ ...pagesButtons }}
              >
                {page === 'Projects' ? (
                  <Tab label={`${page}`} href={`#${page}`} />
                ) : (
                  <Tab label={`${page}`} href={`/${page.toLowerCase()}`} /> // this for links to pages
                )}
              </Tabs>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
