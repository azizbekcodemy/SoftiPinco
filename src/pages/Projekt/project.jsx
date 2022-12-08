import "./project.css"
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2'
import Typography from '@mui/material/Typography';




function Projekt() {
    return (
        <>
            <Typography id="pro_home">
                <Typography id="pro">
                    <Typography id="pro_title">
                        <Box container sx={{ flexGrow: 1, textAlign: "center", }}>
                            <Grid container spacing={1} >
                                <Grid item xs={10} sm={5} md={5} lg={2.5} xl={2.5} className="count">
                                    <Typography className="cou">
                                        <Typography gutterBottom variant="h6" component="div" className="p">
                                            126
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" className="span">
                                            Projects
                                        </Typography>
                                    </Typography>
                                </Grid>
                                <Grid item xs={10} sm={5} md={5} lg={2.5} xl={2.5} className="count" >
                                    <Typography className="cou">
                                        <Typography gutterBottom variant="h6" component="div" className="p">
                                            63
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" className="span">
                                            Happy Clients
                                        </Typography>
                                    </Typography>
                                </Grid>
                                <Grid item xs={10} sm={5} md={5} lg={2.5} xl={2.5} className="count" >
                                    <Typography className="cou">
                                        <Typography gutterBottom variant="h6" component="div" className="p">
                                            18
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" className="span">
                                            Awards Wins
                                        </Typography>
                                    </Typography>   
                                </Grid>
                                <Grid item xs={10} sm={5} md={5} lg={2.5} xl={2.5} className="countt">
                                    <Typography className="cou">
                                        <Typography gutterBottom variant="h6" component="div" className="p">
                                            27
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" className="span">
                                            Countries                                       
                                    </Typography> 
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    </Typography>




                </Typography>

            </Typography>
        </>
    )

}
export default Projekt