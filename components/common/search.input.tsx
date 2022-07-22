import SearchIcon from '@mui/icons-material/Search';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import * as React from 'react';

interface propsType {
  callback: Function
}
export default function CustomizedInputBase({ callback }: propsType) {

  const [searchVal, setSearchVal] = React.useState('')

  const inputSubmitHandler = React.useCallback(() => {
    return callback(searchVal)

  }, [searchVal])

  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
      {/* <IconButton sx={{ p: '10px' }} aria-label="menu">
        <MenuIcon />
      </IconButton> */}
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search developer"
        inputProps={{ 'aria-label': 'search google maps' }}
        onChange={e => { setSearchVal(e.target.value) }}
        error={true}

      />

      {/* <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton> */}
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions" onClick={inputSubmitHandler}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}