// import logo from './logo.svg';

import './scss/App2.scss';
import Footer from './Footer';
import Navbar from './Navbar';
import { Routes, Route , BrowserRouter} from 'react-router-dom';
import  QA  from './QA';
import Src from './Src';


function App() {

  return (
   
    <div className="App" >
  
     <Navbar/>
     < Routes>
     <Route path='/qa' element = {<QA> </QA>}></Route>
     <Route path='/src' element={<Src></Src>}></Route>
     <Route path='/' ></Route>
   </Routes>
    </div>
  );
}

export default App;
