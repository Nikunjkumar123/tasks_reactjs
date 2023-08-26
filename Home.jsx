import React,{useState} from 'react';
import Task from './Task';
import { logDOM } from '@testing-library/react';

const Home = ()=>{

  const [Tasks,setTasks] = useState([]);
  const [tittle,setTittle]=useState('')
  const [description,setDescription]=useState('')

  const submithandler = (e)=>{
    e.preventDefault();
    setTasks([
      ...Tasks,{
      tittle, description 
     } ]);
  }
  const deleteTask = (index)=>{
    const filterArr =  Tasks.filter((val,i) => {
      return i !== index;
    });
    setTasks(filterArr);
    
  };

  return (
    <div className='Container'>
      <h1>DAILY GOALS</h1>
      <form onSubmit={submithandler}>
            <input type="text" placeholder='TITTLE' value={tittle} onChange={(e)=>setTittle(e.target.value)}/>
            <textarea placeholder='DESCRIPTION ABOUT WORK' value={description} onChange={(e)=>setDescription(e.target.value)}/>
            <button type='submit'>Add</button>

      </form>
      {Tasks.map((item,index)=>(
        <Task key={index} tittle={item.tittle} description={item.description} deleteTask={deleteTask} index={index}/>
      ))}
    </div>
  );

};
export default Home;
