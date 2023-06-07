import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

export default function Sidebar() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="sidebar">
      <div className="vertical-line"></div>
      <List>
        <ListItem className="listItem" onClick={() => scrollToSection('top')}>
          <ListItemText primary="" />
        </ListItem>
        <ListItem className="listItem" onClick={() => scrollToSection('section0')}>
          <ListItemText primary="" />
        </ListItem>
        <ListItem className="listItem" onClick={() => scrollToSection('section1')}>
          <ListItemText primary="" />
        </ListItem>
        <ListItem className="listItem" onClick={() => scrollToSection('section2')}>
          <ListItemText primary="" />
        </ListItem>
        <ListItem className="listItem" onClick={() => scrollToSection('section3')}>
          <ListItemText primary="" />
        </ListItem>
        <ListItem className="listItem" onClick={() => scrollToSection('section4')}>
          <ListItemText primary="" />
        </ListItem>
        <ListItem className="listItem" onClick={() => scrollToSection('section5')}>
          <ListItemText primary="" />
        </ListItem>
        <ListItem className="listItem" onClick={() => scrollToSection('section6')}>
          <ListItemText primary="" />
        </ListItem>
        <ListItem className="listItem" onClick={() => scrollToSection('section7')}>
          <ListItemText primary="" />
        </ListItem>
        <ListItem className="listItem" onClick={() => scrollToSection('section8')}>
          <ListItemText primary="" />
        </ListItem>
        <ListItem className="listItem" onClick={() => scrollToSection('section9')}>
          <ListItemText primary="" />
        </ListItem>
        <ListItem className="listItem" onClick={() => scrollToSection('section00')}>
          <ListItemText primary="" />
        </ListItem>
        {/* Add more ListItems for additional sections */}
      </List>
    </div>
  );
}