"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Button, Paper, Snackbar, Alert, Grid } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const CurlCommandSection = () => {
  const [copied, setCopied] = useState(false);
  const [curlAnimated, setCurlAnimated] = useState(false);
  const curlRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Create intersection observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // When element becomes visible in viewport
          if (entry.isIntersecting) {
            setCurlAnimated(true);
            // Unobserve after animation is triggered
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );
    
    // Start observing elements
    if (curlRef.current) observer.observe(curlRef.current);
    
    return () => {
      observer.disconnect();
    };
  }, []);
  
  const curlCommand = `curl -X POST https://api.citizen.dev/v1/sites \\
  -H "Authorization: Bearer $CITIZEN_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"name": "my-vibecode-app", "source": "github", "repo": "https://github.com/user/repo"}'`;
  
  const handleCopy = () => {
    navigator.clipboard.writeText(curlCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  // Animation transition style helper
  const getAnimationStyle = (isAnimated: boolean, delay = 0) => ({
    opacity: isAnimated ? 1 : 0,
    transform: isAnimated ? 'translateY(0)' : 'translateY(20px)',
    transition: `opacity 0.8s ease-out ${delay}s, transform 0.8s ease-out ${delay}s`,
  });

  return (
    <>
      <Grid 
        item 
        xs={12} 
        md={10} 
        lg={8} 
        ref={curlRef}
        sx={getAnimationStyle(curlAnimated)}
      >
        <Paper 
          elevation={0} 
          sx={{ 
            bgcolor: 'white',
            borderRadius: 2,
            p: 3,
            position: 'relative',
            border: '1px solid #e0e0e0',
            textAlign: 'left',
            mb: 8,
            overflow: 'hidden',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)'
          }}
        >
          <Box 
            sx={{ 
              position: 'absolute', 
              left: 0, 
              top: 0, 
              width: '4px', 
              height: '100%', 
              background: 'linear-gradient(180deg, #004aad 0%, #0070ff 100%)' 
            }}
          />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
            <Typography variant="body2" sx={{ color: '#666', fontSize: '0.9rem', fontWeight: 500 }}>
              Deploy with a single command
            </Typography>
            <Button 
              onClick={handleCopy} 
              color="primary"
              size="small"
              startIcon={copied ? <CheckCircleIcon /> : <ContentCopyIcon />}
              sx={{ 
                color: copied ? '#004aad' : '#666',
                '&:hover': { bgcolor: 'rgba(0, 74, 173, 0.08)', color: '#004aad' }
              }}
            >
              {copied ? 'Copied!' : 'Copy'}
            </Button>
          </Box>
          <Typography 
            component="pre" 
            sx={{ 
              fontFamily: 'monospace', 
              fontSize: { xs: '0.8rem', md: '0.9rem' },
              overflowX: 'auto',
              whiteSpace: 'pre-wrap',
              color: '#333',
              p: 1,
              borderRadius: 1,
              bgcolor: 'rgba(0, 74, 173, 0.05)'
            }}
          >
            {curlCommand}
          </Typography>
        </Paper>
      </Grid>

      {/* Copy Success Notification */}
      <Snackbar
        open={copied}
        autoHideDuration={3000}
        onClose={() => setCopied(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="success" sx={{ width: '100%', bgcolor: '#004aad', color: 'white' }}>
          Command copied to clipboard!
        </Alert>
      </Snackbar>
    </>
  );
};

export default CurlCommandSection; 