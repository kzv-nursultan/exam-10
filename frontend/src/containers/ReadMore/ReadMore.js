import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axiosData from '../../axiosData';
import CommentsBlock from '../../components/CommentsBlock/CommentsBlock';
import OnePost from '../../components/OnePost/OnePost';
import { getOneData } from '../../store/actions/actions';

const ReadMore = props => {
    const dispatch = useDispatch();
    const url = '/news/'+props.match.params.id;
    const [comment, setComment] = useState({
        author:'',
        body:''
    });

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

    const changeHandler = e => {
        const name = e.target.name;
        const value = e.target.value;

        setComment(prevState=>({
            ...prevState,
            [name]:value 
        }));
    };

    const submitHandler = async e => {
        e.preventDefault();

        const formData = new FormData();

        Object.keys(comment).forEach(key=>{
            formData.append(key, comment[key]);
        });
        formData.append('news_id', props.match.params.id);

        await axiosData.post('/comments', formData);
    };

   

    return(
        <div>
            {newsBlock}
            <CommentsBlock id = {news.id}/>
            <div>
                <h3>Add comment</h3>
                <form onSubmit={submitHandler}>
                    <input name='author' placeholder='author' onChange={changeHandler}/>
                    <input name='body' required placeholder='text' onChange={changeHandler}/>
                        <button type='submit'>
                            Send
                        </button>
                </form>
            </div>
        </div>
    );
};

export default ReadMore;