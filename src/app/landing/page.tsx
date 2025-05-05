"use client";

import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import Footer from '@/components/Footer';

// Import our components
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CurlCommandSection from './components/CurlCommandSection';
import DemoVideo from './components/DemoVideo';
import FeaturesSection from './components/FeaturesSection';
import CTASection from './components/CTASection';
import SupportedFrameworks from './components/SupportedFrameworks';
import ProductSections from './components/ProductSections';

export default function LandingPage() {
  // Background style applied immediately
  const backgroundStyle = {
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: 'url("/Luma.jpeg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      zIndex: -2
    },
    '&::after': {
      content: '""',
      position: 'fixed',
      top: 0,
      left: 0, 
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.85)',
      zIndex: -1
    }
  };

  return (
    <Box 
      sx={{ 
        color: '#333',
        minHeight: '100vh',
        ...backgroundStyle
      }}
    >
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Main Content */}
      <Container maxWidth="lg">
        <Grid 
          container 
          spacing={4} 
          alignItems="center" 
          justifyContent="center"
        >
          {/* Curl Command Section */}
          <CurlCommandSection />
          
          {/* Demo Video Section */}
          <DemoVideo />
          
          {/* Features Section */}
          <FeaturesSection />
          
          {/* Product Sections */}
          <Grid item xs={12}>
            <Box sx={{ my: 8 }}>
              <ProductSections />
            </Box>
          </Grid>
          
          {/* CTA Section */}
          <CTASection />
        </Grid>
      </Container>
      
      {/* Frameworks section */}
      <Box sx={{ mt: 12 }}>
        <SupportedFrameworks />
      </Box>
      
      {/* Footer */}
      <Footer />
    </Box>
  );
} 