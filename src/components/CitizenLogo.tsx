import React from 'react';
import { Box, Typography } from '@mui/material';

interface CitizenLogoProps {
  size?: 'small' | 'medium' | 'large';
  variant?: 'light' | 'dark';
}

const CitizenLogo: React.FC<CitizenLogoProps> = ({ 
  size = 'medium',
  variant = 'light'
}) => {
  // Size mapping
  const logoSizes = {
    small: { width: 24, height: 24, fontSize: 16 },
    medium: { width: 32, height: 32, fontSize: 20 },
    large: { width: 48, height: 48, fontSize: 28 }
  };
  
  const currentSize = logoSizes[size];
  const isLight = variant === 'light';
  
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box 
        sx={{ 
          width: currentSize.width, 
          height: currentSize.height, 
          borderRadius: 1,
          background: 'linear-gradient(135deg, #004aad 0%, #0070ff 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mr: 1
        }}
      >
        <Box
          component="span"
          sx={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: currentSize.fontSize * 0.8,
            lineHeight: 1
          }}
        >
          C
        </Box>
      </Box>
      <Typography 
        sx={{ 
          fontSize: currentSize.fontSize,
          fontWeight: 600,
          color: isLight ? 'white' : '#333',
          lineHeight: 1
        }}
      >
        Citizen
      </Typography>
    </Box>
  );
};

export default CitizenLogo; 