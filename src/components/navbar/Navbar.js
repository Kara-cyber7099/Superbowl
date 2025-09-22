import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Container from '@mui/material/Container';
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
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        Super Bowl
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={handleDrawerToggle}
            >
                <List sx={{ width: 250 }}>
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => handleNav('/')}>
                            <ListItemText primary="Home" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => handleNav('/about')}>
                            <ListItemText primary="About" />
                        </ListItemButton>
                    </ListItem>
                    {/* Add more menu items as needed */}
                </List>
            </Drawer>
        </>
    );
}
