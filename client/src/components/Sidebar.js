import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

export default function Sidebar() {

  const smoothScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    const targetY = section.getBoundingClientRect().top + window.pageYOffset;
    const startingY = window.pageYOffset;
    const distance = targetY - startingY;
    const duration = 1000; // Adjust the duration as desired
    let start;
  
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);
      const easeInOutCubic = (t) => t < 0.5 ? 4 * t ** 3 : 1 - ((-2 * t + 2) ** 3) / 2;
      window.scrollTo(0, startingY + distance * easeInOutCubic(progress));
  
      if (elapsed < duration) {
        window.requestAnimationFrame(step);
      }
    };
  
    window.requestAnimationFrame(step);
  };


  const scrollToSection = (sectionId) => {
    smoothScrollToSection(sectionId);
  };

  return (
    <div className="sidebar">
      <div className="vertical-line"></div>
      <List>
        <ListItem className="listItem" onClick={() => scrollToSection('top')}>
          <ListItemText primary="" /><span className="sideItem">Top</span>
        </ListItem>
        <ListItem className="listItem" onClick={() => scrollToSection('section0')}>
          <ListItemText primary="" /><span className="sideItem">Numerología</span>
        </ListItem>
        <ListItem className="listItem" onClick={() => scrollToSection('section1')}>
          <ListItemText primary="" /><span className="sideItem">N°1</span>
        </ListItem>
        <ListItem className="listItem" onClick={() => scrollToSection('section2')}>
          <ListItemText primary="" /><span className="sideItem">N°2</span>
        </ListItem>
        <ListItem className="listItem" onClick={() => scrollToSection('section3')}>
          <ListItemText primary="" /><span className="sideItem">N°3</span>
        </ListItem>
        <ListItem className="listItem" onClick={() => scrollToSection('section4')}>
          <ListItemText primary="" /><span className="sideItem">N°4</span>
        </ListItem>
        <ListItem className="listItem" onClick={() => scrollToSection('section5')}>
          <ListItemText primary="" /><span className="sideItem">N°5</span>
        </ListItem>
        <ListItem className="listItem" onClick={() => scrollToSection('section6')}>
          <ListItemText primary="" /><span className="sideItem">N°6</span>
        </ListItem>
        <ListItem className="listItem" onClick={() => scrollToSection('section7')}>
          <ListItemText primary="" /><span className="sideItem">N°7</span>
        </ListItem>
        <ListItem className="listItem" onClick={() => scrollToSection('section8')}>
          <ListItemText primary="" /><span className="sideItem">N°8</span>
        </ListItem>
        <ListItem className="listItem" onClick={() => scrollToSection('section9')}>
          <ListItemText primary="" /><span className="sideItem">N°9</span>
        </ListItem>
        <ListItem className="listItem" onClick={() => scrollToSection('section00')}>
          <ListItemText primary="" /><span className="sideItem">N°0</span>
        </ListItem>
        {/* Add more ListItems for additional sections */}
      </List>
    </div>
  );
}