import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import OnePost from '../../components/OnePost/OnePost';
import { getOneData } from '../../store/actions/actions';

const ReadMore = props => {
    const dispatch = useDispatch();
    const url = '/news/'+props.match.params.id

    const news = useSelector(state => state.data.news);

    useEffect(()=>{        
        try {
            dispatch(getOneData(url));
        } catch (e) {
            console.log(e)
        };
    },[dispatch,url]);

    const newsBlock = (
        <OnePost
        key = {news.id}
        id = {news.id}
        image = {news.news_image}
        title = {news.news_title}
        body = {news.news_body}        
        />
    );

    const commentBlock = (
        <div></div>
    );

    return(
        <div>
            {newsBlock}
        </div>
    );
};

export default ReadMore;