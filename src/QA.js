import './scss/App2.scss';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import { height, width } from '@mui/system';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import LoadingButton from '@mui/lab/LoadingButton';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import MailTwoToneIcon from '@mui/icons-material/MailTwoTone';
import SupervisorAccountTwoToneIcon from '@mui/icons-material/SupervisorAccountTwoTone';





export const QA = (props) => {
    const [loading, setLoading] = React.useState(false);
  function handleClick() {
    setLoading(true);
  }
        return(
<div className="containerq">
            <div className="card">
                <div className='co1'>
                <TextField
        id="input-with-icon-textfield"
        label="Name"
        sx={{width:'50%'}}
        InputProps={{
          startAdornment: (
            <InputAdornment  sx={{paddingBottom:'8px' }}>
              <SupervisorAccountTwoToneIcon fontSize='large'/>
            </InputAdornment>
          ),
        }}
      
      />
         <TextField 
        id="input-with-icon-textfield"
        label="Email"
        sx={{width:'50%'}}
        InputProps={{
          startAdornment: (
            <InputAdornment  sx={{paddingBottom:'8px' }}>
            <MailTwoToneIcon fontSize='large'/>
            </InputAdornment>
          ),
        }}
      
      />
      <TextareaAutosize
      maxRows={4}
      aria-label="maximum height"
      placeholder="Contents"
      defaultValue="Give Q&A about the presentation here, thanks."
      style={{ width: '100%' , height:'70%',fontSize:'30px' }}
    />
    <div style={{paddingLeft: '650px'}}>
          <LoadingButton
          size="small"
          onClick={handleClick}
          endIcon={<SendIcon />}
          loading={loading}
          loadingPosition="end"
          variant="contained"
          style={{margin: '30px'}}
        >
          Send
        </LoadingButton>
        </div>
                </div>
                <div className='co2'>
                    <h3>Contact team: <a href='https://zalo.me/g/wpqngd542'>Zalo</a> </h3>

                </div>
            </div>
</div>
        )
}
export default QA