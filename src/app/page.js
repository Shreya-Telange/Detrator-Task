'use client'; // This marks the component as a Client Component

import { AppBar, Toolbar, Typography, InputBase, Avatar } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Home() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <div>
      {/* Header */}
      <AppBar position="static" sx={{ bgcolor: '#3A8EBA', color: 'white', padding: '8px 16px' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Brand Name */}
          <Typography variant="h6" noWrap>
            Brand Name
          </Typography>

          {/* Search Bar (Only visible on medium to large screens) */}
          {!isSmallScreen && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#FFFFFF',
                borderRadius: '4px',
                padding: '2px 8px',
                width: isMediumScreen ? '50%' : '40%',
                boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.2)',
              }}
            >
              <SearchIcon style={{ color: '#3A8EBA' }} />
              <InputBase
                placeholder="Search…"
                style={{
                  marginLeft: 8,
                  color: '#333333',
                  width: '100%',
                  fontSize: isMediumScreen ? '14px' : '16px',
                }}
              />
            </div>
          )}

          {/* User Avatar */}
          <Avatar sx={{ bgcolor: '#FF7043', cursor: 'pointer' }}>J</Avatar>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <div
        style={{
          display: 'flex',
          flexDirection: isSmallScreen ? 'column' : 'row',
          padding: '16px',
          gap: '16px',
        }}
      >
        {/* Main Section */}
        <div
          style={{
            flex: 1,
            minHeight: '550px',
            backgroundColor: '#F5F5F5',
            borderRadius: '8px',
            padding: '16px',
            overflowY: 'auto',
            boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Typography variant="h6" sx={{ marginBottom: '8px', fontWeight: 'bold', color: '#3A8EBA' }}>
            Main Content
          </Typography>
          <Typography variant="body1" sx={{ color: '#4A4A4A' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet tortor nec justo volutpat
            scelerisque. Praesent interdum justo non velit efficitur, at fermentum lacus posuere. Fusce dictum
            sollicitudin lorem, id efficitur nisi pharetra non. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet tortor nec justo volutpat
            scelerisque. Praesent interdum justo non velit efficitur, at fermentum lacus posuere. Fusce dictum
            sollicitudin lorem, id efficitur nisi pharetra non. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet tortor nec justo volutpat
            scelerisque. Praesent interdum justo non velit efficitur, at fermentum lacus posuere. Fusce dictum
            sollicitudin lorem, id efficitur nisi pharetra non.
          </Typography>
        </div>

        {/* Sidebar Section (hidden on small screens) */}
        {!isSmallScreen && (
          <div
            style={{
              flex: 1,
              minHeight: '300px',
              backgroundColor: '#F5F5F5',
              borderRadius: '8px',
              padding: '16px',
              overflowY: 'auto',
              boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
            }}
          >
            <Typography variant="h6" sx={{ marginBottom: '8px', fontWeight: 'bold', color: '#3A8EBA' }}>
              Sidebar Content
            </Typography>
            <Typography variant="body1" sx={{ color: '#4A4A4A' }}>
              Phasellus a nulla ut neque gravida bibendum. Etiam varius ligula nec nisi faucibus, id consequat justo
              tempus. Suspendisse potenti. Nam id libero ornare, egestas purus ut, fermentum sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet tortor nec justo volutpat
            scelerisque. Praesent interdum justo non velit efficitur, at fermentum lacus posuere. Fusce dictum
            sollicitudin lorem, id efficitur nisi pharetra non. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet tortor nec justo volutpat
            scelerisque. Praesent interdum justo non velit efficitur, at fermentum lacus posuere. Fusce dictum
            sollicitudin lorem, id efficitur nisi pharetra non. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet tortor nec justo volutpat
            scelerisque. Praesent interdum justo non velit efficitur, at fermentum lacus posuere. Fusce dictum
            sollicitudin lorem, id efficitur nisi pharetra non.
            </Typography>
          </div>
        )}
      </div>
    </div>
  );
}
