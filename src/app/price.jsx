import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Card, Grid, Typography, Button } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Rating from '@material-ui/lab/Rating';
import Avatar from '@material-ui/core/Avatar';
import ChildFriendlyIcon from '@material-ui/icons/ChildFriendly';
import MotorcycleIcon from '@material-ui/icons/Motorcycle';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import clsx from "clsx";



const useStyles = makeStyles(({ palette, ...theme }) => ({
    section:{
        backgroundColor: palette.secondary.main,
    },
    cards: {
        display: 'flex',
        justifyContent: "center",
        alignItems: 'center',
        marginTop: 10,
        color: palette.secondary.contrastText
      }, 
      card: {
          minWidth: 100,
          margin: 20,
          maxWidth: 320,
          marginTop: 40,
          marginLeft: 20,
          marginRight: 20,
          paddingLeft: 30,
          paddingRight: 30,
        },
        cardContent: {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          
        color: palette.primary.main,
        },
        bullet: {
          display: 'inline-block',
          margin: '0 2px',
          transform: 'scale(0.8)',
        },
        iconStyle: {
          fontSize: 50,
        }

}))

const Price = () => {
    const classes = useStyles();

    const serviceList = [
        {
          icon: ChildFriendlyIcon,
          price: "0$",
          type: "Free",
          features: [
            {feature: "Free Chatting", color: "textPrimary"},
            {feature: "Random Match with Doctors", color: "textPrimary"},
            {feature: "Free Prescription", color: "textSecondary"},
            {feature: "Connect to your favourite doctor", color: "textSecondary"},
            {feature: "Free Audio and Video Conference", color: "textSecondary"},
            {feature: "Emergency Helpline", color: "textSecondary"},
          ],
          button: "Install now",
        },
        {
          icon: MotorcycleIcon,
          type: "Starter",
          price: "19.99$",
          features: [
              {feature: "Free Chatting", color: "textPrimary"},
              {feature: "Random Match with Doctors", color: "textPrimary"},
              {feature: "Free Prescription", color: "textPrimary"},
              {feature: "Connect to your favourite doctor", color: "textPrimary"},
              {feature: "Free Audio and Video Conference", color: "textSecondary"},
              {feature: "Emergency Helpline", color: "textSecondary"},
          ],
          button: "Purchase now",
        },
        {
          icon: AirportShuttleIcon,
          type: "Premium",
          price: "29.99$",
          features: [
              {feature: "Free Chatting", color: "textPrimary"},
              {feature: "Random Match with Doctors", color: "textPrimary"},
              {feature: "Free Prescription", color: "textPrimary"},
              {feature: "Connect to your favourite doctor", color: "textPrimary"},
              {feature: "Free Audio and Video Conference", color: "textPrimary"},
              {feature: "Emergency Helpline", color: "textPrimary"},
          ],
          button: "Purchase now",
        },
      ];

    return(
        <section className={clsx(classes.section,'section')} id='pricing'>
          <div className='container'>
            <div  className='flex flex-column justify-center items-center'>
                <Typography variant='h4' >Pricing</Typography>
                <Typography variant='inherit' color='textSecondary' className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Typography>
            </div>

            <Grid container spacing={3} className='flex justify-center items-center mt-10'>
            
            {serviceList.map((item, ind) => (
                <Grid item md={4} sm={6} xs={12}>
                <Card className='flex justify-center items-center m-5'>
                    <CardContent className={classes.cardContent}>
                        <item.icon className={classes.iconStyle} />
                        <Typography variant="h4" className="mt-6" gutterBottom>
                            {item.price}
                        </Typography>
                        <Typography variant="h6" className="mt-0 mb-4 font-bold" color="textPrimary" gutterBottom>
                            {item.type}
                        </Typography>
                        {
                            item.features.map(i => 
                                <Typography className="mb-2" variant="caption" color={i.color}>{i.feature}</Typography>
                                )
                        }
                        <Button variant="outlined" className="mt-6 mb-4" color="primary">{item.button}</Button>
                    </CardContent>
                </Card>
                </Grid>
                 ))}
            
            </Grid>
          </div>
        </section>
    );

}
export default Price;