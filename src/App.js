import logo from './logo.svg';
import './App.css';
import Home from "./components/Home.js";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import replayArrow from "./replay-arrow.png";

const theme = createMuiTheme({
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '"Courier"',
    ].join(','),
  },
  overrides: {
    MuiFormLabel: {
      root: {
        "&$focused": {
          color: "#46494c",
        }
      },
      focused: {}
    }
  }
});

function App() {
  return (
    <div className="App">
    <div>
      <img style={{float: "left", margin: "10px", width: "30px"}} src={replayArrow} />
    </div>
      <header className="App-header">
      <MuiThemeProvider theme={theme}>
        <Home />
      </MuiThemeProvider>
      </header>
    </div>
  );
}

export default App;
