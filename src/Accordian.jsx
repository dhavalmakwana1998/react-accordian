import React, { useState } from "react";
import { Typography, Container } from "@material-ui/core";
import MyAccordian from "./MyAccordian";
import questions from "./api";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  myRoot: {
    padding: "20px",
  },
}));

function Accordian() {
  const [question, setQuestion] = useState(questions);

  const classes = useStyles();

  return (
    <>
      <Container className={classes.myRoot}>
        <Typography variant="h3" style={{ color: "green" }}>
          My Custom Accordian Style
        </Typography>

        {question.map((item) => {
          return <MyAccordian key={item.id} {...item} />;
        })}
      </Container>
    </>
  );
}

export default Accordian;
