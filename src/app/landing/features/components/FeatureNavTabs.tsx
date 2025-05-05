"use client";

import React from 'react';
import { Box, Tabs, Tab, Container } from '@mui/material';
import { useRouter, usePathname } from 'next/navigation';

const featureRoutes = [
  { 
    path: '/landing/features/docker-deployments',
    label: 'Docker Deployments'
  },
  { 
    path: '/landing/features/monitoring',
    label: 'Monitoring & Logging'
  },
  { 
    path: '/landing/features/team-collaboration',
    label: 'Team Collaboration'
  },
  { 
    path: '/landing/features/custom-domains',
    label: 'Custom Domains'
  },
  { 
    path: '/landing/features/self-hosting',
    label: 'Self-Hosting'
  },
  { 
    path: '/landing/features/authentication',
    label: 'Authentication'
  },
  { 
    path: '/landing/features/lambda-functions',
    label: 'Lambda Functions'
  }
];

export default function FeatureNavTabs() {
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
              transition: 'all 0.2s ease',
              marginBottom: 0,
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
          {featureRoutes.map((feature) => (
            <Tab 
              key={feature.path}
              value={feature.path}
              label={feature.label}
            />
          ))}
        </Tabs>
      </Container>
    </Box>
  );
} 