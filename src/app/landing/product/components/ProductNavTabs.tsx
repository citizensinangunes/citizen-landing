"use client";

import React from 'react';
import { Box, Tabs, Tab, Container } from '@mui/material';
import { useRouter, usePathname } from 'next/navigation';

const productRoutes = [
  { 
    path: '/landing/product/citizen-developers',
    label: 'For Citizen Developers'
  },
  { 
    path: '/landing/product/startups',
    label: 'For Startups & SMBs'
  },
  { 
    path: '/landing/product/enterprise',
    label: 'For Enterprise'
  },
  { 
    path: '/landing/product/open-source',
    label: 'Open Source Publishing'
  }
];

export default function ProductNavTabs() {
  const router = useRouter();
  const pathname = usePathname();
  
  const handleTabChange = (event: React.SyntheticEvent, newPath: string) => {
    router.push(newPath);
  };

  return (
    <Box sx={{ 
      borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
      bgcolor: 'rgba(255, 255, 255, 0.8)',
      backdropFilter: 'blur(8px)',
      position: 'sticky',
      top: 60,
      zIndex: 8,
      boxShadow: 'none',
      transition: 'all 0.3s ease',
      mt: 0,
      pb: 0
    }}>
      <Container maxWidth="lg" sx={{ pb: 0 }}>
        <Tabs 
          value={pathname}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile
          TabIndicatorProps={{
            sx: {
              height: 2,
              borderRadius: '2px',
              transition: 'all 0.3s ease'
            }
          }}
          sx={{
            minHeight: '32px',
            '& .MuiTabs-scrollButtons': {
              color: '#999',
              '&.Mui-disabled': {
                opacity: 0.3
              }
            },
            '& .MuiTab-root': {
              minHeight: 32,
              textTransform: 'none',
              fontSize: '0.675rem',
              fontWeight: 500,
              color: '#777',
              opacity: 0.8,
              py: 0.5,
              px: 1.5,
              minWidth: 'auto',
              marginRight: 1,
              marginBottom: 0,
              transition: 'all 0.2s ease',
              '&:hover': {
                opacity: 1,
                color: '#555'
              },
              '&.Mui-selected': {
                color: '#1a56db',
                opacity: 1,
                fontWeight: 600
              }
            },
            '& .MuiTabs-indicator': {
              backgroundColor: '#1a56db',
              opacity: 0.8,
              bottom: 0
            },
            '& .MuiTabs-flexContainer': {
              pb: 0
            }
          }}
        >
          {productRoutes.map((route) => (
            <Tab 
              key={route.path}
              value={route.path}
              label={route.label}
            />
          ))}
        </Tabs>
      </Container>
    </Box>
  );
} 