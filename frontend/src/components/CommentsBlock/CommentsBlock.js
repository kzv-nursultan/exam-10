import React, { useEffect, useState } from 'react';
import axiosData from '../../axiosData';
import ListofComment from '../ListofComment/ListofComment';


const CommentsBlock = props => {

    const [newsId, setNewsId] = useState([]);

    useEffect(()=>{

        const getData = async () => {
            const response = await axiosData.get('/comments?news_id=' + props.id);
                setNewsId(response.data);
        };

        getData().catch();
    },[props.id]);

    let list = 'No comments';

    if (newsId.length>0) {
        list = (
            newsId.map(object=>(
                <ListofComment
               key = {object.id}
               id = {object.id}
               author = {object.comment_author}
               text = {object.comment_text}
               />
            ))
        );
    };

    return(
        <div style={{textAlign:'center',
                        margin:'5px 0'}}>
            {list}
        </div>
    );
};

export default CommentsBlock;