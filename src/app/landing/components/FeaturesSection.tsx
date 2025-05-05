"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Paper, Button, useTheme, useMediaQuery,Grid } from '@mui/material';

import { useRouter } from 'next/navigation';
import CloudIcon from '@mui/icons-material/Cloud';
import StorageIcon from '@mui/icons-material/Storage';
import GroupsIcon from '@mui/icons-material/Groups';
import LanguageIcon from '@mui/icons-material/Language';
import HomeIcon from '@mui/icons-material/Home';
import LockIcon from '@mui/icons-material/Lock';
import BoltIcon from '@mui/icons-material/Bolt';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckIcon from '@mui/icons-material/Check';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  points?: string[];
  gridPos: {
    gridColumn?: { 
      xs?: string;
      sm?: string;
      md?: string;
      [key: string]: string | undefined;
    };
    gridRow?: { 
      xs?: string;
      sm?: string;
      md?: string;
      [key: string]: string | undefined;
    };
  };
  onClick: () => void;
  accent?: string;
  isFeatured?: boolean;
}

const FeatureCard = ({ 
  title, 
  description, 
  icon: Icon, 
  points, 
  gridPos, 
  onClick, 
  accent = '#004aad',
  isFeatured = false 
}: FeatureCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [cornerPosition, setCornerPosition] = useState(Math.floor(Math.random() * 4));
  
  useEffect(() => {
    // Randomize corner decoration position for visual variety
    setCornerPosition(Math.floor(Math.random() * 4));
  }, []);

  // Positions for corner decoration
  const cornerPositions = [
    { top: 0, right: 0 }, // Top right
    { top: 0, left: 0 },  // Top left
    { bottom: 0, right: 0 }, // Bottom right
    { bottom: 0, left: 0 }  // Bottom left
  ];

  return (
    <Paper
      elevation={0}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={{
        bgcolor: 'white',
        borderRadius: 4,
        p: 3,
        height: '100%',
        border: '1px solid #e0e0e0',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'all 0.35s cubic-bezier(0.25, 0.8, 0.25, 1)',
        '&:hover': {
          borderColor: accent,
          transform: isHovered ? 'translateY(-6px)' : 'none',
          boxShadow: '0 12px 24px rgba(0, 0, 0, 0.1)',
        },
        ...gridPos
      }}
    >
      {/* Corner decoration */}
      {isFeatured && (
        <Box
          sx={{
            position: 'absolute',
            width: 120,
            height: 120,
            background: `radial-gradient(circle at 0 0, transparent 70%, ${accent}1a 0%)`,
            transform: 'rotate(45deg)',
            ...cornerPositions[cornerPosition],
            zIndex: 0,
            transition: 'all 0.3s ease',
            opacity: isHovered ? 1 : 0.6,
          }}
        />
      )}

      <Box sx={{ position: 'relative', zIndex: 1, height: '100%', display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Box
            sx={{
              width: isFeatured ? 40 : 32,
              height: isFeatured ? 40 : 32,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: isFeatured ? 2 : 1.5,
              mr: 1.5,
              bgcolor: `${accent}14`,
              transition: 'all 0.3s ease',
              transform: isHovered ? 'scale(1.1)' : 'scale(1)',
            }}
          >
            <Icon sx={{ fontSize: isFeatured ? 20 : 16, color: accent }} />
          </Box>
          <Typography variant={isFeatured ? "h5" : "h6"} sx={{ 
            fontWeight: 600, 
            color: accent,
            transition: 'transform 0.3s ease',
            transform: isHovered ? 'translateX(5px)' : 'translateX(0)',
          }}>
            {title}
          </Typography>
        </Box>

        <Typography 
          variant="body2" 
          sx={{ 
            color: '#555', 
            mb: 2,
            flexGrow: points ? 0 : 1,
            fontSize: isFeatured ? '0.95rem' : '0.875rem'
          }}
        >
          {description}
        </Typography>
        
        {points && (
          <Box sx={{ mt: 'auto', mb: 2 }}>
            {points.map((point: string, index: number) => (
              <Box key={index} sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                mb: 1,
                transform: isHovered ? 'translateX(5px)' : 'translateX(0)',
                transition: `transform 0.3s ease ${index * 0.05}s`
              }}>
                <CheckIcon sx={{ color: accent, mr: 1, fontSize: 16 }} />
                <Typography variant="body2" color="text.secondary">{point}</Typography>
              </Box>
            ))}
          </Box>
        )}

        {/* Call to action */}
        <Box 
          sx={{ 
            display: 'flex', 
            alignItems: 'center',
            mt: 'auto',
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? 'translateY(0)' : 'translateY(10px)',
            transition: 'all 0.3s ease',
            color: accent
          }}
        >
          <Typography variant="button" sx={{ fontSize: '0.75rem', mr: 0.5 }}>
            Learn more
          </Typography>
          <ArrowForwardIcon sx={{ fontSize: 14 }} />
        </Box>
      </Box>
    </Paper>
  );
};

