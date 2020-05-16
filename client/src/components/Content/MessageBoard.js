import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  CardActionArea,
  Typography,
} from "@material-ui/core";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { List, ListItem, ListItemText } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  cardStyle: {
    margin: "20px",
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
        <Typography variant="h6">Message Board</Typography>
        <Typography variant="body2">Be inspired. Share your story.</Typography>
      </CardContent>
      <CardActionArea>
        <div>
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>Materials</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <List component="nav" aria-label="secondary mailbox folders">
                <ListItemLink href="#simple-list">
                  <ListItemText primary="Aluminum" />
                </ListItemLink>
                <ListItemLink href="#simple-list">
                  <ListItemText primary="Plastic" />
                </ListItemLink>
                <ListItemLink href="#simple-list">
                  <ListItemText primary="Other >>" />
                </ListItemLink>
              </List>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
      </CardActionArea>
    </Card>
  );
}

export default MessageBoard;
