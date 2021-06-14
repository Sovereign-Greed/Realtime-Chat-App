import { createMuiTheme } from '@material-ui/core';
import { Camera, Flare, Fireplace, AcUnit, OfflineBolt, CloudCircle } from '@material-ui/icons'

export function changeDate(date) {
    const newDate = new Date(date).toLocaleString();
    return (newDate !== 'Invalid Date' ? newDate : date); 
}

export const chatroomIcons = {
  Camera: <Camera />,
  Flare: <Flare />,
  Fireplace: <Fireplace />,
  AcUnit: <AcUnit />,
  OfflineBolt: <OfflineBolt />,
  CloudCircle: <CloudCircle />
}

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#288ccc'
    },
    secondary: {
      main: '#0763e5'
    },
    background: {
      main: '#FFFBFA'
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1350,
      xl: 1920
    }
  },
  // overrides: {
  //   MuiCssBaseline: {
  //     '@global': {
  //       '*::-webkit-scrollbar': {
  //         width: '8px',
  //         height: '8px',
  //         backgroundColor: '#aaa',
  //       },
  //       '*::-webkit-scrollbar-track': {
  //         '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.3)',
  //         borderRadius: '10px',
  //       },
  //       '*::-webkit-scrollbar-thumb': {
  //         '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.5)',
  //         borderRadius: '10px',
  //       }
  //     }
  //   }
  // }
});
