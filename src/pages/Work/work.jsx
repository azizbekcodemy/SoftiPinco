import "./work.css"
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import icon3 from "../images/work-process-item-01.png"
import Link from '@mui/material/Link'


function Work() {
    return (
        <>
            <Typography id="work_home">
                <Typography id="work">
                    <Typography id="work_title">
                        <Box sx={{ flexGrow: 1, textAlign: "center", }}>
                            <Grid container justifyContent="center" spacing={1} columns={{ xs: 4, sm: 8, md: 12 }}>
                                <Grid xs={12}>
                                    <h1>Work Process</h1><br />
                                    <p>Aenean nec tempor metus. Maecenas ligula dolor, commodo<br /> in imperdiet interdum, vehicula ut ex. Donec ante diam.</p>
                                </Grid>
                            </Grid>
                        </Box>
                    </Typography><br />

                    <Typography id="work_icone">
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container justifyContent="center" spacing={6}>
                                <Grid item  xs={10} sm={3.5} md={2} lg={2} xl={2}   id="work_ico" > 
                                    <Card  id="w_con">
                                        <CardMedia
                                            id="w_home"
                                            component="img"
                                            image={icon3}
                                        />
                                        <CardContent sx={{ textAlign: "center" }}>
                                            <Typography gutterBottom variant="h6" component="div" sx={{ fontSize: "17px", color: "#1e1e1e" }}>
                                                Get Ideas
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Godard pabst prism fam <br />cliche.
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item  xs={10} sm={3.5} md={2} lg={2} xl={2}  id="work_ico">
                                    <Card  id="w_con">
                                        <CardMedia
                                            id="w_home"
                                            component="img"
                                            image={icon3}
                                        />
                                        <CardContent sx={{ textAlign: "center" }}>
                                            <Typography gutterBottom variant="h6" component="div" sx={{ fontSize: "17px", color: "#1e1e1e" }}>
                                                Sketch Up
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Godard pabst prism fam <br />cliche.
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item  xs={10} sm={3.5} md={2} lg={2} xl={2}   id="work_ico">
                                    <Card  id="w_con">
                                        <CardMedia
                                            id="w_home"
                                            component="img"
                                            image={icon3}
                                        />
                                        <CardContent sx={{ textAlign: "center" }}>
                                            <Typography gutterBottom variant="h6" component="div" sx={{ fontSize: "17px", color: "#1e1e1e" }}>
                                                Discuss
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Godard pabst prism fam <br />cliche.
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item  xs={10} sm={3.5} md={2} lg={2} xl={2}   id="work_ico">
                                    <Card  id="w_con">
                                        <CardMedia
                                            id="w_home"
                                            component="img"
                                            image={icon3}
                                        />
                                        <CardContent sx={{ textAlign: "center" }}>
                                            <Typography gutterBottom variant="h6" component="div" sx={{ fontSize: "17px", color: "#1e1e1e" }} v>
                                                Revise
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Godard pabst prism fam<br /> cliche.
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item  xs={10} sm={3.5} md={2} lg={2} xl={2}   id="work_ico">
                                    <Card  id="w_con">
                                        <CardMedia
                                            id="w_home"
                                            component="img"
                                            image={icon3}
                                        />
                                        <CardContent sx={{ textAlign: "center" }}>
                                            <Typography gutterBottom variant="h6" component="div" sx={{ fontSize: "17px", color: "#1e1e1e" }}>
                                                Approve
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Godard pabst<br /> prism fam <br />cliche.
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item  xs={10} sm={3.5} md={2} lg={2} xl={2}   id="work_ico">
                                    <Card  id="w_con">
                                        <CardMedia
                                            id="w_home"
                                            component="img"
                                            image={icon3}
                                        />
                                        <CardContent sx={{ textAlign: "center" }}>
                                            <Typography gutterBottom variant="h6" component="div" sx={{ fontSize: "17px", color: "#1e1e1e" }}>
                                                Launch
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Godard pabst<br /> prism fam <br />cliche.
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>

                            </Grid>
                        </Box>

                    </Typography>
                </Typography>

            </Typography>
        </>
    )

}
export default Work