import { useState } from 'react' 

function Add(props){

  const [id, setId]= useState('');
  const [name, setName]= useState('');
  const [surname, setSurname]= useState('');
  const [position, setPosition]= useState('');
  const [search, setSearch]= useState('');

     const addEmployee = (()=>{
         props.add(id, name, surname,position,search )
          

     });

     const updateDetail = (()=>{
      props.add(id, name, surname,position,search)
       

  });

  const searchDetail = (()=>{
    props.add(id, name, surname,position,search)
     

});

  return(
    <div className="Container">
    <div className="Adding">



      <h1>Employee App</h1>
      
      
         <input type="text" placeholder="enter id"  onChange={(event)=>setId(event.target.value)}/><br></br>
           <input type="text" placeholder="enter name" onChange={(event)=>setName(event.target.value)}/><br></br>
             <input type="text" placeholder="enter surname" onChange={(event)=>setSurname(event.target.value)}/><br></br>
               <input type="text" placeholder="enter position" onChange={(event)=>setPosition(event.target.value)}/><br></br>
                 
                   

                     <button onClick={addEmployee}>Add</button> <button onClick={updateDetail}>Update</button>

<div className='search'>
<input type="text" placeholder="search" onChange={(event)=>setSearch(event.target.value)}/>
      <button onClick={searchDetail}>Search</button> 
</div>
      </div>

      
</div>
      
  )
}

export default Add;