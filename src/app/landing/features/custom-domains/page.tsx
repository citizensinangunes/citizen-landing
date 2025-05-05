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

import LanguageIcon from '@mui/icons-material/Language';
import HttpsIcon from '@mui/icons-material/Https';
import DnsIcon from '@mui/icons-material/Dns';
import SpeedIcon from '@mui/icons-material/Speed';
import Image from 'next/image';

export default function CustomDomainsPage() {
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
                    Domain Management
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
                  Custom Domains
                  <Box component="span" sx={{ 
                    display: 'block',
                    color: '#004aad',
                    fontSize: { xs: '1.5rem', md: '2rem' },
                    fontWeight: 400,
                    mt: 1
                  }}>
                    Use your own domain for a professional look
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
                  Connect your own domain to your Citizen deployments. Get automatic SSL certificates, DNS configuration, and custom subdomains - all with zero configuration.
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
                    Add Domain
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
            
            {/* Domain UI Demo - Right Column */}
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
                  <Typography sx={{ color: '#555', fontSize: '0.8rem', ml: 1 }}>Domain Management</Typography>
                </Box>
                <Box
                  sx={{
                    bgcolor: '#fff',
                    color: '#333',
                    p: 4,
                    fontFamily: 'sans-serif',
                    textAlign: 'left',
                    position: 'relative',
                    height: '300px'
                  }}
                >
                  {/* Domain UI mockup */}
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="h6" sx={{ color: '#004aad', fontWeight: 500, mb: 2 }}>Your Domains</Typography>
                    <Box sx={{ 
                      p: 2, 
                      border: '1px solid #eee', 
                      borderRadius: 2,
                      mb: 2,
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}>
                      <Box>
                        <Typography sx={{ fontWeight: 500 }}>example.com</Typography>
                        <Typography variant="body2" sx={{ color: '#777', fontSize: '0.8rem' }}>Primary Domain • Added 2 days ago</Typography>
                      </Box>
                      <Box sx={{ 
                        px: 2, 
                        py: 0.5, 
                        borderRadius: 5,
                        bgcolor: 'rgba(39, 174, 96, 0.1)',
                        color: '#27ae60',
                        fontSize: '0.75rem',
                        fontWeight: 500
                      }}>
                        Verified
                      </Box>
                    </Box>
                    
                    <Box sx={{ 
                      p: 2, 
                      border: '1px solid #eee', 
                      borderRadius: 2,
                      mb: 2,
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}>
                      <Box>
                        <Typography sx={{ fontWeight: 500 }}>app.mydomain.io</Typography>
                        <Typography variant="body2" sx={{ color: '#777', fontSize: '0.8rem' }}>Subdomain • Added yesterday</Typography>
                      </Box>
                      <Box sx={{ 
                        px: 2, 
                        py: 0.5, 
                        borderRadius: 5,
                        bgcolor: 'rgba(0, 74, 173, 0.1)',
                        color: '#004aad',
                        fontSize: '0.75rem',
                        fontWeight: 500
                      }}>
                        Active
                      </Box>
                    </Box>
                    
                    <Box sx={{ 
                      mt: 3, 
                      display: 'flex', 
                      alignItems: 'center', 
                      color: '#004aad',
                      fontWeight: 500,
                      fontSize: '0.8rem',
                      cursor: 'pointer'
                    }}>
                      <Typography sx={{ fontSize: '0.8rem', fontWeight: 500 }}>+ Add new domain</Typography>
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
            Professional domain management
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
                <LanguageIcon sx={{ color: '#004aad', fontSize: 32, mb: 2 }} />
                <Typography variant="h5" sx={{ fontWeight: 500, mb: 2, color: '#111' }}>
                  Custom domains & subdomains
                </Typography>
                <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.6 }}>
                  Connect your root domain or any subdomain to your applications. Route multiple subdomains to different services with complete flexibility.
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
                <HttpsIcon sx={{ color: '#004aad', fontSize: 32, mb: 2 }} />
                <Typography variant="h5" sx={{ fontWeight: 500, mb: 2, color: '#111' }}>
                  Automatic SSL certificates
                </Typography>
                <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.6 }}>
                  Every domain automatically receives a free SSL certificate. Certificates are provisioned, renewed, and managed without any configuration needed.
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
                <DnsIcon sx={{ color: '#004aad', fontSize: 32, mb: 2 }} />
                <Typography variant="h5" sx={{ fontWeight: 500, mb: 2, color: '#111' }}>
                  Simple DNS management
                </Typography>
                <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.6 }}>
                  Clear instructions for setting up your DNS records with any provider. Automatically verify domain ownership with guided setup and validation.
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
                <SpeedIcon sx={{ color: '#004aad', fontSize: 32, mb: 2 }} />
                <Typography variant="h5" sx={{ fontWeight: 500, mb: 2, color: '#111' }}>
                  Global CDN included
                </Typography>
                <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.6 }}>
                  Your custom domains are automatically served through our global CDN, ensuring fast load times for users worldwide with edge caching.
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
              Launch with your own brand
            </Typography>
            <Typography variant="body1" sx={{ color: '#555', mb: 4, maxWidth: 800, mx: 'auto' }}>
              Establish your professional presence with custom domains. Connect your domains in minutes and give your users a branded experience they can trust.
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
              Get Started with Custom Domains
            </Button>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
} 