import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import abo from "../images/left-image.png"
import abo1 from "../images/right-image.png"

import "./about.css"


function About() {
    return (
        <>
            <Typography id="about_home">
                <Grid  container  justifyContent="center" id="about">
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container  justifyContent="center" spacing={12}  >
                            <Grid  xs={8} sm={8} md={5} lg={5} xl={4}   sx={{ marginTop: "80px" }}  >
                                <img src={abo} alt="" id="abo" className="img-fluid" />
                            </Grid>
                            <Grid  xs={8} sm={8} md={5} lg={5} xl={5}   sx={{ marginTop: "100px" }}   >
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" className="section-title">
                                        Let’s discuss about you project
                                    </Typography><br />
                                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: "17px" }} className="left-text">
                                        Nullam sit amet purus libero. Etiam ullamcorper nisl ut augue <br /> blandit, at finibus leo efficitur. Nam gravida purus non sapien <br /> auctor, ut aliquam magna ullamcorper.
                                    </Typography>
                                </CardContent>
                            </Grid>

                        </Grid>
                        <Grid container  justifyContent="center" spacing={3} columns={{ xs: 6, sm: 12, md: 12 }}>
                            <Grid id="hr" xs={12} >

                            </Grid>
                        </Grid>
                    </Box>


                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container  justifyContent="center" spacing={1}  >
                            <Grid  xs={8} sm={8} md={5} lg={4} xl={5}  sx={{ marginTop: "150px" }} id="aboo"  className="img-fluid" >
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" className="section-title1">
                                        We can help you to grow your business
                                    </Typography><br />
                                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: "17px" }} className="left-text1">
                                        Aenean pretium, ipsum et porttitor auctor, metus ipsum iaculis <br /> nisi, a bibendum lectus libero vitae urna. Sed id leo eu dolor <br /> luctus congue sed eget ipsum. Nunc nec luctus libero. Etiam <br /> quis dolor elit.
                                    </Typography>
                                </CardContent>
                            </Grid>
                            <Grid  xs={8} sm={8} md={5} lg={4} xl={4}  sx={{ marginTop: "80px" }}>
                                <img src={abo1} alt="" id="abo" />
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>

            </Typography>
        </>
    )

}
export default About