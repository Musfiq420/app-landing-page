import React, { useEffect, useState } from "react";
import { Link as Scroll } from "react-scroll";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Button, useMediaQuery, Hidden, IconButton } from "@material-ui/core";
import { Menu, Clear } from "@material-ui/icons";
import clsx from "clsx";
import logo from "./logo.svg";
import { debounce } from "app/utils";



const fixedTopbarHeight = 64;
const normalTopbarHeight = 128;
const sidenavWidth = 260;


const useStyles = makeStyles(({ palette, ...theme }) => ({
    topbarNormal: {
        height: normalTopbarHeight,
        display: "flex",
        alignItems: "center",
        background: "transparent",
        color: palette.secondary.contrastText,
        transition: "height 250ms cubic-bezier(0.17, 0.67, 0.83, 0.67)",
      },
    topbarFixed: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        color: palette.text.primary,
        height: fixedTopbarHeight,
        background: palette.background.paper,
        boxShadow: theme.shadows[3],
        zIndex: 9999999,
        [theme.breakpoints.down("xs")]: {
          height: "auto",
          bottom: 0,
          right: "unset",
          width: sidenavWidth,
          left: (props) => (props.isSidebarOpen ? 0 : -sidenavWidth),
          alignItems: "flex-start",
          overflow: "auto",
          transition: "all 250ms cubic-bezier(0.17, 0.67, 0.83, 0.67)",
        },
      },
    topbarContent: {
        maxWidth: 1170,
        margin: "0 auto",
        padding: "0 1rem",
        flexGrow: 1,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",


        [theme.breakpoints.down("xs")]: {
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            height: "100vh",
            padding: 0,
      
            "& .logo": {
              paddingLeft: "1.25rem",
              margin: "1.25rem 0 !important",
              "& h4": {
                fontSize: "1rem !important",
              },
            },
            "& a": {
              width: "100%",
            },
            "& [class^='MuiButtonBase-']": {
              justifyContent: "flex-start",
              margin: "0 !important",
              padding: "1rem 1.25rem !important",
            },
          },
    },
    overlay: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0,0,0,0.54)",
        zIndex: 9999998,
      },
      menuButton: {
        position: "fixed",
        top: 14,
        left: 16,
        background: palette.background.paper,
        boxShadow: theme.shadows[6],
        zIndex: 9999997,
      },
    
}))

const Topbar = () => {

    const theme = useTheme();
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [isTopbarFixed, setTopbarFixed] = useState(false);
    const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
    const classes = useStyles({ isSidebarOpen });

    const scrollListener = debounce((event) => {
        window.scrollY > 100 ? setTopbarFixed(true) : setTopbarFixed(false);
      }, 18);
    
      const toggleSidenav = () => {
        setSidebarOpen(!isSidebarOpen);
      };
    
      useEffect(() => {
        window.addEventListener("scroll", scrollListener);
        return () => {
          window.removeEventListener("scroll", scrollListener);
        };
      }, [scrollListener]);
    
      useEffect(() => {
        if (isMobile) {
          setTopbarFixed(true);
          window.removeEventListener("scroll", scrollListener);
        } else 
        {
            if(window.scrollY < 100)
            setTopbarFixed(false);
            window.addEventListener("scroll", scrollListener);}
      }, [isMobile, scrollListener]);
    

    return (
    <div>
    <div className={clsx({
          [classes.topbarNormal]: true,
          [classes.topbarFixed]: isTopbarFixed,
        })}>
        <div  className={classes.topbarContent}>
            <div className={clsx({
              "flex justify-between items-center": true,
              "w-full": isMobile,
              })} >
                <Scroll className="logo flex items-center cursor-pointer">
                    <img className="mr-4 h-36" src={logo} />
                    <h4 className="m-4">Enverto</h4>
                </Scroll>
                <Hidden smUp>
              <IconButton onClick={toggleSidenav}>
                <Clear className="text-error" />
              </IconButton>
            </Hidden>
            </div>
            <div className="flex flex-wrap items-center">
                <Scroll
                to='home'
                duration={400}
                smooth={true}
                onClick={toggleSidenav}
                >
                <Button variant={isMobile?'text':"outlined"} color="primary" className={isMobile?"mx-1 px-4  text-left font-medium w-full":"mx-1 px-4  text-left font-medium "}>
                        Home
                    </Button>
                </Scroll>
                <Scroll
                to='features'
                duration={400}
                smooth={true}
                onClick={toggleSidenav}
                >
                <Button variant={isMobile?'text':"outlined"} color="primary" className={isMobile?"mx-1 px-4  text-left font-medium w-full":"mx-1 px-4  text-left font-medium "}>
                        Features
                    </Button>
                </Scroll>
                <Scroll
                to='procedure'
                duration={400}
                smooth={true}
                onClick={toggleSidenav}
                >
                <Button variant={isMobile?'text':"outlined"} color="primary" className={isMobile?"mx-1 px-4  text-left font-medium w-full":"mx-1 px-4  text-left font-medium "}>
                        How it works
                    </Button>
                </Scroll>
                <Scroll
                to='review'
                duration={400}
                smooth={true}
                onClick={toggleSidenav}
                >
                <Button variant={isMobile?'text':"outlined"} color="primary" className={isMobile?"mx-1 px-4  text-left font-medium w-full":"mx-1 px-4  text-left font-medium "}>
                        Reviews
                    </Button>
                </Scroll>
                <Scroll
                to='pricing'
                duration={400}
                smooth={true}
                onClick={toggleSidenav}
                >
                <Button variant={isMobile?'text':"outlined"} color="primary" className={isMobile?"mx-1 px-4  text-left font-medium w-full":"mx-1 px-4  text-left font-medium "}>
                        Pricing
                    </Button>
                </Scroll>
                <Scroll
                to='faq'
                duration={400}
                smooth={true}
                onClick={toggleSidenav}
                >
                <Button variant={isMobile?'text':"outlined"} color="primary" className={isMobile?"mx-1 px-4  text-left font-medium w-full":"mx-1 px-4  text-left font-medium "}>
                        FAQ
                    </Button>
                </Scroll>
                <Scroll
                to='contact'
                duration={400}
                smooth={true}
                onClick={toggleSidenav}
                >
                <Button variant={isMobile?'text':"outlined"} color="primary" className={isMobile?"mx-1 px-4  text-left font-medium w-full":"mx-1 px-4  text-left font-medium "}>
                        Contact
                    </Button>
                </Scroll>
            </div>
        </div>
    </div>
    <Hidden smUp>
        <IconButton className={classes.menuButton} onClick={toggleSidenav}>
          <Menu className="text-black" />
        </IconButton>
      </Hidden>
      {isMobile && isSidebarOpen && (
        <div onClick={toggleSidenav} className={classes.overlay} />
      )}
    </div>
    );
}

export default Topbar;