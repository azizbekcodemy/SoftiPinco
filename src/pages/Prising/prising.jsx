import "./prising.css"
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2'
import Typography from '@mui/material/Typography';
import { display } from "@mui/system";



function Prising() {
    return (
        <>
            <Typography id="prising_home">
                <Typography id="prising">
                    <Typography id="prising_title">
                        <Box sx={{ flexGrow: 1, textAlign: "center", }}>
                            <Grid container justifyContent="center" spacing={1} columns={{ xs: 4, sm: 8, md: 12 }}>
                                <Grid xs={12} >
                                    <h1 className="test_h1">Pricing Plans</h1>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box sx={{ flexGrow: 1, textAlign: "center", }}>
                            <Grid container justifyContent="center" spacing={1} columns={{ xs: 4, sm: 8, md: 12 }}>
                                <Grid xs={12} sx={{ color: "#777" }}>
                                    <p className="test_p">Donec vulputate urna sed rutrum venenatis. Cras consequat magna<br /> quis arcu elementum, quis congue risus volutpat.</p>
                                </Grid>
                            </Grid>
                        </Box>
                    </Typography><br />

                    <Typography id="prising_icon" >
                        <Box  id="pri" >
                            <Grid container
                            justifyContent="center"
                                spacing={4} >
                                <Grid item xs={9} sm={5} md={2.7} lg={2.7} xl={2.7} id="prising_iconn"  >
                                    <Typography className="pricing-header">
                                        <h3 className="pricing-title">Starter</h3>
                                    </Typography>
                                    <Typography class="price-wrapper">
                                        <span className="currency">$</span>
                                        <span className="currency">14.50</span>
                                        <span className="period">monthly</span>
                                    </Typography>
                                    <Typography className="list">
                                        <Typography className="active">60 GB space</Typography >
                                        <Typography className="active">600 GB transfer</Typography>
                                        <Typography className="active">Pro Design Panel</Typography>
                                        <Typography className="activ">15-minute support</Typography>
                                        <Typography className="activ">Unlimited Emails</Typography>
                                        <Typography className="activ"> 24/7 Security</Typography>
                                    </Typography>
                                    <Typography className="pricing-footer">
                                        <button className="main-button">Purchase Now</button>
                                    </Typography>
                                </Grid>
                                <Grid item xs={9} sm={5} md={2.7} lg={2.7} xl={2.7} id="prising_iconn">
                                    <Typography className="pricing-header">
                                        <h3 className="pricing-title">Starter</h3>
                                    </Typography>
                                    <Typography class="price-wrapperr">
                                        <span className="currency">$</span>
                                        <span className="currency">21.50</span>
                                        <span className="period">monthly</span>
                                    </Typography>
                                    <Typography className="list">
                                        <Typography className="active">120 GB space</Typography >
                                        <Typography className="active">1200 GB transfer</Typography>
                                        <Typography className="active">Pro Design Panel</Typography>
                                        <Typography className="activ">15-minute support</Typography>
                                        <Typography className="activ">Unlimited Emails</Typography>
                                        <Typography className="activ"> 24/7 Security</Typography>
                                    </Typography>
                                    <Typography className="pricing-footer">
                                        <button className="main-button">Purchase Now</button>
                                    </Typography>
                                </Grid>
                                <Grid item xs={9} sm={5} md={2.7} lg={2.7} xl={2.7} id="prising_iconnn"   >
                                    <Typography className="pricing-header">
                                        <h3 className="pricing-title">Starter</h3>
                                    </Typography>
                                    <Typography class="price-wrapper">
                                        <span className="currency">$</span>
                                        <span className="currency">45.50</span>
                                        <span className="period">monthly</span>
                                    </Typography>
                                    <Typography className="list">
                                        <Typography className="active">250 GB space</Typography >
                                        <Typography className="active">5000 GB transfer</Typography>
                                        <Typography className="active">Pro Design Panel</Typography>
                                        <Typography className="activ">15-minute support</Typography>
                                        <Typography className="activ">Unlimited Emails</Typography>
                                        <Typography className="activ"> 24/7 Security</Typography>
                                    </Typography>
                                    <Typography className="pricing-footer">
                                        <button className="main-button">Purchase Now</button>
                                    </Typography>
                                </Grid>
                                <Grid itim xs={9.5} sm={5} md={2.7} lg={2.7} xl={2.7} sx={{width:{md:"0.01%",xl:"0.01%",lg:"0.01%",sx:"0.01%"}}}></Grid>

                            </Grid>
                        </Box>
                    </Typography>




                </Typography>

            </Typography>
        </>
    )

}
export default Prising