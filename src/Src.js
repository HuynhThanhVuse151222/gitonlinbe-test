
import './scss/App2.scss';
import * as React from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import Stack from '@mui/material/Stack';
import AssignmentIcon from '@mui/icons-material/Assignment';
export const Src = (props) => {
    return(
        <div className='containerq'>
            <div className='cardc'>
                <div className='co1'>
                <h1>Resource of the project in here</h1>
                <Stack direction="row" alignItems="center" spacing={2}>
      <Button variant="contained" component="label">
        Upload
        <input hidden accept="image/*" multiple type="file" />
      </Button>
      <IconButton color="primary" aria-label="upload picture" component="label">
        <input hidden accept="image/*" type="file" />
        <AssignmentIcon />
      </IconButton>
    </Stack>
                </div>
                <div className='co2'>
                    <img src='assets/images/qr.png' alt='' style={{ width: '100%' , height:'100%'}}/>
                </div>
                
            </div>
        </div>
    )
}
export default Src