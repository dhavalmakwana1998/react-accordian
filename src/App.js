import React from "react";
import "./App.css";
import Accordian from "./Accordian";
import { Container, Paper, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  myRoot: {
    padding: "20px",
  },
});

function App() {
  const classes = useStyles();

  return (
    <div className={classes.myRoot}>
      <Container>
        <Paper>
          <Box>
            <Accordian />
          </Box>
        </Paper>
      </Container>
    </div>
  );
}

export default App;
