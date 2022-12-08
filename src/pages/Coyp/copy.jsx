import "./coyx.css"
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2'
import Link from '@mui/material/Link';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SportsBasketballOutlinedIcon from '@mui/icons-material/SportsBasketballOutlined';
import WifiOutlinedIcon from '@mui/icons-material/WifiOutlined';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';


function Coyp() {
    return (
        <>
            <div id="coy_home">
                <div id="coy">
                    <div id="coy_title">
                        <Box sx={{ flexGrow: 1, textAlign: "center"}}>
                            <Grid spacing={1} columns={{ xs: 4, sm: 6, md: 12 }} >
                            <Link href="#" className="coic">
                            < FacebookRoundedIcon className="coi" sx={{
                                width: "30px",
                                height: "30px",
                                background: "#8261ee",
                                color:"#fff",
                                borderRadius: "50%",
                                border: "8px solid #fff",
                                textDecoration:"none"
                            }}  />
                            </Link>
                            <Link href="#" className="coic">
                            <TwitterIcon sx={{
                                width: "30px",
                                height: "30px",
                                background: "#fff",
                                color:"#8261ee",
                                borderRadius: "50%",
                                border: "8px solid #fff"
                            }} />
                            </Link>
                            <Link href="#" className="coic">
                            <LinkedInIcon sx={{
                                borderRadius: "50%",
                                width: "30px",
                                height: "30px",
                                background: "#fff",
                                color:"#8261ee",
                                border: "8px solid #fff"
                            }} />
                            </Link>
                            <Link href="#" className="coic">
                            <WifiOutlinedIcon sx={{
                                width: "30px",
                                height: "30px",
                                background: "#fff",
                                color:"#8261ee",
                                borderRadius: "50%",
                                border: "8px solid #fff"
                            }} />
                            </Link>
                            <Link href="#" className="coic">
                            <SportsBasketballOutlinedIcon sx={{
                                width: "30px",
                                height: "30px",
                                background: "#fff",
                                color:"#8261ee",
                                borderRadius: "50%",
                                border: "8px solid #fff"
                            }} />
                            </Link>
                                     {/* <FacebookSharpIcon/>
                                     <TwitterIcon className="coic" />
                                     <MailOutlineIcon className="coic" />
                                     <WifiIcon className="coic" />
                                     <MonetizationOnRoundedIcon className="coic" /> */}
                            
                            </Grid>
                        </Box>
                    </div>
                    <div id="coy_title">
                        <Box sx={{ flexGrow: 1, textAlign: "center"}}>
                            <Grid spacing={6} columns={{ xs: 12, sm: 12, md: 12 }} id="icc">
                            <p className="copyright">Copyright &copy; 2020 Softy Pinko Company - Design: TemplateMo</p>  
                            </Grid>
                        </Box>
                    </div>




                </div >

            </div >
        </>
    )

}
export default Coyp