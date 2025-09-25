import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';

const pages = [
    {
        url: "/",
        name: "Home"
    },
    {
        url: 'red-button-and-new-orleans',
        name: "Red button & New Orleans",
    },
    {
        url: 'stage-and-visual-design',
        name: "Stage & Visual Design",
    },
    {
        url: 'costumes-and-dancers',
        name: "Costumes & Dancers",
    },
    {
        url: 'spoken-words',
        name: "Spoken Words",
    },
    {
        url: 'cultural-and-political-symbols',
        name: "Cultural & Political Symbols",
    },
    {
        url: 'social-media-and-aftermath',
        name: "Social Media & Aftermath"
    }
]

export default function Navbar() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const navigate = useNavigate();

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    const handleNav = (path) => {
        navigate(path);
        setDrawerOpen(false);
    };

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" fontWeight="bold" sx={{ flexGrow: 1 }}>
                        Super Bowl
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <IconButton
                        edge="end"
                        color="inherit"
                        aria-label="menu"
                        onClick={handleDrawerToggle}
                        size="large"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon fontSize="large" />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={handleDrawerToggle}
            >
                <List sx={{ width: 250 }}>
                    {pages.map(({url, name}, index) => (
                        <ListItem key={index} disablePadding>
                            <ListItemButton onClick={() => handleNav(url)}>
                                <ListItemText primary={name} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                 
                </List>
            </Drawer>
        </>
    );
}
