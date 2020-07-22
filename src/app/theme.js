import { createMuiTheme } from "@material-ui/core/styles";

const buttonOption = {
  root: {
    textTransform: "none",
    fontWeight: "normal",
    
  }
};

export const materialTheme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      
      light: "#67daff",
      main: "#6C63FF",
      contrastText: "rgba(255,255,255,0.95)"
    },
    secondary: {
      main: "#f6f5ff",
      contrastText: "#212121"
    },
    text: {
      
    },
    
    contrastThreshold: 3,
    tonalOffset: 0.1
  },
  typography: {
    fontSize: 14,
    htmlFontSize: 16,
    useNextVariants: true
  },
  overrides: {
    MuiButton: buttonOption,
    MuiFab: buttonOption,
    MuiCard: {
      root: {
        borderRadius: 8
      }
    }
  }
});
