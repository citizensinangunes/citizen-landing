"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Container,Grid } from '@mui/material';

import Image from 'next/image';

// Define the frameworks to display using local SVG files
const frameworks = [
  { name: 'React', logo: '/react.svg' },
  { name: 'Next.js', logo: '/next.svg' },
  { name: 'Node.js', logo: '/nodejs.svg' },
  { name: 'Python', logo: '/python.svg' },
  { name: 'Docker', logo: '/docker.svg' },
  { name: 'JavaScript', logo: '/js.svg' },
  { name: 'PostgreSQL', logo: '/postgresql.svg' },
  { name: 'Ruby', logo: '/ruby.svg' },
  { name: 'PHP', logo: '/php.svg' },
  { name: 'Go', logo: '/go.svg' }
];

const SupportedFrameworks = () => {
  const [trustAnimated, setTrustAnimated] = useState(false);
  const trustRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Create intersection observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // When element becomes visible in viewport
          if (entry.isIntersecting) {
            setTrustAnimated(true);
            // Unobserve after animation is triggered
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );
    
    // Start observing elements
    if (trustRef.current) observer.observe(trustRef.current);
    
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
    <Box 
      ref={trustRef}
      sx={{ 
        bgcolor: '#f1f5fa', 
        py: 8, 
        textAlign: 'center',
        ...getAnimationStyle(trustAnimated)
      }}
    >
      <Container>
        <Typography variant="h5" sx={{ fontWeight: 600, mb: 1, color: '#333' }}>
          Supported Technologies
        </Typography>
        <Typography variant="body1" sx={{ color: '#666', mb: 6, maxWidth: '700px', mx: 'auto' }}>
          Deploy applications built with your favorite frameworks and technologies
        </Typography>
        
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          {frameworks.map((framework) => (
            <Grid item key={framework.name} xs={6} sm={4} md={2}>
              <Box 
                sx={{ 
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 2,
                  transition: 'transform 0.2s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)'
                  }
                }} 
              >
                <Box 
                  sx={{ 
                    height: 60, 
                    width: 60,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: 1
                  }} 
                >
                  <Image 
                    src={framework.logo} 
                    alt={framework.name}
                    width={45}
                    height={45}
                    style={{ objectFit: 'contain' }}
                  />
                </Box>
                <Typography variant="body2" sx={{ color: '#333', fontWeight: 500 }}>
                  {framework.name}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default SupportedFrameworks; 