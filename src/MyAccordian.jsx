import React, { useState } from "react";
import { Typography, Box, Card, CardContent } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const MyAccordian = (props) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div>
        <Box p={2}>
          <Card p={3}>
            <CardContent onClick={() => setShow(!show)}>
              <Typography color="secondary" style={{ display: "flex" }}>
                {!show ? (
                  <AddCircleIcon
                    style={{ marginRight: "6px" }}
                    color="primary"
                  />
                ) : (
                  <RemoveCircleIcon
                    style={{ marginRight: "6px" }}
                    color="secondary"
                  />
                )}
                {props.question}
              </Typography>
              {show && (
                <Typography
                  variant="h6"
                  color="primary"
                  style={{ padding: "10px 30px" }}
                >
                  <ArrowForwardIosIcon
                    style={{ fontSize: "15px" }}
                    fontSize="small"
                  />
                  {props.ans}
                </Typography>
              )}
            </CardContent>
          </Card>
        </Box>
      </div>
    </>
  );
};

export default MyAccordian;
