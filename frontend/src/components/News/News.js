import { Grid, Paper, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

const News = () => {
    const classes = useStyles();
    return(
       <Grid item xs={12}>
           <Paper className={classes.paper} xs={12}> Hello!</Paper>
       </Grid>
    );
};

export default News;