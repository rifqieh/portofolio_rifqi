import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Achievement from './Achievement'
import Education from './Education'
import Programming from './Programming'
import Footer from './Footer'
import Avatar from '@material-ui/core/Avatar'
import ListItem from '@material-ui/core/ListItem'

const useStyles = makeStyles({
  card: {
    maxWidth: 400,
    minWidth: 400
  },
  media: {
    height: 140,
  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    marginRight: 15,
    width: 40,
    height: 40,
  },

});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://rifqinotes.files.wordpress.com/2018/08/0b2aa-17127120_383020098746382_7107804458335076352_n.jpg?w=923&h=692&zoom=2"
          title="background"
        />
        <CardContent>
          <ListItem>
            <Avatar alt="Remy Sharp" src="https://secure.gravatar.com/avatar/55627ecd096d881a801f7d88d494eaff" className={classes.bigAvatar} />
            <Typography gutterBottom variant="h5" component="h2">
            Rifqi Eka Hardianto
          </Typography>
          </ListItem>
          <Education/>
          <Achievement/>
          <Programming/>
          {/* <Content/> */}
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Footer/>
        {/* <Button size="small" color="primary">
          Instagram
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button> */}
      </CardActions>
    </Card>
  );
}