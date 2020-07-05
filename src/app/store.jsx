import React from 'react';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid, Typography, Button } from "@material-ui/core";
import ShopIcon from '@material-ui/icons/Shop';
import AppleIcon from '@material-ui/icons/Apple';
import Medicine from './medicine.svg';



const useStyles = makeStyles(({ palette, ...theme }) => ({

    root:{
      paddingBottom: "60px",
    },
    gridStyle: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        marginTop: "100px",
        marginLeft: "100px",
    },
    liStyle: { /* Add content: \2022 is the CSS Code/unicode for a bullet */
      color: palette.primary.main, /* Change the color */
      marginTop: "0",
    "& p":{

      }
    },
    

}));

const Store = () => {

    const classes = useStyles();

    return(
        <section className={classes.root}>
            <Grid container spacing={2}>
                <Grid item sm={6} xs={12} >
                    <div className={classes.gridStyle}>
                        <Typography variant="h4" >Get prescription, Order Medicine from Home</Typography>
                        <Typography className="mt-6 mb-2" color="textSecondary">
                  Stop worrying about your health, get prescribed at home through <br />
                  our beautifully UI-designed medical service app at free of cost
                </Typography>
                
                  <ul className={classes.liStyle}>
                    <li><Typography color="textSecondary">Lorem ipsum dolr adipiscing elit</Typography></li>
                    <li><Typography color="textSecondary">dolor sit amet, consectetuer adipiscing elit</Typography></li>
                    <li><Typography color="textSecondary">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</Typography></li>
                    <li><Typography color="textSecondary">Lorem ipsum dolscing elit</Typography></li>

                  </ul>
                
                <div>
                  <Button
                    className="mt-6 mr-4 border-radius-8 elevation-z3"
                    variant="contained"
                    color="primary"
                    startIcon={<ShopIcon />}

                  >
                    Get it now
                  </Button>
                  <Button
                    className="mt-6 mr-4 border-radius-8 elevation-z3"
                    variant="outlined"
                    color="primary"
                    startIcon={<AppleIcon />}

                  >
                    Get it now
                  </Button>
                </div>
                </div>
                </Grid>
                <Grid item sm={6} xs={12} >
                    <div className='p-10'>
                        <img src={Medicine} height='400px' width='400px'/>
                    </div>
                </Grid>
            </Grid>
        </section>
    );

};

export default Store;