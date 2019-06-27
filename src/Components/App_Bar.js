import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
});

export default function SimpleAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" >
        <Toolbar>
        <Grid 
            container
            spacing={0}
            direction="column"
            alignItems="center">
            <Avatar alt="Remy Sharp" src="https://secure.gravatar.com/avatar/55627ecd096d881a801f7d88d494eaff" className={classes.bigAvatar} />
            <Typography variant="h6" color="inherit">
                Rifqi Eka Hardianto
            </Typography>
        </Grid>          
        </Toolbar>
      </AppBar>
    </div>
  );
}