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

import SecurityIcon from '@mui/icons-material/Security';
import PeopleIcon from '@mui/icons-material/People';
import InsightsIcon from '@mui/icons-material/Insights';
import HandshakeIcon from '@mui/icons-material/Handshake';
import Image from 'next/image';

export default function EnterprisePage() {
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
                    For Enterprise
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
                  Enterprise-grade deployment
                  <Box component="span" sx={{ 
                    display: 'block',
                    color: '#004aad',
                    fontSize: { xs: '1.5rem', md: '2rem' },
                    fontWeight: 400,
                    mt: 1
                  }}>
                    Secure, compliant, and scalable
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
                  Citizen Enterprise provides the security, compliance, and scalability that larger organizations need, while maintaining the simplicity that makes deployment painless.
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
                    Contact Sales
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
                    Book Demo
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
                  <Typography sx={{ color: '#555', fontSize: '0.8rem', ml: 1 }}>Citizen Enterprise Dashboard</Typography>
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
                  {/* Enterprise dashboard mockup */}
                  <Box sx={{ height: '100%', p: 2 }}>
                    <Box sx={{ 
                      display: 'flex',
                      justifyContent: 'space-between',
                      p: 2,
                      mb: 2
                    }}>
                      <Typography sx={{ fontSize: '1.2rem', fontWeight: 500 }}>Team Management</Typography>
                      <Button
                        variant="contained"
                        size="small"
                        sx={{
                          bgcolor: '#004aad',
                          textTransform: 'none',
                          fontSize: '0.75rem',
                          borderRadius: 1
                        }}
                      >
                        Add Member
                      </Button>
                    </Box>
                    
                    <Box sx={{ 
                      border: '1px solid #eee',
                      borderRadius: 1,
                      overflow: 'hidden'
                    }}>
                      {/* Table header */}
                      <Box sx={{ 
                        display: 'grid',
                        gridTemplateColumns: '3fr 2fr 1fr 1fr',
                        bgcolor: '#f8f9fa',
                        px: 2,
                        py: 1.5,
                        borderBottom: '1px solid #eee'
                      }}>
                        <Typography sx={{ fontSize: '0.75rem', fontWeight: 600, color: '#555' }}>User</Typography>
                        <Typography sx={{ fontSize: '0.75rem', fontWeight: 600, color: '#555' }}>Role</Typography>
                        <Typography sx={{ fontSize: '0.75rem', fontWeight: 600, color: '#555' }}>Status</Typography>
                        <Typography sx={{ fontSize: '0.75rem', fontWeight: 600, color: '#555' }}>Actions</Typography>
                      </Box>
                      
                      {/* Table rows */}
                      <Box sx={{ 
                        display: 'grid',
                        gridTemplateColumns: '3fr 2fr 1fr 1fr',
                        px: 2,
                        py: 1.5,
                        borderBottom: '1px solid #eee',
                        alignItems: 'center'
                      }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Box sx={{ 
                            width: 28, 
                            height: 28, 
                            borderRadius: '50%', 
                            bgcolor: '#004aad', 
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontSize: '0.75rem',
                            fontWeight: 500
                          }}>JD</Box>
                          <Box>
                            <Typography sx={{ fontSize: '0.875rem', fontWeight: 500 }}>John Doe</Typography>
                            <Typography sx={{ fontSize: '0.75rem', color: '#666' }}>john@company.com</Typography>
                          </Box>
                        </Box>
                        <Typography sx={{ fontSize: '0.875rem' }}>Admin</Typography>
                        <Box sx={{ 
                          px: 1.5, 
                          py: 0.5, 
                          bgcolor: '#e6f2eb', 
                          borderRadius: 1,
                          color: '#2a9d58',
                          fontSize: '0.75rem',
                          fontWeight: 500,
                          width: 'fit-content'
                        }}>
                          Active
                        </Box>
                        <Typography sx={{ fontSize: '0.75rem', color: '#004aad', cursor: 'pointer' }}>Edit</Typography>
                      </Box>
                      
                      <Box sx={{ 
                        display: 'grid',
                        gridTemplateColumns: '3fr 2fr 1fr 1fr',
                        px: 2,
                        py: 1.5,
                        borderBottom: '1px solid #eee',
                        alignItems: 'center'
                      }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Box sx={{ 
                            width: 28, 
                            height: 28, 
                            borderRadius: '50%', 
                            bgcolor: '#6e66de', 
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontSize: '0.75rem',
                            fontWeight: 500
                          }}>JS</Box>
                          <Box>
                            <Typography sx={{ fontSize: '0.875rem', fontWeight: 500 }}>Jane Smith</Typography>
                            <Typography sx={{ fontSize: '0.75rem', color: '#666' }}>jane@company.com</Typography>
                          </Box>
                        </Box>
                        <Typography sx={{ fontSize: '0.875rem' }}>Developer</Typography>
                        <Box sx={{ 
                          px: 1.5, 
                          py: 0.5, 
                          bgcolor: '#e6f2eb', 
                          borderRadius: 1,
                          color: '#2a9d58',
                          fontSize: '0.75rem',
                          fontWeight: 500,
                          width: 'fit-content'
                        }}>
                          Active
                        </Box>
                        <Typography sx={{ fontSize: '0.75rem', color: '#004aad', cursor: 'pointer' }}>Edit</Typography>
                      </Box>
                      
                      <Box sx={{ 
                        display: 'grid',
                        gridTemplateColumns: '3fr 2fr 1fr 1fr',
                        px: 2,
                        py: 1.5,
                        alignItems: 'center'
                      }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Box sx={{ 
                            width: 28, 
                            height: 28, 
                            borderRadius: '50%', 
                            bgcolor: '#e67e22', 
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontSize: '0.75rem',
                            fontWeight: 500
                          }}>RB</Box>
                          <Box>
                            <Typography sx={{ fontSize: '0.875rem', fontWeight: 500 }}>Robert Brown</Typography>
                            <Typography sx={{ fontSize: '0.75rem', color: '#666' }}>robert@company.com</Typography>
                          </Box>
                        </Box>
                        <Typography sx={{ fontSize: '0.875rem' }}>Viewer</Typography>
                        <Box sx={{ 
                          px: 1.5, 
                          py: 0.5, 
                          bgcolor: '#f5f5f5', 
                          borderRadius: 1,
                          color: '#888',
                          fontSize: '0.75rem',
                          fontWeight: 500,
                          width: 'fit-content'
                        }}>
                          Pending
                        </Box>
                        <Typography sx={{ fontSize: '0.75rem', color: '#004aad', cursor: 'pointer' }}>Edit</Typography>
                      </Box>
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
            Enterprise-ready features
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
                <SecurityIcon sx={{ color: '#004aad', fontSize: 32, mb: 2 }} />
                <Typography variant="h5" sx={{ fontWeight: 500, mb: 2, color: '#111' }}>
                  Advanced Security
                </Typography>
                <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.6 }}>
                  Meet your compliance requirements with SOC 2, HIPAA, and GDPR compliance. Single Sign-On (SSO), role-based access control, and audit logging keep your data secure.
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
                <PeopleIcon sx={{ color: '#004aad', fontSize: 32, mb: 2 }} />
                <Typography variant="h5" sx={{ fontWeight: 500, mb: 2, color: '#111' }}>
                  Team Management
                </Typography>
                <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.6 }}>
                  Manage team members with fine-grained roles and permissions. Organize teams by department or project with isolated workspaces and configurable access controls.
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
                <InsightsIcon sx={{ color: '#004aad', fontSize: 32, mb: 2 }} />
                <Typography variant="h5" sx={{ fontWeight: 500, mb: 2, color: '#111' }}>
                  Advanced Analytics
                </Typography>
                <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.6 }}>
                  Gain deep insights into your deployment performance, resource usage, and cost breakdown. Monitor application health with real-time metrics and custom alerting.
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
                <HandshakeIcon sx={{ color: '#004aad', fontSize: 32, mb: 2 }} />
                <Typography variant="h5" sx={{ fontWeight: 500, mb: 2, color: '#111' }}>
                  Dedicated Support
                </Typography>
                <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.6 }}>
                  Enterprise customers receive priority support with guaranteed SLAs, a dedicated account manager, and direct access to our engineering team when you need it most.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>
        
        {/* Enterprise Docker Deployments Section */}
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
            Enterprise Container Management
          </Typography>
          
          {/* IT Governance - Text on left, image on right */}
          <Box sx={{ mb: 10 }}>
            <Grid container spacing={6} alignItems="center">
              <Grid item xs={12} md={6}>
                <Box sx={{ pr: { md: 4 } }}>
                  <SecurityIcon sx={{ color: '#004aad', fontSize: 40, mb: 2 }} />
                  <Typography variant="h4" sx={{ fontWeight: 500, mb: 3, color: '#111' }}>
                    IT Governance with Full Control
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.7, fontSize: '1.1rem', mb: 2 }}>
                    Citizen's enterprise container platform empowers your IT team with full governance while enabling business users to deploy applications. Unlike simplistic PaaS solutions, Citizen gives you:
                  </Typography>
                  
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.7, fontSize: '1.1rem', mb: 1 }}>
                      <strong>Enterprise security policies</strong> — Apply access controls, network policies, and container security policies through a central control plane.
                    </Typography>
                    
                    <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.7, fontSize: '1.1rem', mb: 1 }}>
                      <strong>Private registries & artifact management</strong> — Store container images securely on-premise with scanning, signing and verification built-in.
                    </Typography>
                    
                    <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.7, fontSize: '1.1rem' }}>
                      <strong>Infrastructure flexibility</strong> — Deploy on-premise, in your private cloud, or in hybrid environments, avoiding vendor lock-in.
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
                  height: { xs: '280px', md: '340px' }
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
                    {/* IT Governance Mockup */}
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
                        <Typography sx={{ fontSize: '0.9rem', fontWeight: 500 }}>Enterprise Container Policies</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <Box sx={{ 
                            px: 2, 
                            py: 0.5, 
                            bgcolor: '#e6f2eb', 
                            borderRadius: 1,
                            color: '#2a9d58',
                            fontSize: '0.75rem',
                            fontWeight: 500
                          }}>
                            All Systems Compliant
                          </Box>
                        </Box>
                      </Box>
                      
                      <Grid container spacing={2} sx={{ mt: 1 }}>
                        <Grid item xs={12}>
                          <Box sx={{ 
                            p: 2,
                            border: '1px solid #eee',
                            borderRadius: 1,
                            mb: 2
                          }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                              <Typography sx={{ fontSize: '0.9rem', fontWeight: 500 }}>Security & Compliance</Typography>
                              <Box sx={{ 
                                width: 40, 
                                height: 24, 
                                bgcolor: '#004aad', 
                                borderRadius: 12,
                                position: 'relative'
                              }}>
                                <Box sx={{ 
                                  position: 'absolute',
                                  right: 4,
                                  top: 4,
                                  width: 16,
                                  height: 16,
                                  borderRadius: '50%',
                                  bgcolor: 'white'
                                }}></Box>
                              </Box>
                            </Box>
                            <Typography sx={{ fontSize: '0.8rem', color: '#666' }}>SOC 2, HIPAA, GDPR, ISO 27001 compliant with audit logs</Typography>
                          </Box>
                        </Grid>
                      
                        <Grid item xs={6}>
                          <Box sx={{ 
                            p: 2,
                            border: '1px solid #eee',
                            borderRadius: 1,
                            height: '100%'
                          }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                              <Typography sx={{ fontSize: '0.9rem', fontWeight: 500 }}>Image Scanning</Typography>
                              <Box sx={{ 
                                width: 40, 
                                height: 24, 
                                bgcolor: '#004aad', 
                                borderRadius: 12,
                                position: 'relative'
                              }}>
                                <Box sx={{ 
                                  position: 'absolute',
                                  right: 4,
                                  top: 4,
                                  width: 16,
                                  height: 16,
                                  borderRadius: '50%',
                                  bgcolor: 'white'
                                }}></Box>
                              </Box>
                            </Box>
                            <Typography sx={{ fontSize: '0.8rem', color: '#666' }}>Enforced on all images</Typography>
                          </Box>
                        </Grid>
                        
                        <Grid item xs={6}>
                          <Box sx={{ 
                            p: 2,
                            border: '1px solid #eee',
                            borderRadius: 1,
                            height: '100%'
                          }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                              <Typography sx={{ fontSize: '0.9rem', fontWeight: 500 }}>Registry Controls</Typography>
                              <Box sx={{ 
                                width: 40, 
                                height: 24, 
                                bgcolor: '#004aad', 
                                borderRadius: 12,
                                position: 'relative'
                              }}>
                                <Box sx={{ 
                                  position: 'absolute',
                                  right: 4,
                                  top: 4,
                                  width: 16,
                                  height: 16,
                                  borderRadius: '50%',
                                  bgcolor: 'white'
                                }}></Box>
                              </Box>
                            </Box>
                            <Typography sx={{ fontSize: '0.8rem', color: '#666' }}>Approved sources only</Typography>
                          </Box>
                        </Grid>
                        
                        <Grid item xs={12}>
                          <Box sx={{ 
                            p: 2,
                            border: '1px solid #eee',
                            borderRadius: 1
                          }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                              <Typography sx={{ fontSize: '0.9rem', fontWeight: 500 }}>Resource Quotas</Typography>
                              <Box sx={{ 
                                width: 40, 
                                height: 24, 
                                bgcolor: '#004aad', 
                                borderRadius: 12,
                                position: 'relative'
                              }}>
                                <Box sx={{ 
                                  position: 'absolute',
                                  right: 4,
                                  top: 4,
                                  width: 16,
                                  height: 16,
                                  borderRadius: '50%',
                                  bgcolor: 'white'
                                }}></Box>
                              </Box>
                            </Box>
                            <Typography sx={{ fontSize: '0.8rem', color: '#666' }}>CPU, memory, and storage limits enforced by team</Typography>
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
          
          {/* Digital Transformation - Image on left, text on right */}
          <Box sx={{ mb: 10 }}>
            <Grid container spacing={6} alignItems="center" direction={{ xs: 'column-reverse', md: 'row' }}>
              <Grid item xs={12} md={6}>
                <Box sx={{ 
                  borderRadius: 4, 
                  overflow: 'hidden', 
                  boxShadow: '0 12px 30px rgba(0,0,0,0.1)',
                  position: 'relative',
                  height: { xs: '280px', md: '340px' }
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
                    {/* Digital Transformation Mockup */}
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
                      <Typography sx={{ fontSize: '0.9rem', fontWeight: 500, mb: 2 }}>Business Unit Apps</Typography>
                      
                      <Grid container spacing={2}>
                        {/* Marketing App */}
                        <Grid item xs={6}>
                          <Box sx={{ 
                            p: 2,
                            border: '1px solid #eee',
                            borderRadius: 1,
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column'
                          }}>
                            <Box sx={{ 
                              display: 'flex', 
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              mb: 1
                            }}>
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <Box sx={{ 
                                  width: 28, 
                                  height: 28, 
                                  bgcolor: '#f3f4ff', 
                                  borderRadius: '8px',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  fontSize: '0.9rem',
                                  color: '#6e66de'
                                }}>M</Box>
                                <Typography sx={{ fontSize: '0.85rem', fontWeight: 500 }}>Marketing</Typography>
                              </Box>
                              <Box sx={{ 
                                px: 1, 
                                py: 0.25, 
                                bgcolor: '#e6f2eb', 
                                borderRadius: 1,
                                color: '#2a9d58',
                                fontSize: '0.7rem',
                                fontWeight: 500
                              }}>
                                Live
                              </Box>
                            </Box>
                            <Typography sx={{ fontSize: '0.75rem', color: '#666', mb: 1 }}>Campaign Dashboard</Typography>
                            <Box sx={{ 
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              mt: 'auto',
                              pt: 1,
                              borderTop: '1px solid #f5f5f5'
                            }}>
                              <Typography sx={{ fontSize: '0.7rem', color: '#888' }}>Created by Sarah</Typography>
                              <Box sx={{ color: '#004aad', fontSize: '1rem' }}>🐳</Box>
                            </Box>
                          </Box>
                        </Grid>
                        
                        {/* Sales App */}
                        <Grid item xs={6}>
                          <Box sx={{ 
                            p: 2,
                            border: '1px solid #eee',
                            borderRadius: 1,
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column'
                          }}>
                            <Box sx={{ 
                              display: 'flex', 
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              mb: 1
                            }}>
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <Box sx={{ 
                                  width: 28, 
                                  height: 28, 
                                  bgcolor: '#fff4ea', 
                                  borderRadius: '8px',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  fontSize: '0.9rem',
                                  color: '#e67e22'
                                }}>S</Box>
                                <Typography sx={{ fontSize: '0.85rem', fontWeight: 500 }}>Sales</Typography>
                              </Box>
                              <Box sx={{ 
                                px: 1, 
                                py: 0.25, 
                                bgcolor: '#e6f2eb', 
                                borderRadius: 1,
                                color: '#2a9d58',
                                fontSize: '0.7rem',
                                fontWeight: 500
                              }}>
                                Live
                              </Box>
                            </Box>
                            <Typography sx={{ fontSize: '0.75rem', color: '#666', mb: 1 }}>Lead Tracker</Typography>
                            <Box sx={{ 
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              mt: 'auto',
                              pt: 1,
                              borderTop: '1px solid #f5f5f5'
                            }}>
                              <Typography sx={{ fontSize: '0.7rem', color: '#888' }}>Created by Michael</Typography>
                              <Box sx={{ color: '#004aad', fontSize: '1rem' }}>🐳</Box>
                            </Box>
                          </Box>
                        </Grid>
                        
                        {/* HR App */}
                        <Grid item xs={6}>
                          <Box sx={{ 
                            p: 2,
                            border: '1px solid #eee',
                            borderRadius: 1,
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column'
                          }}>
                            <Box sx={{ 
                              display: 'flex', 
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              mb: 1
                            }}>
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <Box sx={{ 
                                  width: 28, 
                                  height: 28, 
                                  bgcolor: '#eaf7fd', 
                                  borderRadius: '8px',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  fontSize: '0.9rem',
                                  color: '#3498db'
                                }}>H</Box>
                                <Typography sx={{ fontSize: '0.85rem', fontWeight: 500 }}>HR</Typography>
                              </Box>
                              <Box sx={{ 
                                px: 1, 
                                py: 0.25, 
                                bgcolor: '#e6f2eb', 
                                borderRadius: 1,
                                color: '#2a9d58',
                                fontSize: '0.7rem',
                                fontWeight: 500
                              }}>
                                Live
                              </Box>
                            </Box>
                            <Typography sx={{ fontSize: '0.75rem', color: '#666', mb: 1 }}>Onboarding Portal</Typography>
                            <Box sx={{ 
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              mt: 'auto',
                              pt: 1,
                              borderTop: '1px solid #f5f5f5'
                            }}>
                              <Typography sx={{ fontSize: '0.7rem', color: '#888' }}>Created by Jessica</Typography>
                              <Box sx={{ color: '#004aad', fontSize: '1rem' }}>🐳</Box>
                            </Box>
                          </Box>
                        </Grid>
                        
                        {/* Finance App */}
                        <Grid item xs={6}>
                          <Box sx={{ 
                            p: 2,
                            border: '1px solid #eee',
                            borderRadius: 1,
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column'
                          }}>
                            <Box sx={{ 
                              display: 'flex', 
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              mb: 1
                            }}>
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <Box sx={{ 
                                  width: 28, 
                                  height: 28, 
                                  bgcolor: '#f0f7f0', 
                                  borderRadius: '8px',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  fontSize: '0.9rem',
                                  color: '#27ae60'
                                }}>F</Box>
                                <Typography sx={{ fontSize: '0.85rem', fontWeight: 500 }}>Finance</Typography>
                              </Box>
                              <Box sx={{ 
                                px: 1, 
                                py: 0.25, 
                                bgcolor: '#e6f2eb', 
                                borderRadius: 1,
                                color: '#2a9d58',
                                fontSize: '0.7rem',
                                fontWeight: 500
                              }}>
                                Live
                              </Box>
                            </Box>
                            <Typography sx={{ fontSize: '0.75rem', color: '#666', mb: 1 }}>Budget Tracker</Typography>
                            <Box sx={{ 
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              mt: 'auto',
                              pt: 1,
                              borderTop: '1px solid #f5f5f5'
                            }}>
                              <Typography sx={{ fontSize: '0.7rem', color: '#888' }}>Created by Robert</Typography>
                              <Box sx={{ color: '#004aad', fontSize: '1rem' }}>🐳</Box>
                            </Box>
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Box sx={{ pl: { md: 4 } }}>
                  <PeopleIcon sx={{ color: '#004aad', fontSize: 40, mb: 2 }} />
                  <Typography variant="h4" sx={{ fontWeight: 500, mb: 3, color: '#111' }}>
                    Democratizing Digital Transformation
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.7, fontSize: '1.1rem', mb: 2 }}>
                    Unlike basic deployment platforms that only serve developers, Citizen empowers your entire organization to participate in digital transformation while maintaining enterprise controls:
                  </Typography>
                  
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.7, fontSize: '1.1rem', mb: 1 }}>
                      <strong>Non-technical teams deploy with confidence</strong> — Marketing, sales, HR and finance can deploy AI-generated or outsourced applications through a simple interface.
                    </Typography>
                    
                    <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.7, fontSize: '1.1rem', mb: 1 }}>
                      <strong>IT maintains full control</strong> — Pre-approved templates, resource limits, and security policies ensure business users can only deploy within your governance framework.
                    </Typography>
                    
                    <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.7, fontSize: '1.1rem' }}>
                      <strong>Isolation via containers</strong> — Each department's applications run in isolated containers, eliminating dependency conflicts and ensuring one app can't affect others.
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
          
          {/* Enterprise Scale - Text on left, image on right */}
          <Box>
            <Grid container spacing={6} alignItems="center">
              <Grid item xs={12} md={6}>
                <Box sx={{ pr: { md: 4 } }}>
                  <InsightsIcon sx={{ color: '#004aad', fontSize: 40, mb: 2 }} />
                  <Typography variant="h4" sx={{ fontWeight: 500, mb: 3, color: '#111' }}>
                    Enterprise-Scale Container Platform
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.7, fontSize: '1.1rem', mb: 2 }}>
                    Unlike simplistic hosting platforms that fall short for enterprise needs, Citizen delivers a robust container platform built for scale:
                  </Typography>
                  
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.7, fontSize: '1.1rem', mb: 1 }}>
                      <strong>Microservices architecture</strong> — Deploy complex applications with multiple interconnected services, each in its own container with independent scaling.
                    </Typography>
                    
                    <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.7, fontSize: '1.1rem', mb: 1 }}>
                      <strong>High availability & fault tolerance</strong> — Automatic distribution across availability zones with self-healing capabilities ensures 99.99% uptime.
                    </Typography>
                    
                    <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.7, fontSize: '1.1rem' }}>
                      <strong>Global distribution</strong> — Deploy containers to edge locations worldwide for improved performance and regulatory compliance with data residency requirements.
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
                  height: { xs: '280px', md: '340px' }
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
                    {/* Enterprise Scale Mockup */}
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
                      <Typography sx={{ fontSize: '0.9rem', fontWeight: 500, mb: 2 }}>Global Infrastructure</Typography>
                      
                      {/* World Map with Points */}
                      <Box sx={{ 
                        flex: 1,
                        position: 'relative',
                        bgcolor: '#f5f8ff',
                        borderRadius: 1,
                        mb: 2,
                        px: 2,
                        py: 3
                      }}>
                        <Box sx={{ 
                          position: 'absolute',
                          top: '30%',
                          left: '20%',
                          width: 12,
                          height: 12,
                          borderRadius: '50%',
                          bgcolor: '#004aad',
                          boxShadow: '0 0 0 4px rgba(0, 74, 173, 0.2)'
                        }}></Box>
                        
                        <Box sx={{ 
                          position: 'absolute',
                          top: '35%',
                          left: '48%',
                          width: 12,
                          height: 12,
                          borderRadius: '50%',
                          bgcolor: '#004aad',
                          boxShadow: '0 0 0 4px rgba(0, 74, 173, 0.2)'
                        }}></Box>
                        
                        <Box sx={{ 
                          position: 'absolute',
                          top: '25%',
                          right: '25%',
                          width: 12,
                          height: 12,
                          borderRadius: '50%',
                          bgcolor: '#004aad',
                          boxShadow: '0 0 0 4px rgba(0, 74, 173, 0.2)'
                        }}></Box>
                        
                        <Box sx={{ 
                          position: 'absolute',
                          bottom: '30%',
                          right: '30%',
                          width: 12,
                          height: 12,
                          borderRadius: '50%',
                          bgcolor: '#004aad',
                          boxShadow: '0 0 0 4px rgba(0, 74, 173, 0.2)'
                        }}></Box>
                        
                        <Box sx={{ 
                          position: 'absolute',
                          bottom: '40%',
                          left: '65%',
                          width: 12,
                          height: 12,
                          borderRadius: '50%',
                          bgcolor: '#004aad',
                          boxShadow: '0 0 0 4px rgba(0, 74, 173, 0.2)'
                        }}></Box>
                        
                        <Typography sx={{ 
                          position: 'absolute', 
                          bottom: 10, 
                          left: 0, 
                          width: '100%', 
                          textAlign: 'center',
                          fontSize: '0.7rem',
                          color: '#666'
                        }}>
                          Multi-region container deployment
                        </Typography>
                      </Box>
                      
                      <Grid container spacing={2}>
                        <Grid item xs={4}>
                          <Box sx={{ 
                            p: 1.5,
                            border: '1px solid #eee',
                            borderRadius: 1,
                            textAlign: 'center'
                          }}>
                            <Typography sx={{ fontSize: '1.2rem', fontWeight: 500, color: '#004aad' }}>99.99%</Typography>
                            <Typography sx={{ fontSize: '0.7rem', color: '#666' }}>SLA Uptime</Typography>
                          </Box>
                        </Grid>
                        
                        <Grid item xs={4}>
                          <Box sx={{ 
                            p: 1.5,
                            border: '1px solid #eee',
                            borderRadius: 1,
                            textAlign: 'center'
                          }}>
                            <Typography sx={{ fontSize: '1.2rem', fontWeight: 500, color: '#004aad' }}>50ms</Typography>
                            <Typography sx={{ fontSize: '0.7rem', color: '#666' }}>Avg. Latency</Typography>
                          </Box>
                        </Grid>
                        
                        <Grid item xs={4}>
                          <Box sx={{ 
                            p: 1.5,
                            border: '1px solid #eee',
                            borderRadius: 1,
                            textAlign: 'center'
                          }}>
                            <Typography sx={{ fontSize: '1.2rem', fontWeight: 500, color: '#004aad' }}>5 TB</Typography>
                            <Typography sx={{ fontSize: '0.7rem', color: '#666' }}>Storage/Region</Typography>
                          </Box>
                        </Grid>
                      </Grid>
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
              Ready for enterprise-grade deployment?
            </Typography>
            <Typography variant="body1" sx={{ color: '#555', mb: 4, maxWidth: 800, mx: 'auto' }}>
              Our enterprise team is ready to help you implement Citizen throughout your organization. Contact us to discuss your specific requirements and deployment options.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
              <Button
                variant="contained"
                sx={{
                  bgcolor: '#004aad',
                  color: 'white',
                  px: 4,
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
                Contact Sales
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
                Download Whitepaper
              </Button>
            </Box>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
} 