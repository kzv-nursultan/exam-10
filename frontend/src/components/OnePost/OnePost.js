import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axiosData from '../../axiosData';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
    textAlign:'center'
  },
  picBlock: {
    height:'140px',
    width:'250px',
    backgroundSize:'100% 100%',
    backgroundRepeat:'no-repeat',
    margin:'3px auto'
 }
});

const OnePost = props => {
    const classes = useStyles();
    const history = useHistory();
    const imageUrl = 'http://localhost:8000/uploads/' + (props.image);
    console.log();

    const deleteHandler = async () => {
        try {
            await axiosData.delete('/news/' + props.id);
        } catch {
            console.log('error!!!')
        };
        history.push({
            pathname:'/'
        });
    };

  return (
    <Card className={classes.root}>
      <CardActionArea>
      <Grid className={classes.picBlock} style={
                       {backgroundImage:(props.image) ? 'url('+imageUrl+')': 'none'}}>

      </Grid>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.body}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={deleteHandler}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default OnePost;