import React from 'react';
import { Box, Container, Typography, Link, Divider, IconButton, Grid } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import CitizenLogo from '@/components/CitizenLogo';


const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#f8f9fa', pt: 6, pb: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Product Column */}
          <Grid item xs={6} sm={3} md={2.4}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2, color: '#333' }}>
              Product
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              <Link href="#" underline="none" sx={{ color: '#666', '&:hover': { color: '#004aad' } }}>
                Watch Demo
              </Link>
              <Link href="/landing/product/enterprise" underline="none" sx={{ color: '#666', '&:hover': { color: '#004aad' } }}>
                Enterprise
              </Link>
              <Link href="/landing/product/startups" underline="none" sx={{ color: '#666', '&:hover': { color: '#004aad' } }}>
                Startups & SMBs
              </Link>
              <Link href="/landing/product/citizen-developers" underline="none" sx={{ color: '#666', '&:hover': { color: '#004aad' } }}>
                Citizen Developers
              </Link>
              <Link href="/landing/product/open-source" underline="none" sx={{ color: '#666', '&:hover': { color: '#004aad' } }}>
                Open Source
              </Link>
              <Link href="#" underline="none" sx={{ color: '#666', '&:hover': { color: '#004aad' } }}>
                Pricing
              </Link>
              <Link href="#" underline="none" sx={{ color: '#666', '&:hover': { color: '#004aad' } }}>
                Roadmap
              </Link>
              <Link href="#" underline="none" sx={{ color: '#666', '&:hover': { color: '#004aad' } }}>
                What's New
              </Link>
            </Box>
          </Grid>

          {/* Features Column */}
          <Grid item xs={6} sm={3} md={2.4}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2, color: '#333' }}>
              Features
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              <Link href="#" underline="none" sx={{ color: '#666', '&:hover': { color: '#004aad' } }}>
                Docker Deployments
              </Link>
              <Link href="#" underline="none" sx={{ color: '#666', '&:hover': { color: '#004aad' } }}>
                Self-Hosting
              </Link>
              <Link href="#" underline="none" sx={{ color: '#666', '&:hover': { color: '#004aad' } }}>
                AI Code Deployment
              </Link>
              <Link href="#" underline="none" sx={{ color: '#666', '&:hover': { color: '#004aad' } }}>
                Team Collaboration
              </Link>
              <Link href="#" underline="none" sx={{ color: '#666', '&:hover': { color: '#004aad' } }}>
                Custom Domains
              </Link>
              <Link href="#" underline="none" sx={{ color: '#666', '&:hover': { color: '#004aad' } }}>
                PostgreSQL Integration
              </Link>
              <Link href="#" underline="none" sx={{ color: '#666', '&:hover': { color: '#004aad' } }}>
                Security
              </Link>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Link href="#" underline="none" sx={{ color: '#666', '&:hover': { color: '#004aad' } }}>
                  CI/CD Integration
                </Link>
                <Box 
                  component="span" 
                  sx={{ 
                    ml: 1, 
                    bgcolor: '#004aad', 
                    color: 'white', 
                    fontSize: '10px', 
                    px: 0.8, 
                    py: 0.4, 
                    borderRadius: 1,
                    fontWeight: 600
                  }}
                >
                  Coming soon
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* Use Cases Column */}
          <Grid item xs={6} sm={3} md={2.4}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2, color: '#333' }}>
              Use Cases
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              <Link href="/landing/product/citizen-developers" underline="none" sx={{ color: '#666', '&:hover': { color: '#004aad' } }}>
                Business Users
              </Link>
              <Link href="/landing/product/startups" underline="none" sx={{ color: '#666', '&:hover': { color: '#004aad' } }}>
                Startups & SMBs
              </Link>
              <Link href="/landing/product/enterprise" underline="none" sx={{ color: '#666', '&:hover': { color: '#004aad' } }}>
                Enterprise IT
              </Link>
              <Link href="/landing/product/open-source" underline="none" sx={{ color: '#666', '&:hover': { color: '#004aad' } }}>
                Developers
              </Link>
              <Link href="#" underline="none" sx={{ color: '#666', '&:hover': { color: '#004aad' } }}>
                AI Application Deployment
              </Link>
              <Link href="#" underline="none" sx={{ color: '#666', '&:hover': { color: '#004aad' } }}>
                No-Code Builders
              </Link>
            </Box>

            <Typography variant="subtitle1" sx={{ fontWeight: 600, mt: 4, mb: 2, color: '#333' }}>
              Citizen Plans
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              <Link href="/landing/product/open-source" underline="none" sx={{ color: '#666', '&:hover': { color: '#004aad' } }}>
                Free & Open Source
              </Link>
              <Link href="#" underline="none" sx={{ color: '#666', '&:hover': { color: '#004aad' } }}>
                Pro
              </Link>
              <Link href="/landing/product/enterprise" underline="none" sx={{ color: '#666', '&:hover': { color: '#004aad' } }}>
                Enterprise
              </Link>
            </Box>
          </Grid>

          {/* Company Column */}
          <Grid item xs={6} sm={3} md={2.4}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2, color: '#333' }}>
              Company
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Link href="#" underline="none" sx={{ color: '#666', '&:hover': { color: '#004aad' } }}>
                  Jobs
                </Link>
                <Box 
                  component="span" 
                  sx={{ 
                    ml: 1, 
                    bgcolor: '#004aad', 
                    color: 'white', 
                    fontSize: '10px', 
                    px: 0.8, 
                    py: 0.4, 
                    borderRadius: 1,
                    fontWeight: 600
                  }}
                >
                  We're hiring!
                </Box>
              </Box>
              <Link href="#" underline="none" sx={{ color: '#666', '&:hover': { color: '#004aad' } }}>
                About Us
              </Link>
              <Link href="#" underline="none" sx={{ color: '#666', '&:hover': { color: '#004aad' } }}>
                Privacy Policy
              </Link>
              <Link href="#" underline="none" sx={{ color: '#666', '&:hover': { color: '#004aad' } }}>
                Terms of Service
              </Link>
              <Link href="/landing/product/open-source" underline="none" sx={{ color: '#666', '&:hover': { color: '#004aad' } }}>
                License
              </Link>
              <Link href="#" underline="none" sx={{ color: '#666', '&:hover': { color: '#004aad' } }}>
                Brand Guidelines
              </Link>
            </Box>

            <Typography variant="subtitle1" sx={{ fontWeight: 600, mt: 4, mb: 2, color: '#333' }}>
              Support
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              <Link href="#" underline="none" sx={{ color: '#666', '&:hover': { color: '#004aad' } }}>
                Documentation
              </Link>
              <Link href="#" underline="none" sx={{ color: '#666', '&:hover': { color: '#004aad' } }}>
                Help Center
              </Link>
              <Link href="#" underline="none" sx={{ color: '#666', '&:hover': { color: '#004aad' } }}>
                Community Support
              </Link>
              <Link href="#" underline="none" sx={{ color: '#666', '&:hover': { color: '#004aad' } }}>
                Deployment Guides
              </Link>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#4caf50' }} />
                <Link href="#" underline="none" sx={{ color: '#666', '&:hover': { color: '#004aad' } }}>
                  Status
                </Link>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <GitHubIcon sx={{ fontSize: 18, color: '#666' }} />
                <Link href="https://github.com/citizen-ui/citizen" underline="none" sx={{ color: '#666', '&:hover': { color: '#004aad' } }}>
                  GitHub
                </Link>
                <Box 
                  component="span" 
                  sx={{ 
                    ml: 1, 
                    color: '#f9a825', 
                    fontSize: '12px',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  13.4k ★
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* Resources Column */}
          <Grid item xs={6} sm={3} md={2.4}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2, color: '#333' }}>
              Resources
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              <Link href="#" underline="none" sx={{ color: '#666', '&:hover': { color: '#004aad' } }}>
                Blog
              </Link>
              <Link href="#" underline="none" sx={{ color: '#666', '&:hover': { color: '#004aad' } }}>
                Case Studies
              </Link>
              <Link href="#" underline="none" sx={{ color: '#666', '&:hover': { color: '#004aad' } }}>
                Tutorials
              </Link>
              <Link href="#" underline="none" sx={{ color: '#666', '&:hover': { color: '#004aad' } }}>
                Deployment Best Practices
              </Link>
              <Link href="#" underline="none" sx={{ color: '#666', '&:hover': { color: '#004aad' } }}>
                Docker Deployment Guide
              </Link>
              <Link href="#" underline="none" sx={{ color: '#666', '&:hover': { color: '#004aad' } }}>
                Self-Hosting Guide
              </Link>
              <Link href="#" underline="none" sx={{ color: '#666', '&:hover': { color: '#004aad' } }}>
                Community Stories
              </Link>
              <Link href="#" underline="none" sx={{ color: '#666', '&:hover': { color: '#004aad' } }}>
                Partners
              </Link>
              <Link href="/landing" underline="none" sx={{ color: '#666', '&:hover': { color: '#004aad' } }}>
                Why Choose Citizen
              </Link>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ mt: 6, mb: 4 }} />

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <CitizenLogo size="small" variant="dark" />
            <Typography variant="body2" sx={{ color: '#666' }}>
              © {new Date().getFullYear()} Citizen. All rights reserved.
            </Typography>
          </Box>
          
          <Box sx={{ display: 'flex', gap: 1 }}>
            <IconButton size="small" aria-label="github" component="a" href="https://github.com/citizen-ui/citizen" target="_blank" sx={{ color: '#666' }}>
              <GitHubIcon />
            </IconButton>
            <IconButton size="small" aria-label="twitter" component="a" href="https://twitter.com/citizenplatform" target="_blank" sx={{ color: '#666' }}>
              <TwitterIcon />
            </IconButton>
            <IconButton size="small" aria-label="youtube" component="a" href="https://youtube.com/citizen" target="_blank" sx={{ color: '#666' }}>
              <YouTubeIcon />
            </IconButton>
            <IconButton size="small" aria-label="linkedin" component="a" href="https://linkedin.com/company/citizen-platform" target="_blank" sx={{ color: '#666' }}>
              <LinkedInIcon />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 