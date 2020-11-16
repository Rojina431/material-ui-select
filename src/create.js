   /* eslint-disable no-use-before-define */
import React,{useRef} from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Chip from '@material-ui/core/Chip';
import clsx from 'clsx';
import CancelIcon from '@material-ui/icons/Cancel';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
    '& > * + *': {
      marginTop: theme.spacing(3),
    },
  },
  divider:{
    color:'grey',
    fontSize:'2rem',
    marginBottom:'2rem',
    
},
textfield:{
border:"1px solid grey",
},
option:{
 width:'51%'
}

}));

export default function CreateOption() {
  const classes = useStyles();

  let downRef=useRef();

  const [arrow, setArrow] = React.useState([false]);
  const onClickInput=()=>{
    setArrow(!arrow)
}

let icon = null; 
if (arrow===true) {
  icon = <CancelIcon/>;
} else {
  icon=<KeyboardArrowDownIcon />;
}

React.useEffect(()=>{
  document.addEventListener('mousedown',(event)=>{
      if(!downRef.current.contains(event.target)){
          setArrow(false)
      }
  })
 
},[])
  return (
    <div className={classes.root} ref={downRef}>
      <Autocomplete 
        multiple
        id="tags-filled"
        options={top100Films.map((option) =>
        option.title
        )}
        
        freeSolo
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip variant="outlined" label={option} 
            {...getTagProps({ index })} 
            color="primary"
            className={clsx(classes.option)}
           />  
          ))
        }
        renderInput={(params) => (
          <TextField onClick={onClickInput}
           {...params} variant="filled" 
          className={clsx(classes.textfield)} 
          InputProps={{
            ...params.InputProps,
            
            endAdornment:
             <span className={clsx(classes.divider)}>|{icon}</span>,
            
          }}
          />
        )}
      />
    </div>
  );
}

const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
  ]
