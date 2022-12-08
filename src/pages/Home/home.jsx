import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import icon1 from "../images/featured-item-01.png"
import "./home.css"

function Home() {

    return (
        <>
            <Typography id="home_contayner">
                <Typography id="home">
                    <Box sx={{ flexGrow: 1, textAlign: "center", }}>
                        <Grid container spacing={1} columns={{ xs: 4, sm: 8, md: 12 }}>
                            <Grid xs={12} sx={{}}>
                                <h1>We provide the best <strong>strategy</strong><br />to grow up your <strong>business</strong></h1>
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} columns={{ xs: 4, sm: 8, md: 12 }}>
                            <Grid xs={12} sx={{}}>
                                <p>Softy Pinko is a professional Bootstrap 4.0 theme designed by Template Mo
                                    <br /> for your company at absolutely free of charge</p>
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} columns={{ xs: 4, sm: 8, md: 12 }}>
                            <Grid xs={12} sx={{}}>
                                <Button variant="contained" id="discov">Discover More</Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Typography><br />

            </Typography>
            <Typography id="home_icone" >
                <Box sx={{ flexGrow: 1, borderRadius: "20px" }}>
                    <Grid container justifyContent="center" spacing={5} >
                        <Grid item xs={10} sm={5} md={3.2} lg={3} xl={3}  >
                            <Card id="home_con">
                                <Box id="icon_home">
                                    <img src={icon1} alt="" id="icon_hom" />
                                </Box>
                                <CardContent sx={{ textAlign: "center" }}>
                                    <Typography gutterBottom variant="h5" component="div" id="hom_tit">
                                        Modern Strategy
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" d="hom_text">
                                        Customize anything in this template to    <br />your website needs
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={10} sm={5} md={3.2} lg={3} xl={3}>
                            <Card id="home_con">
                                <Box id="icon_home">
                                    <img src={icon1} alt="" id="icon_hom" />
                                </Box>
                                <CardContent sx={{ textAlign: "center" }}>
                                    <Typography gutterBottom variant="h5" component="div" id="hom_tit">
                                        Best Relationship
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" d="hom_text">
                                        Contact us immediately if you have a <br /> question in mind
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={10} sm={5} md={3.2} lg={3} xl={3}>
                            <Card id="home_con">
                                <Box id="icon_home">
                                    <img src={icon1} alt="" id="icon_hom" />
                                </Box>
                                <CardContent sx={{ textAlign: "center" }}>
                                    <Typography gutterBottom variant="h5" component="div" id="hom_tit">
                                        Ultimate Marketing
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" id="hom_text">
                                        You just need to tell your friends about<br />our free templates
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid itim xs={8} sm={5.5   } md={3.2} lg={3} xl={3} id="oooo" sx={{width:{md:"0.1%",xl:"0.1%",lg:"0.1%",sx:"0.1%"},marginLeft:{xl:"-40px"}}}></Grid>


                    </Grid>
                </Box>



            </Typography>
        </>
    )

}

export default Home