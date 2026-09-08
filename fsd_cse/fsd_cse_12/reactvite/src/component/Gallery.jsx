import React from 'react'
import ICard from './ICard'

function Gallery() {
const student=
[{
    pic:'',
    name:"Rahul Kumar",
    roll:'909090',
    branch:'CSE-AIML',
   college:'ABES Engineering College'

},
{
    pic:'',
    name:"Vansh Tomer",
    roll:'90979',
    branch:'CSE',
   college:'ABES Engineering College'

},
{
    pic:'',
    name:"Amit",
    roll:'78688',
    branch:'CS',
   college:'ABES Engineering College'

},
{
    pic:'',
    name:"Vijay Tomer",
    roll:'8979',
    branch:'CSE-AIML',
   college:'ABES Engineering College'

}



]

  return (
    <div style={{border:'2px solid red', display:'flex'}}>
        {/* <ICard name="Rahul Kumar" roll="24325" branch="CSE" college="ABES Engineering College" />
        <ICard name="Ram" roll="9090" branch="CSE-AIML" college="ABES Engineering College" />
        <ICard /> */}
        {/* <ICard data={student[1]} /> */}

        {
            student.map((ele)=>(
               <div>
                <ICard data={ele} />
               </div>
            ))
        }
    </div>
  )
}

export default Gallery