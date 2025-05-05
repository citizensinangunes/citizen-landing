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

import AssessmentIcon from '@mui/icons-material/Assessment';
import InsightsIcon from '@mui/icons-material/Insights';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import TimelineIcon from '@mui/icons-material/Timeline';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Image from 'next/image';

export default function MonitoringPage() {
  return (
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
                  Application Insights
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
                Monitoring & Logging
                <Box component="span" sx={{ 
                  display: 'block',
                  color: '#004aad',
                  fontSize: { xs: '1.5rem', md: '2rem' },
                  fontWeight: 400,
                  mt: 1
                }}>
                  Real-time insights for your applications
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
                Gain real-time insights into your application's performance and health with integrated monitoring and logging. Track metrics, set alerts, and troubleshoot issues before they affect your users.
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
                      bgcolor: '#003a87',
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
          
          {/* Dashboard Demo - Right Column */}
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
                <Typography sx={{ color: '#555', fontSize: '0.8rem', ml: 1 }}>Monitoring Dashboard</Typography>
              </Box>
              <Box
                sx={{
                  bgcolor: '#fff',
                  color: '#333',
                  p: 4,
                  fontFamily: 'sans-serif',
                  textAlign: 'left',
                  position: 'relative',
                  backgroundImage: 'url(/dashboard-bg.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '300px'
                }}
              >
                {/* Dashboard mockup content would go here - simplified for this example */}
                <Box sx={{ 
                  display: 'flex', 
                  flexDirection: 'column',
                  height: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backdropFilter: 'blur(2px)',
                  bgcolor: 'rgba(255,255,255,0.8)',
                  p: 4,
                  borderRadius: 3
                }}>
                  <InsightsIcon sx={{ fontSize: 48, color: '#004aad', mb: 2 }} />
                  <Typography variant="h6" sx={{ color: '#333', fontWeight: 500, mb: 2, textAlign: 'center' }}>
                    Real-time application monitoring and logging dashboard
                  </Typography>
                  <Typography sx={{ color: '#666', textAlign: 'center' }}>
                    Track performance metrics, view logs, and manage alerts in one place
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
          Comprehensive monitoring tools for developers
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
              <TimelineIcon sx={{ color: '#004aad', fontSize: 32, mb: 2 }} />
              <Typography variant="h5" sx={{ fontWeight: 500, mb: 2, color: '#111' }}>
                Real-time metrics
              </Typography>
              <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.6 }}>
                Monitor CPU, memory, network, and custom application metrics in real-time. Visualize performance trends and detect anomalies before they impact your users.
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
              <AssessmentIcon sx={{ color: '#004aad', fontSize: 32, mb: 2 }} />
              <Typography variant="h5" sx={{ fontWeight: 500, mb: 2, color: '#111' }}>
                Centralized logging
              </Typography>
              <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.6 }}>
                Collect, index, and analyze logs from all your applications and services in one place. Powerful search and filtering helps you troubleshoot issues quickly.
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
              <NotificationsActiveIcon sx={{ color: '#004aad', fontSize: 32, mb: 2 }} />
              <Typography variant="h5" sx={{ fontWeight: 500, mb: 2, color: '#111' }}>
                Intelligent alerts
              </Typography>
              <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.6 }}>
                Create custom alerts based on thresholds or anomaly detection. Receive notifications via email, Slack, or webhook integrations when issues require attention.
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
              <VisibilityIcon sx={{ color: '#004aad', fontSize: 32, mb: 2 }} />
              <Typography variant="h5" sx={{ fontWeight: 500, mb: 2, color: '#111' }}>
                End-to-end visibility
              </Typography>
              <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.6 }}>
                Track user requests as they flow through your services. Identify bottlenecks and optimize performance with distributed tracing and dependency mapping.
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
            backgroundImage: 'linear-gradient(135deg, #f5f7ff 0%, #e8eaff 100%)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <Typography variant="h3" sx={{ fontWeight: 500, mb: 3, color: '#111', fontSize: { xs: '1.75rem', md: '2.25rem' } }}>
            Start monitoring your applications
          </Typography>
          <Typography variant="body1" sx={{ color: '#555', mb: 4, maxWidth: 800, mx: 'auto' }}>
            Get real-time insights into your application's health and performance. Set up in minutes with zero configuration.
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
                bgcolor: '#003a87',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
              }
            }}
          >
            Get Started for Free
          </Button>
        </Paper>
      </Box>
    </Container>
  );
} 