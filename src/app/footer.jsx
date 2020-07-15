import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import TouchRipple from "@material-ui/core/ButtonBase";
import Facebook from './facebook.svg';
import Twitter from './twitter.svg';
import Youtube from './youtube.svg';


const useStyles = makeStyles(({ palette, ...theme }) => ({
  section: {
    backgroundColor: palette.primary.main,
  },
  logo: {
    letterSpacing: 2.5
  }
}));

const Footer1 = () => {
  const classes = useStyles();
  const productLink = ["feature", "use cases", "pricing"];
  const supportLink = ["Blog", "FAQ", "Support"];
  const companyLink = ["About", "Privacy Policy", "Terms of Service"];

  return (
    <section
      className={clsx("section text-white", classes.section)}
    >
      <div className="container">
        <Grid container spacing={3} alignItems="center">
        <Grid item md={4} xs={12}>
            <div className={clsx("m-0 font-semibold mb-3", classes.logo)}>
              ENVERTO
            </div>
            <div className='max-w-200'>
                <Typography color='rgba(255, 255, 255, 0.15)' variant='body2'>Lorem ipsum dolor sit amet, consectetur adip isicing elit. Quis non, fug totam vel laboriosam vit.</Typography>
            </div>
            <div className="flex flex-wrap mt-5">
              <img
                src={Facebook}
                alt="facebook"
                className="w-full h-20 w-20 mr-3 cursor-pointer"
              />
              <img
                src={Twitter}
                alt="facebook"
                className="w-full h-20 w-20 mr-3 cursor-pointer"
              />
              <img
                src={Youtube}
                alt="facebook"
                className="w-full h-20 w-20 mr-3 cursor-pointer"
              />
            </div>
          </Grid>
          
          <Grid item md={2} xs={6}  className='mt-10'>
            <h5 className="mt-0 font-semibold">PRODUCT</h5>
            <div className=''>
              {productLink.map((item, ind) => (
                <TouchRipple
                  className="w-full justify-start text-left ml--4 border-radius-4"
                  key={ind}
                >
                  <span className="px-4 py-2 capitalize">{item}</span>
                </TouchRipple>
              ))}
            </div>
          </Grid>
          
          <Grid item md={2} xs={6} className='mt-10'>
            <h5 className="mt-0 font-semibold">COMPANY</h5>
            {companyLink.map((item, ind) => (
              <TouchRipple
                className="w-full justify-start text-left ml--4 border-radius-4"
                key={ind}
              >
                <span className="px-4 py-2 capitalize">{item}</span>
              </TouchRipple>
            ))}
          </Grid>
          <Grid item md={2} xs={6} className='mt-10'>
            <h5 className="mt-0 font-semibold">FEATURES</h5>
            {productLink.map((item, ind) => (
              <TouchRipple
                className="w-full justify-start text-left ml--4 border-radius-4"
                key={ind}
              >
                <span className="px-4 py-2 capitalize">{item}</span>
              </TouchRipple>
            ))}
          </Grid>
          <Grid item md={2} xs={6} className='mt-10'>
            <h5 className="mt-0 font-semibold">SUPPORT</h5>
            {supportLink.map((item, ind) => (
              <TouchRipple
                className="w-full justify-start text-left ml--4 border-radius-4"
                key={ind}
              >
                <span className="px-4 py-2 capitalize">{item}</span>
              </TouchRipple>
            ))}
          </Grid>
          
        </Grid>
      </div>
    </section>
  );
};

export default Footer1;