const FeaturesSection = () => {
  const [featuresAnimated, setFeaturesAnimated] = useState(false);
  const featuresRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setFeaturesAnimated(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (featuresRef.current) observer.observe(featuresRef.current);
    
    return () => {
      observer.disconnect();
    };
  }, []);

  const getAnimationStyle = (isAnimated: boolean, delay = 0) => ({
    opacity: isAnimated ? 1 : 0,
    transform: isAnimated ? 'translateY(0)' : 'translateY(20px)',
    transition: `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
  });

  // Features data
  const features = [
    {
      title: "Docker Deployments",
      description: "Deploy your applications with stable, containerized infrastructure. No DevOps knowledge required.",
      icon: CloudIcon,
      points: ["One-click deployment", "Vercel/Netlify alternative", "Fully open source"],
      gridPos: {
        gridColumn: { xs: '1', sm: '1 / span 6', md: '1 / span 3' },
        gridRow: { xs: 'auto', sm: '1 / span 2', md: '1 / span 2' },
      },
      path: '/landing/features/docker-deployments',
      isFeatured: true,
      accent: '#1976d2'
    },
    {
      title: "Monitoring and Logging",
      description: "Real-time insights into your application's performance and health with integrated logging.",
      icon: StorageIcon,
      gridPos: {
        gridColumn: { xs: '1', sm: '1 / span 3', md: '4 / span 3' },
        gridRow: { xs: 'auto', md: '1 / span 1' },
      },
      path: '/landing/features/monitoring',
      accent: '#3f51b5'
    },
    {
      title: "Team Collaboration",
      description: "Create teams and share access to your deployments.",
      icon: GroupsIcon,
      gridPos: {
        gridColumn: { xs: '1', sm: '4 / span 3', md: '4 / span 2' },
        gridRow: { xs: 'auto', md: '2 / span 1' },
      },
      path: '/landing/features/team-collaboration',
      accent: '#009688'
    },
    {
      title: "Custom Domains",
      description: "Connect your own domains.",
      icon: LanguageIcon,
      gridPos: {
        gridColumn: { xs: '1', sm: '1 / span 2', md: '6 / span 1' },
        gridRow: { xs: 'auto', md: '2 / span 1' },
      },
      path: '/features/custom-domains',
      accent: '#e91e63'
    },
    {
      title: "Self-Hosting",
      description: "Run on your own infrastructure.",
      icon: HomeIcon,
      gridPos: {
        gridColumn: { xs: '1', sm: '3 / span 2', md: '1 / span 2' },
        gridRow: { xs: 'auto', md: '3 / span 1' },
      },
      path: '/features/self-hosting',
      accent: '#ff5722'
    },
    {
      title: "Authentication",
      description: "Secure access with role-based permissions.",
      icon: LockIcon,
      gridPos: {
        gridColumn: { xs: '1', sm: '5 / span 2', md: '3 / span 2' },
        gridRow: { xs: 'auto', md: '3 / span 1' },
      },
      path: '/landing/auth',
      accent: '#673ab7'
    },
    {
      title: "Lambda Functions",
      description: "Coming soon: Serverless functions for your apps.",
      icon: BoltIcon,
      gridPos: {
        gridColumn: { xs: '1', sm: '1 / span 6', md: '5 / span 2' },
        gridRow: { xs: 'auto', md: '3 / span 1' },
      },
      path: '/features/lambda-functions',
      accent: '#f44336'
    }
  ];

  return (
    <Grid 
      item 
      xs={12} 
      ref={featuresRef}
      sx={{
        ...getAnimationStyle(featuresAnimated),
        position: 'relative',
        mt: 2,
        mb: 2
      }}
    >
      {/* Background decorative elements */}
      <Box 
        sx={{ 
          position: 'absolute', 
          top: { xs: -20, md: -40 }, 
          left: { xs: -200, md: -100 },
          width: { xs: 300, md: 500 }, 
          height: { xs: 300, md: 500 },
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 74, 173, 0.03) 0%, rgba(0, 74, 173, 0) 70%)',
          zIndex: -1
        }} 
      />
      
      <Box 
        sx={{ 
          position: 'absolute', 
          bottom: { xs: -100, md: -200 }, 
          right: { xs: -100, md: -150 },
          width: { xs: 200, md: 400 }, 
          height: { xs: 200, md: 400 },
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 74, 173, 0.02) 0%, rgba(0, 74, 173, 0) 70%)',
          zIndex: -1
        }} 
      />

      {/* Section heading with gradient underline */}
      <Box sx={{ mb: 6, textAlign: 'center', position: 'relative' }}>
        <Typography 
          variant="h4" 
          sx={{ 
            fontWeight: 700, 
            color: '#333',
            mb: 1.5,
            position: 'relative',
            display: 'inline-block'
          }}
        >
          Everything citizen developers need
          <Box sx={{ 
            position: 'absolute',
            bottom: -5,
            left: '25%',
            width: '50%',
            height: 4,
            borderRadius: 2,
            background: 'linear-gradient(90deg, rgba(0,74,173,0) 0%, rgba(0,74,173,0.5) 50%, rgba(0,74,173,0) 100%)',
          }} />
        </Typography>
        
        <Typography variant="body1" sx={{ color: '#666', maxWidth: 600, mx: 'auto' }}>
          All the tools you need to deploy and manage your applications in one place.
        </Typography>
      </Box>
      
      <Box sx={{ 
        display: 'grid',
        gridTemplateColumns: 'repeat(6, 1fr)',
        gridAutoRows: 'minmax(120px, auto)',
        gap: 2,
        mb: 6
      }}>
        {features.map((feature, index) => (
          <FeatureCard
            key={feature.title}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
            points={feature.points}
            gridPos={feature.gridPos}
            isFeatured={feature.isFeatured}
            accent={feature.accent}
            onClick={() => router.push(feature.path)}
          />
        ))}
      </Box>
      
      {/* View all features button */}
      <Box sx={{ textAlign: 'center', mt: 3 }}>
        <Button
          variant="outlined"
          endIcon={<ArrowForwardIcon />}
          onClick={() => router.push('/features')}
          sx={{
            borderRadius: '50px',
            px: 3,
            py: 1,
            borderColor: '#ddd',
            color: '#555',
            '&:hover': {
              borderColor: '#004aad',
              backgroundColor: 'rgba(0, 74, 173, 0.04)',
              color: '#004aad'
            }
          }}
        >
          View all features
        </Button>
      </Box>
    </Grid>
  );
};

export default FeaturesSection; 