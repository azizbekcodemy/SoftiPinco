import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import icon from "../pages/images/logo.png"
import Grid from '@mui/material/Unstable_Grid2'
import Link from '@mui/material/Link';


import "./navbar.css"


const pages = [
    <Link href="#home" underline="none" id="name" style={{color:"red"}}>
        {'Home'}
    </Link>,
    <Link href="#about" underline="none" id="name"   sx={{fontSize:{md:"10px",xl:"12px"},marginLeft:{md:"-5px",lg:"8px"}}}>
        {"About"}
    </Link>,
    <Link href="#work" underline="none" id="name" sx={{fontSize:{md:"10px",xl:"12px"},marginLeft:{md:"-5px",lg:"8px"}}}>
        {'Work Process'}
    </Link>,
    <Link href="#test" underline="none" id="name" sx={{fontSize:{md:"10px",xl:"12px"},marginLeft:{md:"-5px",lg:"8px"}}}>
        {"Testimonials"}
    </Link>,
    <Link href="#prising" underline="none" id="name" sx={{fontSize:{md:"10px",xl:"12px"},marginLeft:{md:"-5px",lg:"8px"}}}>
        {"Pricing Tables"}
    </Link>,
    <Link href="#blog" underline="none" id="name" sx={{fontSize:{md:"10px" ,xl:"12px"},marginLeft:{md:"-5px",lg:"8px"}}}>
        {"Blog Entries"}
    </Link>,
    <Link href="#contact.jsx" underline="none" id="name" sx={{fontSize:{md:"10px",xl:"12px"},marginLeft:{md:"-5px",lg:"8px"}}}>
        {"Contact Us"}
    </Link>
];



const ResponsiveAppBar = () => {


    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };



    return (

        <Box sx={{ flexGrow: 1, textAlign: "center" }}>
            <Grid container justifyContent="center" spacing={1} >
                <Grid item xs={9.8} sm={9.9} md={9.5} lg={8.9} xl={8.9} >
                    <AppBar position="static" id="navbar" sx={{
                        width:{md:"79%",sm:"82%",xs:"81%",lg:"74%",xl:"74%"}
                    }} >
                        <Container maxWidth="x1" id="contayner">
                            <Toolbar disableGutters>
                                <img src={icon} id="imgg"></img>

                                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, width: "50px" }}>
                                    <IconButton
                                        id="menuicon"


                                        onClick={handleOpenNavMenu}

                                    >
                                        <MenuIcon />
                                    </IconButton>
                                    <Menu
                                        id="menu-appbar"
                                        anchorEl={anchorElNav}
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'left',
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        open={Boolean(anchorElNav)}
                                        onClose={handleCloseNavMenu}
                                        sx={{
                                            display: { xs: 'block', md: 'none', color: '#3B566E ' },
                                        }}
                                    >
                                        {pages.map((page) => (
                                            <MenuItem key={page} >
                                                <Typography textAlign="center" style={{ color: "#3B566E" }} id="text">
                                                    {page}
                                                </Typography>
                                            </MenuItem>
                                        ))}
                                    </Menu>
                                </Box>

                                <Box sx={{ flexGrow: 0, width:"80%",display: { xs: 'none', md: 'flex',lg:"flex" }}}>
                                    <Grid container  sx={{marginLeft: {lg:"-7%", md:"-40%"} }} >
                                       
                                            {pages.map((page) => (
                                                <Button id="contayner"
                                                    key={page}
                                                    sx={{ my: 2.5, color: '#3B566E', display: 'block',fontSize:{md:"3px"}  }}
                                                >
                                                    {page}

                                                </Button>
                                            ))}
                                        
                                    </Grid>
                                </Box>

                            </Toolbar>
                        </Container>
                    </AppBar>
                </Grid>
            </Grid>
        </Box>


    );
};
export default ResponsiveAppBar;





