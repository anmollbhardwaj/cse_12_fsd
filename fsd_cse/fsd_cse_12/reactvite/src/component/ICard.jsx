import React from 'react'
import pic from '../images/studentimage.jpg'
function ICard({data}) {

    
  return (
    <div>
        <img src={data.pic} height={200} width={200} style={{borderRadius:'50%'}}></img>
    <h2 style={{color:'red'}}>Welcome to React using Vite</h2>
    {/* <h1 style={{backgroundColor:'cyan'}}>Value of a={a}</h1> */}
    <div style={{border:'10px solid red', height:300, width:200}}>
    
    <h2>Name:{data.name}</h2>
    <h2>Roll:{data.roll}</h2>
    <h2>Branch:{data.branch}</h2>
    <h2>College:{data.college}</h2>
    
    
    </div>
    
    </div>
  )
}

export default ICard