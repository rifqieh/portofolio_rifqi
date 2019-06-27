import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Stars from '@material-ui/icons/Stars'

const useStyles = makeStyles({
    card: {
      maxWidth: 900,
      minWidth: 600
    },
    media: {
      height: 140,
    },
  });

export default function Achievement() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
  
    function handleClick() {
      setOpen(!open);
    }
  
    return (
            <List
      
      className={classes.root}
    >
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <Stars color="primary"/>
        </ListItemIcon>
        <ListItemText primary="Achievement" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div">
        <ListItem button className={classes.nested}>
            <ListItemIcon>

            </ListItemIcon>
            <ListItemText secondary="(2013) Regional Chess Competition - 2nd Place"/>
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>

            </ListItemIcon>
            <ListItemText secondary="(2016) Corefest Logic Competition - 2nd Place"/>
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>

            </ListItemIcon>
            <ListItemText secondary="(2017)  Contributed to open source software completing 19 tasks as part of  Google Code-in 2017 "/>
          </ListItem>

          <ListItem button className={classes.nested}>
            <ListItemIcon>

            </ListItemIcon>
            <ListItemText secondary="(2017) Mathematics Logic Competition - 1st Place"/>
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>

            </ListItemIcon>
            <ListItemText secondary="(2017) Olimpiade TIK Nasional - 2nd Place"/>
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>

            </ListItemIcon>
            <ListItemText secondary="(2017) AFR Habibie Festival - 2nd Place"/>
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>

            </ListItemIcon>
            <ListItemText secondary="(2017) Game Dev Habibie Festival - 3rd Place"/>
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>

            </ListItemIcon>
            <ListItemText secondary="(2017) Smart Student Competition - 3rd Place & Best Theory"/>
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>

            </ListItemIcon>
            <ListItemText secondary="(2018) Try Out SBMPTN Journal Academy - 3rd Place"/>
          </ListItem>
        </List>
      </Collapse>
    </List>
    );
  }