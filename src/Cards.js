import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


class SimpleMediaCard extends Component {
    constructor(props){
        super(props)
    }
    render(){
  const classes  = {
  card: {
    maxWidth: '100%'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};
  return (
    <div>
      <Card style={{maxWidth: '100%'}} >
        <CardMedia
          style={{height: 0,
            paddingTop: '56.25%'}}
          image="./static/lunch2.jpeg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            abc
          </Typography>
          <Typography component="p">
            {/* {props.item.Desc} */}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Order
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default SimpleMediaCard;
