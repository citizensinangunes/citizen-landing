"use client";

import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Container, Grid } from '@mui/material';
import Link from 'next/link';

const HeroSection = () => {
  const [titleAnimated, setTitleAnimated] = useState(false);

  useEffect(() => {
    // Animate the title automatically
    const titleTimer = setTimeout(() => setTitleAnimated(true), 300);
    
    return () => {
      clearTimeout(titleTimer);
    };
  }, []);

  return (
    <Container maxWidth="lg">
      <Grid 
        container 
        spacing={4} 
        alignItems="center" 
        justifyContent="center"
        sx={{ 
          py: { xs: 8, md: 15 },
          textAlign: 'center'
        }}
      >
        <Grid item xs={12}>
          <Typography 
            variant="h1" 
            sx={{ 
              fontSize: { xs: '2.5rem', md: '4rem' },
              fontWeight: 700,
              mb: 2,
              background: 'linear-gradient(90deg, #004aad 0%, #0070ff 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              opacity: titleAnimated ? 1 : 0,
              transform: titleAnimated ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
            }}
          >
            Deployments for Everyone
          </Typography>
          <Typography 
            variant="h2" 
            sx={{ 
              fontSize: { xs: '2rem', md: '3.5rem' },
              fontWeight: 700,
              mb: 4,
              color: '#004aad',
              opacity: titleAnimated ? 1 : 0,
              transform: titleAnimated ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 1s ease-out 0.3s, transform 1s ease-out 0.3s',
            }}
          >
            Built for Citizen Developers
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              fontSize: { xs: '1rem', md: '1.2rem' },
              fontWeight: 400,
              mb: 6,
              maxWidth: '800px',
              mx: 'auto',
              color: '#555',
              opacity: titleAnimated ? 1 : 0,
              transform: titleAnimated ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 1.2s ease-out 0.6s, transform 1.2s ease-out 0.6s',
            }}
          >
            Citizen is an open source deployment platform built for citizen developers.
            Deploy and manage your self-hosted sites with Docker-based stability, team
            collaboration, and PostgreSQL database integration.
          </Typography>
          
          <Box 
            sx={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: 2, 
              mb: 8,
              opacity: titleAnimated ? 1 : 0,
              transform: titleAnimated ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 1.4s ease-out 0.9s, transform 1.4s ease-out 0.9s',
            }}
          >
            <Button 
              variant="contained" 
              component={Link}
              href="/sites" 
              size="large"
              sx={{ 
                bgcolor: '#004aad',
                color: 'white',
                px: 4,
                py: 1.5,
                borderRadius: 2,
                fontWeight: 600,
                '&:hover': { bgcolor: '#003a87' },
              }}
            >
              Start your project
            </Button>
            <Button 
              variant="outlined" 
              size="large"
              sx={{ 
                color: '#004aad',
                borderColor: '#004aad',
                px: 4,
                py: 1.5,
                borderRadius: 2,
                fontWeight: 600,
                '&:hover': { borderColor: '#003a87', color: '#003a87' },
              }}
            >
              Request a demo
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HeroSection; 