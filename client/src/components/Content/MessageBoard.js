import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, CardActionArea, Typography } from "@material-ui/core";
import { ListItem, ListItemText } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  cardStyle: {
    margin: "20px",
    // background: "#008080",
    // maxWidth: 345,
    background: "hsla(148, 43%, 42%, 0.8)",
  },
  cardAction: {
    // backgroundColor: "#008B8B",
    // background: "hsla(148, 43%, 42%, 0.51)",
    background: "hsla(148, 43%, 42%, 0.8)",
  }
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

function MessageBoard() {
  const classes = useStyles();

  return (
    <Card className={classes.cardStyle}>
      <CardContent>
        <Typography variant="h6">
          Message Board
        </Typography>
        <Typography variant="body2">
          Be inspired. Share your story.
        </Typography>
      </CardContent>
      <CardActionArea className={classes.cardAction}>
        <div>
          <ListItemLink href="#">
            <ListItemText primary="Chat It Up >>" />
          </ListItemLink>  
        </div>
      </CardActionArea>
    </Card>
  );
}

export default MessageBoard;
