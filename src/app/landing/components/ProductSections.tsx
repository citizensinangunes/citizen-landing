"use client";

import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, Paper,Grid } from '@mui/material';

import Link from 'next/link';
import BusinessIcon from '@mui/icons-material/Business';
import CodeIcon from '@mui/icons-material/Code';
import PeopleIcon from '@mui/icons-material/People';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';

interface ProductSectionProps {
  title: string;
  subtitle: string;
  description: string;
  bulletPoints: string[];
  buttonText: string;
  buttonLink: string;
  imagePosition: 'left' | 'right';
  imageMockup: React.ReactElement;
  icon: React.ReactNode;
  accentColor: string;
}

const ProductSection = ({
  title,
  subtitle,
  description,
  bulletPoints,
  buttonText,
  buttonLink,
  imagePosition,
  imageMockup,
  icon,
  accentColor
}: ProductSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = React.useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
        rootMargin: '-50px 0px'
      }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <Box sx={{ py: 8 }} ref={sectionRef}>
      <Grid 
        container 
        spacing={6} 
        alignItems="center" 
        direction={imagePosition === 'left' ? { xs: 'column-reverse', md: 'row' } : { xs: 'column-reverse', md: 'row-reverse' }}
      >
        <Grid item xs={12} md={6}>
          <Box 
            sx={{ 
              p: { xs: 1, md: 3 },
              transform: isVisible 
                ? 'translateX(0)' 
                : imagePosition === 'left' 
                  ? 'translateX(-50px)' 
                  : 'translateX(50px)',
              opacity: isVisible ? 1 : 0,
              transition: 'transform 0.9s ease-out, opacity 0.9s ease-out',
            }}
          >
            {imageMockup}
          </Box>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Box 
            sx={{ 
              px: { md: 4 },
              transform: isVisible 
                ? 'translateX(0)' 
                : imagePosition === 'left' 
                  ? 'translateX(50px)' 
                  : 'translateX(-50px)',
              opacity: isVisible ? 1 : 0,
              transition: 'transform 0.9s ease-out, opacity 0.9s ease-out',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Box sx={{ 
                color: accentColor, 
                mr: 1.5,
                fontSize: 40
              }}>
                {icon}
              </Box>
              <Box>
                <Typography 
                  variant="overline" 
                  sx={{ 
                    color: accentColor, 
                    fontWeight: 500,
                    letterSpacing: 1,
                    fontSize: '0.875rem'
                  }}
                >
                  {subtitle}
                </Typography>
                <Typography 
                  variant="h3" 
                  sx={{ 
                    fontWeight: 600, 
                    fontSize: { xs: '1.75rem', md: '2.25rem' },
                    color: '#111',
                    lineHeight: 1.2
                  }}
                >
                  {title}
                </Typography>
              </Box>
            </Box>
            
            <Typography 
              variant="body1" 
              sx={{ 
                color: '#555', 
                lineHeight: 1.7, 
                fontSize: '1.1rem', 
                mb: 3 
              }}
            >
              {description}
            </Typography>
            
            <Box sx={{ mb: 4 }}>
              {bulletPoints.map((point, index) => (
                <Box 
                  key={index}
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'flex-start',
                    mb: 1.5
                  }}
                >
                  <Box 
                    sx={{ 
                      minWidth: 24, 
                      height: 24,
                      mr: 2,
                      borderRadius: '50%',
                      bgcolor: `${accentColor}14`, 
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: accentColor }} />
                  </Box>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: '#555',
                      fontSize: '1rem',
                      lineHeight: 1.5
                    }}
                  >
                    {point}
                  </Typography>
                </Box>
              ))}
            </Box>
            
            <Link href={buttonLink} passHref>
              <Button
                variant="outlined"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  color: accentColor,
                  borderColor: accentColor,
                  px: 3,
                  py: 1,
                  borderRadius: 2,
                  fontWeight: 500,
                  textTransform: 'none',
                  '&:hover': {
                    borderColor: accentColor,
                    bgcolor: `${accentColor}10`
                  }
                }}
              >
                {buttonText}
              </Button>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

