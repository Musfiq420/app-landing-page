import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { findByLabelText } from "@testing-library/react";
import CallIcon from '@material-ui/icons/Call';
import VideocamIcon from '@material-ui/icons/Videocam';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Healthy from './healthy.svg';
import clsx from "clsx";



const useStyles = makeStyles(({ palette, ...theme }) => ({
    backgroundStyle: {
        backgroundColor: palette.secondary.main,
      },
}));



const Features2 = () => {
    
    const classes = useStyles();

    const serviceList = [
        {
          icon: CallIcon,
          title: "Call a Doctor Anytime",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. "
        },
        {
          icon: VideocamIcon,
          title: "Get a Doctor on Video",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. "
        },
        {
          icon: ChatBubbleIcon,
          title: "Chat a Doctor your Symptoms",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. "
        }
      ];

    return(
        <section className={clsx(classes.backgroundStyle, 'section')}>
            <div className='container'>
                <Grid container sm={12} xs={12}>
                    <Grid container sm={12} xs={12} className='flex flex-column justify-center items-center'>
                    
                            <Typography variant="h4" align='center' >Quick & Easy Process With Best Features</Typography>
                            <Typography variant="inherit" color="textSecondary" align='center' className="mt-2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</Typography>
                        
                        </Grid>
                    <Grid container sm={6} xs={12} className={clsx('flex flex-column justify-center items-center mt-10')}>
                        
                        {serviceList.map((item) => (
                            <Grid item className='flex flex-start max-w-400 mt-8'>    
                                <item.icon color="primary" className='text-40 mr-6' />
                                <div>
                                    <Typography variant="h6">{item.title}</Typography>
                                    <div>
                                    <Typography variant="caption" color="textSecondary">{item.description}</Typography>
                                    </div>
                                </div>
                                </Grid>
                            ))}
                    </Grid>
                    <Grid conatiner sm={6} xs={12} className='flex justify-center items-center' >
                            <img src={Healthy} height="400px" width="300px"/>
                        
                        
                    </Grid>
                    
                </Grid>
            </div>
        </section>
    );



};


export default Features2;