import React from "react";
import { Card, CardContent, CardActionArea, Typography } from "@material-ui/core";
import { ListItem, ListItemText } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  cardStyle: {
    margin: "20px",
    background: "hsla(148, 43%, 42%, 0.8)",
    width: 345,
  },
  cardAction: {
    background: "hsla(148, 43%, 42%, 0.8)",
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

function MessageBoard() {
  const classes = useStyles();

  return (
    <Card className={classes.cardStyle}>
      <CardContent>
        <Typography variant="h6">Live Chat Room</Typography>
        <Typography variant="body2">Be inspired. Share your story.</Typography>
      </CardContent>
      <CardActionArea className={classes.cardAction}>
        <div>
          <ListItemLink href="http://localhost:3001/messages/">
            <ListItemText primary="Chat It Up >>" />
          </ListItemLink>
        </div>
      </CardActionArea>
    </Card>
  );
}

export default MessageBoard;
