import { Grid, Paper, makeStyles, Typography, Button } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      margin:'4px 0'
    },
    picBlock: {
        height:'140px',
        width:'250px',
        backgroundSize:'100% 100%',
        backgroundRepeat:'no-repeat',
        margin:'3px auto'
    }
  }));

const News = props => {
    const history = useHistory()
    const url = 'http://localhost:8000/uploads/' + (props.image);
    const classes = useStyles();

    const moreHandler = () => {
        history.push({
            pathname: '/news/' + (props.id)
        })
    };
    return(
       <Grid item xs={12}>
           <Paper className={classes.paper} xs={12}>
               <Grid>
                   <Grid className={classes.picBlock} style={
                       {backgroundImage:(props.image) ? 'url('+url+')': 'none'}}>

                   </Grid>
                   <Grid>
                        <Typography variant='h3'>
                            {props.title}
                        </Typography>
                        <Typography variant='h6'>
                            {props.date}
                            <Button>
                                Read more
                            </Button>
                        </Typography>
                   </Grid>
               </Grid>
           </Paper>
       </Grid>
    );
};

export default News;