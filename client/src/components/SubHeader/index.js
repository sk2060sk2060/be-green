import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  title: {
    flexGrow: 1,
    textAlign: "center",
    // color: "#006400",
    color: "#194D33",
    paddingBottom: "8px",
    fontWeight: "bold",
    fontFamily: "Arial",
  },

  // .go-green {
  //   border: solid;
  //   border-color: green;
  //   background-color: rgba(134, 198, 228, 0.4);
  //   padding: 30px;
  //   margin-left: 20%;
  //   margin-right: 20%;
  //   font-size: 50px;
  // }

  textContent: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#0A3A22",
  },
});

function SubHeader() {
  const classes = useStyles();

  return (
    <Box mt={2} mb={1}>
      <Box component="div" pt={1} pb={1} mx={30} className={classes.titleBox}>
        <Typography variant="h3" className={classes.title}>
          Be Green
        </Typography>
      </Box>
      <Box component="div" pt={1} pb={1}>
        <Typography variant="h6" className={classes.textContent}>
          Change your habits. Change the world.
        </Typography>
      </Box>
    </Box>
  );
}

export default SubHeader;
