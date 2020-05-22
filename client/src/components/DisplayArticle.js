import React from "react";
import { ListItem, ListItemText } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  listItem: {
    background: "hsla(148, 43%, 42%, 0.8)",
    // backgroundColor: "rgba(3, 168, 244, 0.69)",
    padding: "10px",
    fontWeight: "bolder",
  }
}));

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

function DisplayArticle(props) {
  const classes = useStyles();
  console.log(props);
    return (
    <ListItemLink href={props.url} target= "_blank">
      <ListItemText primary={props.description} className={classes.listItem}/>
    </ListItemLink>
    )
}
export default DisplayArticle;

