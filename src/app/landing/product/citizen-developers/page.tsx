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

import WebIcon from '@mui/icons-material/Web';
import ShareIcon from '@mui/icons-material/Share';
import DevicesIcon from '@mui/icons-material/Devices';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import Image from 'next/image';

export default function CitizenDevelopersPage() {
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
                    For Citizen Developers
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
                  Build without barriers
                  <Box component="span" sx={{ 
                    display: 'block',
                    color: '#004aad',
                    fontSize: { xs: '1.5rem', md: '2rem' },
                    fontWeight: 400,
                    mt: 1
                  }}>
                    Deploy AI-written code with ease
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
                  Citizen makes it simple to deploy and manage applications you've created with AI coding tools. Take your AI-generated code from concept to production with our powerful deployment platform designed for citizen developers.
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
                    Start Building
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
                    Watch Demo
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
                  <Typography sx={{ color: '#555', fontSize: '0.8rem', ml: 1 }}>Citizen Workspace</Typography>
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
                  {/* App builder mockup */}
                  <Box sx={{ display: 'flex', height: '100%' }}>
                    {/* Left sidebar - components */}
                    <Box sx={{ 
                      width: '220px', 
                      height: '100%', 
                      bgcolor: '#f8f9fa', 
                      borderRight: '1px solid #eaeaea',
                      p: 2
                    }}>
                      <Typography sx={{ fontSize: '0.9rem', fontWeight: 500, mb: 2 }}>Components</Typography>
                      
                      <Box sx={{ mb: 1.5 }}>
                        <Typography sx={{ fontSize: '0.75rem', color: '#666', mb: 1 }}>LAYOUT</Typography>
                        <Box sx={{ 
                          p: 1,
                          borderRadius: 1,
                          border: '1px solid #eee',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1,
                          mb: 1,
                          fontSize: '0.75rem',
                          cursor: 'pointer',
                          '&:hover': { bgcolor: '#f0f0f0' }
                        }}>
                          <Box sx={{ width: 14, height: 14, bgcolor: '#ddd' }} />
                          Container
                        </Box>
                        <Box sx={{ 
                          p: 1,
                          borderRadius: 1,
                          border: '1px solid #eee',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1,
                          mb: 1,
                          fontSize: '0.75rem',
                          cursor: 'pointer',
                          '&:hover': { bgcolor: '#f0f0f0' }
                        }}>
                          <Box sx={{ width: 14, height: 14, bgcolor: '#ddd' }} />
                          Grid
                        </Box>
                      </Box>
                      
                      <Box sx={{ mb: 1.5 }}>
                        <Typography sx={{ fontSize: '0.75rem', color: '#666', mb: 1 }}>INPUTS</Typography>
                        <Box sx={{ 
                          p: 1,
                          borderRadius: 1,
                          border: '1px solid #eee',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1,
                          mb: 1,
                          fontSize: '0.75rem',
                          cursor: 'pointer',
                          '&:hover': { bgcolor: '#f0f0f0' }
                        }}>
                          <Box sx={{ width: 14, height: 14, bgcolor: '#ddd' }} />
                          Button
                        </Box>
                        <Box sx={{ 
                          p: 1,
                          borderRadius: 1,
                          border: '1px solid #eee',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1,
                          mb: 1,
                          fontSize: '0.75rem',
                          cursor: 'pointer',
                          '&:hover': { bgcolor: '#f0f0f0' }
                        }}>
                          <Box sx={{ width: 14, height: 14, bgcolor: '#ddd' }} />
                          TextField
                        </Box>
                      </Box>
                    </Box>
                    
                    {/* Main content - canvas */}
                    <Box sx={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
                      <Box sx={{ 
                        height: '100%', 
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        p: 4,
                        bgcolor: '#fff',
                        backgroundImage: 'linear-gradient(#f5f5f5 1px, transparent 1px), linear-gradient(90deg, #f5f5f5 1px, transparent 1px)',
                        backgroundSize: '20px 20px'
                      }}>
                        <Box sx={{ 
                          width: '90%', 
                          bgcolor: 'white', 
                          border: '2px solid #e5e5e5', 
                          borderStyle: 'dashed',
                          borderRadius: 1,
                          p: 3,
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          gap: 2
                        }}>
                          <Typography sx={{ fontSize: '1.2rem', fontWeight: 500, color: '#004aad' }}>My App</Typography>
                          <Box sx={{ 
                            width: '100%', 
                            height: '30px', 
                            bgcolor: '#f5f5f5', 
                            borderRadius: 1, 
                            border: '1px solid #eee',
                            mb: 1
                          }}></Box>
                          <Box sx={{ 
                            width: '100%',
                            display: 'flex',
                            gap: 1
                          }}>
                            <Box sx={{ 
                              flex: 2, 
                              height: '80px', 
                              bgcolor: '#f5f5f5', 
                              borderRadius: 1,
                              border: '1px solid #eee',
                            }}></Box>
                            <Box sx={{ 
                              flex: 1, 
                              height: '80px', 
                              bgcolor: '#f5f5f5', 
                              borderRadius: 1,
                              border: '1px solid #eee',
                            }}></Box>
                          </Box>
                          <Box sx={{ 
                            alignSelf: 'flex-start',
                            px: 3,
                            py: 1,
                            bgcolor: '#004aad',
                            color: 'white',
                            borderRadius: 1,
                            fontSize: '0.75rem'
                          }}>
                            Submit
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                    
                    {/* Right sidebar - properties */}
                    <Box sx={{ 
                      width: '220px', 
                      height: '100%', 
                      bgcolor: '#f8f9fa', 
                      borderLeft: '1px solid #eaeaea',
                      p: 2
                    }}>
                      <Typography sx={{ fontSize: '0.9rem', fontWeight: 500, mb: 2 }}>Properties</Typography>
                      
                      <Box sx={{ mb: 2 }}>
                        <Typography sx={{ fontSize: '0.75rem', color: '#666', mb: 0.5 }}>Type</Typography>
                        <Box sx={{ 
                          fontSize: '0.8rem',
                          p: 1,
                          bgcolor: 'white',
                          border: '1px solid #eee',
                          borderRadius: 1
                        }}>
                          Container
                        </Box>
                      </Box>
                      
                      <Box sx={{ mb: 2 }}>
                        <Typography sx={{ fontSize: '0.75rem', color: '#666', mb: 0.5 }}>Width</Typography>
                        <Box sx={{ 
                          fontSize: '0.8rem',
                          p: 1,
                          bgcolor: 'white',
                          border: '1px solid #eee',
                          borderRadius: 1
                        }}>
                          90%
                        </Box>
                      </Box>
                      
                      <Box sx={{ mb: 2 }}>
                        <Typography sx={{ fontSize: '0.75rem', color: '#666', mb: 0.5 }}>Spacing</Typography>
                        <Box sx={{ 
                          fontSize: '0.8rem',
                          p: 1,
                          bgcolor: 'white',
                          border: '1px solid #eee',
                          borderRadius: 1
                        }}>
                          16px
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
            Why Citizen Developers love our platform
          </Typography>
          
          {/* Feature 1 - Text on left, image on right */}
          <Box sx={{ mb: 10 }}>
            <Grid container spacing={6} alignItems="center">
              <Grid item xs={12} md={6}>
                <Box sx={{ pr: { md: 4 } }}>
                  <WebIcon sx={{ color: '#004aad', fontSize: 40, mb: 2 }} />
                  <Typography variant="h4" sx={{ fontWeight: 500, mb: 3, color: '#111' }}>
                    Seamless deployment for AI-written code
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.7, fontSize: '1.1rem' }}>
                    Easily deploy applications you've created with AI coding tools. Our platform streamlines the process from development to production, so you can focus on building solutions for your needs.
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
                    {/* UI Builder mockup */}
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
                        alignItems: 'center', 
                        pb: 1, 
                        borderBottom: '1px solid #eee'
                      }}>
                        <Box sx={{ display: 'flex', gap: 1 }}>
                          <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#ff5f56' }} />
                          <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#ffbd2e' }} />
                          <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#27c93f' }} />
                        </Box>
                        <Typography sx={{ fontSize: '0.7rem', ml: 2, color: '#555' }}>Visual Builder</Typography>
                      </Box>
                      <Box sx={{ 
                        flex: 1, 
                        display: 'flex', 
                        mt: 1,
                        backgroundImage: 'linear-gradient(#f5f5f5 1px, transparent 1px), linear-gradient(90deg, #f5f5f5 1px, transparent 1px)',
                        backgroundSize: '20px 20px'
                      }}>
                        <Box sx={{ width: '50px', height: '100%', borderRight: '1px solid #eee', p: 1 }}>
                          <Box sx={{ width: '100%', height: '30px', mb: 1, bgcolor: '#f0f0f0', borderRadius: 1 }} />
                          <Box sx={{ width: '100%', height: '30px', mb: 1, bgcolor: '#f0f0f0', borderRadius: 1 }} />
                          <Box sx={{ width: '100%', height: '30px', mb: 1, bgcolor: '#f0f0f0', borderRadius: 1 }} />
                        </Box>
                        <Box sx={{ flex: 1, p: 2 }}>
                          <Box sx={{ 
                            width: '80%', 
                            height: '30px',
                            bgcolor: 'white',
                            border: '1px solid #ddd',
                            borderRadius: 1,
                            mb: 2
                          }} />
                          <Box sx={{ 
                            width: '100%',
                            height: '100px',
                            bgcolor: 'white',
                            border: '1px dashed #004aad',
                            borderRadius: 1,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}>
                            <Typography sx={{ fontSize: '0.7rem', color: '#004aad' }}>Drag components here</Typography>
                          </Box>
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
                    {/* Collaboration mockup */}
                    <Box sx={{ 
                      width: '90%', 
                      height: '90%',
                      bgcolor: 'white', 
                      borderRadius: 2,
                      boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                      display: 'flex',
                      flexDirection: 'column',
                      p: 2
                    }}>
                      <Typography sx={{ fontSize: '0.9rem', fontWeight: 500, color: '#111', mb: 2 }}>Team Collaboration</Typography>
                      <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                        <Box sx={{ 
                          width: 36, 
                          height: 36, 
                          borderRadius: '50%', 
                          bgcolor: '#E3F2FD', 
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#1976D2',
                          fontWeight: 500,
                          fontSize: '0.8rem'
                        }}>AS</Box>
                        <Box sx={{ 
                          width: 36, 
                          height: 36, 
                          borderRadius: '50%', 
                          bgcolor: '#E8F5E9', 
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#2E7D32',
                          fontWeight: 500,
                          fontSize: '0.8rem'
                        }}>JD</Box>
                        <Box sx={{ 
                          width: 36, 
                          height: 36, 
                          borderRadius: '50%', 
                          bgcolor: '#FFF3E0', 
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#F57C00',
                          fontWeight: 500,
                          fontSize: '0.8rem'
                        }}>TK</Box>
                      </Box>
                      <Box sx={{ 
                        p: 2, 
                        bgcolor: '#F5F5F5', 
                        borderRadius: 2,
                        mb: 2,
                        fontSize: '0.8rem'
                      }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                          <Box sx={{ color: '#1976D2', fontWeight: 500, mr: 1 }}>Alex:</Box>
                          <Box sx={{ color: '#555' }}>I've updated the homepage design</Box>
                        </Box>
                        <Box sx={{ width: '100%', height: '80px', bgcolor: 'white', borderRadius: 1, border: '1px solid #ddd', mb: 1 }} />
                      </Box>
                      <Box sx={{ 
                        p: 2, 
                        bgcolor: '#E8F5E9', 
                        borderRadius: 2,
                        fontSize: '0.8rem'
                      }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                          <Box sx={{ color: '#2E7D32', fontWeight: 500, mr: 1 }}>Jamie:</Box>
                          <Box sx={{ color: '#555' }}>Looks great! Let's add a CTA button.</Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box sx={{ pl: { md: 4 } }}>
                  <ShareIcon sx={{ color: '#004aad', fontSize: 40, mb: 2 }} />
                  <Typography variant="h4" sx={{ fontWeight: 500, mb: 3, color: '#111' }}>
                    Team sharing and collaboration
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.7, fontSize: '1.1rem' }}>
                    Share your applications with team members, gather feedback, and collaborate on projects in real-time. Perfect for cross-functional teams working together.
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
                  <DevicesIcon sx={{ color: '#004aad', fontSize: 40, mb: 2 }} />
                  <Typography variant="h4" sx={{ fontWeight: 500, mb: 3, color: '#111' }}>
                    Publish anywhere
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.7, fontSize: '1.1rem' }}>
                    Deploy your applications with a single click. Choose from internal deployments, public web hosting, or custom domain publishing to share your work with the world.
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
                    {/* Deployment mockup */}
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
                      <Typography sx={{ fontSize: '0.9rem', fontWeight: 500, color: '#111', mb: 2 }}>Deployment Options</Typography>
                      <Box sx={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        mb: 3
                      }}>
                        <Box sx={{ 
                          flex: 1, 
                          mr: 2, 
                          p: 2, 
                          border: '1px solid #eee', 
                          borderRadius: 2,
                          bgcolor: '#004aad10',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center'
                        }}>
                          <Box sx={{ fontSize: '0.8rem', fontWeight: 500, mb: 1, color: '#004aad' }}>Public Web</Box>
                          <Box sx={{ fontSize: '0.7rem', color: '#555', textAlign: 'center' }}>app.citizen.io/yourapp</Box>
                        </Box>
                        <Box sx={{ 
                          flex: 1, 
                          p: 2, 
                          border: '1px solid #eee', 
                          borderRadius: 2,
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center'
                        }}>
                          <Box sx={{ fontSize: '0.8rem', fontWeight: 500, mb: 1, color: '#111' }}>Custom Domain</Box>
                          <Box sx={{ fontSize: '0.7rem', color: '#555', textAlign: 'center' }}>your-domain.com</Box>
                        </Box>
                      </Box>
                      <Box sx={{ 
                        p: 2, 
                        borderRadius: 2,
                        bgcolor: '#F5F5F5',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                      }}>
                        <Box sx={{ fontSize: '0.8rem', color: '#111' }}>Deploy to production</Box>
                        <Box sx={{ 
                          bgcolor: '#004aad', 
                          color: 'white', 
                          px: 2, 
                          py: 0.5, 
                          borderRadius: 1,
                          fontSize: '0.7rem',
                          fontWeight: 500
                        }}>
                          Deploy Now
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
                    {/* Responsive design mockup */}
                    <Box sx={{ 
                      width: '90%', 
                      height: '90%',
                      bgcolor: 'white', 
                      borderRadius: 2,
                      boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                      p: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 3
                    }}>
                      <Box sx={{ 
                        width: '140px',
                        height: '220px',
                        border: '8px solid #333',
                        borderRadius: 2,
                        overflow: 'hidden'
                      }}>
                        <Box sx={{ 
                          width: '100%', 
                          height: '12px', 
                          bgcolor: '#f5f5f5'
                        }} />
                        <Box sx={{ 
                          p: 0.5,
                          height: 'calc(100% - 12px)',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: 0.5
                        }}>
                          <Box sx={{ width: '100%', height: '8px', bgcolor: '#f0f0f0', borderRadius: 0.5 }} />
                          <Box sx={{ width: '70%', height: '8px', bgcolor: '#f0f0f0', borderRadius: 0.5 }} />
                          <Box sx={{ width: '100%', height: '40px', bgcolor: '#f0f0f0', borderRadius: 0.5, mt: 0.5 }} />
                          <Box sx={{ width: '100%', height: '40px', bgcolor: '#f0f0f0', borderRadius: 0.5 }} />
                          <Box sx={{ width: '60%', height: '20px', bgcolor: '#f0f0f0', borderRadius: 0.5, mt: 0.5 }} />
                        </Box>
                      </Box>
                      <Box sx={{ 
                        width: '240px',
                        height: '160px',
                        border: '8px solid #333',
                        borderRadius: 2,
                        overflow: 'hidden'
                      }}>
                        <Box sx={{ 
                          width: '100%', 
                          height: '16px', 
                          bgcolor: '#f5f5f5'
                        }} />
                        <Box sx={{ 
                          p: 1,
                          height: 'calc(100% - 16px)',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: 1
                        }}>
                          <Box sx={{ display: 'flex', gap: 1 }}>
                            <Box sx={{ flex: 2 }}>
                              <Box sx={{ width: '100%', height: '12px', bgcolor: '#f0f0f0', borderRadius: 0.5 }} />
                              <Box sx={{ width: '70%', height: '12px', bgcolor: '#f0f0f0', borderRadius: 0.5, mt: 0.5 }} />
                            </Box>
                            <Box sx={{ flex: 1 }}>
                              <Box sx={{ width: '100%', height: '30px', bgcolor: '#f0f0f0', borderRadius: 0.5 }} />
                            </Box>
                          </Box>
                          <Box sx={{ display: 'flex', gap: 1, mt: 0.5 }}>
                            <Box sx={{ flex: 1 }}>
                              <Box sx={{ width: '100%', height: '50px', bgcolor: '#f0f0f0', borderRadius: 0.5 }} />
                            </Box>
                            <Box sx={{ flex: 1 }}>
                              <Box sx={{ width: '100%', height: '50px', bgcolor: '#f0f0f0', borderRadius: 0.5 }} />
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box sx={{ pl: { md: 4 } }}>
                  <PhoneIphoneIcon sx={{ color: '#004aad', fontSize: 40, mb: 2 }} />
                  <Typography variant="h4" sx={{ fontWeight: 500, mb: 3, color: '#111' }}>
                    Responsive by default
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.7, fontSize: '1.1rem' }}>
                    Every app you build is automatically responsive and works beautifully across desktop, tablet, and mobile devices. Preview your app across different screen sizes as you build.
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
        
        {/* AI-Powered Development Section */}
        <Box sx={{ mb: 12, pt: 4 }}>
          <Box sx={{ maxWidth: 800, mx: 'auto', mb: 8, textAlign: 'center' }}>
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
                AI-Powered Development
              </Typography>
            </Box>
            
            <Typography 
              variant="h2" 
              sx={{ 
                fontWeight: 500, 
                mb: 3,
                fontSize: { xs: '1.75rem', md: '2.25rem' },
                color: '#111'
              }}
            >
              Supercharge your development with AI
            </Typography>
            
            <Typography 
              variant="body1" 
              sx={{ 
                color: '#555',
                fontSize: '1.1rem',
                lineHeight: 1.7
              }}
            >
              With Citizen's AI capabilities, you can easily deploy apps and APIs written with AI, and continue improving your skills while the platform handles the complex technical details.
            </Typography>
          </Box>
          
          {/* Sample Projects Section */}
          <Typography 
            variant="h4" 
            sx={{ 
              fontWeight: 500, 
              mb: 4,
              textAlign: 'center',
              fontSize: { xs: '1.5rem', md: '1.75rem' },
              color: '#111'
            }}
          >
            Sample Projects You Can Build
          </Typography>
          
          <Grid container spacing={4} sx={{ mb: 6 }}>
            {/* Finance Dashboard Sample */}
            <Grid item xs={12} md={4}>
              <Paper
                elevation={0}
                sx={{
                  borderRadius: 3,
                  overflow: 'hidden',
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
                <Box sx={{ 
                  height: 180, 
                  bgcolor: '#004aad10',
                  p: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Box sx={{ 
                    width: '100%', 
                    height: '100%', 
                    bgcolor: 'white',
                    borderRadius: 2,
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column'
                  }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                      <Typography sx={{ fontWeight: 500, fontSize: '0.9rem' }}>Finance Dashboard</Typography>
                      <Box sx={{ display: 'flex', gap: 1 }}>
                        <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#ff5f56' }} />
                        <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#ffbd2e' }} />
                        <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#27c93f' }} />
                      </Box>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                      <Box sx={{ flex: 2, height: 80, bgcolor: '#f0f0f0', borderRadius: 1 }}>
                        <Box sx={{ p: 1 }}>
                          <Box sx={{ width: '60%', height: 8, bgcolor: 'white', borderRadius: 1, mb: 1 }} />
                          <Box sx={{ width: '80%', height: 30, bgcolor: '#004aad20', borderRadius: 1, mt: 2 }} />
                        </Box>
                      </Box>
                      <Box sx={{ flex: 1, height: 80, bgcolor: '#f0f0f0', borderRadius: 1 }}>
                        <Box sx={{ p: 1 }}>
                          <Box sx={{ width: '70%', height: 8, bgcolor: 'white', borderRadius: 1, mb: 1 }} />
                          <Box sx={{ width: '50%', height: 30, bgcolor: '#004aad20', borderRadius: 1, mt: 2 }} />
                        </Box>
                      </Box>
                    </Box>
                    <Box sx={{ height: 40, bgcolor: '#f0f0f0', borderRadius: 1 }}>
                      <Box sx={{ p: 1, display: 'flex', justifyContent: 'space-between' }}>
                        <Box sx={{ width: '30%', height: 6, bgcolor: 'white', borderRadius: 1 }} />
                        <Box sx={{ width: '20%', height: 6, bgcolor: 'white', borderRadius: 1 }} />
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box sx={{ p: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: 500, mb: 1, color: '#111' }}>
                    AI-Powered Finance Dashboard
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#555', mb: 2 }}>
                    Create a finance analytics dashboard with expense tracking, budget forecasting, and investment recommendations powered by AI.
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Box sx={{ 
                      bgcolor: '#004aad10', 
                      color: '#004aad',
                      fontSize: '0.7rem',
                      px: 1.5,
                      py: 0.5,
                      borderRadius: 5,
                      fontWeight: 500
                    }}>Finance</Box>
                    <Box sx={{ 
                      bgcolor: '#004aad10', 
                      color: '#004aad',
                      fontSize: '0.7rem',
                      px: 1.5,
                      py: 0.5,
                      borderRadius: 5,
                      fontWeight: 500
                    }}>AI Analytics</Box>
                  </Box>
                </Box>
              </Paper>
            </Grid>
            
            {/* ML Script Integration Sample */}
            <Grid item xs={12} md={4}>
              <Paper
                elevation={0}
                sx={{
                  borderRadius: 3,
                  overflow: 'hidden',
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
                <Box sx={{ 
                  height: 180, 
                  bgcolor: '#004aad10',
                  p: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Box sx={{ 
                    width: '100%', 
                    height: '100%', 
                    bgcolor: 'white',
                    borderRadius: 2,
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column'
                  }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                      <Typography sx={{ fontWeight: 500, fontSize: '0.9rem' }}>ML Script</Typography>
                      <Box sx={{ display: 'flex', gap: 1 }}>
                        <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#ff5f56' }} />
                        <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#ffbd2e' }} />
                        <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#27c93f' }} />
                      </Box>
                    </Box>
                    <Box sx={{ 
                      flex: 1,
                      bgcolor: '#111',
                      color: '#f0f0f0',
                      borderRadius: 1,
                      p: 1.5,
                      fontFamily: 'monospace',
                      fontSize: '0.65rem',
                      overflow: 'hidden'
                    }}>
                      <Box sx={{ color: '#88ccff' }}>import <Box component="span" sx={{ color: '#ffcc88' }}>tensorflow as tf</Box></Box>
                      <Box sx={{ color: '#88ccff' }}>from <Box component="span" sx={{ color: '#ffcc88' }}>tensorflow.keras.models import Sequential</Box></Box>
                      <Box sx={{ color: '#88ccff' }}>from <Box component="span" sx={{ color: '#ffcc88' }}>tensorflow.keras.layers import Dense</Box></Box>
                      <Box sx={{ mt: 1, color: '#ccff88' }}># VibeCoding AI-generated model</Box>
                      <Box sx={{ mt: 1 }}>model = Sequential([</Box>
                      <Box sx={{ ml: 2 }}>Dense(128, activation='relu', input_shape=(features,)),</Box>
                      <Box sx={{ ml: 2 }}>Dense(64, activation='relu'),</Box>
                      <Box sx={{ ml: 2 }}>Dense(1, activation='sigmoid')</Box>
                      <Box>])</Box>
                    </Box>
                  </Box>
                </Box>
                <Box sx={{ p: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: 500, mb: 1, color: '#111' }}>
                    Machine Learning Integration
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#555', mb: 2 }}>
                    Deploy machine learning scripts created with VibeCoding AI and integrate them with CI/CD pipelines for automated data processing.
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Box sx={{ 
                      bgcolor: '#004aad10', 
                      color: '#004aad',
                      fontSize: '0.7rem',
                      px: 1.5,
                      py: 0.5,
                      borderRadius: 5,
                      fontWeight: 500
                    }}>ML</Box>
                    <Box sx={{ 
                      bgcolor: '#004aad10', 
                      color: '#004aad',
                      fontSize: '0.7rem',
                      px: 1.5,
                      py: 0.5,
                      borderRadius: 5,
                      fontWeight: 500
                    }}>CI/CD</Box>
                  </Box>
                </Box>
              </Paper>
            </Grid>
            
            {/* Database Integration Sample */}
            <Grid item xs={12} md={4}>
              <Paper
                elevation={0}
                sx={{
                  borderRadius: 3,
                  overflow: 'hidden',
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
                <Box sx={{ 
                  height: 180, 
                  bgcolor: '#004aad10',
                  p: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Box sx={{ 
                    width: '100%', 
                    height: '100%', 
                    bgcolor: 'white',
                    borderRadius: 2,
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column'
                  }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                      <Typography sx={{ fontWeight: 500, fontSize: '0.9rem' }}>Database Integrations</Typography>
                      <Box sx={{ display: 'flex', gap: 1 }}>
                        <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#ff5f56' }} />
                        <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#ffbd2e' }} />
                        <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#27c93f' }} />
                      </Box>
                    </Box>
                    <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
                      <Box sx={{ 
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        pb: 2
                      }}>
                        <Box sx={{ 
                          p: 1.5,
                          width: '45%',
                          bgcolor: '#f5f7fa', 
                          borderRadius: 1,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexDirection: 'column'
                        }}>
                          <Box sx={{ 
                            bgcolor: '#e3f2fd', 
                            color: '#1976d2',
                            fontWeight: 500,
                            width: 36,
                            height: 36,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '50%',
                            fontSize: '0.7rem',
                            mb: 1
                          }}>DB</Box>
                          <Typography sx={{ fontSize: '0.7rem', fontWeight: 500 }}>Your Database</Typography>
                        </Box>
                        
                        <Box sx={{ 
                          p: 1.5,
                          width: '45%',
                          bgcolor: '#f5f7fa', 
                          borderRadius: 1,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexDirection: 'column'
                        }}>
                          <Box sx={{ 
                            bgcolor: '#e8f5e9', 
                            color: '#2e7d32',
                            fontWeight: 500,
                            width: 36,
                            height: 36,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '50%',
                            fontSize: '0.7rem',
                            mb: 1
                          }}>API</Box>
                          <Typography sx={{ fontSize: '0.7rem', fontWeight: 500 }}>Citizen API</Typography>
                        </Box>
                      </Box>
                      
                      <Box sx={{ 
                        bgcolor: '#004aad10',
                        borderRadius: 1,
                        p: 1.5
                      }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                          <Box sx={{ 
                            bgcolor: 'white', 
                            color: '#004aad',
                            fontWeight: 500,
                            width: 28,
                            height: 28,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '50%',
                            fontSize: '0.7rem'
                          }}>CI</Box>
                          <Box sx={{ flex: 1 }}>
                            <Typography sx={{ fontSize: '0.7rem', fontWeight: 500, color: '#004aad' }}>Automated CI/CD Pipeline</Typography>
                            <Typography sx={{ fontSize: '0.65rem', color: '#555' }}>Secure data transfer & synchronization</Typography>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box sx={{ p: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: 500, mb: 1, color: '#111' }}>
                    Seamless Database Integration
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#555', mb: 2 }}>
                    Connect your AI applications to your own databases with seamless CI/CD pipelines for automated data transfer and synchronization.
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Box sx={{ 
                      bgcolor: '#004aad10', 
                      color: '#004aad',
                      fontSize: '0.7rem',
                      px: 1.5,
                      py: 0.5,
                      borderRadius: 5,
                      fontWeight: 500
                    }}>Database</Box>
                    <Box sx={{ 
                      bgcolor: '#004aad10', 
                      color: '#004aad',
                      fontSize: '0.7rem',
                      px: 1.5,
                      py: 0.5,
                      borderRadius: 5,
                      fontWeight: 500
                    }}>Data Sync</Box>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          </Grid>
          
          {/* VibeCoding with AI Section */}
          <Box sx={{ mt: 8, bgcolor: '#f5f8ff', p: 4, borderRadius: 4 }}>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                <Box sx={{ pr: { md: 4 } }}>
                  <Box sx={{ 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    bgcolor: 'rgba(0, 74, 173, 0.08)', 
                    px: 2, 
                    py: 0.5, 
                    borderRadius: 5,
                    mb: 2
                  }}>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: '#004aad', 
                        fontWeight: 500,
                        fontSize: '0.875rem'
                      }}
                    >
                      Deploy AI-Generated Code
                    </Typography>
                  </Box>
                  
                  <Typography variant="h4" sx={{ fontWeight: 500, mb: 3, color: '#111' }}>
                    From AI code to production in minutes
                  </Typography>
                  
                  <Typography variant="body1" sx={{ color: '#555', mb: 3, lineHeight: 1.7 }}>
                    Take the code you've created with your favorite AI tools and seamlessly deploy it to production with Citizen. Our platform handles the complex infrastructure so you can focus on solving problems with AI-assisted coding.
                  </Typography>
                  
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Box sx={{ 
                        bgcolor: '#004aad', 
                        borderRadius: '50%', 
                        width: 28, 
                        height: 28, 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: '0.8rem'
                      }}>1</Box>
                      <Typography sx={{ color: '#333', fontWeight: 500 }}>
                        Create code with your favorite AI coding tools
                      </Typography>
                    </Box>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Box sx={{ 
                        bgcolor: '#004aad', 
                        borderRadius: '50%', 
                        width: 28, 
                        height: 28, 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: '0.8rem'
                      }}>2</Box>
                      <Typography sx={{ color: '#333', fontWeight: 500 }}>
                        Import your AI-generated code to Citizen platform
                      </Typography>
                    </Box>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Box sx={{ 
                        bgcolor: '#004aad', 
                        borderRadius: '50%', 
                        width: 28, 
                        height: 28, 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: '0.8rem'
                      }}>3</Box>
                      <Typography sx={{ color: '#333', fontWeight: 500 }}>
                        Deploy with one click and connect to your existing systems
                      </Typography>
                    </Box>
                  </Box>
                  
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: '#004aad',
                      color: 'white',
                      px: 4,
                      py: 1.5,
                      mt: 4,
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
                    Start Deploying Now
                  </Button>
                </Box>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Box sx={{ 
                  borderRadius: 4, 
                  overflow: 'hidden', 
                  boxShadow: '0 12px 30px rgba(0,0,0,0.1)',
                  bgcolor: 'white',
                  p: 3
                }}>
                  <Box sx={{
                    bgcolor: '#f8f9fa',
                    borderRadius: 2,
                    p: 3,
                    position: 'relative',
                    mb: 3
                  }}>
                    <Typography sx={{ fontWeight: 500, fontSize: '1rem', mb: 2 }}>
                      AI-Generated App Deployment
                    </Typography>
                    
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                      <Box sx={{ 
                        bgcolor: '#e1e5eb',
                        p: 2,
                        borderRadius: '12px 12px 2px 12px',
                        maxWidth: '80%',
                        alignSelf: 'flex-start'
                      }}>
                        <Typography sx={{ fontSize: '0.9rem' }}>
                          Create a finance app that tracks expenses and predicts future spending
                        </Typography>
                      </Box>
                      
                      <Box sx={{ 
                        bgcolor: '#e0ebf9',
                        p: 2,
                        borderRadius: '12px 12px 12px 2px',
                        maxWidth: '90%',
                        alignSelf: 'flex-end',
                        border: '1px solid #d0e0f5'
                      }}>
                        <Typography sx={{ fontSize: '0.9rem', mb: 2 }}>
                          I'll build a finance app with expense tracking and ML-based spending forecasts. Here's the plan:
                        </Typography>
                        <Box sx={{ pl: 2 }}>
                          <Typography sx={{ fontSize: '0.9rem', mb: 1 }}>
                            • React dashboard with expense visualization
                          </Typography>
                          <Typography sx={{ fontSize: '0.9rem', mb: 1 }}>
                            • Python backend using TensorFlow for predictions
                          </Typography>
                          <Typography sx={{ fontSize: '0.9rem' }}>
                            • Secure database connection with CI/CD pipeline
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  
                  <Box sx={{ 
                    border: '1px solid #eaeaea',
                    borderRadius: 2, 
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2
                  }}>
                    <Typography sx={{ fontWeight: 500, fontSize: '1rem', mb: 1 }}>
                      Generated Application
                    </Typography>
                    
                    <Box sx={{ display: 'flex', gap: 2 }}>
                      <Box sx={{ 
                        bgcolor: '#f5f5f5',
                        borderRadius: 2,
                        p: 2,
                        flex: 1,
                        height: '100px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center'
                      }}>
                        <Typography sx={{ fontSize: '0.8rem', color: '#004aad', fontWeight: 500 }}>
                          Frontend
                        </Typography>
                        <Typography sx={{ fontSize: '0.7rem', color: '#666', mt: 1 }}>
                          React Dashboard
                        </Typography>
                        <Box sx={{ 
                          mt: 1,
                          bgcolor: '#004aad', 
                          color: 'white',
                          fontSize: '0.7rem',
                          px: 1.5,
                          py: 0.5,
                          borderRadius: 1
                        }}>
                          app.citizen.io/finance
                        </Box>
                      </Box>
                      
                      <Box sx={{ 
                        bgcolor: '#f5f5f5',
                        borderRadius: 2,
                        p: 2,
                        flex: 1,
                        height: '100px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center'
                      }}>
                        <Typography sx={{ fontSize: '0.8rem', color: '#004aad', fontWeight: 500 }}>
                          Backend
                        </Typography>
                        <Typography sx={{ fontSize: '0.7rem', color: '#666', mt: 1 }}>
                          Python ML API
                        </Typography>
                        <Box sx={{ 
                          mt: 1,
                          bgcolor: '#27c93f', 
                          color: 'white',
                          fontSize: '0.7rem',
                          px: 1.5,
                          py: 0.5,
                          borderRadius: 1
                        }}>
                          Deployed & Running
                        </Box>
                      </Box>
                    </Box>
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
              Ready to bring your ideas to life?
            </Typography>
            <Typography variant="body1" sx={{ color: '#555', mb: 4, maxWidth: 800, mx: 'auto' }}>
              Join thousands of citizen developers who are building powerful web applications without writing a single line of code. Start creating with Citizen today.
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
              Get Started for Free
            </Button>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
} 