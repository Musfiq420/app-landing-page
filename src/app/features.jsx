import React from 'react';
import { Card, Button, Typography, Grid } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CallIcon from '@material-ui/icons/Call';
import VideocamIcon from '@material-ui/icons/Videocam';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { IconButton, useMediaQuery } from '@material-ui/core';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import clsx from "clsx";




const useStyles = makeStyles(({ palette, ...theme }) => ({
  section: {
    background: palette.background.default,
  },
  cards: {
    display: 'flex',
    justifyContent: "center",
    alignItems: 'center',
    marginTop: 10,
    
    height: '250px',
    
    color: palette.secondary.contrastText,
    [theme.breakpoints.down("xs")]: {
      margin: '20px 50px 20px 50px',
      height: '200px',
    }
  },
    cardContent: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      
    },
    icon: {
      fontSize: 40,
      margin: 20
    },
    title: {
      align: "center"
    },
    pos: {
      marginBottom: 12,
    },
  }))


const Features = () => {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

    const serviceList = [
      {
        icon: CallIcon,
        title: "Call a Doctor Anytime",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
      },
      {
        icon: VideocamIcon,
        title: "Get a Doctor on Video",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. "
      },
      {
        icon: ChatBubbleIcon,
        title: "Chat your Symptoms",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. "
      },
      {
        icon: FavoriteIcon,
        title: "Get Treatment with Care",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. "
      }
    ];
    
    return(
      <section className={clsx(classes.section, 'section')} id='features'>
        <div className='container'>
        
          
            <div  className='flex flex-column justify-center items-center'>
              <Typography variant="h4" color="textPrimary" >Why we are different</Typography>
              <Typography variant="inherit" color="textSecondary" className="mt-2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</Typography>
            </div>
          
            <Grid container spacing={3} className='mt-10'>
                
            {serviceList.map((item, ind) => (
              <Grid item md={3} sm={6} xs={12}>
              <Card className={classes.cards}>
                  <CardContent className={classes.cardContent}>
                      <item.icon color="primary" className={classes.icon} />
                    
                    <Typography variant="h6" color="textPrimary" className={classes.title}  align="center" gutterBottom>
                        {item.title}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary" align="center">
                        {item.description}
                    </Typography>
                  </CardContent>
              </Card>
              </Grid> ))}
              
                      
        </Grid>
        
        </div>
      </section>


    );
}

export default Features;