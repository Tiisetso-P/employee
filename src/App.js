import log from './logo.svg';
import './App.css';
import Add from './components/Add';
import Display from './components/display';
import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import Search from './components/Search'


function App() {

  const [list, setList] = useState([])

  const addEmployee = (id, name, surname, position)=>{

    if ( id== ''&& name  == '', surname =='',position =='')

    {
      

        alert("please enter id")
         alert("please enter name")
          alert("please enter surname")
            alert("please enter position")
         
         

 }

else

{



 let addEmployee = {

   id:id,
    name:name,
     surname:surname,
      position:position

  

 };

 setList((list)=> [...list, {id:id, name:name, surname:surname, position:position,id:uuidv4()}]);

 console.log(list);

}

  };

 const deletedetail = ((i)=>{

 

    let id = list.filter(list=>  list.id !== i);

    setList(id)

 

  });

  const updatedetail = ((i)=>{

 

    let id = list.filter(list=>  list.id !== i);

    setList(id)

 

  });

  const searchdetail = ((i)=>{

 

    let id = list.filter(list=>  list.id !== i);

    setList(id)

 

  });

  return (
    <div className="Adding">
     
       <Add add={addEmployee}/>
       <Display data={list}  delete={deletedetail} update={updatedetail} search={searchdetail}/>
      
      </div>
  )
}

export default App;
