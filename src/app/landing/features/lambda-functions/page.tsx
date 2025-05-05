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

import FunctionsIcon from '@mui/icons-material/Functions';
import BoltIcon from '@mui/icons-material/Bolt';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import Image from 'next/image';

export default function LambdaFunctionsPage() {
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
                    Serverless Computing
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
                  Lambda Functions
                  <Box component="span" sx={{ 
                    display: 'block',
                    color: '#004aad',
                    fontSize: { xs: '1.5rem', md: '2rem' },
                    fontWeight: 400,
                    mt: 1
                  }}>
                    Run code without managing servers
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
                  Deploy code as serverless functions that scale automatically with your traffic. Build APIs, webhooks, and backend services without worrying about infrastructure.
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
                    Create Function
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
            
            {/* Lambda Function Code Demo - Right Column */}
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
                  <Typography sx={{ color: '#555', fontSize: '0.8rem', ml: 1 }}>process-payment.js</Typography>
                </Box>
                <Box
                  sx={{
                    bgcolor: '#1e1e1e',
                    color: '#d4d4d4',
                    p: 3,
                    fontFamily: '"Roboto Mono", monospace',
                    fontSize: '0.85rem',
                    fontWeight: 400,
                    textAlign: 'left',
                    position: 'relative',
                    height: '300px',
                    overflowY: 'auto',
                    lineHeight: 1.6
                  }}
                >
                  <Box sx={{ color: '#569cd6' }}>export default</Box> 
                  <Box sx={{ color: '#dcdcaa' }}>async function</Box> 
                  <Box sx={{ color: '#dcdcaa' }}>handler(</Box>
                  <Box sx={{ color: '#9cdcfe' }}>req</Box>
                  <Box sx={{ color: '#dcdcaa' }}>,</Box> 
                  <Box sx={{ color: '#9cdcfe' }}>res</Box>
                  <Box sx={{ color: '#dcdcaa' }}>) {'{'}</Box>
                  <Box sx={{ ml: 2 }}>
                    <Box sx={{ color: '#6a9955' }}>// Check if request method is POST</Box>
                    <Box>
                      <Box sx={{ color: '#c586c0' }}>if</Box> (req.method !== <Box component="span" sx={{ color: '#ce9178' }}>'POST'</Box>) {'{'}
                    </Box>
                    <Box sx={{ ml: 2 }}>
                      <Box>
                        <Box sx={{ color: '#c586c0' }}>return</Box> res.status(405).json({'{'}
                      </Box>
                      <Box sx={{ ml: 2 }}>
                        message: <Box component="span" sx={{ color: '#ce9178' }}>'Method not allowed'</Box>
                      </Box>
                      <Box>{'});'}</Box>
                    </Box>
                    <Box>{'}'}</Box>
                    <Box sx={{ mt: 2 }}></Box>
                    <Box sx={{ color: '#6a9955' }}>// Get payment data from request body</Box>
                    <Box>
                      <Box sx={{ color: '#c586c0' }}>const</Box> {'{'}
                      <Box component="span" sx={{ color: '#9cdcfe' }}>amount, currency, token</Box>
                      {'}'} = req.body;
                    </Box>
                    <Box sx={{ mt: 2 }}></Box>
                    <Box sx={{ color: '#6a9955' }}>// Validate required fields</Box>
                    <Box>
                      <Box sx={{ color: '#c586c0' }}>if</Box> (!amount || !currency || !token) {'{'}
                    </Box>
                    <Box sx={{ ml: 2 }}>
                      <Box>
                        <Box sx={{ color: '#c586c0' }}>return</Box> res.status(400).json({'{'}
                      </Box>
                      <Box sx={{ ml: 2 }}>
                        message: <Box component="span" sx={{ color: '#ce9178' }}>'Missing required fields'</Box>
                      </Box>
                      <Box>{'});'}</Box>
                    </Box>
                    <Box>{'}'}</Box>
                    <Box sx={{ mt: 2 }}></Box>
                    <Box sx={{ color: '#6a9955' }}>// Process payment with payment gateway</Box>
                    <Box>
                      <Box sx={{ color: '#c586c0' }}>try</Box> {'{'}
                    </Box>
                    <Box sx={{ ml: 2 }}>
                      <Box>
                        <Box sx={{ color: '#c586c0' }}>const</Box> payment = <Box component="span" sx={{ color: '#dcdcaa' }}>await</Box> paymentGateway.<Box component="span" sx={{ color: '#dcdcaa' }}>processPayment</Box>({'{'}
                      </Box>
                      <Box sx={{ ml: 2 }}>
                        amount,
                      </Box>
                      <Box sx={{ ml: 2 }}>
                        currency,
                      </Box>
                      <Box sx={{ ml: 2 }}>
                        token
                      </Box>
                      <Box>{'});'}</Box>
                      <Box sx={{ mt: 2 }}></Box>
                      <Box>
                        <Box sx={{ color: '#c586c0' }}>return</Box> res.status(200).json({'{'}
                      </Box>
                      <Box sx={{ ml: 2 }}>
                        success: <Box component="span" sx={{ color: '#569cd6' }}>true</Box>,
                      </Box>
                      <Box sx={{ ml: 2 }}>
                        paymentId: payment.id
                      </Box>
                      <Box>{'});'}</Box>
                    </Box>
                    <Box>{'}'} <Box component="span" sx={{ color: '#c586c0' }}>catch</Box> (error) {'{'}</Box>
                    <Box sx={{ ml: 2 }}>
                      <Box>console.<Box component="span" sx={{ color: '#dcdcaa' }}>error</Box>(error);</Box>
                      <Box>
                        <Box sx={{ color: '#c586c0' }}>return</Box> res.status(500).json({'{'}
                      </Box>
                      <Box sx={{ ml: 2 }}>
                        success: <Box component="span" sx={{ color: '#569cd6' }}>false</Box>,
                      </Box>
                      <Box sx={{ ml: 2 }}>
                        message: <Box component="span" sx={{ color: '#ce9178' }}>'Payment processing failed'</Box>
                      </Box>
                      <Box>{'});'}</Box>
                    </Box>
                    <Box>{'}'}</Box>
                  </Box>
                  <Box sx={{ color: '#dcdcaa' }}>{'}'}</Box>
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
            Powerful serverless capabilities
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
                <BoltIcon sx={{ color: '#004aad', fontSize: 32, mb: 2 }} />
                <Typography variant="h5" sx={{ fontWeight: 500, mb: 2, color: '#111' }}>
                  Zero infrastructure management
                </Typography>
                <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.6 }}>
                  Deploy code without provisioning or managing servers. Your functions automatically scale with demand, from a few requests per day to thousands per second.
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
                <FunctionsIcon sx={{ color: '#004aad', fontSize: 32, mb: 2 }} />
                <Typography variant="h5" sx={{ fontWeight: 500, mb: 2, color: '#111' }}>
                  Multiple language support
                </Typography>
                <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.6 }}>
                  Write functions in JavaScript, TypeScript, Python, Go, or Ruby. Use the language and libraries you're most comfortable with for each specific task.
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
                <IntegrationInstructionsIcon sx={{ color: '#004aad', fontSize: 32, mb: 2 }} />
                <Typography variant="h5" sx={{ fontWeight: 500, mb: 2, color: '#111' }}>
                  Seamless integrations
                </Typography>
                <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.6 }}>
                  Connect to databases, storage, APIs, and third-party services. Built-in integrations with popular services make building complex workflows simple.
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
                <AutoGraphIcon sx={{ color: '#004aad', fontSize: 32, mb: 2 }} />
                <Typography variant="h5" sx={{ fontWeight: 500, mb: 2, color: '#111' }}>
                  Monitoring and logging
                </Typography>
                <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.6 }}>
                  Track performance, errors, and execution metrics with built-in monitoring. Integrated logging lets you troubleshoot and optimize your functions.
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
              Start building serverless today
            </Typography>
            <Typography variant="body1" sx={{ color: '#555', mb: 4, maxWidth: 800, mx: 'auto' }}>
              Deploy your first serverless function in minutes. Focus on your code, not infrastructure, and let Citizen handle the scaling for you.
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
              Deploy Your First Function
            </Button>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
} 