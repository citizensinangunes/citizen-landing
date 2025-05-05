"use client";

import React from 'react';
import { Box } from '@mui/material';
import Navbar from '@/app/landing/components/Navbar';
import Footer from '@/components/Footer';
import ProductNavTabs from '@/app/landing/product/components/ProductNavTabs';

export default function ProductLayout({
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
      
      {/* Product Navigation Tabs */}
      <Box sx={{ position: 'relative', zIndex: 9, mt: 0 }}>
        <ProductNavTabs />
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