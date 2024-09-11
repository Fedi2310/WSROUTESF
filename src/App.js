
import { useState } from 'react';
import './App.css';
import ListUser from './component/ListUser';
import NavUser from './component/NavUser';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Contact from './component/Contact';
import Profil from './component/Profil';

function App() {
  
  const [users,setUser]= useState(
    [
      {name : "Ala", age : 4, id : 1},
      {name : "Fedi", age : 45, id : 2},
      {name : "Fakhri", age : 20, id : 3},
      {name : "Tarek", age : 100, id : 4},
    ]
  )
  return (
    <div>
      <NavUser/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Users' element={<ListUser users ={users}/>}/>
        <Route path='/Profil/:id' element = {<Profil users={users}/>}/>
        </Routes>
      {/* <ListUser users={users}/> */}
    </div>
  );
}

export default App;
