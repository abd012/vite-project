import React from 'react'
import { useState } from 'react'
import Tascks from './Tascks'


export default function TodoList() {
  const [tascks,settasks]=useState([]);
const [task,setTask]=useState('');

const addTS =()=>{
  alert('abdo')
  let ntasks=[...tascks];
  let ntask={};
  ntask.id=v4();
  ntask.nom=task;
  ntask.done = false;
  ntasks.push(ntask);
  settasks(ntasks); 
}
const supp=(idp)=>{
  let ntasks=tascks.filter((t)=>
  {
      return t.id!=idp
  }
  )
  settasks(ntasks);

  
  
}
const Done=(id)=>{
  let arr = tascks.map((e)=>{
    if (e.id === id){
      e.done = !e.done;
    }
    return e;
  })
  settasks(arr);
}




  return (
    <div className=''>
      <h1>Todo_list</h1>
      <form>
        <p className='r'>donner la task :</p> <input type="text"  placeholder='donner un task!?' value={task} onChange={(e)=>setTask(e.target.value) } /> <br/><br/>
        <input className='a' type="button" value="Ajouter" onClick={addTS}/><br/><br/>
        
      </form>

      
      <ul >
        {
          tascks.map((t)=>{
            return <li key={t}><  Tascks isdone={t.done} del={()=>supp(t.id)} txt={t.nom} don={()=>Done(t.id)}/></li>
            
          })
          


        }
      </ul>
    </div>
  )
}
