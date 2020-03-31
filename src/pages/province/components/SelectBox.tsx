import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        border:'1px solid black',
        borderRadius:'3px',
        padding:'8px'
    },
}));

function SelectBox(props:any) {
    const {displayLabel,setDisplayLabel} = props;
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleChange = (event:any) => {
        setDisplayLabel(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };
    return (
    <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">对比什么</InputLabel>
        <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={displayLabel}
            onChange={handleChange}
        >
            <MenuItem value={'currentConfirmedCount'}>今日确诊数</MenuItem>
            <MenuItem value={'confirmedCount'}>累计确诊数</MenuItem>
            <MenuItem value={'suspectedCount'}>疑似病例数</MenuItem>
            <MenuItem value={'curedCount'}>治愈数</MenuItem>
            <MenuItem value={'deadCount'}>死亡数</MenuItem>
        </Select>
    </FormControl>
    )
}

export default SelectBox
