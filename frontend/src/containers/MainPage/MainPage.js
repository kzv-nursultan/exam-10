import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import News from '../../components/News/News';
import {  makeStyles } from '@material-ui/core';
import AddPost from '../../components/UI/AddPost';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../store/actions/actions';

const useStyles = makeStyles({
    news:{
        borderBottom:'2px solid black'
    }
})

const MainPage = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    
    const news = useSelector( state => state.data.value);

    useEffect(()=>{
        try {
            dispatch(getData('/news'));
        } catch (e) {
            console.log(e)
        }
    },[dispatch]);

    const list = (
        news.map(object=>(
            <News
            key = {object.id}
            id = {object.id}
            image={object.news_image}
            title={object.news_title}
            date={object.news_date}/>
        ))
    )


    return (
        <>
            <Grid container direction='column'>
                <h1 className={classes.news}>
                    News
                </h1>
                <Grid container item direction='row' alignItems='center' justify='space-evenly'>
                    <h2>
                        Posts
                    </h2>
                        <AddPost/>
                </Grid>
            </Grid>
            <Grid container direction='column'>
                {list}
            </Grid>
        </>
    );
};

export default MainPage;