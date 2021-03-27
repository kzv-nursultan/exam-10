import React from 'react';
import axiosData from '../../axiosData';

const ListofComment = props =>{

    const deleteHandler = async () => {
        await axiosData.delete('/comments/' + props.id);
    };
    
    return(
        <div style={{
            border:'2px solid black',
            display:'flex',
            alignItems:'center',
            justifyContent:'space-evenly',
            margin:'5px 0'
        }}>
            <h3>
                {props.author} wrote: {props.text}
            </h3>
            <button onClick = {deleteHandler}>
                delete
            </button>
        </div>
    );
};

export default ListofComment;