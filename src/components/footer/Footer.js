import React from 'react';
import {useNavigate} from 'react-router-dom';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'; 
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';


export default function Footer(){
    return (
        <AppBar position="static" sx={{top: 'auto', bottom: 0}}>
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    {/* <MenuIcon /> */}
                </IconButton>
                <Typography variant="h6">
                    Super Bowl
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    );
}