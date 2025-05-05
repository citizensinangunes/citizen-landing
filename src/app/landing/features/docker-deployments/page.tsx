"use client";

import React from 'react';
import { 
  Box, 
  Container, 
  Typography,
  Paper,
  Button,
  Divider,
  Grid
} from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';

import StorageIcon from '@mui/icons-material/Storage';
import SpeedIcon from '@mui/icons-material/Speed';
import HistoryIcon from '@mui/icons-material/History';
import UpdateIcon from '@mui/icons-material/Update';
import SavingsIcon from '@mui/icons-material/Savings';
import Image from 'next/image';

export default function DockerDeploymentsPage() {
  return (
    <Box sx={{ bgcolor: '#fafafa' }}>
      <Container 
        maxWidth="lg" 
        sx={{ 
          py: 10
        }}
      >
        {/* Hero Section */}
        <Box sx={{ maxWidth: 1200, mx: 'auto', mb: 10 }}>
          <Grid container spacing={4} alignItems="center">
            {/* Text Content - Left Column */}
            <Grid item xs={12} md={6}>
              <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                <Box sx={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  bgcolor: 'rgba(25, 118, 210, 0.08)', 
                  px: 2, 
                  py: 0.5, 
                  borderRadius: 5,
                  mb: 3
                }}>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: '#1976d2', 
                      fontWeight: 500,
                      fontSize: '0.875rem'
                    }}
                  >
                    Container Deployments
                  </Typography>
                </Box>
                
                <Typography 
                  variant="h1" 
                  sx={{ 
                    fontWeight: 500, 
                    mb: 3, 
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    color: '#111',
                    lineHeight: 1.2
                  }}
                >
                  Docker Deployments
                  <Box component="span" sx={{ 
                    display: 'block',
                    color: '#1976d2',
                    fontSize: { xs: '1.5rem', md: '2rem' },
                    fontWeight: 400,
                    mt: 1
                  }}>
                    Deploy containers without the complexity
                  </Box>
                </Typography>
                
                <Typography 
                  variant="body1" 
                  sx={{ 
                    fontSize: '1.25rem', 
                    mb: 5, 
                    color: '#555',
                    lineHeight: 1.6
                  }}
                >
                  Deploy your applications with stable, containerized infrastructure.
                  No complex DevOps knowledge required. Just push your code and we'll handle the rest.
                </Typography>
                
                <Box sx={{ display: 'flex', gap: 2, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: '#1976d2',
                      color: 'white',
                      px: 4,
                      py: 1.5,
                      borderRadius: 2,
                      fontWeight: 500,
                      boxShadow: 'none',
                      fontSize: '1rem',
                      textTransform: 'none',
                      '&:hover': {
                        bgcolor: '#1565c0',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                      }
                    }}
                  >
                    Get Started
                  </Button>
                  
                  <Button
                    variant="outlined"
                    startIcon={<CodeIcon />}
                    sx={{
                      color: '#333',
                      borderColor: '#ddd',
                      px: 4,
                      py: 1.5,
                      borderRadius: 2,
                      fontWeight: 500,
                      fontSize: '1rem',
                      textTransform: 'none',
                      '&:hover': {
                        borderColor: '#1976d2',
                        bgcolor: 'rgba(25, 118, 210, 0.04)'
                      }
                    }}
                  >
                    Documentation
                  </Button>
                </Box>
              </Box>
            </Grid>
            
            {/* Terminal Demo - Right Column */}
            <Grid item xs={12} md={6}>
              <Box 
                sx={{ 
                  position: 'relative',
                  borderRadius: 3,
                  overflow: 'hidden',
                  boxShadow: '0 12px 40px rgba(0,0,0,0.12)'
                }}
              >
                <Box 
                  sx={{ 
                    bgcolor: '#111',
                    py: 1.5,
                    px: 2,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    borderBottom: '1px solid #333'
                  }}
                >
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#ff5f56' }} />
                    <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#ffbd2e' }} />
                    <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#27c93f' }} />
                  </Box>
                  <Typography sx={{ color: '#999', fontSize: '0.8rem', ml: 1 }}>Terminal</Typography>
                </Box>
                <Box
                  sx={{
                    bgcolor: '#1a1a1a',
                    color: '#e0e0e0',
                    p: 4,
                    fontFamily: 'monospace',
                    fontSize: '1rem',
                    lineHeight: 1.8,
                    textAlign: 'left',
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '100%',
                      background: 'linear-gradient(90deg, transparent 0%, #1a1a1a 300%)'
                    }
                  }}
                >
                  <Box sx={{ color: '#75b5ff' }}>$ # Deploy your first app with Citizen</Box>
                  <Box><span style={{ color: '#75b5ff' }}>$</span> curl https://get.citizen.dev | bash</Box>
                  <Box sx={{ color: '#27c93f', mt: 1 }}>✓ Citizen CLI installed successfully</Box>
                  <Box><span style={{ color: '#75b5ff' }}>$</span> citizen login</Box>
                  <Box sx={{ color: '#27c93f', mt: 1 }}>✓ Logged in successfully (user@example.com)</Box>
                  <Box><span style={{ color: '#75b5ff' }}>$</span> citizen deploy ./my-docker-app</Box>
                  <Box sx={{ color: '#aaa', mt: 1 }}>⠋ Preparing deployment...</Box>
                  <Box sx={{ color: '#aaa' }}>⠙ Building Docker image...</Box>
                  <Box sx={{ color: '#aaa' }}>⠹ Pushing to registry...</Box>
                  <Box sx={{ color: '#27c93f' }}>✓ Deployment successful!</Box>
                  <Box sx={{ color: '#75b5ff', mt: 1 }}>App deployed to: https://my-app.citizen.app</Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
        
        <Divider sx={{ my: 6 }} />
        
        {/* Features Grid */}
        <Box sx={{ mb: 12 }}>
          <Typography 
            variant="h2" 
            sx={{ 
              fontWeight: 500, 
              mb: 6,
              textAlign: 'center',
              fontSize: { xs: '1.75rem', md: '2.25rem' },
              color: '#111'
            }}
          >
            Everything you need for container deployments
          </Typography>
          
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  borderRadius: 3,
                  border: '1px solid #eaeaea',
                  height: '100%',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 24px rgba(0,0,0,0.06)',
                    borderColor: '#1976d2'
                  }
                }}
              >
                <StorageIcon sx={{ color: '#1976d2', fontSize: 32, mb: 2 }} />
                <Typography variant="h5" sx={{ fontWeight: 500, mb: 2, color: '#111' }}>
                  One-click deployment
                </Typography>
                <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.6 }}>
                  Deploy your Docker containers with a single command. No complex configuration required.
                  Our platform automatically detects your Docker setup and deploys it to our cloud.
                </Typography>
              </Paper>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  borderRadius: 3,
                  border: '1px solid #eaeaea',
                  height: '100%',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 24px rgba(0,0,0,0.06)',
                    borderColor: '#1976d2'
                  }
                }}
              >
                <SpeedIcon sx={{ color: '#1976d2', fontSize: 32, mb: 2 }} />
                <Typography variant="h5" sx={{ fontWeight: 500, mb: 2, color: '#111' }}>
                  Automated scaling
                </Typography>
                <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.6 }}>
                  Your containers automatically scale based on demand. Scale up during traffic spikes
                  and down during quiet periods to optimize your resource usage and costs.
                </Typography>
              </Paper>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  borderRadius: 3,
                  border: '1px solid #eaeaea',
                  height: '100%',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 24px rgba(0,0,0,0.06)',
                    borderColor: '#1976d2'
                  }
                }}
              >
                <HistoryIcon sx={{ color: '#1976d2', fontSize: 32, mb: 2 }} />
                <Typography variant="h5" sx={{ fontWeight: 500, mb: 2, color: '#111' }}>
                  Instant rollbacks
                </Typography>
                <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.6 }}>
                  Easily rollback to previous versions if needed. Each deployment is versioned and
                  can be restored with a single click or command from our CLI.
                </Typography>
              </Paper>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  borderRadius: 3,
                  border: '1px solid #eaeaea',
                  height: '100%',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 24px rgba(0,0,0,0.06)',
                    borderColor: '#1976d2'
                  }
                }}
              >
                <SavingsIcon sx={{ color: '#1976d2', fontSize: 32, mb: 2 }} />
                <Typography variant="h5" sx={{ fontWeight: 500, mb: 2, color: '#111' }}>
                  Cost effective
                </Typography>
                <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.6 }}>
                  Pay only for what you use with transparent pricing. Our platform is designed to be
                  cost-effective for both small startups and large enterprises alike.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>
        
        {/* CTA Section */}
        <Box 
          sx={{ 
            bgcolor: '#1976d2', 
            borderRadius: 4, 
            py: 6, 
            px: { xs: 4, md: 8 },
            textAlign: 'center',
            backgroundImage: 'linear-gradient(45deg, #1976d2, #3d94e6)',
            boxShadow: '0 10px 40px rgba(25, 118, 210, 0.2)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <Box sx={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'radial-gradient(circle at 20% 120%, rgba(255, 255, 255, 0.1) 0%, rgba(25, 118, 210, 0) 70%)',
          }} />
          
          <Typography variant="h3" sx={{ color: 'white', fontWeight: 500, mb: 2, position: 'relative', zIndex: 1 }}>
            Ready to simplify deployments?
          </Typography>
          <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.9)', mb: 4, fontSize: '1.125rem', maxWidth: 600, mx: 'auto', position: 'relative', zIndex: 1 }}>
            Join thousands of developers who deploy containers with Citizen.
            Get started for free, no credit card required.
          </Typography>
          <Button
            variant="contained"
            sx={{ 
              bgcolor: 'white', 
              color: '#1976d2',
              px: 4,
              py: 1.5,
              fontSize: '1rem',
              fontWeight: 500,
              borderRadius: 2,
              textTransform: 'none',
              position: 'relative',
              zIndex: 1,
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 0.9)',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
              }
            }}
          >
            Start a free project
          </Button>
        </Box>
      </Container>
    </Box>
  );
} 