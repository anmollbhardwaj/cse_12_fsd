// function sum(a,b){
// return a+b;
// }
// const result = sum(12,90);
// console.log("Sum = "+result);

// const button = document.getElementById('btn');
// const container = document.getElementById('container');

// async function fetchData() {
//     try{
//         const serverData = await fetch('https://fakestoreapi.com/products')
//             const jsonData = await serverData.json();
//         console.log(jsonData)
//     }catch(e){

//     }
//     finally{

//     }
    
// }

const button=document.getElementById('btn');
const container=document.getElementById('conatiner');
const loading= document.createElement('div')
container.appendChild(loading);
// console.log(button)
async function fetchData(){
                try{
              loading.innerHTML="<h2>Loading Data...</h2>";
const serverData=await fetch('https://fakestoreapi.com/products')
const jsonData= await serverData.json();
console.log(jsonData)
            // container.innerHTML=`${JSON.stringify(jsonData)}`
            let table = `<table border="4">
             <tr>
             <td>ITEM_ID</td><td>TITLE</td><td>PRICE</td>
             </tr>
              ${jsonData.map(ele => `
             <tr>
                <td>${ele.id}</td>
               <td>${ele.title}</td>
                <td>${ele.price}</td>
            </tr>
            `).join('')}
          </table>`;

container.innerHTML = table;

            
        
        }catch(e){
            loading.innerHTML='<h2>Loading Error</h2>'
        }
        finally{
             loading.innerHTML=''
        }

        }

button.addEventListener('click',fetchData)