"use client";

import React from 'react';
import { 
  Box, 
  Container, 
  Typography,
  Paper,
  Button,
  Divider
} from '@mui/material';

import CodeIcon from '@mui/icons-material/Code';
import GitHubIcon from '@mui/icons-material/GitHub';
import PublicIcon from '@mui/icons-material/Public';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import BuildIcon from '@mui/icons-material/Build';
import PeopleIcon from '@mui/icons-material/People';
import Image from 'next/image';

export default function OpenSourcePage() {
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
                    100% Open Source
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
                  Deploy on your own terms
                  <Box component="span" sx={{ 
                    display: 'block',
                    color: '#004aad',
                    fontSize: { xs: '1.5rem', md: '2rem' },
                    fontWeight: 400,
                    mt: 1
                  }}>
                    Self-hosted microservices platform
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
                  Citizen is a 100% open source platform that empowers both technical and non-technical teams to deploy microservices on your own infrastructure. Full control, zero vendor lock-in, and unlimited customization.
                </Typography>
                
                <Box sx={{ display: 'flex', gap: 2, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                  <Button
                    variant="contained"
                    startIcon={<GitHubIcon />}
                    sx={{
                      bgcolor: '#24292e',
                      color: 'white',
                      px: 4,
                      py: 1.5,
                      borderRadius: 2,
                      fontWeight: 500,
                      boxShadow: 'none',
                      fontSize: '1rem',
                      textTransform: 'none',
                      '&:hover': {
                        bgcolor: '#1a1e21',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                      }
                    }}
                  >
                    Clone Repository
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
                    Installation Guide
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
                  <Typography sx={{ color: '#555', fontSize: '0.8rem', ml: 1 }}>Terminal</Typography>
                </Box>
                <Box
                  sx={{
                    bgcolor: '#1e1f22',
                    color: '#f8f8f8',
                    p: 3,
                    fontFamily: 'monospace',
                    fontSize: '0.875rem',
                    textAlign: 'left',
                    position: 'relative',
                    height: '320px',
                    overflow: 'auto'
                  }}
                >
                  <Box component="pre" sx={{ margin: 0 }}>
                    <Box component="code" sx={{ 
                      display: 'block', 
                      whiteSpace: 'pre-wrap', 
                      wordWrap: 'break-word',
                      color: '#eee',
                      lineHeight: 1.5
                    }}>
                      {`$ git clone https://github.com/citizen-platform/citizen.git
                      
Cloning into 'citizen'...
remote: Enumerating objects: 1354, done.
remote: Counting objects: 100% (1354/1354), done.
remote: Compressing objects: 100% (742/742), done.
remote: Total 1354 (delta 612), reused 1354 (delta 612)
Receiving objects: 100% (1354/1354), 7.23 MiB | 5.12 MiB/s, done.
Resolving deltas: 100% (612/612), done.

$ cd citizen
$ docker-compose up -d

Creating network "citizen_default" with the default driver
Creating citizen-database ... done
Creating citizen-registry ... done
Creating citizen-api      ... done
Creating citizen-gateway  ... done
Creating citizen-ui       ... done

$ curl localhost:8080/status

{
  "status": "ready",
  "version": "1.0.0",
  "components": {
    "api": "healthy",
    "database": "healthy",
    "registry": "healthy",
    "gateway": "healthy",
    "ui": "healthy"
  },
  "license": "Commons Clause + Apache 2.0",
  "message": "Citizen platform is ready for deployments"
}

$ docker ps

CONTAINER ID   IMAGE                        STATUS         PORTS
a72f9c3e4b12   citizen/ui:1.0.0             Up 2 minutes   0.0.0.0:3000->3000/tcp
b45d8f7c2a31   citizen/gateway:1.0.0        Up 2 minutes   0.0.0.0:8080->8080/tcp
c98e3d1f6b24   citizen/api:1.0.0            Up 2 minutes   0.0.0.0:8081->8081/tcp
d21a7e5c9b13   citizen/registry:1.0.0       Up 2 minutes   0.0.0.0:5000->5000/tcp
e45b6a2d8c04   postgres:14                  Up 2 minutes   0.0.0.0:5432->5432/tcp
`}
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
            Open source deployment for everyone
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
                <PeopleIcon sx={{ color: '#004aad', fontSize: 32, mb: 2 }} />
                <Typography variant="h5" sx={{ fontWeight: 500, mb: 2, color: '#111' }}>
                  Democratized Deployments
                </Typography>
                <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.6 }}>
                  Both developers and non-technical teams can deploy applications. Deploy AI-generated code, traditional apps, or third-party services through a simple interface while IT maintains control.
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
                <LockOpenIcon sx={{ color: '#004aad', fontSize: 32, mb: 2 }} />
                <Typography variant="h5" sx={{ fontWeight: 500, mb: 2, color: '#111' }}>
                  No Vendor Lock-in
                </Typography>
                <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.6 }}>
                  Deploy on your own infrastructure with no additional licensing costs. Your data stays in your environment, and you maintain complete ownership and control of your deployment pipeline.
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
                <BuildIcon sx={{ color: '#004aad', fontSize: 32, mb: 2 }} />
                <Typography variant="h5" sx={{ fontWeight: 500, mb: 2, color: '#111' }}>
                  Limitless Customization
                </Typography>
                <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.6 }}>
                  Modify any aspect of the platform to suit your specific needs. Extend functionality, integrate with existing systems, and create a deployment environment tailored to your organization.
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
                <FlashOnIcon sx={{ color: '#004aad', fontSize: 32, mb: 2 }} />
                <Typography variant="h5" sx={{ fontWeight: 500, mb: 2, color: '#111' }}>
                  Microservices Architecture
                </Typography>
                <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.6 }}>
                  Built with Docker containers at its core, Citizen provides clean isolation between services, simplified dependency management, and efficient scaling for all your applications.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>
        
        {/* License Section */}
        <Box sx={{ mb: 12, maxWidth: 1000, mx: 'auto', textAlign: 'center' }}>
          <Typography 
            variant="h2" 
            sx={{ 
              fontWeight: 500, 
              mb: 4,
              fontSize: { xs: '1.75rem', md: '2.25rem' },
              color: '#111'
            }}
          >
            License Information
          </Typography>
          
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, md: 6 },
              borderRadius: 3,
              border: '1px solid #eaeaea',
              textAlign: 'left',
              mb: 6
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 500, mb: 3, color: '#111' }}>
              Commons Clause + Apache 2.0 License
            </Typography>
            
            <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.7, mb: 3 }}>
              Citizen is licensed under the <strong>Apache License 2.0 with Commons Clause</strong>. This means:
            </Typography>
            
            <Box sx={{ bgcolor: '#f8f9fa', p: 3, borderRadius: 2, mb: 3 }}>
              <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.7, mb: 2 }}>
                ✓ <strong>Free for personal and non-commercial use</strong> — Use Citizen freely for personal projects, educational purposes, and non-profit organizations.
              </Typography>
              
              <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.7, mb: 2 }}>
                ✓ <strong>Source code access</strong> — View, modify, and distribute the code according to the terms of the Apache 2.0 license.
              </Typography>
              
              <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.7, mb: 2 }}>
                ✓ <strong>Customization freedom</strong> — Adapt the platform to your needs and contribute improvements back to the community.
              </Typography>
              
              <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.7 }}>
                ✕ <strong>Commercial use restrictions</strong> — The Commons Clause restricts the right to sell the software as a service. Commercial use requires a separate agreement.
              </Typography>
            </Box>
            
            <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.7 }}>
              For commercial licensing options or questions about usage, please contact our team. We offer flexible licensing arrangements for businesses looking to use Citizen in commercial environments.
            </Typography>
          </Paper>
          
          <Button
            variant="outlined"
            sx={{
              color: '#004aad',
              borderColor: '#004aad',
              px: 4,
              py: 1.5,
              borderRadius: 2,
              fontWeight: 500,
              fontSize: '1rem',
              textTransform: 'none',
              '&:hover': {
                borderColor: '#003b8a',
                bgcolor: 'rgba(0, 74, 173, 0.04)'
              }
            }}
          >
            View Full License
          </Button>
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
              Ready to deploy on your own infrastructure?
            </Typography>
            <Typography variant="body1" sx={{ color: '#555', mb: 4, maxWidth: 800, mx: 'auto' }}>
              Get started with Citizen today. Deploy your applications on your terms with full control and customization options. Our community is ready to help you succeed.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
              <Button
                variant="contained"
                startIcon={<GitHubIcon />}
                sx={{
                  bgcolor: '#24292e',
                  color: 'white',
                  px: 5,
                  py: 1.5,
                  borderRadius: 2,
                  fontWeight: 500,
                  fontSize: '1rem',
                  textTransform: 'none',
                  '&:hover': {
                    bgcolor: '#1a1e21',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                  }
                }}
              >
                Clone Repository
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
                Join Community
              </Button>
            </Box>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
} 