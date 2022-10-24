
import './scss/App.scss';
import * as React from 'react';
import Box from '@mui/material/Box';
import Diversity3SharpIcon from '@mui/icons-material/Diversity3Sharp';
import AccountBoxSharpIcon from '@mui/icons-material/AccountBoxSharp';
import ContactsSharpIcon from '@mui/icons-material/ContactsSharp';
import {Card, CardTitle, Icon} from 'react-materialize';
function App() {
  return (
    <div className='App1'>
    <div className='container'>
      <div className='col1'>
    <Box className='b1'>
      <img src='assets/images/in.jpg' alt=''/>
    </Box>
    <Box className='b2'>
      <div className='row1'>
        <Diversity3SharpIcon sx={{fontSize:80}}></Diversity3SharpIcon>
      </div>
      <div className='row2'>
      <h4>Work goals</h4>
      </div>
      <div className='row3'>
          <h2>
            Short-term goals:
        </h2>
          <h3>
- Improve my knowledge of REACTJS technologies
- Improve teamwork ability
- Learn more Frameworks</h3>
<h2>
            Long-term goals:
</h2>
          <h3>
          - Have the opportunity to become senior on Front-end after 3-5 years working at the company
- Learn new technologies and frameworks
</h3>
      </div>
    </Box>
    </div>
    <div className='col2'>
    <Box classame='b3'>
    <div className='row1'>
        <AccountBoxSharpIcon sx={{fontSize:80}}></AccountBoxSharpIcon>
      </div>
      <div className='row2'>
        <h4>About me</h4>
      </div>
      <div className='row3' id='info'>
        <div className='mini-col1'>
        <h2>Full name</h2>
        <h3>Huynh Thanh Vu</h3>
        <h2>DoB</h2>
        <h3>23/05/2001</h3>
        <h2>Address</h2>
        <h3>BinhDuong, VietNam</h3>
        </div>
        <div className='mini-col1'>
        <h2>Phone</h2>
        <h3>xxxx171813</h3>
        <h2>Mail</h2>
        <h3>vuhtse151222@fpt.edu</h3>
        <h2>Personal mail</h2>
        <h3>huynhthanhvu115@gmail.com</h3>
        </div>
     
      </div>
    </Box>
    <Box className='b4'>
    <img src='assets/images/b8.jpg' alt=''/>
    </Box>
    </div>
    <div className='col3'>
    <Box className='b5'>
    <img src='assets/images/b9.jpg' alt=''/>
    </Box>
    <Box className='b6'>
    <div className='row1'>
        <ContactsSharpIcon sx={{fontSize:80}}></ContactsSharpIcon>
      </div>
      <div className='row2'>
      <h4>Contact</h4>
      </div>
      <div className='row3' id='contact'>
      <Card
                    closeIcon={<Icon>close</Icon>}
                    header={<CardTitle image={'assets/images/b6.jpg'} reveal waves="light" />}
                    reveal={
                    <div >
                        <p className="us">huynhthanhvu115</p>
                        <p className="main">aaa</p>
                        
                    </div>

                    }
                    revealIcon={<Icon>more_vert</Icon>}
                 
                >
                </Card>
      </div>
    </Box>
    </div>
    

</div>
    </div>
  );
}

export default App;
