import "./App.css";
import {createBrowserRouter,createRoutesFromElements,RouterProvider, Routes, Route} from 'react-router-dom';
import Layout from "./Layout";
import FormExample from "./pages/Register";
import Home from "./pages/Home";
import login from "./pages/login";
import Academics from "./pages/Academics";
import Admissions from "./pages/Admissions";

function App() {

  return (
    <>
    <Routes>
      {/* <Route path='/' element ={<Layout/>}> */}
        <Route index element={<Home/>}/>
        <Route path='/register' element={<FormExample/>}/>
        <Route path='/login' element={<login/>}/>
        <Route path='/admissions' element={<Admissions/>}/>
        <Route path='/academics' element={<Academics/>}/>
      {/* </Route> */}
    </Routes>
    </>
  );

  // const router = createBrowserRouter(createRoutesFromElements(
  //   <Route path='/' element={<Layout/>}>
  //     <Route index element={<Home/>}></Route>
  //     <Route path='/academics' element={<Academics/>}></Route>
  //   </Route>
  // ))

  // return (
  //   <>
  //     <div>
  //       <RouterProvider router={router}/>
  //     </div>

  //   </>
  // )
}

export default App;
