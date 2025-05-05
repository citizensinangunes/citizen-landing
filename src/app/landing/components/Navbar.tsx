"use client";

import React, { useState } from 'react';
import { Box, Typography, Button, Container, IconButton, Drawer, List, ListItem, ListItemText, Divider, ListItemButton } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import GitHubIcon from '@mui/icons-material/GitHub';
import CitizenLogo from '@/components/CitizenLogo';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);
  const [featuresDropdownOpen, setFeaturesDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleProductDropdown = () => {
    setProductDropdownOpen(!productDropdownOpen);
  };

  const toggleFeaturesDropdown = () => {
    setFeaturesDropdownOpen(!featuresDropdownOpen);
  };

  return (
    <Box 
      sx={{ 
        py: 1.5, 
        px: { xs: 2, md: 4 },
        position: 'sticky',
        top: 0,
        zIndex: 10,
        backdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
        boxShadow: '0 1px 3px rgba(0,0,0,0.02)'
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Image
                src="/citizen-logo.svg"
                alt="Citizen Logo"
                width={32}
                height={32}
                style={{ marginRight: '8px' }}
              />
              <Typography 
                sx={{ 
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: '#333',
                  lineHeight: 1
                }}
              >
                Citizen
              </Typography>
            </Box>
          </Link>

          {/* Mobile menu icon */}
          <IconButton 
            sx={{ display: { xs: 'flex', md: 'none' } }}
            onClick={toggleMobileMenu}
            aria-label="Open menu"
          >
            <MenuIcon />
          </IconButton>

          {/* Desktop navigation */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3, alignItems: 'center' }}>
            {/* Product Dropdown */}
            <Box 
              sx={{ 
                position: 'relative',
                '&:hover': {
                  '& .dropdown-content': {
                    visibility: 'visible',
                    opacity: 1
                  }
                }
              }}
            >
              <Box
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  cursor: 'pointer',
                  color: '#333',
                  '&:hover': { color: '#004aad' },
                  gap: 0.5,
                  pb: 0 // Removed padding to match other tabs
                }}
              >
                <Typography 
                  sx={{ 
                    color: '#333', 
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontWeight: 400, // Changed to match other tabs
                    '&:hover': { color: '#004aad' },
                  }}
                >
                  Product
                </Typography>
                <ExpandMoreIcon sx={{ fontSize: '0.9rem' }} />
              </Box>
              
              {/* Dropdown Menu */}
              <Box 
                className="dropdown-content"
                sx={{ 
                  position: 'absolute', 
                  top: '100%', 
                  left: 0, 
                  zIndex: 20,
                  width: '240px',
                  bgcolor: 'white',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                  borderRadius: 2,
                  py: 1,
                  mt: 1.5, // Increased to position dropdown properly
                  visibility: 'hidden',
                  opacity: 0,
                  transition: 'all 0.2s ease',
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: '-6px',
                    left: '20px',
                    width: 0,
                    height: 0,
                    borderLeft: '6px solid transparent',
                    borderRight: '6px solid transparent',
                    borderBottom: '6px solid white',
                  }
                }}
              >
                <Typography 
                  component={Link} 
                  href="/landing/product/citizen-developers"
                  sx={{ 
                    display: 'block',
                    fontSize: '0.9rem', 
                    py: 1.5,
                    px: 2,
                    color: '#333',
                    textDecoration: 'none',
                    borderRadius: 1,
                    mx: 1,
                    '&:hover': { bgcolor: 'rgba(0, 74, 173, 0.05)', color: '#004aad' }
                  }}
                >
                  For Citizen Developers
                </Typography>
                <Typography 
                  component={Link} 
                  href="/landing/product/startups"
                  sx={{ 
                    display: 'block',
                    fontSize: '0.9rem', 
                    py: 1.5,
                    px: 2,
                    color: '#333',
                    textDecoration: 'none',
                    borderRadius: 1,
                    mx: 1,
                    '&:hover': { bgcolor: 'rgba(0, 74, 173, 0.05)', color: '#004aad' }
                  }}
                >
                  For Startups & SMBs
                </Typography>
                <Typography 
                  component={Link} 
                  href="/landing/product/enterprise"
                  sx={{ 
                    display: 'block',
                    fontSize: '0.9rem', 
                    py: 1.5,
                    px: 2,
                    color: '#333',
                    textDecoration: 'none',
                    borderRadius: 1,
                    mx: 1,
                    '&:hover': { bgcolor: 'rgba(0, 74, 173, 0.05)', color: '#004aad' }
                  }}
                >
                  For Enterprise
                </Typography>
                <Typography 
                  component={Link} 
                  href="/landing/product/open-source"
                  sx={{ 
                    display: 'block',
                    fontSize: '0.9rem', 
                    py: 1.5,
                    px: 2,
                    color: '#333',
                    textDecoration: 'none',
                    borderRadius: 1,
                    mx: 1,
                    '&:hover': { bgcolor: 'rgba(0, 74, 173, 0.05)', color: '#004aad' }
                  }}
                >
                  Open Source Publishing
                </Typography>
              </Box>
            </Box>
            
            {/* Features Dropdown */}
            <Box 
              sx={{ 
                position: 'relative',
                '&:hover': {
                  '& .dropdown-content': {
                    visibility: 'visible',
                    opacity: 1
                  }
                }
              }}
            >
              <Box
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  cursor: 'pointer',
                  color: '#333',
                  '&:hover': { color: '#004aad' },
                  gap: 0.5,
                  pb: 0 // Removed padding to match other tabs
                }}
              >
                <Typography 
                  sx={{ 
                    color: '#333', 
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontWeight: 400, // Changed to match other tabs
                    '&:hover': { color: '#004aad' },
                  }}
                >
                  Features
                </Typography>
                <ExpandMoreIcon sx={{ fontSize: '0.9rem' }} />
              </Box>
              
              {/* Dropdown Menu */}
              <Box 
                className="dropdown-content"
                sx={{ 
                  position: 'absolute', 
                  top: '100%', 
                  left: 0, 
                  zIndex: 20,
                  width: '240px',
                  bgcolor: 'white',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                  borderRadius: 2,
                  py: 1,
                  mt: 1.5, // Increased to position dropdown properly
                  visibility: 'hidden',
                  opacity: 0,
                  transition: 'all 0.2s ease',
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: '-6px',
                    left: '20px',
                    width: 0,
                    height: 0,
                    borderLeft: '6px solid transparent',
                    borderRight: '6px solid transparent',
                    borderBottom: '6px solid white',
                  }
                }}
              >
                <Typography 
                  component={Link} 
                  href="/landing/features/docker-deployments"
                  sx={{ 
                    display: 'block',
                    fontSize: '0.9rem', 
                    py: 1.5,
                    px: 2,
                    color: '#333',
                    textDecoration: 'none',
                    borderRadius: 1,
                    mx: 1,
                    '&:hover': { bgcolor: 'rgba(0, 74, 173, 0.05)', color: '#004aad' }
                  }}
                >
                  Docker Deployments
                </Typography>
                <Typography 
                  component={Link} 
                  href="/landing/features/monitoring"
                  sx={{ 
                    display: 'block',
                    fontSize: '0.9rem', 
                    py: 1.5,
                    px: 2,
                    color: '#333',
                    textDecoration: 'none',
                    borderRadius: 1,
                    mx: 1,
                    '&:hover': { bgcolor: 'rgba(0, 74, 173, 0.05)', color: '#004aad' }
                  }}
                >
                  Monitoring and Logging
                </Typography>
                <Typography 
                  component={Link} 
                  href="/landing/features/team-collaboration"
                  sx={{ 
                    display: 'block',
                    fontSize: '0.9rem', 
                    py: 1.5,
                    px: 2,
                    color: '#333',
                    textDecoration: 'none',
                    borderRadius: 1,
                    mx: 1,
                    '&:hover': { bgcolor: 'rgba(0, 74, 173, 0.05)', color: '#004aad' }
                  }}
                >
                  Team Collaboration
                </Typography>
                <Typography 
                  component={Link} 
                  href="/features/custom-domains"
                  sx={{ 
                    display: 'block',
                    fontSize: '0.9rem', 
                    py: 1.5,
                    px: 2,
                    color: '#333',
                    textDecoration: 'none',
                    borderRadius: 1,
                    mx: 1,
                    '&:hover': { bgcolor: 'rgba(0, 74, 173, 0.05)', color: '#004aad' }
                  }}
                >
                  Custom Domains
                </Typography>
                <Typography 
                  component={Link} 
                  href="/features/self-hosting"
                  sx={{ 
                    display: 'block',
                    fontSize: '0.9rem', 
                    py: 1.5,
                    px: 2,
                    color: '#333',
                    textDecoration: 'none',
                    borderRadius: 1,
                    mx: 1,
                    '&:hover': { bgcolor: 'rgba(0, 74, 173, 0.05)', color: '#004aad' }
                  }}
                >
                  Self-Hosting
                </Typography>
                <Typography 
                  component={Link} 
                  href="/landing/auth"
                  sx={{ 
                    display: 'block',
                    fontSize: '0.9rem', 
                    py: 1.5,
                    px: 2,
                    color: '#333',
                    textDecoration: 'none',
                    borderRadius: 1,
                    mx: 1,
                    '&:hover': { bgcolor: 'rgba(0, 74, 173, 0.05)', color: '#004aad' }
                  }}
                >
                  Authentication
                </Typography>
              </Box>
            </Box>
            
            <Typography 
              component={Link} 
              href="/docs" 
              sx={{ 
                color: '#333', 
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: 400,
                '&:hover': { color: '#004aad' },
              }}
            >
              Docs
            </Typography>
            <Typography 
              component={Link} 
              href="/community" 
              sx={{ 
                color: '#333', 
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: 400,
                '&:hover': { color: '#004aad' },
              }}
            >
              Community
            </Typography>
            <Typography 
              component="a" 
              href="https://github.com/citizen-dev/citizen" 
              target="_blank"
              rel="noopener noreferrer"
              sx={{ 
                color: '#333', 
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
                '&:hover': { color: '#004aad' },
              }}
            >
              <GitHubIcon sx={{ fontSize: '1.1rem' }} />
            </Typography>
            <Button 
              variant="outlined" 
              component={Link}
              href="/auth" 
              size="small"
              sx={{ 
                color: '#004aad',
                borderColor: '#004aad',
                borderRadius: '50px',
                px: 2,
                '&:hover': { 
                  borderColor: '#003a87', 
                  color: '#003a87',
                  backgroundColor: 'rgba(0, 74, 173, 0.04)'
                },
                fontSize: '0.85rem',
                fontWeight: 400,
                textTransform: 'none'
              }}
            >
              Sign in
            </Button>
          </Box>
        </Box>
      </Container>

      {/* Mobile Navigation Drawer */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={toggleMobileMenu}
        PaperProps={{
          sx: {
            width: '100%',
            maxWidth: '300px',
            bgcolor: 'white',
            boxShadow: '-4px 0 20px rgba(0, 0, 0, 0.08)',
            p: 0
          }
        }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #eee' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Image
              src="/citizen-logo.svg"
              alt="Citizen Logo"
              width={24}
              height={24}
              style={{ marginRight: '8px' }}
            />
            <Typography sx={{ fontWeight: 600 }}>Citizen</Typography>
          </Box>
          <IconButton onClick={toggleMobileMenu} sx={{ p: 1 }}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>
        
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={toggleProductDropdown}>
              <ListItemText 
                primary="Product" 
                primaryTypographyProps={{ fontWeight: 400 }}
              />
              <ExpandMoreIcon sx={{ 
                transform: productDropdownOpen ? 'rotate(180deg)' : 'rotate(0)',
                transition: 'transform 0.2s ease'
              }} />
            </ListItemButton>
          </ListItem>
          {productDropdownOpen && (
            <Box sx={{ bgcolor: 'rgba(0, 0, 0, 0.02)', py: 1 }}>
              <ListItem disablePadding>
                <ListItemButton component={Link} href="/landing/product/citizen-developers">
                  <ListItemText primary="For Citizen Developers" sx={{ pl: 2 }} primaryTypographyProps={{ fontWeight: 400 }} />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component={Link} href="/landing/product/startups">
                  <ListItemText primary="For Startups & SMBs" sx={{ pl: 2 }} primaryTypographyProps={{ fontWeight: 400 }} />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component={Link} href="/landing/product/enterprise">
                  <ListItemText primary="For Enterprise" sx={{ pl: 2 }} primaryTypographyProps={{ fontWeight: 400 }} />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component={Link} href="/landing/product/open-source">
                  <ListItemText primary="Open Source Publishing" sx={{ pl: 2 }} primaryTypographyProps={{ fontWeight: 400 }} />
                </ListItemButton>
              </ListItem>
            </Box>
          )}
          
          <ListItem disablePadding>
            <ListItemButton onClick={toggleFeaturesDropdown}>
              <ListItemText 
                primary="Features" 
                primaryTypographyProps={{ fontWeight: 400 }}
              />
              <ExpandMoreIcon sx={{ 
                transform: featuresDropdownOpen ? 'rotate(180deg)' : 'rotate(0)',
                transition: 'transform 0.2s ease'
              }} />
            </ListItemButton>
          </ListItem>
          {featuresDropdownOpen && (
            <Box sx={{ bgcolor: 'rgba(0, 0, 0, 0.02)', py: 1 }}>
              <ListItem disablePadding>
                <ListItemButton component={Link} href="/landing/features/docker-deployments">
                  <ListItemText primary="Docker Deployments" sx={{ pl: 2 }} primaryTypographyProps={{ fontWeight: 400 }} />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component={Link} href="/landing/features/monitoring">
                  <ListItemText primary="Monitoring and Logging" sx={{ pl: 2 }} primaryTypographyProps={{ fontWeight: 400 }} />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component={Link} href="/landing/features/team-collaboration">
                  <ListItemText primary="Team Collaboration" sx={{ pl: 2 }} primaryTypographyProps={{ fontWeight: 400 }} />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component={Link} href="/features/custom-domains">
                  <ListItemText primary="Custom Domains" sx={{ pl: 2 }} primaryTypographyProps={{ fontWeight: 400 }} />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component={Link} href="/features/self-hosting">
                  <ListItemText primary="Self-Hosting" sx={{ pl: 2 }} primaryTypographyProps={{ fontWeight: 400 }} />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component={Link} href="/landing/auth">
                  <ListItemText primary="Authentication" sx={{ pl: 2 }} primaryTypographyProps={{ fontWeight: 400 }} />
                </ListItemButton>
              </ListItem>
            </Box>
          )}
          <ListItem disablePadding>
            <ListItemButton component={Link} href="/docs">
              <ListItemText primary="Docs" primaryTypographyProps={{ fontWeight: 400 }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} href="/community">
              <ListItemText primary="Community" primaryTypographyProps={{ fontWeight: 400 }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="https://github.com/citizen-dev/citizen" target="_blank" rel="noopener noreferrer">
              <ListItemText 
                primary={
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <GitHubIcon fontSize="small" />
                    <Typography fontWeight={400}>GitHub</Typography>
                  </Box>
                } 
              />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Button 
            variant="outlined" 
            component={Link}
            href="/auth" 
            fullWidth
            sx={{ 
              color: '#004aad',
              borderColor: '#004aad',
              borderRadius: '50px',
              py: 1,
              '&:hover': { 
                borderColor: '#003a87', 
                color: '#003a87',
                backgroundColor: 'rgba(0, 74, 173, 0.04)'
              },
              fontWeight: 400,
              textTransform: 'none'
            }}
          >
            Sign in
          </Button>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Navbar; 