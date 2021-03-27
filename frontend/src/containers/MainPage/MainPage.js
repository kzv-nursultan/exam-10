import React from 'react';
import Grid from '@material-ui/core/Grid';
import News from '../../components/News/News';
import { Button, makeStyles } from '@material-ui/core';
import AddPost from '../../components/UI/AddPost';

const useStyles = makeStyles({
    news:{
        borderBottom:'2px solid black'
    }
})

const MainPage = () => {
    const classes = useStyles()
    return (
        <>
            <Grid container direction='column'>
                <h1 className={classes.news}>
                    News
                </h1>
                <Grid item direction='row' alignItems=''>
                    <h2>
                        Posts
                    </h2>
                        <AddPost/>
                </Grid>
            </Grid>
            <Grid container direction='column'>
                <News/>
            </Grid>
        </>
    );
};

export default MainPage;