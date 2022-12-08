import "./test.css"
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import icon4 from "../images/testimonial-icon.png"


function Test() {
    return (
        <>
            <Typography id="test_home">
                <Typography id="test">
                    <Typography id="test_title">
                        <Box sx={{ flexGrow: 1, textAlign: "center", }}>
                            <Grid container justifyContent="center" spacing={1} columns={{ xs: 4, sm: 8, md: 12 }}>
                                <Grid xs={12} >
                                    <h1 className="test_h1" >What do they say?</h1>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box sx={{ flexGrow: 1, textAlign: "center", }}>
                            <Grid container spacing={1} columns={{ xs: 4, sm: 8, md: 12 }}>
                                <Grid xs={12} sx={{ color: "#777" }}>
                                    <p className="test_p">Donec tempus, sem non rutrum imperdiet, lectus orci fringilla  nulla,<br /> at accumsan elit eros a turpis. Ut sagittis lectus libero.</p>

                                </Grid>
                            </Grid>
                        </Box>
                    </Typography><br />
                    <Typography id="test_icon">
                        <Box sx={{ flexGrow: 1 }} >
                            <Grid container justifyContent="center" spacing={10} sx={{gap:"20px"}} >
                                <Grid item  xs={8} sm={4.2} md={2.7} lg={2.7 } xl={2.7}   id="test_conn" >
                                    <Card   id="test_con" >
                                        <CardMedia
                                            id="test_hom"
                                            sx={{ fonSize: "18px", color: "#fff" }}
                                            component="img"
                                            image={icon4}
                                        />
                                        <CardContent >
                                            <Typography variant="body2" color="text.secondary" sx={{ marginTop: "10px" ,fontSize:"15px",letterSpacing:"0.6px",lineHeight:"26px"}}>
                                                Proin a neque nisi. Nam ipsum nisi, venenatis ut nulla quis, egestas scelerisque orci. Maecenas a finib.
                                            </Typography>
                                        </CardContent>
                                        <Typography class="info">
                                            <h3 class="name">David Martin</h3>
                                            <span>Website Manager</span>
                                        </Typography>
                                    </Card>
                                </Grid>
                                <Grid item  xs={8} sm={4.2} md={2.7} lg={2.7} xl={2.7}   id="test_conn">
                                    <Card   id="test_con" >
                                        <CardMedia
                                            id="test_hom"
                                            sx={{ fonSize: "18px", color: "#fff" }}
                                            component="img"
                                            image={icon4}
                                        />
                                        <CardContent>
                                            <Typography variant="body2" color="text.secondary" sx={{ marginTop: "7px",fontSize:"15px",letterSpacing:"0.6px",lineHeight:"26px" }}>
                                                Integer molestie aliquam gravida. Nullam imperdiet nulla vitae, placerat nibh. Cras maximus venenatis molestie.
                                            </Typography>

                                        </CardContent>
                                        <Typography class="info">
                                            <h3 class="name">David Martin</h3>
                                            <span>Website Manager</span>
                                        </Typography>
                                    </Card>
                                </Grid>
                                <Grid item  xs={8} sm={4.2} md={2.7} lg={2.7} xl={2.7}   id="test_conn" >
                                    <Card  id="test_con">
                                        <CardMedia
                                            id="test_hom"
                                            sx={{ fonSize: "18px", color: "#fff" }}
                                            component="img"
                                            image={icon4}

                                        />
                                        <CardContent>
                                            <Typography variant="body2" color="text.secondary" sx={{ marginTop: "7px",fontSize:"15px",letterSpacing:"0.6px",lineHeight:"26px" }}>
                                                Quisque diam odio, maximus auctor non lorem. Cras  ultrices molestie. Ut vehicula et diam at auctor non lorem.
                                            </Typography>
                                        </CardContent>
                                        <Typography class="info">
                                            <h3 class="name">David Martin</h3>
                                            <span>Website Manager</span>
                                        </Typography>
                                    </Card>
                                </Grid>
                                <Grid itim xs={8} sm={5.5} md={2.7} lg={2.7} xl={2.7} id="ooo" sx={{width:{md:"0.1%",xl:"0.1%",lg:"0.1%",sx:"0.1%"},marginLeft:{xl:"-100px"}}}></Grid>



                            </Grid>
                        </Box>

                    </Typography>




                </Typography>

            </Typography>
        </>
    )

}
export default Test