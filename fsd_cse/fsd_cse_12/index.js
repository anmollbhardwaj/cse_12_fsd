// console.log("Hey....using JS development")
// console.log("Using JS")

// var a=34;
// if(a>10){
//    var a=40;
//    console.log("Hi a inside the block:"+a);
// }
// console.log("Heyy... a is now outside the block"+a)


// function sum(a,b){
//     return a+b;
// }
// console.log(sum(230,30))


// const sum=(a,b)=>{return a+b};
//   console.log(sum(12,30));

//   const data=function(msg){
//     return "Hello, I m using JS"+msg
//   }
//   data("and Node")

//   //IIFE

//   (()=>{console.log("Hey..using and Calling by IIFE ")})();



//callback

// function sum(a,b){
//     return a+b;
// }

// function sumWithMsg(clbk,msg){
//      const result=clbk(2,6);
//      console.log("Hey, Your result="+result+"!! Well Done"+msg)

// }

// sumWithMsg(sum,"Rahul")

// function login(msg,error){
//     if(error){
//         console.log("Error is"+error)
//     }
//     else{
//         console.log(msg)
//     }
// }

// function loginHandler(username,password,clbk){
//     if(username=="ptomer40" && password=="12345"){
//         clbk("success",null);
//     }else{
//         clbk(null,"Username or password is incorrect")
//     }
// }
// loginHandler("ptomer40","12345",login)

// console.log("One")
// setTimeout(()=>{
// console.log("Two")
// },1000)

// console.log("Three")

// setTimeout(()=>{
// console.log("One")
// setTimeout(()=>{
//     console.log("Two")
//     setTimeout(()=>{
//         console.log("Three")
//         setTimeout(()=>{
//             console.log("Four")
//             setTimeout(()=>{
//                 console.log("Five")
//                 setTimeout(()=>{
//                     console.log("Six");
//                     setTimeout(()=>{
//                         console.log("Sevene")
                    
//                     },1000)
//                 },1000)
//             },1000)
//         },1000)
//     },1000)
// },
// 1000)
// },1000)

//    const mypromise=new Promise((resolve,reject)=>{
//       const username="ptomer40";
//       const password="123456";
//       if(username=="ptomer40" && password=="123456"){
//         resolve("success");
//       }else{
//         reject("username or password incorrect")
//       }
//    })



//     const orderrecieve=new Promise((resolve,reject)=>{
//     resolve("Order recieved");
//       })
// //    mypromise.then((msg)=>{
// // console.log(msg)
// //    }).catch((msg)=>{
// // console.log(msg)
// //    }).finally(()=>{
// //     console.log("All done")
// //    })

// async function handleData(){
//     try{
//        const msg= await mypromise;
//        if(msg=="success"){
//               const orderstatus=await orderrecieve;
//               setTimeout(()=>{console.log(orderstatus)},1000)
              
//   }
// }catch(err){
//         console.log(err)
//     }
//     finally{
//         console.log("All Done")
//     }
// }
// handleData();



// function orderRecieve(){
//   return new Promise((resolve)=>{
// setTimeout(()=>{
//   resolve("order recieved");
// },1000)
//   })
// }

// async function orderHandler(){
//              try{
//          const status=await orderRecieve();
//          console.log(status)
//              }catch(err){
//               console.log(err)
//              }
// }

// orderRecieve().then((msg)=>{
// console.log(msg)
// }).catch((err)=>{

// }).finally(()=>{
//   console.log("Finally Done")
// })


const button=document.getElementById('btn');
const container=document.getElementById('conatiner');

const loading=document.createElement('div');
container.appendChild(loading);

async function fetchData(){
                try{
             loading.innerHTML="<h2>Loading Data...</h2>";
const serverData=await fetch('https://fakestoreapi.com/products')
const jsonData= await serverData.json();
console.log(jsonData)
            // container.innerHTML=`${JSON.stringify(jsonData)}`

            let table=`<table border='4px'>
                <tr><td>ITEM_ID</td><td>TITLE</td><td>PRICE</td></tr>
                  ${
                   jsonData.map((ele)=>(
                    `<tr>
                    <td><img src=${ele.image} height="100px" width="100px" alt='Cloth'/></td>
                    <td>${ele.id}</td>
                    <td>${ele.title}</td>
                    <td>${ele.price}</td>
                    </tr>`
                   )) 
                  }
            </table>`
            container.innerHTML=table;
        
        }catch(e){
         loading.innerHTML='<h2>Loading Error</h2>'
        }
        finally{
             loading.innerHTML=''
        }

        }

button.addEventListener('click',fetchData)
//fetchData();