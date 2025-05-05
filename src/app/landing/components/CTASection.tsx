"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Button, Paper,Grid } from '@mui/material';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';

const CTASection = () => {
  const [ctaAnimated, setCtaAnimated] = useState(false);
  const ctaRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Create intersection observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // When element becomes visible in viewport
          if (entry.isIntersecting) {
            setCtaAnimated(true);
            // Unobserve after animation is triggered
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );
    
    // Start observing elements
    if (ctaRef.current) observer.observe(ctaRef.current);
    
    return () => {
      observer.disconnect();
    };
  }, []);

  // Animation transition style helper
  const getAnimationStyle = (isAnimated: boolean, delay = 0) => ({
    opacity: isAnimated ? 1 : 0,
    transform: isAnimated ? 'translateY(0)' : 'translateY(20px)',
    transition: `opacity 0.8s ease-out ${delay}s, transform 0.8s ease-out ${delay}s`,
  });

  return (
    <>
      {/* "Use one or all" motto */}
      <Grid 
        item 
        xs={12} 
        ref={ctaRef}
        sx={{ mt: 10, mb: 4, textAlign: 'center', ...getAnimationStyle(ctaAnimated, 0.2) }}
      >
        <Typography variant="h4" sx={{ fontWeight: 600, color: '#333' }}>
          Made for citizen developers. <span style={{ color: '#666', fontWeight: 400 }}>Deploy without knowing DevOps.</span>
        </Typography>
      </Grid>
      
      {/* CTA Section */}
      <Grid 
        item 
        xs={12} 
        sx={{ mt: 8, ...getAnimationStyle(ctaAnimated) }}
      >
        <Paper
          elevation={0}
          sx={{
            bgcolor: 'rgba(0, 74, 173, 0.05)',
            borderRadius: 2,
            p: 6,
            border: '1px solid rgba(0, 74, 173, 0.2)',
            textAlign: 'center'
          }}
        >
          <Typography variant="h4" sx={{ mb: 2, fontWeight: 600, color: '#333' }}>
            Ready to get started?
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, maxWidth: '600px', mx: 'auto', color: '#555' }}>
            Join thousands of developers who are already building with Citizen.
          </Typography>
          <Button 
            variant="contained" 
            component={Link}
            href="/sites" 
            size="large"
            endIcon={<ArrowForwardIcon />}
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
            Start deploying now
          </Button>
        </Paper>
      </Grid>
    </>
  );
};

export default CTASection; 