import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import logo from "./recyclelogo.jpg";

const useStyles = makeStyles({
  logo: {
    maxWidth: 80,
    maxHeight: 80,
  },
  logoLocation: {
    margin: "auto",
  },
  // toolbarColor: {
  //   backgroundColor: "#4caf50",
  // },
});

function Header() {
  const classes = useStyles();

  return (
    <div>
      {/* <AppBar position="static"> */}
      {/* <Toolbar className={classes.toolbarColor}> */}
      <Typography className={classes.logoLocation}>
        <img src={logo} alt="logo" className={classes.logo} mx="auto" />
      </Typography>
      {/* </Toolbar> */}
      {/* </AppBar> */}
    </div>
  );
}

export default Header;
