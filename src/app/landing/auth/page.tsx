"use client";

import React from 'react';
import { 
  Box, 
  Container, 
  Typography,
  Button,
  Card,
  CardContent
} from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import Navbar from '../components/Navbar';
import Footer from '@/components/Footer';

export default function AuthenticationLanding() {
  return (
    <Box sx={{ 
      backgroundColor: '#f8f9fa',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Navbar */}
      <Navbar />
      
      {/* Main Content */}
      <Container 
        maxWidth="lg" 
        sx={{ 
          mt: 8, 
          mb: 10, 
          flexGrow: 1
        }}
      >
        <Box sx={{ maxWidth: 800, mx: 'auto' }}>
          <Box sx={{ mb: 5 }}>
            <Typography 
              variant="h2" 
              sx={{ 
                fontWeight: 800, 
                mb: 4, 
                color: '#333',
                fontSize: { xs: '2.5rem', md: '3.5rem' }
              }}
            >
              Open Source Auth
              <br />
              (with tons of integrations)
            </Typography>

            <Typography 
              variant="body1" 
              sx={{ 
                fontSize: '1.25rem', 
                mb: 3, 
                color: '#555',
                lineHeight: 1.6
              }}
            >
              Every Citizen project comes with a complete User
              Management system that works without any additional
              tools.
            </Typography>

            <Typography 
              variant="body1" 
              sx={{ 
                fontSize: '1.25rem', 
                mb: 6, 
                color: '#555',
                lineHeight: 1.6
              }}
            >
              Including PostgreSQL's policy engine, for fine-grained
              access rules.
            </Typography>

            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button
                variant="contained"
                sx={{
                  bgcolor: '#10b981',
                  color: 'white',
                  px: 4,
                  py: 1.5,
                  borderRadius: 1,
                  fontWeight: 600,
                  '&:hover': {
                    bgcolor: '#0e9f6e'
                  }
                }}
              >
                Start a project
              </Button>
              
              <Button
                variant="outlined"
                startIcon={<CodeIcon />}
                sx={{
                  color: '#333',
                  borderColor: '#ddd',
                  px: 4,
                  py: 1.5,
                  borderRadius: 1,
                  fontWeight: 600,
                  '&:hover': {
                    borderColor: '#bbb',
                    bgcolor: 'rgba(0,0,0,0.01)'
                  }
                }}
              >
                Documentation
              </Button>
            </Box>
          </Box>

          <Box sx={{ mt: 8 }}>
            <Typography 
              variant="h4" 
              sx={{ 
                fontWeight: 700, 
                mb: 4, 
                color: '#333' 
              }}
            >
              Key Authentication Features
            </Typography>

            <Box 
              component="ul" 
              sx={{ 
                pl: 4,
                '& li': {
                  mb: 2
                }
              }}
            >
              <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem', color: '#555' }}>
                Support for email & password, magic links, and OAuth providers
              </Typography>
              <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem', color: '#555' }}>
                Secure user management and authentication
              </Typography>
              <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem', color: '#555' }}>
                Role-based access control (RBAC)
              </Typography>
              <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem', color: '#555' }}>
                Row-level security with PostgreSQL policies
              </Typography>
              <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem', color: '#555' }}>
                Multi-factor authentication (MFA)
              </Typography>
              <Typography component="li" variant="body1" sx={{ fontSize: '1.1rem', color: '#555' }}>
                Enterprise SSO with SAML 2.0
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>

      {/* Footer */}
      <Footer />
    </Box>
  );
}