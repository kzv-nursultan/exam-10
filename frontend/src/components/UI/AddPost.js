import React, {useState, useRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const rand = () => {
  return Math.round(Math.random() * 20) - 10;
};

const getModalStyle = () => {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
};

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  form: {
      display:'flex',
      flexDirection:'column',
      textAlign:'center'
  },
  hiddenInput:{
      display:'none'
  },
  sendBtn: {
      width:'200px',
      margin:'10px auto'
  },
  textFields: {
      margin:'5px 0'
  }
}));

const  AddPost = () => {
  const classes = useStyles();
  const inputRef = useRef();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const [news, setNews] = useState({
      title:'',
      body:'',
      image:''
  })

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const inputChangeHandler = e => {
    const name = e.target.name;
    const value = e.target.value;

    setNews(prevState=>({
        ...prevState,
        [name]:value 
    }));
};

  const fileChangeHandler = e => {
    if(e.target.files[0].name){
        const name = e.target.name;
        const file = e.target.files[0];

        setNews(prevState=>({
            ...prevState,
            [name]:file
        }));
    } else {
        setNews(prevState=>({
            ...prevState,
            image:''
        }));
    };
}; 

const inputClick = () => {
    inputRef.current.click();
};

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Grid>
          <h3>
              Add news
          </h3>
            <form className={classes.form}>
                <TextField
                name='title'
                label='News Title'
                required
                value={news.title}
                variant='outlined'
                onChange={inputChangeHandler}
                className={classes.textFields}/>

                <TextField
                multiline
                rows={3}
                name='body'
                label='News Text'
                required
                value={news.body}
                variant='outlined'
                onChange={inputChangeHandler}
                className={classes.textFields}/>

                <input
                type='file'
                className={classes.hiddenInput}
                name='image'
                ref={inputRef}
                onChange={fileChangeHandler}
                />

                <TextField 
                disabled 
                value={news.image ? news.image.name : 'image'}
                InputLabelProps={{ shrink: true }}
                variant='filled'
                label='Image Name'
                onClick={inputClick}/>
                <Button type='submit' variant='contained' color='primary'
                className={classes.sendBtn}>
                    send
                </Button>
            </form>
      </Grid>
    </div>
  );

  return (
    <div>
      <Button type="button" variant="contained" color="secondary" onClick={handleOpen}>
        Add News
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}

export default AddPost;