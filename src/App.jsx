
import "./App.css";

import {Routes, Route} from 'react-router-dom';
import Layout from "./Layout";
import FormExample from "./pages/register";


function App() {

  return (
    <>
    <Routes>
      <Route path='/' element ={<Layout/>}>
        {/* <Route path='/login' element={<register/>}/> */}
        <Route path='/register' element={<FormExample/>}/>
      </Route>
    </Routes>
    </>
  );
}

export default App;
