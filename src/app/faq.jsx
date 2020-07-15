import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Grid, Typography, Button } from '@material-ui/core';
import Question from './question.svg';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import IconButton from '@material-ui/core/IconButton';
import clsx from "clsx";



const useStyles = makeStyles(({ palette, ...theme }) => ({
  section: {
    background: palette.background.default,
  },
    expansionTyp: {
        flexGrow: 1,
    }
    
}))

const ExpansionPanel = withStyles(({palette, ...theme }) => ({
    root: {
      border: '1px solid rgba(0, 0, 0, .050)',
      boxShadow: 'none',
      margin: '7px 0px 7px 0px',
      '&:not(:last-child)': {
        
      },
      '&:before': {
        display: 'none',
      },
      '&$expanded': {
        margin: '7px 0px 7px 0px',
        backgroundColor: palette.background.paper,
      },
    },
    expanded: {},
  }))(MuiExpansionPanel);
  
  const ExpansionPanelSummary = withStyles(({palette, ...theme }) => ({
    root: {
      
      borderBottom: '1px solid rgba(0, 0, 0, .125)',
      marginBottom: -1,
      minHeight: 46,
      '&$expanded': {
        minHeight: 46,
        backgroundColor: palette.primary.main,
        color: palette.primary.contrastText,
      },
    },
    content: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
      '&$expanded': {
        margin: '12px 0',
      },
    },
    expanded: {},
  }))(MuiExpansionPanelSummary);
  
  const ExpansionPanelDetails = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiExpansionPanelDetails);
  

const Faq = () => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
    };


    return(
        <section className={clsx('section',classes.section)}  id='faq'>
          <div className='çontainer'>
            <div  className='flex flex-column justify-center items-center'>
                <Typography variant='h4' color='textPrimary'>Frequently Asked Questions</Typography>
                <Typography variant='inherit' color='textSecondary'  className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Typography>
            </div>
            <Grid container sm={12} xs={12}>
                
                    <Grid container sm={6} xs={12} className='flex flex-column justify-center items-center'>
                    <img src={Question} height="400px" width="300px" />
                    </Grid>
                    <Grid container sm={6} xs={12}>
                        <div className='flex flex-column justify-center items-center m-10'>
                            <ExpansionPanel square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
                                <Typography className={classes.expansionTyp}>How to register?</Typography>
                                <IconButton className="m-0 p-1">
                                   {expanded==='panel1'? <ArrowDropUpIcon />: <ArrowDropDownIcon /> } 
                                </IconButton>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                            <ExpansionPanel square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                <ExpansionPanelSummary aria-controls="panel2d-content" id="panel2d-header">
                                <Typography className={classes.expansionTyp}>How to call a doctor?</Typography>
                                <IconButton className="m-0 p-1">
                                   {expanded==='panel2'? <ArrowDropUpIcon />: <ArrowDropDownIcon /> } 
                                </IconButton>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                            <ExpansionPanel square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                                <ExpansionPanelSummary aria-controls="panel3d-content" id="panel3d-header">
                                <Typography className={classes.expansionTyp}>How to get prescribed?</Typography>
                                <IconButton className="m-0 p-1">
                                   {expanded==='panel3'? <ArrowDropUpIcon />: <ArrowDropDownIcon /> } 
                                </IconButton>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        </div>
                    </Grid>
                </Grid>
          </div>
        </section>
    );

}
export default Faq;