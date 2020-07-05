import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Grid, Typography, Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import HomeIcon from '@material-ui/icons/Home';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import EmailIcon from '@material-ui/icons/Email';


const useStyles = makeStyles(({ palette, ...theme }) => ({
    
    leftGrid: {
        display: 'flex',
        
        justifyContent: 'center',
        marginTop: '60px',

    },
    rightGrid: {
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',

        maxWidth: '400px',
        justifyContent: 'center',
        color: palette.primary.main,

           },
    paperClass: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: '20px',
        marginLeft: '30px'
    },
    form: {
        margin: '5px',
        display: 'flex',
        flexDirection: 'column',
        
    },
    formCard: {
        backgroundColor: palette.secondary.main,
        color: palette.primary.main,
        margin: '10px',
    },
    input: {
        minWidth: '300px',
        margin: '10px',
        display: 'flex',
        justifyItems: 'center'
    },
    inputMsg: {
        minWidth: '300px',
        minHeight: '200px',
        margin: '10px',
        display: 'flex',
        justifyItems: 'flex-start',
        alignItems: 'flex-start',
    },
}))

const Contact = () => {
    const classes = useStyles();

    return(
        <section className='section' id='contact'>
          <div className='container'>  
            <div  className='flex flex-column justify-center items-center'>
                <Typography variant='h4' >Feel free to drop us a line</Typography>
                <Typography variant='inherit' color='textSecondary'  className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Typography>
                <Typography color='textSecondary' >Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.</Typography>
            </div>
            <Grid container className='flex justify-center items-center'>
                <Grid item sm={6} xs={12} className='pb-10'>
                    <Paper className={classes.formCard}>
                        <Typography className="mx-10 mt-10 mb-5 pt-8" variant="h6">Ready to get started?</Typography>
                        <Paper className="mx-10 my-5" component="form" >
                            <InputBase
                                className={classes.input}
                                placeholder="Enter name"
                                inputProps={{ 'aria-label': 'search google maps' }}
                            />
                        </Paper>
                        <Paper className="mx-10 my-5" component="form" >
                            <InputBase
                                className={classes.input}
                                placeholder="Enter email"
                                inputProps={{ 'aria-label': 'search google maps' }}
                            />
                        </Paper>
                        <Paper className="mx-10 my-5" component="form" >
                            <InputBase
                                className={classes.inputMsg}
                                placeholder="Enter message"
                                inputProps={{ 'aria-label': 'search google maps' }}
                            />
                        </Paper>
                        <Button className="mx-10 my-5" color='primary' variant="contained">Send Message</Button>
                    </Paper>    
                </Grid>
                <Grid item sm={6} xs={12} className='flex justify-center items-center'>                    
                  <div className={classes.rightGrid}>
                    <Typography className='m-10' color='textSecondary' variant='subtitle2'>Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years</Typography>
                    <Grid item className={classes.paperClass}>
                        <Paper className='mb-12 mx-5' component='div'>
                            <HomeIcon color='primary' className='m-2'/>
                        </Paper>
                        <div >
                            <Typography className='font-bold mb-2'>Address</Typography>
                            <Typography color='textSecondary' >Shahjalal University</Typography>
                            <Typography color='textSecondary' >Sylhet Bangladesh</Typography>
                        </div>
                    </Grid>
                    <Grid item className={classes.paperClass}>
                        <Paper className='mb-12 mx-5' component='div'>
                            <PhoneAndroidIcon color='primary' className='m-2'/>
                        </Paper>
                        <div>
                            <Typography className='font-bold mb-2'>Phone No</Typography>
                            <Typography color='textSecondary'>+880171xxxxxxx</Typography>
                            <Typography color='textSecondary'>+880194xxxxxxx</Typography>
                        </div>
                    </Grid>
                    <Grid item className={classes.paperClass}>
                        <Paper className='mb-12 mx-5' component='div'>
                            <EmailIcon color='primary' className='m-2'/>
                        </Paper>
                        <div>
                            <Typography className='font-bold mb-2'>Email Address</Typography>
                            <Typography color='textSecondary'>omuk420@gmail.com</Typography>
                            <Typography color='textSecondary'>tomuk420@gmail.com</Typography>
                        </div>
                    </Grid>
                  </div>
                </Grid>
            </Grid>
          </div>        
        </section>
    );

}
export default Contact;