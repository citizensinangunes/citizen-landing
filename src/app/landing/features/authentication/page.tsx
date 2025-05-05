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

import LockIcon from '@mui/icons-material/Lock';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import GroupIcon from '@mui/icons-material/Group';
import ShieldIcon from '@mui/icons-material/Shield';
import Image from 'next/image';

export default function AuthenticationPage() {
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
                    Identity & Access
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
                  Authentication
                  <Box component="span" sx={{ 
                    display: 'block',
                    color: '#004aad',
                    fontSize: { xs: '1.5rem', md: '2rem' },
                    fontWeight: 400,
                    mt: 1
                  }}>
                    Secure, flexible, and user-friendly
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
                  Implement robust authentication for your applications with multiple providers, SSO integration, and fine-grained access controls. Keep your users and data secure.
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
                    Set Up Auth
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
            
            {/* Authentication UI Demo - Right Column */}
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
                  <Typography sx={{ color: '#555', fontSize: '0.8rem', ml: 1 }}>Authentication Settings</Typography>
                </Box>
                <Box
                  sx={{
                    bgcolor: '#fff',
                    color: '#333',
                    p: 4,
                    fontFamily: 'sans-serif',
                    textAlign: 'left',
                    position: 'relative',
                    height: '300px',
                    overflowY: 'auto'
                  }}
                >
                  {/* Authentication UI mockup */}
                  <Typography variant="h6" sx={{ color: '#004aad', fontWeight: 500, mb: 3, fontSize: '1rem' }}>Configure Authentication Providers</Typography>
                  
                  <Box sx={{ 
                    mb: 3,
                    p: 2.5,
                    border: '1px solid #eee',
                    borderRadius: 2,
                    position: 'relative',
                    bgcolor: 'rgba(0, 74, 173, 0.03)',
                    borderLeft: '3px solid #004aad'
                  }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Box sx={{ 
                        width: 36, 
                        height: 36, 
                        borderRadius: '8px',
                        bgcolor: 'white',
                        border: '1px solid #eee',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mr: 2
                      }}>
                        <Typography sx={{ fontSize: '1.2rem', fontWeight: 600, color: '#4285F4' }}>G</Typography>
                      </Box>
                      <Box>
                        <Typography sx={{ fontWeight: 500, fontSize: '0.9rem' }}>Google OAuth</Typography>
                        <Typography variant="body2" sx={{ color: '#27ae60', fontSize: '0.7rem' }}>● Connected</Typography>
                      </Box>
                      <Box sx={{ ml: 'auto' }}>
                        <Button 
                          size="small" 
                          variant="outlined"
                          sx={{ 
                            fontSize: '0.7rem', 
                            py: 0.5, 
                            borderColor: '#ddd',
                            color: '#555'
                          }}
                        >
                          Configure
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                  
                  <Box sx={{ 
                    mb: 3,
                    p: 2.5,
                    border: '1px solid #eee',
                    borderRadius: 2,
                    position: 'relative',
                  }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Box sx={{ 
                        width: 36, 
                        height: 36, 
                        borderRadius: '8px',
                        bgcolor: 'white',
                        border: '1px solid #eee',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mr: 2
                      }}>
                        <Typography sx={{ fontSize: '1.2rem', fontWeight: 600, color: '#000' }}>G</Typography>
                      </Box>
                      <Box>
                        <Typography sx={{ fontWeight: 500, fontSize: '0.9rem' }}>GitHub OAuth</Typography>
                        <Typography variant="body2" sx={{ color: '#777', fontSize: '0.7rem' }}>Not configured</Typography>
                      </Box>
                      <Box sx={{ ml: 'auto' }}>
                        <Button 
                          size="small" 
                          variant="contained"
                          sx={{ 
                            fontSize: '0.7rem', 
                            py: 0.5, 
                            bgcolor: '#004aad',
                            '&:hover': {
                              bgcolor: '#003b8a'
                            }
                          }}
                        >
                          Connect
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                  
                  <Box sx={{ 
                    mb: 3,
                    p: 2.5,
                    border: '1px solid #eee',
                    borderRadius: 2,
                    position: 'relative',
                  }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Box sx={{ 
                        width: 36, 
                        height: 36, 
                        borderRadius: '8px',
                        bgcolor: 'white',
                        border: '1px solid #eee',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mr: 2
                      }}>
                        <Typography sx={{ fontSize: '0.9rem', fontWeight: 600, color: '#0A66C2' }}>SAML</Typography>
                      </Box>
                      <Box>
                        <Typography sx={{ fontWeight: 500, fontSize: '0.9rem' }}>SAML / SSO</Typography>
                        <Typography variant="body2" sx={{ color: '#777', fontSize: '0.7rem' }}>Enterprise feature</Typography>
                      </Box>
                      <Box sx={{ ml: 'auto' }}>
                        <Button 
                          size="small" 
                          variant="outlined"
                          sx={{ 
                            fontSize: '0.7rem', 
                            py: 0.5, 
                            borderColor: '#ddd',
                            color: '#555'
                          }}
                        >
                          Setup
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                  
                  <Box sx={{ mt: 3 }}>
                    <Typography variant="body2" sx={{ color: '#004aad', fontWeight: 500, fontSize: '0.8rem', display: 'flex', alignItems: 'center' }}>
                      + Add Custom Authentication Provider
                    </Typography>
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
            Powerful authentication features
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
                <LockIcon sx={{ color: '#004aad', fontSize: 32, mb: 2 }} />
                <Typography variant="h5" sx={{ fontWeight: 500, mb: 2, color: '#111' }}>
                  Multiple auth providers
                </Typography>
                <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.6 }}>
                  Support for popular OAuth providers including Google, GitHub, GitLab, and more. Let your users sign in with their preferred accounts or email/password.
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
                <VpnKeyIcon sx={{ color: '#004aad', fontSize: 32, mb: 2 }} />
                <Typography variant="h5" sx={{ fontWeight: 500, mb: 2, color: '#111' }}>
                  Enterprise SSO
                </Typography>
                <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.6 }}>
                  SAML, OIDC, and custom SSO integration for enterprise customers. Seamlessly connect with your existing identity providers like Okta, Auth0, or Azure AD.
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
                <GroupIcon sx={{ color: '#004aad', fontSize: 32, mb: 2 }} />
                <Typography variant="h5" sx={{ fontWeight: 500, mb: 2, color: '#111' }}>
                  Role-based access
                </Typography>
                <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.6 }}>
                  Implement fine-grained access controls with customizable roles and permissions. Control who can view, edit, or manage resources within your applications.
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
                <ShieldIcon sx={{ color: '#004aad', fontSize: 32, mb: 2 }} />
                <Typography variant="h5" sx={{ fontWeight: 500, mb: 2, color: '#111' }}>
                  Advanced security
                </Typography>
                <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.6 }}>
                  Two-factor authentication, account recovery, and session management. Keep your users' accounts secure with industry-standard security practices.
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
              Secure your application today
            </Typography>
            <Typography variant="body1" sx={{ color: '#555', mb: 4, maxWidth: 800, mx: 'auto' }}>
              Implement robust authentication in minutes, not weeks. Citizen's authentication system gives you enterprise-grade security without the complexity.
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
              Get Started with Authentication
            </Button>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
} 