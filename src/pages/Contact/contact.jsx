import "./contact.css"
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2'
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Typography from '@mui/material/Typography';



function Contact() {
    return (
        <>
            <Typography id="con_home">
                <Typography id="name">
                    <Typography id="con_title">
                        <Box sx={{ flexGrow: 1, textAlign: "center", }}>
                            <Grid container justifyContent="center" spacing={1}  >
                                <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
                                    <h1 className="test_h1">Talk To Us</h1>
                                    <p className="test_p">Maecenas pellentesque ante faucibus lectus vulputate sollicitudin.<br /> Cras feugiat hendrerit semper.</p>
                                </Grid>
                            </Grid>
                        </Box>
                    </Typography><br />
                    <Typography id="con_icon">
                        <Box sx={{ flexGrow: 1, textAlign: "center" }} >
                            <Grid container justifyContent="center" spacing={6} id="inn"  >

                                <Grid item xs={10} sm={4} md={3.4} lg={3} xl={4} className="con" sx={{ marginLeft: { lg: "0px", md: "0px" } }}>
                                    <h5 className="margin">Keep in touch</h5>
                                    <Typography className="con_text">
                                        <p>110-220 Quisque diam odio, maximus ac consectetur eu, 10260
                                            auctor non lorem</p><br />
                                        <p>You are NOT allowed to re-distribute Softy Pinko template on any template collection websites. Thank you.</p>
                                    </Typography>
                                </Grid>


                                <Grid item xs={12} sm={6} md={6.5} lg={6} xl={4} container spacing={1} id="in" sx={{ marginLeft: { md: "0px" } }}>
                                    <Grid container justifyContent="center" spacing={1} id="inn"  >
                                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className="con1" >
                                            <input name="email" type="name" class="form-control" id="email" placeholder="Full Name" required="" />
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className="con3" >
                                            <input name="email" type="email" class="form-control" id="email" placeholder="E-Mail Address" required="" />
                                        </Grid>

                                        <TextareaAutosize
                                            className="con2"
                                            placeholder="Your Message"
                                            style={{ width: "97%", height: "120px", marginTop: "-25px", fontSize: "14px" }}
                                        />
                                        <Grid>
                                        <CardActions>
                                            <Button size="small" className="con_button" sx={{marginLeft:{xl:"-90%",lg:"-170%",md:"-110%",sm:"-50%",xs:"-170px"}}} >Send Message</Button>
                                        </CardActions>
                                        </Grid>

                                    </Grid>


                                </Grid>
                            </Grid>





                        </Box>

                    </Typography>




                </Typography>

            </Typography >
        </>
    )

}
export default Contact