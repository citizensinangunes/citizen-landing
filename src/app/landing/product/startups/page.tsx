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

import WebIcon from '@mui/icons-material/Web';
import DevicesIcon from '@mui/icons-material/Devices';
import SettingsIcon from '@mui/icons-material/Settings';
import SpeedIcon from '@mui/icons-material/Speed';
import Image from 'next/image';

export default function StartupsPage() {
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
                    For Startups & SMBs
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
                  Deploy faster
                  <Box component="span" sx={{ 
                    display: 'block',
                    color: '#004aad',
                    fontSize: { xs: '1.5rem', md: '2rem' },
                    fontWeight: 400,
                    mt: 1
                  }}>
                    Focus on your product, not DevOps
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
                  Citizen provides startups and small businesses with a hassle-free deployment platform. Ship faster, scale with ease, and eliminate infrastructure management overhead.
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
                    Start Free Trial
                  </Button>
                  
                  <Button
                    variant="outlined"
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
                    View Pricing
                  </Button>
                </Box>
              </Box>
            </Grid>
            
            {/* UI Demo - Right Column */}
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
                  <Typography sx={{ color: '#555', fontSize: '0.8rem', ml: 1 }}>Citizen Dashboard</Typography>
                </Box>
                <Box
                  sx={{
                    bgcolor: '#fff',
                    color: '#333',
                    p: 0,
                    fontFamily: 'sans-serif',
                    textAlign: 'left',
                    position: 'relative',
                    height: '320px'
                  }}
                >
                  {/* Deployment dashboard mockup */}
                  <Box sx={{ height: '100%', p: 2 }}>
                    <Box sx={{ p: 2, mb: 2 }}>
                      <Typography sx={{ fontSize: '1.2rem', fontWeight: 500, mb: 2 }}>Recent Deployments</Typography>
                      
                      <Box sx={{ 
                        display: 'flex', 
                        flexDirection: 'column',
                        gap: 1
                      }}>
                        {/* Deployment items */}
                        <Box sx={{ 
                          p: 2, 
                          border: '1px solid #eee', 
                          borderRadius: 1,
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          bgcolor: '#f8f9ff'
                        }}>
                          <Box>
                            <Typography sx={{ fontSize: '0.9rem', fontWeight: 500, color: '#004aad' }}>landing-page</Typography>
                            <Typography sx={{ fontSize: '0.75rem', color: '#666' }}>main • 2m ago</Typography>
                          </Box>
                          <Box sx={{ 
                            px: 1.5, 
                            py: 0.5, 
                            bgcolor: '#e6f2eb', 
                            borderRadius: 1,
                            color: '#2a9d58',
                            fontSize: '0.75rem',
                            fontWeight: 500
                          }}>
                            Success
                          </Box>
                        </Box>
                        
                        <Box sx={{ 
                          p: 2, 
                          border: '1px solid #eee', 
                          borderRadius: 1,
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center'
                        }}>
                          <Box>
                            <Typography sx={{ fontSize: '0.9rem', fontWeight: 500 }}>api-server</Typography>
                            <Typography sx={{ fontSize: '0.75rem', color: '#666' }}>develop • 1h ago</Typography>
                          </Box>
                          <Box sx={{ 
                            px: 1.5, 
                            py: 0.5, 
                            bgcolor: '#e6f2eb', 
                            borderRadius: 1,
                            color: '#2a9d58',
                            fontSize: '0.75rem',
                            fontWeight: 500
                          }}>
                            Success
                          </Box>
                        </Box>
                        
                        <Box sx={{ 
                          p: 2, 
                          border: '1px solid #eee', 
                          borderRadius: 1,
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center'
                        }}>
                          <Box>
                            <Typography sx={{ fontSize: '0.9rem', fontWeight: 500 }}>admin-dashboard</Typography>
                            <Typography sx={{ fontSize: '0.75rem', color: '#666' }}>feat/auth • 3h ago</Typography>
                          </Box>
                          <Box sx={{ 
                            px: 1.5, 
                            py: 0.5, 
                            bgcolor: '#fcf3e6', 
                            borderRadius: 1,
                            color: '#e88c2a',
                            fontSize: '0.75rem',
                            fontWeight: 500
                          }}>
                            Building
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
        
        <Divider sx={{ my: 6 }} />
        
        {/* Features Section with Alternating Layout */}
        <Box sx={{ mb: 12 }}>
          <Typography 
            variant="h2" 
            sx={{ 
              fontWeight: 500, 
              mb: 8,
              textAlign: 'center',
              fontSize: { xs: '1.75rem', md: '2.25rem' },
              color: '#111'
            }}
          >
            Why startups choose Citizen
          </Typography>
          
          {/* Feature 1 - Text on left, image on right */}
          <Box sx={{ mb: 10 }}>
            <Grid container spacing={6} alignItems="center">
              <Grid item xs={12} md={6}>
                <Box sx={{ pr: { md: 4 } }}>
                  <SpeedIcon sx={{ color: '#004aad', fontSize: 40, mb: 2 }} />
                  <Typography variant="h4" sx={{ fontWeight: 500, mb: 3, color: '#111' }}>
                    Fast CI/CD Pipeline
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.7, fontSize: '1.1rem' }}>
                    Automatically build, test and deploy your applications with every code push. Citizen integrates seamlessly with GitHub, GitLab, and Bitbucket to accelerate your development workflow.
                  </Typography>
                  <Box sx={{ mt: 3 }}>
                    <Button
                      variant="outlined"
                      sx={{
                        color: '#004aad',
                        borderColor: '#004aad',
                        textTransform: 'none',
                        fontWeight: 500,
                        mt: 2,
                        '&:hover': {
                          borderColor: '#003b8a',
                          bgcolor: 'rgba(0, 74, 173, 0.04)'
                        }
                      }}
                    >
                      Learn more
                    </Button>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box sx={{ 
                  borderRadius: 4, 
                  overflow: 'hidden', 
                  boxShadow: '0 12px 30px rgba(0,0,0,0.1)',
                  position: 'relative',
                  height: { xs: '260px', md: '320px' }
                }}>
                  <Box sx={{ 
                    bgcolor: '#f8f9fa',
                    width: '100%', 
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: 2
                  }}>
                    {/* CI/CD Pipeline Mockup */}
                    <Box sx={{ 
                      width: '90%', 
                      height: '90%',
                      bgcolor: 'white', 
                      borderRadius: 2,
                      boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                      p: 2,
                      display: 'flex',
                      flexDirection: 'column'
                    }}>
                      <Box sx={{ 
                        display: 'flex', 
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        pb: 2,
                        borderBottom: '1px solid #eee'
                      }}>
                        <Typography sx={{ fontSize: '0.9rem', fontWeight: 500 }}>Deployment Pipeline</Typography>
                        <Box sx={{ 
                          px: 1.5, 
                          py: 0.5, 
                          bgcolor: '#e6f2eb', 
                          borderRadius: 1,
                          color: '#2a9d58',
                          fontSize: '0.75rem',
                          fontWeight: 500
                        }}>
                          Running
                        </Box>
                      </Box>
                      
                      <Box sx={{ 
                        flex: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        py: 3
                      }}>
                        {/* Pipeline Steps */}
                        <Box sx={{ 
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          position: 'relative',
                          width: '20%'
                        }}>
                          <Box sx={{ 
                            width: 40, 
                            height: 40, 
                            borderRadius: '50%', 
                            bgcolor: '#e6f2eb',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#2a9d58',
                            mb: 1,
                            fontSize: '0.9rem',
                            fontWeight: 'bold'
                          }}>1</Box>
                          <Typography sx={{ fontSize: '0.7rem', textAlign: 'center' }}>Commit</Typography>
                          <Box sx={{ 
                            height: 2, 
                            width: '100%', 
                            bgcolor: '#e6f2eb', 
                            position: 'absolute', 
                            right: '-50%', 
                            top: 20,
                            zIndex: 0
                          }}></Box>
                        </Box>
                        
                        <Box sx={{ 
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          position: 'relative',
                          width: '20%'
                        }}>
                          <Box sx={{ 
                            width: 40, 
                            height: 40, 
                            borderRadius: '50%', 
                            bgcolor: '#e6f2eb',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#2a9d58',
                            mb: 1,
                            fontSize: '0.9rem',
                            fontWeight: 'bold'
                          }}>2</Box>
                          <Typography sx={{ fontSize: '0.7rem', textAlign: 'center' }}>Build</Typography>
                          <Box sx={{ 
                            height: 2, 
                            width: '100%', 
                            bgcolor: '#e6f2eb', 
                            position: 'absolute', 
                            right: '-50%', 
                            top: 20,
                            zIndex: 0
                          }}></Box>
                        </Box>
                        
                        <Box sx={{ 
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          position: 'relative',
                          width: '20%'
                        }}>
                          <Box sx={{ 
                            width: 40, 
                            height: 40, 
                            borderRadius: '50%', 
                            bgcolor: '#e6f2eb',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#2a9d58',
                            mb: 1,
                            fontSize: '0.9rem',
                            fontWeight: 'bold'
                          }}>3</Box>
                          <Typography sx={{ fontSize: '0.7rem', textAlign: 'center' }}>Test</Typography>
                          <Box sx={{ 
                            height: 2, 
                            width: '100%', 
                            bgcolor: '#e6f2eb', 
                            position: 'absolute', 
                            right: '-50%', 
                            top: 20,
                            zIndex: 0
                          }}></Box>
                        </Box>
                        
                        <Box sx={{ 
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          position: 'relative',
                          width: '20%'
                        }}>
                          <Box sx={{ 
                            width: 40, 
                            height: 40, 
                            borderRadius: '50%', 
                            bgcolor: '#fcf3e6',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#e88c2a',
                            mb: 1,
                            fontSize: '0.9rem',
                            fontWeight: 'bold'
                          }}>4</Box>
                          <Typography sx={{ fontSize: '0.7rem', textAlign: 'center' }}>Deploy</Typography>
                        </Box>
                      </Box>
                      
                      <Box sx={{ 
                        p: 2, 
                        bgcolor: '#f8f9fa', 
                        borderRadius: 1,
                        fontSize: '0.75rem'
                      }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                          <Typography sx={{ fontWeight: 500 }}>Deploying: api-server</Typography>
                          <Typography sx={{ color: '#666' }}>75%</Typography>
                        </Box>
                        <Box sx={{ 
                          width: '100%', 
                          height: 6, 
                          bgcolor: '#eee', 
                          borderRadius: 3,
                          overflow: 'hidden'
                        }}>
                          <Box sx={{ width: '75%', height: '100%', bgcolor: '#004aad' }}></Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
          
          {/* Feature 2 - Image on left, text on right */}
          <Box sx={{ mb: 10 }}>
            <Grid container spacing={6} alignItems="center" direction={{ xs: 'column-reverse', md: 'row' }}>
              <Grid item xs={12} md={6}>
                <Box sx={{ 
                  borderRadius: 4, 
                  overflow: 'hidden', 
                  boxShadow: '0 12px 30px rgba(0,0,0,0.1)',
                  position: 'relative',
                  height: { xs: '260px', md: '320px' }
                }}>
                  <Box sx={{ 
                    bgcolor: '#f8f9fa',
                    width: '100%', 
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: 2
                  }}>
                    {/* Zero DevOps mockup */}
                    <Box sx={{ 
                      width: '90%', 
                      height: '90%',
                      bgcolor: 'white', 
                      borderRadius: 2,
                      boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                      p: 2,
                      display: 'flex',
                      flexDirection: 'column'
                    }}>
                      <Typography sx={{ fontSize: '0.9rem', fontWeight: 500, mb: 2 }}>Infrastructure Management</Typography>
                      
                      <Grid container spacing={2} sx={{ mb: 2 }}>
                        <Grid item xs={6}>
                          <Box sx={{ 
                            p: 2,
                            border: '1px solid #eee',
                            borderRadius: 1,
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center'
                          }}>
                            <Box sx={{ 
                              bgcolor: '#f5f8ff', 
                              width: 40, 
                              height: 40, 
                              display: 'flex', 
                              alignItems: 'center', 
                              justifyContent: 'center',
                              borderRadius: 1,
                              mb: 1
                            }}>
                              <Box sx={{ fontSize: '1.5rem', color: '#004aad' }}>↻</Box>
                            </Box>
                            <Typography sx={{ fontSize: '0.8rem', fontWeight: 500 }}>Auto-Scaling</Typography>
                            <Typography sx={{ fontSize: '0.7rem', color: '#666', mt: 0.5 }}>Enabled</Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={6}>
                          <Box sx={{ 
                            p: 2,
                            border: '1px solid #eee',
                            borderRadius: 1,
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center'
                          }}>
                            <Box sx={{ 
                              bgcolor: '#f5f8ff', 
                              width: 40, 
                              height: 40, 
                              display: 'flex', 
                              alignItems: 'center', 
                              justifyContent: 'center',
                              borderRadius: 1,
                              mb: 1
                            }}>
                              <Box sx={{ fontSize: '1.5rem', color: '#004aad' }}>⚡</Box>
                            </Box>
                            <Typography sx={{ fontSize: '0.8rem', fontWeight: 500 }}>Load Balancing</Typography>
                            <Typography sx={{ fontSize: '0.7rem', color: '#666', mt: 0.5 }}>Automatic</Typography>
                          </Box>
                        </Grid>
                      </Grid>
                      
                      <Grid container spacing={2}>
                        <Grid item xs={6}>
                          <Box sx={{ 
                            p: 2,
                            border: '1px solid #eee',
                            borderRadius: 1,
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center'
                          }}>
                            <Box sx={{ 
                              bgcolor: '#f5f8ff', 
                              width: 40, 
                              height: 40, 
                              display: 'flex', 
                              alignItems: 'center', 
                              justifyContent: 'center',
                              borderRadius: 1,
                              mb: 1
                            }}>
                              <Box sx={{ fontSize: '1.5rem', color: '#004aad' }}>🔒</Box>
                            </Box>
                            <Typography sx={{ fontSize: '0.8rem', fontWeight: 500 }}>SSL Certificates</Typography>
                            <Typography sx={{ fontSize: '0.7rem', color: '#666', mt: 0.5 }}>Managed</Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={6}>
                          <Box sx={{ 
                            p: 2,
                            border: '1px solid #eee',
                            borderRadius: 1,
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center'
                          }}>
                            <Box sx={{ 
                              bgcolor: '#f5f8ff', 
                              width: 40, 
                              height: 40, 
                              display: 'flex', 
                              alignItems: 'center', 
                              justifyContent: 'center',
                              borderRadius: 1,
                              mb: 1
                            }}>
                              <Box sx={{ fontSize: '1.5rem', color: '#004aad' }}>📊</Box>
                            </Box>
                            <Typography sx={{ fontSize: '0.8rem', fontWeight: 500 }}>Monitoring</Typography>
                            <Typography sx={{ fontSize: '0.7rem', color: '#666', mt: 0.5 }}>Real-time</Typography>
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Box sx={{ pl: { md: 4 } }}>
                  <SettingsIcon sx={{ color: '#004aad', fontSize: 40, mb: 2 }} />
                  <Typography variant="h4" sx={{ fontWeight: 500, mb: 3, color: '#111' }}>
                    Zero DevOps Overhead
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.7, fontSize: '1.1rem' }}>
                    No infrastructure management required. Citizen automatically handles scaling, load balancing, SSL certificates, and monitoring so your team can focus exclusively on building your product.
                  </Typography>
                  <Box sx={{ mt: 3 }}>
                    <Button
                      variant="outlined"
                      sx={{
                        color: '#004aad',
                        borderColor: '#004aad',
                        textTransform: 'none',
                        fontWeight: 500,
                        mt: 2,
                        '&:hover': {
                          borderColor: '#003b8a',
                          bgcolor: 'rgba(0, 74, 173, 0.04)'
                        }
                      }}
                    >
                      Learn more
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
          
          {/* Feature 3 - Text on left, image on right */}
          <Box sx={{ mb: 10 }}>
            <Grid container spacing={6} alignItems="center">
              <Grid item xs={12} md={6}>
                <Box sx={{ pr: { md: 4 } }}>
                  <WebIcon sx={{ color: '#004aad', fontSize: 40, mb: 2 }} />
                  <Typography variant="h4" sx={{ fontWeight: 500, mb: 3, color: '#111' }}>
                    Custom Domains
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.7, fontSize: '1.1rem' }}>
                    Connect your domain and SSL certificate with just a few clicks. Citizen provides automatic HTTPS and manages renewals so your applications are always secure and professional.
                  </Typography>
                  <Box sx={{ mt: 3 }}>
                    <Button
                      variant="outlined"
                      sx={{
                        color: '#004aad',
                        borderColor: '#004aad',
                        textTransform: 'none',
                        fontWeight: 500,
                        mt: 2,
                        '&:hover': {
                          borderColor: '#003b8a',
                          bgcolor: 'rgba(0, 74, 173, 0.04)'
                        }
                      }}
                    >
                      Learn more
                    </Button>
                  </Box>
                </Box>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Box sx={{ 
                  borderRadius: 4, 
                  overflow: 'hidden', 
                  boxShadow: '0 12px 30px rgba(0,0,0,0.1)',
                  position: 'relative',
                  height: { xs: '260px', md: '320px' }
                }}>
                  <Box sx={{ 
                    bgcolor: '#f8f9fa',
                    width: '100%', 
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: 2
                  }}>
                    {/* Custom Domains Mockup */}
                    <Box sx={{ 
                      width: '90%', 
                      height: '90%',
                      bgcolor: 'white', 
                      borderRadius: 2,
                      boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                      p: 2,
                      display: 'flex',
                      flexDirection: 'column'
                    }}>
                      <Typography sx={{ fontSize: '0.9rem', fontWeight: 500, mb: 2 }}>Domain Management</Typography>
                      
                      <Box sx={{ 
                        p: 3, 
                        border: '1px solid #eee',
                        borderRadius: 1,
                        mb: 2
                      }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                          <Box>
                            <Typography sx={{ fontSize: '0.9rem', fontWeight: 500 }}>yourstartup.com</Typography>
                            <Typography sx={{ fontSize: '0.7rem', color: '#666' }}>Primary Domain</Typography>
                          </Box>
                          <Box sx={{ 
                            px: 1.5, 
                            py: 0.5, 
                            bgcolor: '#e6f2eb', 
                            borderRadius: 1,
                            color: '#2a9d58',
                            fontSize: '0.75rem',
                            fontWeight: 500,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 0.5
                          }}>
                            <Box sx={{ fontSize: '0.7rem' }}>🔒</Box>
                            SSL Active
                          </Box>
                        </Box>
                        
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, p: 1, bgcolor: '#f8f9fa', borderRadius: 1 }}>
                          <Box sx={{ 
                            px: 1.5, 
                            py: 0.5, 
                            bgcolor: '#004aad10', 
                            borderRadius: 1,
                            color: '#004aad',
                            fontSize: '0.75rem',
                            fontWeight: 500
                          }}>
                            A
                          </Box>
                          <Typography sx={{ fontSize: '0.75rem', color: '#666', flex: 1 }}>@ → 12.34.56.78</Typography>
                        </Box>
                      </Box>
                      
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Button
                          variant="outlined"
                          sx={{
                            color: '#666',
                            borderColor: '#ddd',
                            fontSize: '0.75rem',
                            py: 0.5,
                            textTransform: 'none'
                          }}
                        >
                          + Add New Domain
                        </Button>
                        
                        <Box sx={{ 
                          px: 1.5, 
                          py: 0.5, 
                          bgcolor: '#f5f5f5', 
                          borderRadius: 1,
                          color: '#666',
                          fontSize: '0.75rem'
                        }}>
                          SSL Auto-renewal: ON
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
          
          {/* Feature 4 - Image on left, text on right */}
          <Box>
            <Grid container spacing={6} alignItems="center" direction={{ xs: 'column-reverse', md: 'row' }}>
              <Grid item xs={12} md={6}>
                <Box sx={{ 
                  borderRadius: 4, 
                  overflow: 'hidden', 
                  boxShadow: '0 12px 30px rgba(0,0,0,0.1)',
                  position: 'relative',
                  height: { xs: '260px', md: '320px' }
                }}>
                  <Box sx={{ 
                    bgcolor: '#f8f9fa',
                    width: '100%', 
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: 2
                  }}>
                    {/* Scalable Resources Mockup */}
                    <Box sx={{ 
                      width: '90%', 
                      height: '90%',
                      bgcolor: 'white', 
                      borderRadius: 2,
                      boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                      p: 2,
                      display: 'flex',
                      flexDirection: 'column'
                    }}>
                      <Typography sx={{ fontSize: '0.9rem', fontWeight: 500, mb: 2 }}>Resource Usage</Typography>
                      
                      <Box sx={{ 
                        display: 'flex',
                        alignItems: 'flex-end',
                        height: '150px',
                        p: 1,
                        mb: 2
                      }}>
                        {/* Usage Graph */}
                        <Box sx={{ 
                          height: '30%', 
                          width: '40px', 
                          bgcolor: '#e6f2eb',
                          borderRadius: '4px 4px 0 0',
                          mr: 1,
                          position: 'relative'
                        }}>
                          <Typography sx={{ fontSize: '0.7rem', position: 'absolute', bottom: -20, left: 0, width: '100%', textAlign: 'center' }}>Jan</Typography>
                        </Box>
                        <Box sx={{ 
                          height: '45%', 
                          width: '40px', 
                          bgcolor: '#e6f2eb',
                          borderRadius: '4px 4px 0 0',
                          mr: 1,
                          position: 'relative'
                        }}>
                          <Typography sx={{ fontSize: '0.7rem', position: 'absolute', bottom: -20, left: 0, width: '100%', textAlign: 'center' }}>Feb</Typography>
                        </Box>
                        <Box sx={{ 
                          height: '60%', 
                          width: '40px', 
                          bgcolor: '#e6f2eb',
                          borderRadius: '4px 4px 0 0',
                          mr: 1,
                          position: 'relative'
                        }}>
                          <Typography sx={{ fontSize: '0.7rem', position: 'absolute', bottom: -20, left: 0, width: '100%', textAlign: 'center' }}>Mar</Typography>
                        </Box>
                        <Box sx={{ 
                          height: '75%', 
                          width: '40px', 
                          bgcolor: '#004aad',
                          borderRadius: '4px 4px 0 0',
                          mr: 1,
                          position: 'relative'
                        }}>
                          <Typography sx={{ fontSize: '0.7rem', position: 'absolute', bottom: -20, left: 0, width: '100%', textAlign: 'center' }}>Apr</Typography>
                        </Box>
                        <Box sx={{ 
                          height: '85%', 
                          width: '40px', 
                          bgcolor: '#004aad',
                          borderRadius: '4px 4px 0 0',
                          mr: 1,
                          position: 'relative'
                        }}>
                          <Typography sx={{ fontSize: '0.7rem', position: 'absolute', bottom: -20, left: 0, width: '100%', textAlign: 'center' }}>May</Typography>
                        </Box>
                        <Box sx={{ 
                          height: '100%', 
                          width: '40px', 
                          bgcolor: '#004aad',
                          borderRadius: '4px 4px 0 0',
                          position: 'relative'
                        }}>
                          <Typography sx={{ fontSize: '0.7rem', position: 'absolute', bottom: -20, left: 0, width: '100%', textAlign: 'center' }}>Jun</Typography>
                        </Box>
                      </Box>
                      
                      <Box sx={{ 
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        p: 2,
                        bgcolor: '#f8f9fa',
                        borderRadius: 1
                      }}>
                        <Box>
                          <Typography sx={{ fontSize: '0.75rem', color: '#666' }}>Current Plan</Typography>
                          <Typography sx={{ fontSize: '0.9rem', fontWeight: 500 }}>Startup Pro</Typography>
                        </Box>
                        
                        <Button
                          variant="outlined"
                          sx={{
                            color: '#004aad',
                            borderColor: '#004aad',
                            fontSize: '0.75rem',
                            py: 0.5,
                            textTransform: 'none'
                          }}
                        >
                          Scale Up
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Box sx={{ pl: { md: 4 } }}>
                  <DevicesIcon sx={{ color: '#004aad', fontSize: 40, mb: 2 }} />
                  <Typography variant="h4" sx={{ fontWeight: 500, mb: 3, color: '#111' }}>
                    Scalable Resources
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.7, fontSize: '1.1rem' }}>
                    Start small and scale up as you grow. Our flexible resource allocation adapts to your needs, from MVP to enterprise-scale applications, with transparent pricing and no hidden costs.
                  </Typography>
                  <Box sx={{ mt: 3 }}>
                    <Button
                      variant="outlined"
                      sx={{
                        color: '#004aad',
                        borderColor: '#004aad',
                        textTransform: 'none',
                        fontWeight: 500,
                        mt: 2,
                        '&:hover': {
                          borderColor: '#003b8a',
                          bgcolor: 'rgba(0, 74, 173, 0.04)'
                        }
                      }}
                    >
                      Learn more
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
        
        {/* Docker Deployments Section */}
        <Box sx={{ mb: 12 }}>
          <Typography 
            variant="h2" 
            sx={{ 
              fontWeight: 500, 
              mb: 8,
              textAlign: 'center',
              fontSize: { xs: '1.75rem', md: '2.25rem' },
              color: '#111'
            }}
          >
            Powerful Docker Deployments
          </Typography>
          
          {/* Docker Feature - Text on left, image on right */}
          <Box sx={{ mb: 10 }}>
            <Grid container spacing={6} alignItems="center">
              <Grid item xs={12} md={6}>
                <Box sx={{ pr: { md: 4 } }}>
                  <Box sx={{ color: '#004aad', fontSize: 40, mb: 2 }}>🐳</Box>
                  <Typography variant="h4" sx={{ fontWeight: 500, mb: 3, color: '#111' }}>
                    Docker-ready Infrastructure
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.7, fontSize: '1.1rem', mb: 2 }}>
                    Deploy containerized applications with ease. Citizen provides a fully managed Docker environment that eliminates infrastructure headaches while preserving all the benefits of containerization.
                  </Typography>
                  
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.7, fontSize: '1.1rem', mb: 1 }}>
                      <strong>Perfect portability</strong> — Your containers run exactly the same in all environments, ending "but it works on my machine" problems forever.
                    </Typography>
                    
                    <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.7, fontSize: '1.1rem', mb: 1 }}>
                      <strong>Clean isolation</strong> — Run multiple services with different dependencies on the same infrastructure without conflicts.
                    </Typography>
                    
                    <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.7, fontSize: '1.1rem' }}>
                      <strong>Seamless scaling & rollbacks</strong> — Scale up during traffic spikes and roll back to previous versions in seconds when needed.
                    </Typography>
                  </Box>
                  
                  <Box sx={{ mt: 3 }}>
                    <Button
                      variant="outlined"
                      sx={{
                        color: '#004aad',
                        borderColor: '#004aad',
                        textTransform: 'none',
                        fontWeight: 500,
                        mt: 2,
                        '&:hover': {
                          borderColor: '#003b8a',
                          bgcolor: 'rgba(0, 74, 173, 0.04)'
                        }
                      }}
                    >
                      Learn more
                    </Button>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box sx={{ 
                  borderRadius: 4, 
                  overflow: 'hidden', 
                  boxShadow: '0 12px 30px rgba(0,0,0,0.1)',
                  position: 'relative',
                  height: { xs: '260px', md: '320px' }
                }}>
                  <Box sx={{ 
                    bgcolor: '#f8f9fa',
                    width: '100%', 
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: 2
                  }}>
                    {/* Docker Deployment Mockup */}
                    <Box sx={{ 
                      width: '90%', 
                      height: '90%',
                      bgcolor: 'white', 
                      borderRadius: 2,
                      boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                      p: 2,
                      display: 'flex',
                      flexDirection: 'column'
                    }}>
                      <Box sx={{ 
                        display: 'flex', 
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        pb: 2,
                        borderBottom: '1px solid #eee'
                      }}>
                        <Typography sx={{ fontSize: '0.9rem', fontWeight: 500 }}>Docker Containers</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <Box sx={{ 
                            px: 1.5, 
                            py: 0.5, 
                            bgcolor: '#e6f2eb', 
                            borderRadius: 1,
                            color: '#2a9d58',
                            fontSize: '0.75rem',
                            fontWeight: 500,
                            mr: 1
                          }}>
                            5 Running
                          </Box>
                          <Box sx={{ color: '#004aad', fontSize: '1.2rem' }}>🐳</Box>
                        </Box>
                      </Box>
                      
                      <Box sx={{ 
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1,
                        py: 2,
                        overflow: 'auto'
                      }}>
                        {/* Container List */}
                        <Box sx={{ 
                          p: 1.5, 
                          border: '1px solid #eee', 
                          borderRadius: 1,
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          bgcolor: '#f8f9ff'
                        }}>
                          <Box>
                            <Typography sx={{ fontSize: '0.85rem', fontWeight: 500, color: '#004aad' }}>api-service</Typography>
                            <Typography sx={{ fontSize: '0.7rem', color: '#666' }}>v2.3.0 • 3 replicas</Typography>
                          </Box>
                          <Box sx={{ 
                            px: 1.5, 
                            py: 0.5, 
                            bgcolor: '#e6f2eb', 
                            borderRadius: 1,
                            color: '#2a9d58',
                            fontSize: '0.75rem',
                            fontWeight: 500
                          }}>
                            Running
                          </Box>
                        </Box>
                        
                        <Box sx={{ 
                          p: 1.5, 
                          border: '1px solid #eee', 
                          borderRadius: 1,
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center'
                        }}>
                          <Box>
                            <Typography sx={{ fontSize: '0.85rem', fontWeight: 500 }}>web-frontend</Typography>
                            <Typography sx={{ fontSize: '0.7rem', color: '#666' }}>v1.8.5 • 2 replicas</Typography>
                          </Box>
                          <Box sx={{ 
                            px: 1.5, 
                            py: 0.5, 
                            bgcolor: '#e6f2eb', 
                            borderRadius: 1,
                            color: '#2a9d58',
                            fontSize: '0.75rem',
                            fontWeight: 500
                          }}>
                            Running
                          </Box>
                        </Box>
                        
                        <Box sx={{ 
                          p: 1.5, 
                          border: '1px solid #eee', 
                          borderRadius: 1,
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center'
                        }}>
                          <Box>
                            <Typography sx={{ fontSize: '0.85rem', fontWeight: 500 }}>db-postgres</Typography>
                            <Typography sx={{ fontSize: '0.7rem', color: '#666' }}>v14.5 • 1 replica</Typography>
                          </Box>
                          <Box sx={{ 
                            px: 1.5, 
                            py: 0.5, 
                            bgcolor: '#e6f2eb', 
                            borderRadius: 1,
                            color: '#2a9d58',
                            fontSize: '0.75rem',
                            fontWeight: 500
                          }}>
                            Running
                          </Box>
                        </Box>
                        
                        <Box sx={{ 
                          p: 1.5, 
                          border: '1px solid #eee', 
                          borderRadius: 1,
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center'
                        }}>
                          <Box>
                            <Typography sx={{ fontSize: '0.85rem', fontWeight: 500 }}>redis-cache</Typography>
                            <Typography sx={{ fontSize: '0.7rem', color: '#666' }}>v7.0.8 • 1 replica</Typography>
                          </Box>
                          <Box sx={{ 
                            px: 1.5, 
                            py: 0.5, 
                            bgcolor: '#e6f2eb', 
                            borderRadius: 1,
                            color: '#2a9d58',
                            fontSize: '0.75rem',
                            fontWeight: 500
                          }}>
                            Running
                          </Box>
                        </Box>
                        
                        <Box sx={{ 
                          p: 1.5, 
                          border: '1px solid #eee', 
                          borderRadius: 1,
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center'
                        }}>
                          <Box>
                            <Typography sx={{ fontSize: '0.85rem', fontWeight: 500 }}>worker-jobs</Typography>
                            <Typography sx={{ fontSize: '0.7rem', color: '#666' }}>v1.2.1 • 2 replicas</Typography>
                          </Box>
                          <Box sx={{ 
                            px: 1.5, 
                            py: 0.5, 
                            bgcolor: '#e6f2eb', 
                            borderRadius: 1,
                            color: '#2a9d58',
                            fontSize: '0.75rem',
                            fontWeight: 500
                          }}>
                            Running
                          </Box>
                        </Box>
                      </Box>
                      
                      <Box sx={{ 
                        display: 'flex',
                        justifyContent: 'space-between',
                        mt: 2,
                        pt: 2,
                        borderTop: '1px solid #eee'
                      }}>
                        <Button
                          variant="outlined"
                          size="small"
                          sx={{
                            color: '#666',
                            borderColor: '#ddd',
                            fontSize: '0.75rem',
                            textTransform: 'none'
                          }}
                        >
                          + Add Container
                        </Button>
                        
                        <Button
                          variant="contained"
                          size="small"
                          sx={{
                            bgcolor: '#004aad',
                            color: 'white',
                            fontSize: '0.75rem',
                            textTransform: 'none',
                            '&:hover': {
                              bgcolor: '#003b8a'
                            }
                          }}
                        >
                          View Logs
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
          
          {/* Docker Benefits - Image on left, text on right */}
          <Box>
            <Grid container spacing={6} alignItems="center" direction={{ xs: 'column-reverse', md: 'row' }}>
              <Grid item xs={12} md={6}>
                <Box sx={{ 
                  borderRadius: 4, 
                  overflow: 'hidden', 
                  boxShadow: '0 12px 30px rgba(0,0,0,0.1)',
                  position: 'relative',
                  height: { xs: '260px', md: '320px' }
                }}>
                  <Box sx={{ 
                    bgcolor: '#f8f9fa',
                    width: '100%', 
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: 2
                  }}>
                    {/* Docker Benefits Mockup */}
                    <Box sx={{ 
                      width: '90%', 
                      height: '90%',
                      bgcolor: 'white', 
                      borderRadius: 2,
                      boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                      p: 2,
                      display: 'flex',
                      flexDirection: 'column'
                    }}>
                      <Typography sx={{ fontSize: '0.9rem', fontWeight: 500, mb: 2 }}>Microservices Architecture</Typography>
                      
                      <Box sx={{ 
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'relative'
                      }}>
                        {/* Central Node */}
                        <Box sx={{ 
                          width: 80, 
                          height: 80, 
                          borderRadius: '50%', 
                          bgcolor: '#004aad15', 
                          border: '2px solid #004aad',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          position: 'absolute',
                          zIndex: 2
                        }}>
                          <Box sx={{ color: '#004aad', fontSize: '1.5rem', mb: -0.5 }}>🐳</Box>
                          <Typography sx={{ fontSize: '0.7rem', fontWeight: 500, color: '#004aad' }}>API Gateway</Typography>
                        </Box>
                        
                        {/* Surrounding Services */}
                        <Box sx={{ 
                          width: 60, 
                          height: 60, 
                          borderRadius: '50%', 
                          bgcolor: '#f5f8ff',
                          border: '1px solid #dce6f9',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          position: 'absolute',
                          top: '15%',
                          left: '25%',
                          zIndex: 1
                        }}>
                          <Typography sx={{ fontSize: '0.65rem', fontWeight: 500, color: '#555', textAlign: 'center' }}>Auth Service</Typography>
                        </Box>
                        
                        <Box sx={{ 
                          width: 60, 
                          height: 60, 
                          borderRadius: '50%', 
                          bgcolor: '#f5f8ff',
                          border: '1px solid #dce6f9',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          position: 'absolute',
                          top: '15%',
                          right: '25%',
                          zIndex: 1
                        }}>
                          <Typography sx={{ fontSize: '0.65rem', fontWeight: 500, color: '#555', textAlign: 'center' }}>User Service</Typography>
                        </Box>
                        
                        <Box sx={{ 
                          width: 60, 
                          height: 60, 
                          borderRadius: '50%', 
                          bgcolor: '#f5f8ff',
                          border: '1px solid #dce6f9',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          position: 'absolute',
                          bottom: '15%',
                          left: '25%',
                          zIndex: 1
                        }}>
                          <Typography sx={{ fontSize: '0.65rem', fontWeight: 500, color: '#555', textAlign: 'center' }}>Payment Service</Typography>
                        </Box>
                        
                        <Box sx={{ 
                          width: 60, 
                          height: 60, 
                          borderRadius: '50%', 
                          bgcolor: '#f5f8ff',
                          border: '1px solid #dce6f9',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          position: 'absolute',
                          bottom: '15%',
                          right: '25%',
                          zIndex: 1
                        }}>
                          <Typography sx={{ fontSize: '0.65rem', fontWeight: 500, color: '#555', textAlign: 'center' }}>Product Service</Typography>
                        </Box>
                        
                        {/* Connection Lines */}
                        <Box sx={{ 
                          position: 'absolute', 
                          width: '75%', 
                          height: '75%', 
                          border: '1px dashed #dce6f9',
                          borderRadius: '50%',
                          zIndex: 0
                        }}></Box>
                      </Box>
                      
                      <Box sx={{ 
                        display: 'flex',
                        justifyContent: 'center',
                        gap: 2,
                        mt: 2
                      }}>
                        <Box sx={{ 
                          px: 2, 
                          py: 0.75, 
                          bgcolor: '#f5f8ff', 
                          borderRadius: 1,
                          fontSize: '0.75rem',
                          color: '#004aad',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 0.5
                        }}>
                          <span>🔄</span> Easy Scaling
                        </Box>
                        
                        <Box sx={{ 
                          px: 2, 
                          py: 0.75, 
                          bgcolor: '#f5f8ff', 
                          borderRadius: 1,
                          fontSize: '0.75rem',
                          color: '#004aad',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 0.5
                        }}>
                          <span>🛡️</span> Isolation
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Box sx={{ pl: { md: 4 } }}>
                  <Box sx={{ color: '#004aad', fontSize: 40, mb: 2 }}>🚀</Box>
                  <Typography variant="h4" sx={{ fontWeight: 500, mb: 3, color: '#111' }}>
                    Accelerate Your Microservices Journey
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.7, fontSize: '1.1rem', mb: 2 }}>
                    Citizen's Docker support enables true microservices architecture with all the benefits:
                  </Typography>
                  
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.7, fontSize: '1.1rem', mb: 1 }}>
                      <strong>Infrastructure as code</strong> — Document your entire setup with Dockerfiles and compose files, making your infrastructure reproducible and version-controlled.
                    </Typography>
                    
                    <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.7, fontSize: '1.1rem', mb: 1 }}>
                      <strong>Resource optimization</strong> — Get more from your compute resources with Docker's efficient resource sharing, unlike heavy VMs.
                    </Typography>
                    
                    <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.7, fontSize: '1.1rem' }}>
                      <strong>Extensive ecosystem</strong> — Leverage thousands of ready-made images from Docker Hub for databases, caches, message queues, and more.
                    </Typography>
                  </Box>
                  
                  <Box sx={{ mt: 3 }}>
                    <Button
                      variant="outlined"
                      sx={{
                        color: '#004aad',
                        borderColor: '#004aad',
                        textTransform: 'none',
                        fontWeight: 500,
                        mt: 2,
                        '&:hover': {
                          borderColor: '#003b8a',
                          bgcolor: 'rgba(0, 74, 173, 0.04)'
                        }
                      }}
                    >
                      Learn more
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
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
              Ready to accelerate your startup?
            </Typography>
            <Typography variant="body1" sx={{ color: '#555', mb: 4, maxWidth: 800, mx: 'auto' }}>
              Join hundreds of startups who eliminated their DevOps headaches and cut deployment time by 90%. No credit card required to start.
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
              Start Your 14-Day Free Trial
            </Button>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
} 