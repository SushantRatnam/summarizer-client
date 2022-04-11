import { useState } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function TextTypeTabs({ selectedTab, handleSelectedChange }) {
  const style = {
    active: {
      color: '#63FFDA',
    },
    default: {
      color: '#8892b0',
    },
  };

  const getStyle = (isActive) => (isActive ? style.active : style.default);
  return (
    <Box
      sx={{
        width: '100%',
        bgcolor: '#0a192e',
        margin: '20px 0',
        borderColor: 'divider',
      }}
    >
      <Tabs
        TabIndicatorProps={{ style: { background: '#63FFDA' } }}
        value={selectedTab}
        onChange={handleSelectedChange}
        centered
      >
        <Tab style={getStyle(selectedTab === 0)} label="Full Text" />
        <Tab style={getStyle(selectedTab === 1)} label="Summarized Text" />
        <Tab style={getStyle(selectedTab === 2)} label="Keywords" />
      </Tabs>
    </Box>
  );
}
