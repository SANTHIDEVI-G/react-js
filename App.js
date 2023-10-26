 //import logo from './logo.svg';
 import React from 'react';
 import './App.css';
// import {trainee,a} from './person';
 import Home from './home';
 import About from './about';
 import { BrowserRouter,Routes,Route } from 'react-router-dom';
 import Menu from './menu';
 import Services from './services';
 import Contact from './contact';
 import Student from './student';
 import Trainees from './trainees';
 import Events from './events';
 import Event1 from './event1';
 import Events2 from './events2'
 import Count from './count';
 import Hooks from './hooks';
//  import Hooks1 from './hooks1';
 import Form from './form';
 import Form1 from './form1';
 import Products1 from './products1';
 import Newproduct from './newproduct';
//  import Getproduct from './getproduct';
 
 import Image from './image';
// function App(){
//   console.log(trainee)
//   console.log(a)
//   return(
//       <div>
//         <h1 className='App'>this is Front page</h1>
//         <Home/>
//         <About/>
//         <Image/>
//       </div>
//   )
// }
// export default App;



function App(){
  return(
    <div className='App'>
  <BrowserRouter>
  <Menu/>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/service" element={<Services />} />
    <Route path="/contact" element={<Contact />}/> 
    <Route path="/student" element={<Student />}/> 
    <Route path="/trainees" element={<Trainees />}/>
    <Route path="/events" element={<Events/>}/>
    <Route path="/event1" element={<Event1/>}/>
    <Route path="/events2" element={<Events2/>}/>
    <Route path="/count"element={<Count/>}/>
    <Route path="/hooks"element={<Hooks/>}/>
     {/* <Route path="/hooks1" element={<Hooks1/>}/>  */}
    <Route path="/form" element={<Form/>}/>
    <Route Path="/form1" element={<Form1/>}/>
    <Route path="/products1" element={<Products1/>}/>
    <Route path="/newproduct" element={<Newproduct/>}/>
    {/* <Route path='/getproduct' element={<Getproduct/>}/> */}
    <Route path="/image" element={<Image/>}/>
  
    </Routes>
  </BrowserRouter>

</div>
  )
}
export default App;
