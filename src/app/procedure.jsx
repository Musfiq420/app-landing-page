import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Grid, Typography, Button, useMediaQuery } from "@material-ui/core";
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import clsx from "clsx";


const useStyles = makeStyles(({ palette, ...theme }) => ({
    section:{
        backgroundColor: palette.primary.main,
    },
    iconStyle: {
        fontSize: 100,
    },
    arrowIconStyle: {
        fontSize: 60,
    },


}))

const Procedure = () => {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));


    return(
      <section className={clsx(classes.section, 'section')} id='procedure'>
        <div className='çontainer'>
            <div  className='flex flex-column justify-center items-center text-secondary mb-2'>
                <Typography variant="h4" >How it works</Typography>
                <Typography variant="inherit" className="mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Typography>
            </div>
            <div className={isMobile?'flex flex-column justify-center items-center text-secondary mt-8':'flex flex-row justify-center text-secondary'}>
                <div className='flex flex-column justify-center items-center  my-5 mx-8'>
                    <CloudDownloadIcon className={classes.iconStyle}/>
                    <Typography variant="h5" className="mt-2">Install the App</Typography>
                    <Typography align="center" className="mt-2">Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.</Typography>
                </div>
                {!isMobile?<div className='flex flex-column justify-center items-center  my-5 '>
                    <ArrowForwardIosIcon className={classes.arrowIconStyle}/>
                </div>:null}

                <div className='flex flex-column justify-center items-center  my-5 mx-8'>
                    <SettingsApplicationsIcon className={classes.iconStyle}/>
                    <Typography variant="h5" className="mt-2">Set up your profile</Typography>
                    <Typography align="center" className="mt-2">Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.</Typography>
                </div>
                {!isMobile?<div className='flex flex-column justify-center items-center  my-5 '>
                    <ArrowForwardIosIcon className={classes.arrowIconStyle}/>
                </div>:null}

                <div className='flex flex-column justify-center items-center  my-5 mx-8'>
                    <FavoriteBorderIcon className={classes.iconStyle}/>
                    <Typography variant="h5" className="mt-2">Enjoy medical care</Typography>
                    <Typography align="center" className="mt-2">Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.</Typography>
                </div>
            </div>
        </div>
      </section>
    );

}

export default Procedure;