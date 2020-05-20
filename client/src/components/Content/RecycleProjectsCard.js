import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, CardActionArea, Typography, Paper } from "@material-ui/core";


import owlImage from "./owlartcraft.jpg";
import bottleHolder from "./bottleholder.jpg";
import birdFeeder from "./bird-feeder-1.jpg";
import minionFlowerPlanterPot from "./minion-flower-planter-pot.jpg";
import tirePlanter from "./tire-project.jpg";
import lightBulb from "./light-bulb-art.png"


const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  cardStyle: {
    margin: "20px",
    // background: "#008080",
    // maxWidth: 345,
    textAlign: "center",
    // background: "hsla(148, 43%, 42%, 0.51)",
    background: "hsla(148, 43%, 42%, 0.8)",
  },
  carouselInner: {
    height: "250px",   
  },
  carouselImage: {
    height: "200px",
    width: "200px",
    marginTop: "10px",
  },
  imageHeader: {
    marginTop: "6px",
  }
}));

function RecycleProjects() {
  const classes = useStyles();
    var items = [
      {
        name: "Owl Decoration Project",
        image: owlImage
      },
      {
        name: "Pen Holder Project",
        image: bottleHolder
      },
      {
        name: "Bird Feeder Project",
        image: birdFeeder
      },
      {
        name: "Minion Flower Planter Pot Project",
        image: minionFlowerPlanterPot
      },
      {
        name: "Tire Planters Project",
        image: tirePlanter
      },
      {
        name: "Light Bulb Art Project",
        image: lightBulb
      }
    ]

    return (
      <Card className={classes.cardStyle}>
        <CardContent>
          <Typography variant="h6">
            Recycle Projects
          </Typography>
        </CardContent>
        <CardActionArea>
          <div>      
            <Carousel>
              {
                items.map( item => <Item item={item} /> )
              }
            </Carousel>
          </div>
        </CardActionArea>
      </Card> 
    )
}

function Item(props) {
  const classes = useStyles();
  return (
    <Paper className={classes.carouselInner}>
      <img src={props.item.image} alt="recycle project" className={classes.carouselImage} />
      <h6 className={classes.imageHeader}>{props.item.name}</h6>
    </Paper>
     
  )
}

export default  RecycleProjects;






// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import { Card, CardContent, CardActionArea, Typography } from "@material-ui/core";
// import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from "@material-ui/core";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import { List, ListItem, ListItemText } from "@material-ui/core";

// const useStyles = makeStyles((theme) => ({
//   heading: {
//     fontSize: theme.typography.pxToRem(15),
//     fontWeight: theme.typography.fontWeightRegular,
//   },
//   cardStyle: {
//     margin: "20px",
//     background: "#008080",
//     maxWidth: 345,
//   },
// }));

// function ListItemLink(props) {
//   return <ListItem button component="a" {...props} />;
// }

// function RecycleProjects() {
//   const classes = useStyles();

//   return (
//     <Card className={classes.cardStyle}>
//       <CardContent>
//         <Typography variant="h6">Recycle Projects</Typography>
//         <Typography variant="body2">
//           Does your community not have a recycle center? No problem. Search for
//           one here and do your part.
//         </Typography>
//       </CardContent>
//       <CardActionArea>
//         <div>
//           <ExpansionPanel>
//             <ExpansionPanelSummary
//               expandIcon={<ExpandMoreIcon />}
//               aria-controls="panel1a-content"
//               id="panel1a-header"
//             >
//               <Typography className={classes.heading}>Materials</Typography>
//             </ExpansionPanelSummary>
//             <ExpansionPanelDetails>
//               <List component="nav" aria-label="secondary mailbox folders">
//                 <ListItemLink href="#simple-list">
//                   <ListItemText primary="Aluminum" />
//                 </ListItemLink>
//                 <ListItemLink href="#simple-list">
//                   <ListItemText primary="Plastic" />
//                 </ListItemLink>
//                 <ListItemLink href="#simple-list">
//                   <ListItemText primary="Other >>" />
//                 </ListItemLink>
//               </List>
//             </ExpansionPanelDetails>
//           </ExpansionPanel>
//         </div>
//       </CardActionArea>
//     </Card>
//   );
// }

// export default RecycleProjects;
