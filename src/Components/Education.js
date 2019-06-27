import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Email from '@material-ui/icons/Email'
import Phone from '@material-ui/icons/Phone'
import School from '@material-ui/icons/School'

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
    <ListItem button>
        <ListItemIcon>
          <Email color="primary"/>
        </ListItemIcon>
        <ListItemText primary="ekarifqi1@gmail.com" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <Phone color="primary"/>
        </ListItemIcon>
        <ListItemText primary="+62 8223 7666676" />
      </ListItem>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <School color="primary"/>
        </ListItemIcon>
        <ListItemText primary="Education" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div">
        <ListItem button className={classes.nested}>
            <ListItemIcon>

            </ListItemIcon>
            <ListItemText secondary="(2006 - 2012) SD Negeri Jenang 02 Majenang"/>
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>

            </ListItemIcon>
            <ListItemText secondary="(2012 - 2015) SMP Negeri 1 Majenang"/>
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>

            </ListItemIcon>
            <ListItemText secondary="(2015 - 2016) SMA Semesta Bilingual Boarding School Semarang"/>
          </ListItem>

          <ListItem button className={classes.nested}>
            <ListItemIcon>

            </ListItemIcon>
            <ListItemText secondary="(2016 - 2018) SMA Negeri 2 Purwokerto"/>
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>

            </ListItemIcon>
            <ListItemText secondary="(2018 - 20**) Universitas Sebelas Maret"/>
          </ListItem>
        </List>
      </Collapse>
    </List>
    );
  }