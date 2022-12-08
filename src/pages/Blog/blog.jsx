import "./blog.css"
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import blo from "../images/blog-item-01.png"
import blo1 from "../images/blog-item-02.png"
import blo2 from "../images/blog-item-03.png"


function Blog() {
    return (
        <>
            <Box id="blog_home">
                <Box id="blog">
                <Box id="blog_title">
                    <Box container   sx={{ flexGrow: 1, textAlign: "center", }}>
                        <Grid container  justifyContent="center" spacing={1} columns={{ xs: 4, sm: 6, md: 12 }}>
                            <Grid item xs={12}>
                                <h1 className="test_h1">Blog Entries</h1>
                                <p className="test_p">Integer molestie aliquam gravida. Nullam nec arcu finibus, imperdiet<br/>  nulla vitae, placerat nibh. Cras maximus  venenatis molestie.</p>
                            </Grid>
                        </Grid>
                    </Box>
                    
                </Box>
                    <Box id="blog_icon">
                        <Box sx={{ flexGrow: 1, textAlign: "center", }}>
                            <Grid container  justifyContent="center"  spacing={5}>
                                <Grid item  xs={9} sm={5} md={3.2} lg={2.9} xl={3} className="blog" >
                                        <img src={blo} alt="" className="blog_con" />
                                    <CardContent>
                                            <Typography gutterBottom variant="h5" component="div" sx={{color:"#1e1e1e",fontSize:"18px",lineHeight:"26px",letterSpacing:"0.25px"}}>
                                            Vivamus ac vehicula dui
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary" sx={{color:"#777",fontSize:"13px",lineHeight:"26px",letterSpacing:"0.26px"}}>
                                            Cras aliquet ligula dui, vitae fermentum velit tincidunt id. Praesent eu finibus nunc. Nulla in sagittis eros. Aliquam egestas augue.
                                            </Typography>
                                              <Button size="small" className="blo_button">Read More</Button>
                                        </CardContent>
                                </Grid>
                                <Grid item  xs={9} sm={5} md={3.2} lg={2.9} xl={2.9} className="blog" >
                                <img src={blo1} alt="" className="blog_con" />
                                    <CardContent>
                                            <Typography gutterBottom variant="h5" component="div"  sx={{color:"#1e1e1e",fontSize:"18px",lineHeight:"26px",letterSpacing:"0.25px"}}>
                                            Phasellus convallis augue
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary" sx={{color:"#777",fontSize:"13px",lineHeight:"26px",letterSpacing:"0.26px"}}>
                                            Aliquam commodo ornare nisl, et scelerisque nisl dignissim ac. Vestibulum finibus urna ut velit venenatis, vel ultrices sapien mattis.
                                            </Typography>
                                            <Button size="small" className="blo_button">Read More</Button>
                                        </CardContent>
                                </Grid>
                                <Grid item    xs={9} sm={5} md={3.2} lg={2.9} xl={2.9} className="blog" >
                                <img src={blo2} alt="" className="blog_con" />
                                    <CardContent>
                                            <Typography gutterBottom variant="h5" component="div"  sx={{color:"#1e1e1e",fontSize:"18px",lineHeight:"26px",letterSpacing:"0.25px"}}>
                                            Nam gravida purus non
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary" sx={{color:"#777",fontSize:"13px",lineHeight:"26px",letterSpacing:"0.26px"}}>
                                            Maecenas eu erat vitae dui convallis consequat vel gravida nulla. Vestibulum finibus euismod odio, ut tempus enim varius eu.
                                            </Typography>
                                            <Button size="small" className="blo_button">Read More</Button>
                                        </CardContent>
                                </Grid>
                                <Grid itim xs={8} sm={5.3} md={3.2} lg={3} xl={3} id="ooooo" sx={{width:{md:"0.1%",xl:"0.1%",lg:"0.1%",sx:"0.1%"},marginLeft:{xl:"-55px"}}}></Grid>

                            </Grid>
                        </Box>

                    </Box>




                </Box>

            </Box>
        </>
    )

}
export default Blog