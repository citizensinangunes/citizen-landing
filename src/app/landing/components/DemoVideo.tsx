"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Paper,Grid } from '@mui/material';


const DemoVideo = () => {
  const [videoAnimated, setVideoAnimated] = useState(false);
  const videoRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Create intersection observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // When element becomes visible in viewport
          if (entry.isIntersecting) {
            setVideoAnimated(true);
            // Unobserve after animation is triggered
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );
    
    // Start observing elements
    if (videoRef.current) observer.observe(videoRef.current);
    
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
    <Grid 
      item 
      xs={12} 
      ref={videoRef}
      sx={getAnimationStyle(videoAnimated)}
    >
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 600, color: '#333', textAlign: 'center' }}>
        See how it works
      </Typography>
      <Paper 
        elevation={0} 
        sx={{ 
          bgcolor: 'white',
          borderRadius: 2,
          position: 'relative',
          border: '1px solid #e0e0e0',
          aspectRatio: '16/9',
          width: '100%',
          maxWidth: '900px',
          mx: 'auto',
          overflow: 'hidden',
          mb: 8,
          cursor: 'pointer',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
          '&:hover .play-button': {
            transform: 'scale(1.1)',
            bgcolor: 'rgba(0, 74, 173, 0.9)'
          }
        }}
      >
        {/* Video Thumbnail */}
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {/* Demo Video Placeholder */}
          <Box
            sx={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              opacity: 0.8,
              backgroundImage: 'url("/demo-placeholder.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              '&::after': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(0deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.4) 100%)'
              }
            }}
          />
          
          {/* Play Button */}
          <Box
            className="play-button"
            sx={{
              width: 80,
              height: 80,
              borderRadius: '50%',
              bgcolor: 'rgba(0, 74, 173, 0.8)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 2,
              transition: 'all 0.3s ease',
              boxShadow: '0 0 20px rgba(0, 74, 173, 0.5)'
            }}
          >
            <Box
              sx={{
                width: 0,
                height: 0,
                borderTop: '15px solid transparent',
                borderBottom: '15px solid transparent',
                borderLeft: '25px solid white',
                ml: 1
              }}
            />
          </Box>
          
          {/* Video Title */}
          <Typography
            variant="h5"
            sx={{
              position: 'absolute',
              bottom: 30,
              left: 30,
              color: 'white',
              fontWeight: 600,
              zIndex: 2,
              textShadow: '0 2px 4px rgba(0,0,0,0.5)'
            }}
          >
            Deploy your first app in minutes
          </Typography>
        </Box>
      </Paper>
    </Grid>
  );
};

export default DemoVideo; 