const EnterpriseMockup = () => (
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
          <Typography sx={{ fontSize: '0.9rem', fontWeight: 500 }}>Enterprise Deployment Console</Typography>
          <Box sx={{ 
            px: 1.5, 
            py: 0.5, 
            bgcolor: '#e6f2eb', 
            borderRadius: 1,
            color: '#2a9d58',
            fontSize: '0.75rem',
            fontWeight: 500
          }}>
            All Systems Online
          </Box>
        </Box>
        
        <Grid container spacing={2} sx={{ mt: 1, flex: 1 }}>
          {/* Digital Transformation UI elements */}
          <Grid item xs={12}>
            <Box sx={{ 
              p: 2,
              border: '1px solid #eee',
              borderRadius: 1,
              mb: 2,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Box sx={{ 
                  width: 32, 
                  height: 32, 
                  bgcolor: '#004aad15', 
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1rem',
                  color: '#004aad'
                }}>D</Box>
                <Box>
                  <Typography sx={{ fontSize: '0.9rem', fontWeight: 500 }}>Department Apps</Typography>
                  <Typography sx={{ fontSize: '0.75rem', color: '#666' }}>8 Applications Active</Typography>
                </Box>
              </Box>
              <Box sx={{ color: '#004aad', fontSize: '1.5rem' }}>🐳</Box>
            </Box>
          </Grid>
          
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
                <Typography sx={{ fontSize: '0.85rem', fontWeight: 500 }}>Resource Usage</Typography>
              </Box>
              <Box sx={{ 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1
              }}>
                <Box sx={{ 
                  width: 70,
                  height: 70,
                  borderRadius: '50%',
                  border: '4px solid #004aad40',
                  borderLeftColor: '#004aad',
                  position: 'relative'
                }}>
                  <Typography sx={{ 
                    position: 'absolute', 
                    top: '50%', 
                    left: '50%', 
                    transform: 'translate(-50%, -50%)',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    color: '#004aad'
                  }}>42%</Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          
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
                <Typography sx={{ fontSize: '0.85rem', fontWeight: 500 }}>Teams</Typography>
              </Box>
              <Box sx={{ 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 1,
                flex: 1
              }}>
                <Box sx={{ 
                  width: 28, 
                  height: 28, 
                  borderRadius: '50%', 
                  bgcolor: '#6e66de', 
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '0.7rem',
                  fontWeight: 500
                }}>IT</Box>
                <Box sx={{ 
                  width: 28, 
                  height: 28, 
                  borderRadius: '50%', 
                  bgcolor: '#e67e22', 
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '0.7rem',
                  fontWeight: 500
                }}>M</Box>
                <Box sx={{ 
                  width: 28, 
                  height: 28, 
                  borderRadius: '50%', 
                  bgcolor: '#27ae60', 
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '0.7rem',
                  fontWeight: 500
                }}>S</Box>
                <Box sx={{ 
                  width: 28, 
                  height: 28, 
                  borderRadius: '50%', 
                  bgcolor: '#f5f5f5', 
                  border: '1px dashed #ccc',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#666',
                  fontSize: '0.7rem',
                  fontWeight: 500
                }}>+</Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  </Box>
);

const DeveloperMockup = () => (
  <Box sx={{ 
    borderRadius: 4, 
    overflow: 'hidden', 
    boxShadow: '0 12px 30px rgba(0,0,0,0.1)',
    position: 'relative',
    height: { xs: '280px', md: '340px' }
  }}>
    <Box 
      sx={{ 
        bgcolor: '#1e1f22',
        width: '100%', 
        height: '100%',
        p: 2
      }}
    >
      <Box sx={{ 
        width: '100%', 
        height: '100%',
        borderRadius: 2,
        border: '1px solid #333',
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'monospace',
        fontSize: '0.875rem',
        color: '#eee'
      }}>
        <Box sx={{ pb: 2, borderBottom: '1px solid #333', mb: 2 }}>
          <Typography sx={{ color: '#eee', fontFamily: 'monospace' }}>$ docker-compose up -d</Typography>
        </Box>
        
        <Box component="pre" sx={{ mt: 0, overflow: 'auto', flex: 1 }}>
          <Box component="code" sx={{ 
            display: 'block', 
            whiteSpace: 'pre-wrap', 
            wordWrap: 'break-word',
            color: '#eee',
            lineHeight: 1.5
          }}>
{`Creating network "citizen_default" with driver "bridge"
Creating volume "citizen_postgres_data" with local driver
Creating postgres ... done
Creating redis    ... done
Creating api-service   ... done
Creating web-frontend  ... done

$ citizen deploy --app my-ai-app

✓ Building my-ai-app...
✓ Creating Docker container
✓ Configuring microservices
✓ Starting application

--------------------
✨ Deployment complete!
📝 Logs: https://logs.citizen.dev/my-ai-app
🌐 URL: https://my-ai-app.citizen.dev
--------------------

$ curl https://my-ai-app.citizen.dev/status
{
  "status": "healthy",
  "version": "1.0.0",
  "uptime": "2m 24s"
}`}
          </Box>
        </Box>
      </Box>
    </Box>
  </Box>
);

const StartupMockup = () => (
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
          <Typography sx={{ fontSize: '0.9rem', fontWeight: 500 }}>Recent Deployments</Typography>
          <Button
            variant="contained"
            size="small"
            sx={{
              bgcolor: '#004aad',
              color: 'white',
              textTransform: 'none',
              fontSize: '0.75rem',
              borderRadius: 1
            }}
          >
            New Deployment
          </Button>
        </Box>
        
        <Box sx={{ flex: 1, py: 2 }}>
          {/* Deployment items */}
          <Box sx={{ 
            p: 2, 
            border: '1px solid #eee', 
            borderRadius: 1,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 2,
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
            alignItems: 'center',
            mb: 2
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
);

const CitizenDeveloperMockup = () => (
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
          <Typography sx={{ fontSize: '0.9rem', fontWeight: 500 }}>Application Builder</Typography>
          <Box sx={{ 
            px: 1.5, 
            py: 0.5, 
            bgcolor: '#e6f2eb', 
            borderRadius: 1,
            color: '#2a9d58',
            fontSize: '0.75rem',
            fontWeight: 500
          }}>
            No-Code Interface
          </Box>
        </Box>
        
        <Box sx={{ flex: 1, py: 2 }}>
          <Box sx={{ mb: 2 }}>
            <Typography sx={{ fontSize: '0.85rem', fontWeight: 500, mb: 1 }}>Project: Marketing Campaign Dashboard</Typography>
            <Box sx={{ 
              p: 1.5, 
              border: '1px solid #eee', 
              borderRadius: 1,
              display: 'flex',
              mb: 3,
              bgcolor: '#f8f9ff'
            }}>
              <Typography sx={{ fontSize: '0.75rem', color: '#666', fontFamily: 'monospace' }}>
                <Box component="span" sx={{ color: '#004aad' }}>// This code was generated by AI</Box><br/>
                <Box component="span" sx={{ color: '#b53838' }}>import</Box> React <Box component="span" sx={{ color: '#b53838' }}>from</Box> 'react';<br/>
                <Box component="span" sx={{ color: '#b53838' }}>import</Box> &#123; Chart, LineElement &#125; <Box component="span" sx={{ color: '#b53838' }}>from</Box> 'chart.js';<br/>
                <Box component="span" sx={{ color: '#b53838' }}>function</Box> <Box component="span" sx={{ color: '#227a4f' }}>CampaignDashboard</Box>() &#123;<br/>
                &nbsp;&nbsp;<Box component="span" sx={{ color: '#b53838' }}>return</Box> (<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;Campaign metrics...&lt;/div&gt;<br/>
                &nbsp;&nbsp;);<br/>
                &#125;
              </Typography>
            </Box>
          </Box>
          
          <Box sx={{ 
            border: '1px solid #eee',
            borderRadius: 1,
            p: 2,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button
                size="small"
                variant="contained"
                sx={{
                  bgcolor: '#004aad',
                  textTransform: 'none',
                  fontSize: '0.75rem'
                }}
              >
                Deploy
              </Button>
              <Button
                size="small"
                variant="outlined"
                sx={{
                  color: '#666',
                  borderColor: '#ddd',
                  textTransform: 'none',
                  fontSize: '0.75rem'
                }}
              >
                Edit
              </Button>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box sx={{ 
                width: 24, 
                height: 24, 
                borderRadius: '50%', 
                bgcolor: '#f3f4ff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.7rem',
                color: '#6e66de'
              }}>S</Box>
              <Typography sx={{ fontSize: '0.75rem', color: '#666' }}>Sarah (Marketing)</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  </Box>
);

const ProductSections = () => {
  const [headerVisible, setHeaderVisible] = useState(false);
  const headerRef = React.useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    setHeaderVisible(true);
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1
      }
    );
    
    if (headerRef.current) {
      observer.observe(headerRef.current);
    }
    
    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, []);
  
  return (
    <Box>
      <Box 
        ref={headerRef}
        sx={{ 
          textAlign: 'center', 
          mb: 8,
          transform: headerVisible ? 'translateY(0)' : 'translateY(20px)',
          opacity: headerVisible ? 1 : 0,
          transition: 'transform 0.8s ease-out, opacity 0.8s ease-out',
        }}
      >
        <Typography 
          variant="h2" 
          sx={{ 
            fontWeight: 600, 
            mb: 2,
            fontSize: { xs: '2rem', md: '2.5rem' },
            color: '#111'
          }}
        >
          Built for every use case
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ 
            color: '#555', 
            fontSize: '1.25rem',
            maxWidth: 800,
            mx: 'auto'
          }}
        >
          Citizen provides powerful deployment solutions for startups, enterprises, and developers
        </Typography>
      </Box>
    
      <ProductSection
        title="Enterprise Deployment"
        subtitle="FOR ENTERPRISES"
        description="Empower your organization with a secure, compliant deployment platform that bridges the gap between IT and business users."
        bulletPoints={[
          "Enable non-IT employees to deploy applications while maintaining IT governance",
          "Deploy AI-generated code and microservices in isolated containers",
          "Maintain full control with security policies, access controls and audit logs"
        ]}
        buttonText="Learn more about Enterprise"
        buttonLink="/landing/product/enterprise"
        imagePosition="right"
        imageMockup={<EnterpriseMockup />}
        icon={<BusinessIcon sx={{ fontSize: 'inherit' }} />}
        accentColor="#004aad"
      />
      
      <ProductSection
        title="Citizen Developers"
        subtitle="FOR BUSINESS USERS"
        description="Empower your non-technical teams to deploy and manage applications without IT bottlenecks."
        bulletPoints={[
          "Deploy AI-generated code with a simple, intuitive interface",
          "Give marketing, sales, and operations their own deployment capabilities",
          "Create and manage department-specific applications independently"
        ]}
        buttonText="Explore Citizen Developer Tools"
        buttonLink="/landing/product/citizen-developers"
        imagePosition="left"
        imageMockup={<CitizenDeveloperMockup />}
        icon={<AutoFixHighIcon sx={{ fontSize: 'inherit' }} />}
        accentColor="#9c27b0"
      />
      
      <ProductSection
        title="Developer Experience"
        subtitle="FOR DEVELOPERS"
        description="Deploy your applications with a developer-friendly platform built on open source technologies."
        bulletPoints={[
          "Self-host on your own infrastructure with Docker containers",
          "Deploy AI-generated code with minimal configuration",
          "Customize and extend the platform to fit your workflow"
        ]}
        buttonText="Explore Developer Tools"
        buttonLink="/landing/product/open-source"
        imagePosition="right"
        imageMockup={<DeveloperMockup />}
        icon={<CodeIcon sx={{ fontSize: 'inherit' }} />}
        accentColor="#6e66de"
      />
      
      <ProductSection
        title="Startup & SMB Fast Track"
        subtitle="FOR STARTUPS & SMALL BUSINESSES"
        description="Focus on building your product, not managing infrastructure. Get to market faster with hassle-free deployments for startups and small-to-medium businesses."
        bulletPoints={[
          "Zero DevOps overhead with automated CI/CD pipelines",
          "Scale resources as you grow with transparent pricing",
          "Connect custom domains with automatic SSL certificates"
        ]}
        buttonText="View Solutions for Startups & SMBs"
        buttonLink="/landing/product/startups"
        imagePosition="left"
        imageMockup={<StartupMockup />}
        icon={<PeopleIcon sx={{ fontSize: 'inherit' }} />}
        accentColor="#e67e22"
      />
    </Box>
  );
};

export default ProductSections; 