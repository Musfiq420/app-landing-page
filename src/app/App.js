import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { materialTheme } from "./theme";
import Topbar from "./topbar";
import GlobalStyles from "./styles/GlobalStyles";
import Home from "./home";
import Features from "./features";
import Features2 from "./features2";
import Store from "./store";
import Procedure from "./procedure";
import Review from './review';
import Price from './price';
import Faq from './faq';
import Contact from './contact';
import Footer1 from './footer';


const App = () => {
  return (
    
      <ThemeProvider theme={materialTheme}>
        <GlobalStyles>
          
          <Home />
          <Features />
          <Store />
          <Features2 />
          <Procedure />
          <Review />
          <Price />
          <Faq />
          <Contact />
          <Footer1 />
        </GlobalStyles>
      </ThemeProvider>
        
    
  );
};

export default App;
