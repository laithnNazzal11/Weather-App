import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container'
import Stack from '@mui/system/Stack';
import { styled } from '@mui/system';
import CloudIcon from '@mui/icons-material/Cloud';
import { useEffect } from 'react';
import axios from 'axios'
const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);
const Item = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#262B32' : '#fff',
    padding: theme.spacing(1),
    textAlign: 'center',
    borderRadius: 4,
}));
export default function BasicCard() {
    return (
        <Container maxWidth="sm" className='parent' style={{ height: "100vh", display: 'flex', justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
            {/* card */}
            <div style={{ background: "#0a3f9e", color: "white", padding: "10px", borderRadius: "15px", boxShadow: "0px 11px 1px rgba(0,0,0,0.05)", width: "100%" }}>
                {/* Content */}
                <div>
                    {/* City&Time */}
                    <div style={{ display: "flex", justifyContent: "start", alignItems: "end" }} dir='rtl'>
                        <Typography variant='h2' style={{ marginRight: "20px", fontWeight: 600 }}>
                            الرياض
                        </Typography>
                        <Typography variant='h5' style={{ marginRight: "20px" }}>
                            الاثنين 29-9-2023
                        </Typography>

                    </div>

                    {/* --City&Time-- */}
                    <hr />
                    {/* Dec */}
                    <div style={{ display: "flex", justifyContent: "space-around" }} dir='rtl'>
                        {/* Temp */}
                        <div>
                            <Typography variant='h1' style={{ textAlign: "right" }} >
                                38
                            </Typography>

                            {/* Todo: imagw */}
                            <Typography variant='h5' style={{ textAlign: "right" }} >
                                broken clouds
                            </Typography>

                            {/*min&max*/}
                            <div style={{ display: "flex" }}>
                                <h5>الصغرى :34</h5>
                                <h5 style={{ marginLeft: "10px", marginRight: "10px" }}>|</h5>
                                <h5>الكبرى :44 </h5>

                            </div>
                        </div>

                        {/*-------min&max------*/}

                        {/* --Temp-- */}

                        {/* Cloud */}
                        <div>
                            <CloudIcon style={{ fontSize: "200px" }} />
                        </div>
                        {/* --Cloud-- */}


                    </div>
                    {/* --Dec-- */}



                </div>
                {/* --Content-- */}



                {/* --card-- */}
            </div>
            <div style={{ textAlign: "left", display: "flex", justifyContent: "end", width: "100%", marginTop: "20px" }} dir='rtl'>
                <Button variant="text" style={{ color: "#97c6f5" }} >انجليزي</Button>

            </div>




        </Container >

    );
}