import display from './css/display.css';
import React from 'react';

function Display(props){

  const deleteDetailItem = ((id)=>{

   

props.delete(id)

});

const updateDetail = ((id)=>{

  props.update(id)

  

  });

  const searchDetail = ((id)=>{

    props.search(id)
  
    
  
    });


  return(
    <div className="container">


  
<div className="row">
          {props.data.map((addEmployee,deleteDetail)=>(


           

              <div  className="card col-lg-2 mx-2 mt-5">
                <h4 className="add1">
                  Id-tag:
                  <br></br>
                  {addEmployee.id}
                  {deleteDetail.id}
                </h4>
                
                  
                  <h4 className="add1">
                    Name:
                    {addEmployee.name}
                    {deleteDetail.name}
                    </h4>
                   
                   <h4 className="add1">
                     surname:
                     {addEmployee.surname}
                     {deleteDetail.surname}
                   </h4>
                    
                    <h4 className="add1">
                      Position:
                      {addEmployee.position}
                      {deleteDetail.position}
                    </h4>
                      
                   
             
             

                
 {props.data.map((deleteDetail,updateDetail,searchDetail)=>(

<div>

<h1>

{deleteDetail.detail} {updateDetail.detail} {searchDetail.detail}
 

</h1>

<button onClick={()=>deleteDetailItem(deleteDetail.id,deleteDetail.name,deleteDetail.surname,deleteDetail.position)}>Delete</button>


</div>





))}
                  </div> 
                    
          ))}

</div>






</div>
   
       
 )

}



export default Display;
