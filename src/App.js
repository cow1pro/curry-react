
import './App.css';
import Employee from "./components/employee";
import { useState } from 'react';

function App() {
  const [role,setRole] =useState('dev');
 const showEmployees =true
  return (
    <div className="App">
    {showEmployees ? (
    
    <div> 
    <>
    <input type='text' onChange={(e)=>{
      console.log(e.target.value);
      setRole(e.target.value)
    }}></input>
    </>
    <Employee name ="=kaushik" role ={role}/>
    <Employee name ="=ram" role={role}/>
    <Employee name ="=sita" role={role}/>
    </div>
    ):(<p>you cannot see the employess</p>)}
    
    </div>
  );
}

export default App;
