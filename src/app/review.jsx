import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Card, Grid, Typography, Button } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Rating from '@material-ui/lab/Rating';
import Avatar from '@material-ui/core/Avatar';



const useStyles = makeStyles(({ palette, ...theme }) => ({
    
    headlineStyle:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '100px',
        color: palette.secondary.contrastText,
    },
    cards: {
        display: 'flex',
        justifyContent: "center",
        alignItems: 'center',
        marginTop: 10,
        height: '300px',
        width: 'auto',
        color: palette.secondary.contrastText,
        [theme.breakpoints.down("sm")]: {
          margin: '10px 20px 10px 20px',
          height: '300px',
        },
        [theme.breakpoints.down("xs")]: {
          margin: '20px 50px 20px 50px',
          height: '250px',
        }
      }, 
        cardContent: {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          
        color: palette.primary.main,
        },
        profile: {
          display: 'flex',
          marginTop: '20px',
          alignItems: 'center',
        }

}))

const Review = () => {
    const classes = useStyles();

    const serviceList = [
        {
          rating: 5,
          title: "Great App",
          description: "Lorem ipsum dolor sit amet, hjay dhju jk consectetuer adipiscing elit. dolor sit amet.",
          name: "Mr. Jalal",
          designation: "CEO, XYZ company ltd."
        },
        {
          rating: 4,
          title: "Need improve on Video",
          description: "Lorem ipsum dolor sit amet, ipsum dolor si, consectetuer dolor sit amet adipiscing elit.  ",
          name: "Mr. Jalal",
          designation: "CEO, XYZ company ltd."
        },
        {
          rating: 5,
          title: "Best App for your Symptoms",
          description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. adipiscing elit ",
          name: "Mr. Jalal",
          designation: "CEO, XYZ company ltd."
        },
      ];

    return(
      <section className='section' id='review'>
          <div className='container'>
            <div  className='flex flex-column justify-center items-center'>
                <Typography variant='h4' >What our customers say</Typography>
                <Typography variant='inherit' color='textSecondary' className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Typography>
            </div>

            <Grid container spacing={3} className='flex justify-center align-center mt-10'>

            {serviceList.map((item, ind) => (
              <Grid item md={3} sm={6} xs={12}>
                <Card className={classes.cards}>
                    <CardContent className={classes.cardContent}>
                        <Rating className="ml-2" name="read-only" value={item.rating} readOnly />
                        <Typography variant="h6" className="mt-6 ml-3" gutterBottom>
                            {item.title}
                        </Typography>
                        <Typography className="ml-3" color="textSecondary">
                            {item.description}
                        </Typography>
                        <div className={classes.profile}>
                            <Avatar className="m-2">J</Avatar>
                            <div className="ml-3">
                            <Typography color='textPrimary'>{item.name}</Typography>
                            <Typography variant='caption' color='textSecondary'>{item.designation}</Typography>
                            </div>
                        </div>
                    </CardContent>
                </Card> 
              </Grid>))}
            

            </Grid>
          </div>
        </section>
    );

}
export default Review;