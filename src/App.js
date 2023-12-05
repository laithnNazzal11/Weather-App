import './App.css';
import Test from './Test'
import { createTheme, ThemeProvider, styled } from '@mui/material';
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
import CloudIcon from '@mui/icons-material/Cloud';
import { useEffect, useState } from 'react';
import axios from 'axios'
import moment from 'moment'
import 'moment/min/locales'
import { useTranslation } from 'react-i18next';

const them = createTheme({
  typography: {
    fontFamily: ["IBM"]
  }
})

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

let canselAxios = null


function App() {
  const [lang, setLang] = useState("ar")
  if (lang == "en") {
    moment.locale("en")

  }

  else {
    moment.locale("ar")

  }
  const [dir, setDir] = useState("rtl")
  const { t, i18n } = useTranslation();
  const [temp, setTemp] = useState({
    number: null,
    desc: "",
    min: null,
    max: null,
    icon: null
  })
  useEffect(() => {
    i18n.changeLanguage('ar')
    axios.get('https://api.openweathermap.org/data/2.5/weather?lat=3.44&lon=-4.04&appid=72d8ae9138bdc999ef4cb4dc24f6da9e',
      {
        canselToken: new axios.CancelToken((c) => {
          canselAxios = c
        })

      }
    )
      .then(function (response) {
        console.log(response)
        console.log(response.data.main.temp_min)
        setTemp({

          number: Math.round(response.data.main.temp - 272.15),
          min: Math.round(response.data.main.temp_min - 272.15),
          max: Math.round(response.data.main.temp_max - 272.15),
          desc: response.data.weather[0].description,
          icon: response.data.weather[0].icon
        })

        console.log(temp);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })

    return () => {
      canselAxios()
    }

  }, [])

  function handelChange() {
    if (lang == "ar") {
      setLang("en")
      setDir("ltr")

    }
    else {
      setLang("ar")
      setDir("rtl")



    }
  }



  return (

    <ThemeProvider theme={them}>


      <Container maxWidth="sm" className='parent' style={{ height: "100vh", display: 'flex', justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
        {/* card */}
        <div style={{ background: "#0a3f9e", color: "white", padding: "10px", borderRadius: "15px", boxShadow: "0px 11px 1px rgba(0,0,0,0.05)", width: "100%" }}>
          {/* Content */}
          <div>
            {/* City&Time */}
            <div style={{ display: "flex", justifyContent: "start", alignItems: "end" }} dir={dir}>
              <Typography variant='h2' style={{ marginRight: "20px", fontWeight: 600 }}>
                {lang == "ar" ? t('Jenin') : 'Jenin'}


              </Typography>
              <Typography variant='h5' style={{ marginRight: "20px" }}>
                {moment().format('MMMM Do YYYY, h:mm:ss a')}
              </Typography>

            </div>

            {/* --City&Time-- */}
            <hr />
            {/* Dec */}
            <div style={{ display: "flex", justifyContent: "space-around" }} dir={dir}>
              {/* Temp */}
              <div>
                <Typography variant='h1' style={{ textAlign: "right" }} >
                  {temp.number}
                  <img src={`https://openweathermap.org/img/wn/${temp.icon}@2x.png`} />
                </Typography>

                {/* Todo: imagw */}
                <Typography variant='h5' style={{ textAlign: "right" }} >
                  {lang == "ar" ? t(temp.desc) : temp.desc}
                </Typography>

                {/*min&max*/}
                <div style={{ display: "flex" }}>
                  <h5>{lang == "ar" ? t("min") : "min"} : {temp.min}</h5>
                  <h5 style={{ marginLeft: "10px", marginRight: "10px" }}>|</h5>
                  <h5>{lang == "ar" ? t("max") : "max"} : {temp.max} </h5>

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
        <div style={{ textAlign: "left", display: "flex", justifyContent: "end", width: "100%", marginTop: "20px" }} dir={dir}>
          <Button variant="text" style={{ color: "#97c6f5" }} onClick={handelChange} >
            {lang == "ar" ? 'الانجليزية' : "Arabic"}
          </Button>

        </div>




      </Container >
    </ThemeProvider>

  );
}

export default App;
