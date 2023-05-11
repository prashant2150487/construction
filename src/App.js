import { Grid } from "@mui/material";
import "./App.css";
import LeftbarComp from "./Components/LeftbarComp";
import RightNavbarComp from "./Components/RightNavbarComp";
import RightContainer from "./Components/RightContainer";

function App() {
  return (
    <Grid container>
      <Grid item xs={2.2}>
        <LeftbarComp />
      </Grid>
      <Grid item xs={9.8}>
        <RightNavbarComp />
        <RightContainer />
      </Grid>
    </Grid>
  );
}

export default App;
