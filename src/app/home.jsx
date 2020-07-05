import React from "react";
import background from "./background.svg";
import computer from "./computer.svg";
import Topbar from "./topbar";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import clsx from "clsx";
import { Grid, Button, Typography } from "@material-ui/core";
import Phone from './phone.svg';




const useStyles = makeStyles(({ palette, ...theme }) => ({
    section: {
      color: palette.secondary.contrastText,
        backgroundImage: `url(${background})`,
        backgroundPosition: 'top-center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',

      [theme.breakpoints.down("xs")]: {
        paddingTop: '3rem',
      }
    },
    image: {
      
    },
  }));

const Home = () => {

    const classes = useStyles();

    return(
        
        <section className= {clsx('home', classes.section)} id='home'>
            <Topbar />

          <div className="container mt-20">    
            <Grid container spacing={3} alignItems='center'>
              <Grid item sm={6} xs={12}>
              
                <div className="max-w-400 ">
                  <h1 className="font-bold  text-40 " >
                    Get Medical Service at Home
                  </h1>
                </div>
                <p className="my-6">
                  Stop worrying about your health, get prescribed at home through <br />
                  our beautifully UI-designed medical service app at free of cost
                </p>
                <div className="flex">
                  <Button
                    className="mr-4 border-radius-8 elevation-z3"
                    variant="contained"
                    color="primary"
                    
                  >
                    Learn More
                  </Button>
                  <Button
                    className="mr-4 border-radius-8 elevation-z3"
                    variant="outlined"
                    color="primary"
                    
                  >
                    View Demo
                  </Button>
                </div>
              </Grid>
              <Grid item sm={6} xs={12}>
              <div>
              <img
                className="w-full"
                src={Phone}
                alt="business1"
                height='350px'
                width='350px'
              />
            </div>
              </Grid>

            </Grid>

          </div>

        </section>

    );

}

export default Home;