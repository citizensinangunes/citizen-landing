"use client";

import React from 'react';
import { Box } from '@mui/material';
import Navbar from '@/app/landing/components/Navbar';
import Footer from '@/components/Footer';
import FeatureNavTabs from './components/FeatureNavTabs';

export default function FeaturesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box sx={{ 
      backgroundColor: '#fafafa',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Navbar */}
      <Box sx={{ position: 'relative', zIndex: 10 }}>
        <Navbar />
      </Box>
      
      {/* Feature Navigation Tabs */}
      <Box sx={{ position: 'relative', zIndex: 9, mt: 0 }}>
        <FeatureNavTabs />
      </Box>
      
      {/* Page Content */}
      <Box 
        sx={{ 
          flexGrow: 1,
          pt: 0
        }}
      >
        {children}
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
} 