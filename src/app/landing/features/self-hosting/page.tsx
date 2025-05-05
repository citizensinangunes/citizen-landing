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
import SecurityIcon from '@mui/icons-material/Security';
import SettingsIcon from '@mui/icons-material/Settings';
import DataObjectIcon from '@mui/icons-material/DataObject';
import Image from 'next/image';

export default function SelfHostingPage() {
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
                  bgcolor: 'rgba(0, 74, 173, 0.08)', 
                  px: 2, 
                  py: 0.5, 
                  borderRadius: 5,
                  mb: 3
                }}>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: '#004aad', 
                      fontWeight: 500,
                      fontSize: '0.875rem'
                    }}
                  >
                    Deployment Options
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
                  Self-Hosting
                  <Box component="span" sx={{ 
                    display: 'block',
                    color: '#004aad',
                    fontSize: { xs: '1.5rem', md: '2rem' },
                    fontWeight: 400,
                    mt: 1
                  }}>
                    Full control of your infrastructure and data
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
                  Deploy Citizen on your own infrastructure. Get complete control over your data, security, and compliance while maintaining all the features of the cloud version.
                </Typography>
                
                <Box sx={{ display: 'flex', gap: 2, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: '#004aad',
                      color: 'white',
                      px: 4,
                      py: 1.5,
                      borderRadius: 2,
                      fontWeight: 500,
                      boxShadow: 'none',
                      fontSize: '1rem',
                      textTransform: 'none',
                      '&:hover': {
                        bgcolor: '#003b8a',
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
                        borderColor: '#004aad',
                        bgcolor: 'rgba(0, 74, 173, 0.04)'
                      }
                    }}
                  >
                    Documentation
                  </Button>
                </Box>
              </Box>
            </Grid>
            
            {/* Self-Hosting UI Demo - Right Column */}
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
                    bgcolor: '#f5f5f5',
                    py: 1.5,
                    px: 2,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    borderBottom: '1px solid #e0e0e0'
                  }}
                >
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#ff5f56' }} />
                    <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#ffbd2e' }} />
                    <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#27c93f' }} />
                  </Box>
                  <Typography sx={{ color: '#555', fontSize: '0.8rem', ml: 1 }}>Server Configuration</Typography>
                </Box>
                <Box
                  sx={{
                    bgcolor: '#fff',
                    color: '#333',
                    p: 4,
                    fontFamily: 'monospace',
                    textAlign: 'left',
                    position: 'relative',
                    height: '300px',
                    overflowY: 'auto'
                  }}
                >
                  {/* Server Config mockup */}
                  <Typography sx={{ color: '#555', mb: 2, fontSize: '0.8rem' }}>$ docker-compose.yml</Typography>
                  <Box sx={{ 
                    bgcolor: '#f8f9fa', 
                    p: 2, 
                    borderRadius: 1, 
                    fontSize: '0.75rem',
                    color: '#333',
                    mb: 3,
                    fontFamily: '"Roboto Mono", monospace',
                    border: '1px solid #eee'
                  }}>
                    <Box sx={{ color: '#777' }}>version: '3'</Box>
                    <Box sx={{ color: '#777' }}>services:</Box>
                    <Box sx={{ color: '#777', ml: 2 }}>citizen:</Box>
                    <Box sx={{ color: '#777', ml: 4 }}>image: citizen/platform:latest</Box>
                    <Box sx={{ color: '#777', ml: 4 }}>ports:</Box>
                    <Box sx={{ color: '#777', ml: 6 }}>- "3000:3000"</Box>
                    <Box sx={{ color: '#777', ml: 4 }}>environment:</Box>
                    <Box sx={{ color: '#777', ml: 6 }}>- DB_HOST=postgres</Box>
                    <Box sx={{ color: '#777', ml: 6 }}>- DB_PORT=5432</Box>
                    <Box sx={{ color: '#777', ml: 6 }}>- REDIS_HOST=redis</Box>
                    <Box sx={{ color: '#004aad', ml: 6, fontWeight: 'bold' }}>- SELF_HOSTED=true</Box>
                    <Box sx={{ color: '#777', ml: 4 }}>volumes:</Box>
                    <Box sx={{ color: '#777', ml: 6 }}>- ./data:/app/data</Box>
                    <Box sx={{ color: '#777', ml: 2 }}>postgres:</Box>
                    <Box sx={{ color: '#777', ml: 4 }}>image: postgres:14</Box>
                    <Box sx={{ color: '#777', ml: 4 }}>environment:</Box>
                    <Box sx={{ color: '#777', ml: 6 }}>- POSTGRES_PASSWORD=secure_password</Box>
                    <Box sx={{ color: '#777', ml: 2 }}>redis:</Box>
                    <Box sx={{ color: '#777', ml: 4 }}>image: redis:alpine</Box>
                  </Box>
                  
                  <Typography sx={{ color: '#555', mb: 1, fontSize: '0.8rem' }}>$ citizen status</Typography>
                  <Box sx={{ 
                    bgcolor: '#f8f9fa', 
                    p: 2, 
                    borderRadius: 1, 
                    fontSize: '0.75rem',
                    mb: 2
                  }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography sx={{ color: '#333', fontWeight: 500 }}>Citizen Platform</Typography>
                      <Typography sx={{ color: '#27ae60', fontWeight: 500 }}>● Running</Typography>
                    </Box>
                    <Typography sx={{ color: '#666', fontSize: '0.7rem', mt: 0.5 }}>
                      Version 2.4.1 • Self-hosted mode
                    </Typography>
                    <Box sx={{ mt: 2 }}>
                      <Typography sx={{ color: '#333', fontSize: '0.7rem' }}>
                        <span style={{ color: '#666' }}>Database:</span> Connected
                      </Typography>
                      <Typography sx={{ color: '#333', fontSize: '0.7rem' }}>
                        <span style={{ color: '#666' }}>Redis:</span> Connected
                      </Typography>
                      <Typography sx={{ color: '#333', fontSize: '0.7rem' }}>
                        <span style={{ color: '#666' }}>File Storage:</span> Local (2.1 GB free)
                      </Typography>
                    </Box>
                  </Box>
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
            Complete control with self-hosting
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
                    borderColor: '#004aad'
                  }
                }}
              >
                <StorageIcon sx={{ color: '#004aad', fontSize: 32, mb: 2 }} />
                <Typography variant="h5" sx={{ fontWeight: 500, mb: 2, color: '#111' }}>
                  Infrastructure ownership
                </Typography>
                <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.6 }}>
                  Deploy on your preferred infrastructure - from bare metal servers to Kubernetes clusters or major cloud providers. Complete control over resources and scaling.
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
                    borderColor: '#004aad'
                  }
                }}
              >
                <SecurityIcon sx={{ color: '#004aad', fontSize: 32, mb: 2 }} />
                <Typography variant="h5" sx={{ fontWeight: 500, mb: 2, color: '#111' }}>
                  Enhanced security & compliance
                </Typography>
                <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.6 }}>
                  Keep all your data within your security perimeter. Perfect for organizations with strict data sovereignty, compliance, or security requirements.
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
                    borderColor: '#004aad'
                  }
                }}
              >
                <SettingsIcon sx={{ color: '#004aad', fontSize: 32, mb: 2 }} />
                <Typography variant="h5" sx={{ fontWeight: 500, mb: 2, color: '#111' }}>
                  Advanced configuration
                </Typography>
                <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.6 }}>
                  Customize every aspect of your deployment with advanced settings and integrations. Connect to existing systems and tailor the platform to your workflow.
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
                    borderColor: '#004aad'
                  }
                }}
              >
                <DataObjectIcon sx={{ color: '#004aad', fontSize: 32, mb: 2 }} />
                <Typography variant="h5" sx={{ fontWeight: 500, mb: 2, color: '#111' }}>
                  Enterprise integrations
                </Typography>
                <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.6 }}>
                  Integrate with your existing enterprise systems including LDAP, Active Directory, SSO providers, and internal services to create a seamless workflow.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>
        
        {/* CTA Section */}
        <Box sx={{ textAlign: 'center', py: 8, px: { xs: 2, md: 8 } }}>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 4, md: 8 },
              borderRadius: 4,
              backgroundImage: 'linear-gradient(135deg, #f5f9ff 0%, #e0ebf9 100%)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <Typography variant="h3" sx={{ fontWeight: 500, mb: 3, color: '#111', fontSize: { xs: '1.75rem', md: '2.25rem' } }}>
              Ready to take control?
            </Typography>
            <Typography variant="body1" sx={{ color: '#555', mb: 4, maxWidth: 800, mx: 'auto' }}>
              Get started with self-hosting Citizen today. Our detailed documentation will guide you through setting up your own deployment in minutes.
            </Typography>
            <Button
              variant="contained"
              sx={{
                bgcolor: '#004aad',
                color: 'white',
                px: 5,
                py: 1.5,
                borderRadius: 2,
                fontWeight: 500,
                fontSize: '1rem',
                textTransform: 'none',
                '&:hover': {
                  bgcolor: '#003b8a',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                }
              }}
            >
              Download Self-Hosting Guide
            </Button>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
} 